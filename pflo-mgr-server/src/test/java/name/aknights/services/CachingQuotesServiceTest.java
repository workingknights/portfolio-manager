package name.aknights.services;

import name.aknights.core.quotes.QuoteDetail;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(MockitoJUnitRunner.class)
public class CachingQuotesServiceTest {

    private CachingQuotesService service;
    private QuotesService underlier;

    @Before
    public void setup() {
        underlier = new LocalQuotesService();
        service = new CachingQuotesService(underlier, 200);
    }

    @Test
    public void getQuotes() throws Exception {
        Collection<QuoteDetail> quotes = service.getQuotes(Arrays.asList("ABC", "XYZ"));
        assertEquals(2, quotes.size());
    }

    @Test
    public void whenCacheWrittenToReadAndReadAgainFromAfterTTLExpired_ThenReadReturnsNothing() throws Exception {
        List<String> tickers = Arrays.asList("ABC", "XYZ");
        Collection<QuoteDetail> quotes = underlier.getQuotes(tickers);

        service.writeToCache(quotes);
        assertEquals(2, service.readFromCache(tickers).size());
        Thread.sleep(250);
        assertEquals(0, service.readFromCache(tickers).size());
    }

    @Test
    public void whenCacheWrittenToAndReadFromAfterTTLExpired_ThenReadReturnsNothing() throws Exception {
        List<String> tickers = Arrays.asList("ABC", "XYZ");
        Collection<QuoteDetail> quotes = underlier.getQuotes(tickers);

        service.writeToCache(quotes);
        Thread.sleep(250);
        assertEquals(0, service.readFromCache(tickers).size());
    }

    @Test
    public void whenCacheWrittenToReadFromAndWrittenToAgainBeforeTTLExpired_ThenReadReturnsData() throws Exception {
        List<String> tickers = new ArrayList<>();
        tickers.addAll(Arrays.asList("ABC", "XYZ"));
        Collection<QuoteDetail> quotes = underlier.getQuotes(tickers);

        service.writeToCache(quotes);
        assertEquals(2, service.readFromCache(tickers).size());

        tickers.add("AAA");
        service.writeToCache(underlier.getQuotes(Arrays.asList("AAA")));
        assertEquals(3, service.readFromCache(tickers).size());
    }
}