package name.aknights.services;

import name.aknights.core.quotes.QuoteDetail;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

public class CachingQuotesService implements QuotesService {

    private Logger logger = LoggerFactory.getLogger(CachingQuotesService.class);
    private static final long DEFAULT_TTL = 600000;

    private final QuotesService underlying;
    private final Map<String, QuoteDetail> cacheMap = new HashMap<>();
    private long ttl = DEFAULT_TTL;
    private long lastCacheClear = 0;

    public CachingQuotesService(QuotesService underlying) {
        this.underlying = underlying;
    }

    public CachingQuotesService(QuotesService underlying, long ttl) {
        this(underlying);
        this.ttl = ttl;
        logger.info("CachingQuotesService created with {}ms TTL", ttl);
    }

    @Override
    public Collection<QuoteDetail> getQuotes(Collection<String> tickers) {
        // get all cachedQuotes
        Set<QuoteDetail> quotesToReturn = readFromCache(tickers);

        if (quotesToReturn.size() != tickers.size()) {

            // for all cache misses, retrieve quotes from underlying service
            Set<String> unCachedTickers = tickers.stream().filter(ticker -> !cacheMap.containsKey(ticker)).collect(Collectors.toSet());

            if (unCachedTickers.size() > 0) {
                Collection<QuoteDetail> fetchedQuotes = underlying.getQuotes(unCachedTickers);
                // addEntry them to the set of quotesToReturn
                quotesToReturn.addAll(fetchedQuotes);
                writeToCache(fetchedQuotes);
            }
            else {
                logger.warn("Quotes not found in cache for all tickers, but apparently there are no un-cached tickers!!");
            }
        }

        return quotesToReturn;
    }

    @Override
    public Optional<QuoteDetail> getQuote(String ticker) {
        Set<String> tickers = new HashSet<>();
        tickers.add(ticker);

        Iterator<QuoteDetail> quoteIter = getQuotes(tickers).iterator();
        if (quoteIter.hasNext()) return Optional.ofNullable(quoteIter.next());
        else return Optional.empty();
    }

    Set<QuoteDetail> readFromCache(Collection<String> tickers) {
        checkTtl();
        return tickers.stream().filter(cacheMap::containsKey).map(cacheMap::get).collect(Collectors.toSet());
    }

    private void checkTtl() {
        if (lastCacheClear == 0) lastCacheClear = System.currentTimeMillis();
        else {
            if (lastCacheClear + ttl <= System.currentTimeMillis())
                expireCache();
        }
    }

    private void expireCache() {
        logger.debug("Expiring Cache..");
        this.cacheMap.clear();
        this.lastCacheClear = System.currentTimeMillis();
    }

    void writeToCache(Collection<QuoteDetail> fetchedQuotes) {
        checkTtl();
        cacheMap.putAll(fetchedQuotes.stream().collect(Collectors.toMap(QuoteDetail::getSymbol, Function.identity())));
    }
}
