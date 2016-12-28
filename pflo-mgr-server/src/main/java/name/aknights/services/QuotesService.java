package name.aknights.services;

import name.aknights.core.quotes.QuoteDetail;

import java.util.Collection;
import java.util.Optional;

public interface QuotesService {
    Collection<QuoteDetail> getQuotes(Collection<String> tickers);

    Optional<QuoteDetail> getQuote(String ticker);
}
