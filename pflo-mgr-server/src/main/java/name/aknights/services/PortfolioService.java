package name.aknights.services;

import name.aknights.api.Holding;
import name.aknights.api.Portfolio;
import name.aknights.api.PortfolioEntry;
import name.aknights.core.quotes.QuoteDetail;

import javax.inject.Inject;
import java.util.*;

import static java.util.stream.Collectors.groupingBy;

public class PortfolioService {

    private final QuotesService quotesService;
    private final FxRatesService fxRatesService;
    private final HoldingsService holdingsService;

    @Inject
    public PortfolioService(QuotesService quotesService, FxRatesService fxRatesService, HoldingsService holdingsService) {
        this.quotesService = quotesService;
        this.fxRatesService = fxRatesService;
        this.holdingsService = holdingsService;
    }

    public Portfolio getPortfolio() {

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

    private PortfolioEntry createSummaryRow(Collection<PortfolioEntry> entries) {
        Double totalMV = entries.stream().mapToDouble(PortfolioEntry::getMarketValue).sum();
        Double overallTotalGain = entries.stream().mapToDouble(PortfolioEntry::getTotalGain).sum();
        Double overallTotalPercentGain = overallTotalGain / totalMV;
        Double overallDailyGain = entries.stream().mapToDouble(PortfolioEntry::getDailyGain).sum();

        return new PortfolioEntry(null,  null, null, null, null, null,
                null, null, null,null, overallDailyGain, totalMV, overallTotalPercentGain,
                overallTotalGain, null, null, null);
    }

    PortfolioEntry createEntry(List<Holding> holdings, QuoteDetail q, Double fxRate) {
        Double currPrice = getCurrentPrice(q);

        Integer totalNumShares = holdings.stream().mapToInt(Holding::getShares).sum();
        Double currMarketValue = totalNumShares * currPrice / fxRate;

        Double weightedAvgInitialMarketValue = calcWeightedInitialMarketValue(holdings, fxRate);

        Double dailyGain  = q.getChange() * totalNumShares / fxRate.doubleValue();

        Double totalGain = calculateTotalGain(currMarketValue, weightedAvgInitialMarketValue);
        Double totalPercentGain = totalGain / weightedAvgInitialMarketValue;

        String recommendation = calcRecommendation(q.getMa50Day(), q.getMa200Day(), q.getPercentChange(),
                q.getPercentChangeFromYearLow(), q.getPercentChangeFromYearHigh());

        return new PortfolioEntry(q.getSymbol(), q.getName(), totalNumShares, q.getPreviousClose().orElse(0.0), q.getOpen(),
                q.getCurrency(), currPrice, q.getMa50Day(), q.getMa200Day(), q.getPercentChange(), dailyGain, currMarketValue,
                totalPercentGain, totalGain, q.getYearLow(), q.getYearHigh(), recommendation);
    }

    String calcRecommendation(Double ma50Day, Double ma200Day, Double percentChange, Double percentChangeFromYearLow, Double percentChangeFromYearHigh) {
        int score = 5;

        double percentOver200DayMA = (ma50Day - ma200Day) / ma200Day;

        if(percentOver200DayMA < -0.06) score -= 2;
        else if(percentOver200DayMA <= -0.03) score -= 1;
        else if(percentOver200DayMA >= 0.01 && percentOver200DayMA < 0.05) score += 3;
        else if(percentOver200DayMA >= 0.15) score -= 1;

        if (percentChange >= 0.0 && percentChange < 0.01) score += 1;
        else if (percentChange >= 0.004) score -= 1;

        if (percentChangeFromYearLow >= 0 && percentChangeFromYearLow < 8.0) score += 3;
        else if (percentChangeFromYearLow >= 8.0 && percentChangeFromYearLow < 12.0) score += 2;
        else if (percentChangeFromYearLow >= 12.0 && percentChangeFromYearLow < 25.0) score += 1;

        if (percentChangeFromYearHigh <= 0 && percentChangeFromYearHigh > -3.0) score -= 2;
        else if (percentChangeFromYearHigh <= -3.0 && percentChangeFromYearHigh > -6.0) score -= 1;
//        else if (percentChangeFromYearHigh <= -6.0 && percentChangeFromYearHigh > -12.0) score -= 1;

        String recommendation = "HOLD";
        if (score > 6) recommendation = "BUY";
        else if (score < 3) recommendation = "SELL";

        return recommendation;
    }

    private Double getCurrentPrice(QuoteDetail q) {
        return Optional.of(q.getLastTradePrice()).orElse(q.getAsk().orElse(q.getPreviousClose().orElse(0.0)));
    }

    private Double calculateTotalGain(Double currMarketValue, Double weightedAvgInitialMarketValue) {
        return (weightedAvgInitialMarketValue > 0) ? currMarketValue - weightedAvgInitialMarketValue : 0.0;
    }

    private Double calcWeightedInitialMarketValue(List<Holding> holdings, Double fxRate) {
        return holdings.stream().mapToDouble(Holding::getInitialMarketValue).sum() / fxRate;
    }
}
