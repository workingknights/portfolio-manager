package name.aknights.services;

import name.aknights.api.Holding;
import name.aknights.api.Model;
import name.aknights.api.ModelEntry;
import name.aknights.api.Portfolio;
import name.aknights.api.PortfolioEntry;
import name.aknights.core.Recommendation;
import name.aknights.core.quotes.QuoteDetail;

import javax.inject.Inject;
import java.util.Collection;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import static java.util.stream.Collectors.groupingBy;
import static name.aknights.core.Recommendation.Direction.BUY;
import static name.aknights.core.Recommendation.Direction.SELL;

public class PortfolioService {

    private final QuotesService quotesService;
    private final FxRatesService fxRatesService;
    private final HoldingsService holdingsService;
    private final ModelService modelService;

    @Inject
    public PortfolioService(QuotesService quotesService, FxRatesService fxRatesService, HoldingsService holdingsService, ModelService modelService) {
        this.quotesService = quotesService;
        this.fxRatesService = fxRatesService;
        this.holdingsService = holdingsService;
        this.modelService = modelService;
    }

    public Portfolio getPortfolio(String userId) {

        Portfolio portfolio = getBasicPortfolio(userId);
        updateRequiredRebalances(portfolio.getEntries(), portfolio.getSummary().getMarketValueBase(), modelService.getModelForUser(userId));

        return portfolio;
    }

    Portfolio getBasicPortfolio(String userId) {
        Map<String, List<Holding>> holdings =
                holdingsService.allHoldings().stream().collect(groupingBy(Holding::getSymbol));

        Collection<QuoteDetail> quotes = quotesService.getQuotes(holdings.keySet());

        LinkedList<PortfolioEntry> entries = new LinkedList<>();

        quotes.forEach(q -> {
            Double fxRate = fxRatesService.getRate(q.getCurrency());
            PortfolioEntry entry = createEntry(holdings.get(q.getSymbol()), q, fxRate);
            entries.add(entry);
        });

        PortfolioEntry summary = createSummaryRow(entries);

        return new Portfolio(entries, summary);
    }

    void updateRequiredRebalances(Collection<PortfolioEntry> portfolioEntries, double totalMarketValue, Model model) {
        for(PortfolioEntry entry: portfolioEntries) {
            Optional<ModelEntry> modelEntry;
            if (model != null && model.getEntries() != null)
                modelEntry = model.getEntries().stream().filter(m -> m.getTicker().equals(entry.getTicker())).findFirst();
            else
                modelEntry = Optional.empty();

            if (modelEntry.isPresent()) {
                double targetMV = totalMarketValue * (modelEntry.get().getPortfolioWeight()) / 100;
                double rebal = targetMV - entry.getMarketValueBase();
                entry.setRebalToModel(rebal);

                int rebalShares = (int) (rebal / (entry.getCurrPrice() / fxRatesService.getRate(entry.getCurrency())));
                entry.setRebalShares(rebalShares);
            }
            else {
                entry.setRebalToModel(0.0);
                entry.setRebalShares(0);
            }
        }
    }

    private PortfolioEntry createSummaryRow(Collection<PortfolioEntry> entries) {
        Double totalMVBase = entries.stream().mapToDouble(PortfolioEntry::getMarketValueBase).sum();
        Double totalCost = entries.stream().mapToDouble(PortfolioEntry::getTotalCost).sum();
        Double overallTotalGain = entries.stream().mapToDouble(PortfolioEntry::getTotalGain).sum();
        Double overallTotalGainBase = entries.stream().mapToDouble(PortfolioEntry::getTotalGainBase).sum();
        Double overallTotalPercentGain = overallTotalGain / totalCost;
        Double overallDailyGain = entries.stream().mapToDouble(PortfolioEntry::getDailyGainBase).sum();

        return new PortfolioEntry(null,  null, null, null,
                null, null, null,null, overallDailyGain, totalCost, null,
                totalMVBase, overallTotalPercentGain,null, overallTotalGainBase, null, null, null, null);
    }

