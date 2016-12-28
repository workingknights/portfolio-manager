package name.aknights.services;

import name.aknights.api.Holding;
import name.aknights.api.Portfolio;
import name.aknights.api.PortfolioEntry;
import name.aknights.core.quotes.QuoteDetail;

import javax.inject.Inject;
import java.math.BigDecimal;
import java.math.MathContext;
import java.util.*;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.groupingBy;

public class PortfolioService {

    private final QuotesService quotesService;
    private final HoldingsService holdingsService;

    @Inject
    public PortfolioService(QuotesService quotesService, HoldingsService holdingsService) {
        this.quotesService = quotesService;
        this.holdingsService = holdingsService;
    }

    public Portfolio getPortfolio() {

        Map<String, List<Holding>> holdings =
                holdingsService.allHoldings().stream().collect(groupingBy(Holding::getSymbol));

        Collection<QuoteDetail> quotes = quotesService.getQuotes(holdings.keySet());
        Map<String, Double> fxRatesMap = quotesService.getQuotes(Collections.singletonList("GBP=X")).stream()
                .collect(groupingBy(QuoteDetail::getCurrency, Collectors.summingDouble(QuoteDetail::getLastTradePrice)));
        fxRatesMap.put("GBp", fxRatesMap.get("GBP") * 100); // add 'GBp' rate for pence rather than pounds
        fxRatesMap.put("USD", 1.0);

        LinkedList<PortfolioEntry> entries = new LinkedList<>();

        quotes.forEach(q -> entries.add(createEntry(holdings.get(q.getTicker()), q, fxRatesMap)));

        PortfolioEntry summary = createSummaryRow(entries);

        return new Portfolio(entries, summary);
    }

    private PortfolioEntry createSummaryRow(Collection<PortfolioEntry> entries) {
        BigDecimal totalMV = entries.stream().map(PortfolioEntry::getMarketValue).reduce(BigDecimal.ZERO, BigDecimal::add);
        BigDecimal overallTotalGain = entries.stream().map(PortfolioEntry::getTotalGain).reduce(BigDecimal.ZERO, BigDecimal::add);
        BigDecimal overallTotalPercentGain = overallTotalGain.divide(totalMV, MathContext.DECIMAL64);
        Double overallDailyGain = entries.stream().mapToDouble(PortfolioEntry::getDailyGain).sum();

        return new PortfolioEntry(null, null, null, null, null,
                null, null, null,null, overallDailyGain, totalMV, overallTotalPercentGain,
                overallTotalGain, null, null, null);
    }

    PortfolioEntry createEntry(List<Holding> holdings, QuoteDetail q, Map<String, Double> fxRatesMap) {
        BigDecimal currPrice = getCurrentPrice(q);

        BigDecimal fxRate = new BigDecimal(fxRatesMap.get(q.getCurrency()));
        Integer totalNumShares = holdings.stream().mapToInt(Holding::getShares).sum();
        BigDecimal currMarketValue = new BigDecimal(totalNumShares).multiply(currPrice).divide(fxRate, MathContext.DECIMAL64);

        BigDecimal weightedAvgInitialMarketValue = calcWeightedInitialMarketValue(holdings, fxRate);

        Double dailyGain  = q.getChange() * totalNumShares / fxRate.doubleValue();

        BigDecimal totalGain = calculateTotalGain(currMarketValue, weightedAvgInitialMarketValue);
        BigDecimal totalPercentGain = totalGain.divide(weightedAvgInitialMarketValue, MathContext.DECIMAL64);

        String recommendation = calcRecommendation(q.getMa50Day(), q.getMa200Day(), q.getPercentChange(),
                q.getPercentChangeFromYearLow(), q.getPercentChangeFromYearHigh());

        return new PortfolioEntry(q.getTicker(), totalNumShares, q.getPreviousClose().orElse(0.0), q.getOpen(),
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

        if (percentChange >= 0.0 && percentChange < 0.004) score += 1;
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

    private BigDecimal getCurrentPrice(QuoteDetail q) {
        return new BigDecimal(Optional.of(q.getLastTradePrice()).orElse(q.getAsk().orElse(q.getPreviousClose().orElse(0.0))));
    }

    private BigDecimal calculateTotalGain(BigDecimal currMarketValue, BigDecimal weightedAvgInitialMarketValue) {
        return (weightedAvgInitialMarketValue.compareTo(BigDecimal.ZERO) > 0)
                    ? new BigDecimal(currMarketValue.toString()).subtract(weightedAvgInitialMarketValue)
                    : BigDecimal.ZERO;
    }

    private BigDecimal calcWeightedInitialMarketValue(List<Holding> holdings, BigDecimal fxRate) {
        return new BigDecimal(holdings.stream().mapToDouble(Holding::getInitialMarketValue).sum())
                .divide(fxRate, MathContext.DECIMAL64);
    }
}
