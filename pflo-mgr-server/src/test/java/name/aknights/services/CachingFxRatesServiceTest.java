package name.aknights.services;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;

import static org.junit.Assert.*;

@RunWith(MockitoJUnitRunner.class)
public class CachingFxRatesServiceTest {

    private CachingFxRatesService service;
    private FxRatesService underlier;

    @Before
    public void setup() {
        underlier = new LocalFxRatesService();
        service = new CachingFxRatesService(underlier, 200);
    }

    @Test
    public void whenValidCurrencyIsUsed_ThenRateIsNotNull() throws Exception {
        Double rate = service.getRate("GBP");
        assertNotNull(rate);
    }

    @Test
    public void whenCacheWrittenToReadAndReadAgainFromAfterTTLExpired_ThenReadReturnsNothing() throws Exception {
        String currency = "GBP";
        Double rate = underlier.getRate(currency);
        service.writeToCache(currency, rate);
        assertTrue(service.readFromCache(currency).isPresent());
        Thread.sleep(250);
        assertFalse(service.readFromCache(currency).isPresent());
    }

    @Test
    public void whenCacheWrittenToAndReadFromAfterTTLExpired_ThenReadReturnsNothing() throws Exception {
        String currency = "GBP";
        Double rate = underlier.getRate(currency);

        service.writeToCache(currency, rate);
        Thread.sleep(250);  // wait for cache to expire
        assertFalse(service.readFromCache(currency).isPresent());
    }

    @Test
    public void whenCacheWrittenToReadFromAndWrittenToAgainBeforeTTLExpired_ThenReadReturnsData() throws Exception {
        String currency = "GBP";
        Double rate = underlier.getRate(currency);

        service.writeToCache(currency, rate);
        assertTrue(service.readFromCache(currency).isPresent());

        service.writeToCache("USD", underlier.getRate("USD"));
        assertTrue(service.readFromCache("GBP").isPresent());
        assertTrue(service.readFromCache("USD").isPresent());
    }
}