    PortfolioEntry createEntry(List<Holding> holdings, QuoteDetail q, Double fxRateToBase) {
        double currPrice = getCurrentPrice(q);

        int totalNumShares = holdings.stream().mapToInt(Holding::getShares).sum();
        double currMarketValue = totalNumShares * currPrice;
        double currMarketValueBase = currMarketValue / fxRateToBase;

        double totalCost = getTotalCost(holdings, q);

        double avgUnitCost = totalCost / totalNumShares;

        double dailyGainBase  = q.getChange() * totalNumShares / fxRateToBase;

        double totalGain = currMarketValue - totalCost;
        double totalGainBase = totalGain / fxRateToBase;
        double totalPercentGain = totalGain / totalCost;

        Recommendation recommendation = calcRecommendation(q.getMa50Day(), q.getMa200Day(), q.getPercentChange(),
                q.getPercentChangeFromYearLow(), q.getPercentChangeFromYearHigh());

        return new PortfolioEntry(q.getSymbol(), q.getName(), totalNumShares,
                q.getCurrency(), currPrice, q.getMa50Day(), q.getMa200Day(), q.getPercentChange(), dailyGainBase, totalCost, currMarketValue,
                currMarketValueBase, totalPercentGain, totalGain, totalGainBase, q.getYearLow(), q.getYearHigh(), avgUnitCost,
                recommendation);
    }


    Recommendation calcRecommendation(Double ma50Day, Double ma200Day, Double percentChange, Double percentChangeFromYearLow, Double percentChangeFromYearHigh) {

        Recommendation recommendation = new Recommendation();

        int score = 5;

        score += checkGoldenCross(ma50Day, ma200Day, recommendation);

        score += checkDailyChange(percentChange, recommendation);

        score += checkMoveFromYearLowHigh(percentChangeFromYearLow, percentChangeFromYearHigh, recommendation);

        if (score > 6) recommendation.setDirection(BUY);
        else if (score < 3) recommendation.setDirection(SELL);

        return recommendation;
    }

    int checkGoldenCross(Double ma50Day, Double ma200Day, Recommendation recommendation) {
        int adjust = 0;

        double percentOver200DayMA = (ma50Day - ma200Day) / ma200Day * 100;

        if(percentOver200DayMA < -10) {
            recommendation.addContributor("50 Day MA significantly below 200 Day MA");
            adjust = -2;
        }
        else if(percentOver200DayMA <= -6 && percentOver200DayMA >= -10) {
            recommendation.addContributor("50 Day MA below 200 Day MA");
            adjust = -1;
        }
        else if(percentOver200DayMA >= 5 && percentOver200DayMA < 15) {
            recommendation.addContributor("In a Golden Cross");
            adjust = 2;
        }
        else if(percentOver200DayMA >= 25) {
            adjust = -1;
        }

        return adjust;
    }

    int checkMoveFromYearLowHigh(Double percentChangeFromYearLow, Double percentChangeFromYearHigh, Recommendation recommendation) {
        int adjust = 0;

        if (percentChangeFromYearLow >= 0 && percentChangeFromYearLow < 7.0) {
            recommendation.addContributor("Very close to Year Low");
            adjust += 4;
        }
        else if (percentChangeFromYearLow >= 7.0 && percentChangeFromYearLow < 11.0) {
            recommendation.addContributor("Close to Year Low");
            adjust += 2;
        }
        else if (percentChangeFromYearLow >= 12.0 && percentChangeFromYearLow < 25.0) adjust += 1;

        if (percentChangeFromYearHigh <= 0 && percentChangeFromYearHigh > -3.0) {
            recommendation.addContributor("Very close to Year High");
            adjust -=2;
        }
        else if (percentChangeFromYearHigh <= -3.0 && percentChangeFromYearHigh > -6.0) adjust -=1;

        return adjust;
    }

    int checkDailyChange(Double percentChange, Recommendation recommendation) {
        int adjust = 0;

        if (percentChange >= 0.0 && percentChange < 0.01) {
            recommendation.addContributor("Small positive change in price");
            adjust = 1;
        }
        else if (percentChange >= 0.008) {
            recommendation.addContributor("Too large a positive change in price");
            adjust = -1;
        }
        return adjust;
    }

    private Double getCurrentPrice(QuoteDetail q) {
        return Optional.ofNullable(q.getLastTradePrice()).orElse(
//                q.getAsk().orElse(
                        q.getPreviousClose().orElse(
                                0.0));
    }

    private double getTotalCost(List<Holding> holdings, QuoteDetail q) {
        double totalCost = holdings.stream().mapToDouble(Holding::getCost).sum();
        return totalCost;
    }

}
