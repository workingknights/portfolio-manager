package name.aknights.services;

import name.aknights.api.Holding;
import name.aknights.api.PortfolioEntry;
import name.aknights.core.quotes.QuoteDetail;

import javax.inject.Inject;
import java.math.BigDecimal;
import java.math.MathContext;
import java.util.*;
import java.util.function.Function;
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

    public Collection<PortfolioEntry> allPortfolioEntries() {

        Map<String, List<Holding>> holdings =
                holdingsService.allHoldings().stream().collect(groupingBy(Holding::getSymbol));

        Collection<QuoteDetail> quotes = quotesService.getQuotes(holdings.keySet());
        Map<String, Double> fxRatesMap = quotesService.getQuotes(Arrays.asList("GBP=X")).stream()
                .collect(groupingBy(QuoteDetail::getCurrency, Collectors.summingDouble(QuoteDetail::getLastTradePrice)));
        fxRatesMap.put("GBp", fxRatesMap.get("GBP") * 100); // add 'GBp' rate for pence rather than pounds
        fxRatesMap.put("USD", 1.0);

        Collection<PortfolioEntry> entries = new ArrayList<>();

        quotes.forEach(q -> entries.add(createEntry(holdings, q, fxRatesMap)));

        return entries;
    }

    PortfolioEntry createEntry(Map<String, List<Holding>> holdingsMap, QuoteDetail q, Map<String, Double> fxRatesMap) {
        List<Holding> holdings = holdingsMap.get(q.getSymbol());
        BigDecimal currPrice = new BigDecimal(Optional.ofNullable(q.getLastTradePrice()).orElse(q.getAsk().orElse(q.getPreviousClose().orElse(0.0))));

        BigDecimal fxRate = new BigDecimal(fxRatesMap.get(q.getCurrency()));
        Integer totalNumShares = holdings.stream().collect(Collectors.summingInt(Holding::getShares));
        BigDecimal currMarketValue = new BigDecimal(totalNumShares).multiply(currPrice).divide(fxRate, MathContext.DECIMAL64);

        BigDecimal weightedAvgInitialMarketValue =
                new BigDecimal(holdings.stream().collect(Collectors.summingDouble(Holding::getInitialMarketValue))).divide(fxRate, MathContext.DECIMAL64);

        BigDecimal totalGain = (weightedAvgInitialMarketValue.compareTo(BigDecimal.ZERO) > 0)
                ? new BigDecimal(currMarketValue.toString()).subtract(weightedAvgInitialMarketValue)
                : BigDecimal.ZERO;

        BigDecimal totalPercentGain = totalGain.divide(weightedAvgInitialMarketValue, MathContext.DECIMAL64);

        return new PortfolioEntry(q.getSymbol(), totalNumShares, q.getPreviousClose().orElse(0.0), q.getOpen(),
                q.getCurrency(), currPrice, q.getMa50Day(), q.getMa200Day(), q.getPercentChange(), currMarketValue,
                totalPercentGain, totalGain, q.getYearLow(), q.getYearHigh());
    }
}
