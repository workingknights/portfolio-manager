package name.aknights.services;

import name.aknights.api.Holding;
import name.aknights.api.PortfolioEntry;
import name.aknights.core.quotes.QuoteDetail;

import javax.inject.Inject;
import java.math.BigDecimal;
import java.math.MathContext;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
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

        Collection<PortfolioEntry> entries = new ArrayList<>();

        quotes.forEach(q -> entries.add(createEntry(holdings, q)));

        return entries;
    }

    PortfolioEntry createEntry(Map<String, List<Holding>> holdingsMap, QuoteDetail q) {
        List<Holding> holdings = holdingsMap.get(q.getSymbol());
        Double ask = q.getAsk().orElse(q.getPreviousClose().orElse(0.0));
        Integer totalNumShares = holdings.stream().collect(Collectors.summingInt(Holding::getShares));
        Double currMarketValue = totalNumShares * ask;

        BigDecimal weightedAvgInitialMarketValue =
                new BigDecimal(holdings.stream().collect(Collectors.summingDouble(Holding::getInitialMarketValue)));
//        BigDecimal marketValue = new BigDecimal(holdings.getInitialMarketValue().toString());


        BigDecimal totalPercentGain = (weightedAvgInitialMarketValue.compareTo(BigDecimal.ZERO) > 0)
                ? new BigDecimal(currMarketValue.toString()).subtract(weightedAvgInitialMarketValue).divide(weightedAvgInitialMarketValue, MathContext.DECIMAL64)
                : BigDecimal.ZERO;

        return new PortfolioEntry(q.getSymbol(), totalNumShares, q.getPreviousClose().orElse(0.0), q.getOpen(),
                q.getCurrency(), ask, q.getMa50Day(), q.getMa200Day(), q.getPercentChange(), currMarketValue, totalPercentGain);
    }
}
