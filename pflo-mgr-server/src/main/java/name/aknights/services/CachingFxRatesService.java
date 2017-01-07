package name.aknights.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

public class CachingFxRatesService implements FxRatesService {

    private Logger logger = LoggerFactory.getLogger(CachingFxRatesService.class);
    private static final long DEFAULT_TTL = 600000;

    private final FxRatesService underlying;
    private final Map<String, Double> cacheMap = new HashMap<>();
    private long ttl = DEFAULT_TTL;
    private long lastCacheClear = 0;

    public CachingFxRatesService(FxRatesService underlying) {
        this.underlying = underlying;
    }

    public CachingFxRatesService(FxRatesService underlying, long ttl) {
        this(underlying);
        this.ttl = ttl;
        logger.info("CachingFxRatesService created with {}ms TTL", ttl);
    }

    @Override
    public Double getRate(String currency) {
        Optional<Double> rateToReturn = readFromCache(currency);

        if (!rateToReturn.isPresent()) {
            Double rate = underlying.getRate(currency);
            writeToCache(currency, rate);
            rateToReturn = Optional.of(rate);
        }

        return rateToReturn.orElseThrow(() -> new RuntimeException(String.format("No rate found for %s currency", currency)));
    }

    Optional<Double> readFromCache(String currency) {
        checkTtl();
        return Optional.ofNullable(cacheMap.get(currency));
    }

    void writeToCache(String currency, Double rate) {
        checkTtl();
        cacheMap.put(currency, rate);
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
}
