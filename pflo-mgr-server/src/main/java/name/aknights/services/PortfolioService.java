package name.aknights.services;

import name.aknights.api.PortfolioEntry;
import name.aknights.core.quotes.QuoteDetail;
import name.aknights.db.Holding;

import javax.inject.Inject;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;
import java.util.function.Function;

import static java.util.stream.Collectors.toMap;

public class PortfolioService {

    private final QuotesService quotesService;
    private final HoldingsService holdingsService;

    @Inject
    public PortfolioService(QuotesService quotesService, HoldingsService holdingsService) {
        this.quotesService = quotesService;
        this.holdingsService = holdingsService;
    }

    public Collection<PortfolioEntry> allPortfolioEntries() {

        Map<String, Holding> holdings =
                holdingsService.allHoldings().stream().collect(toMap(Holding::getSymbol, Function.identity()));

        Collection<QuoteDetail> quotes = quotesService.getQuotes(holdings.keySet());

        Collection<PortfolioEntry> entries = new ArrayList<>();

        quotes.forEach(q -> entries.add(new PortfolioEntry(holdings.get(q.getSymbol()), q.getPreviousClose(), q.getOpen(),
                q.getCurrency(), q.getAsk(), q.getMa50Day(), q.getMa200Day())));

        return entries;
    }
}
