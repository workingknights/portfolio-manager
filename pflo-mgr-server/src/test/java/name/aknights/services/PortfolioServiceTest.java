package name.aknights.services;

import name.aknights.api.Holding;
import name.aknights.api.PortfolioEntry;
import name.aknights.core.quotes.QuoteDetail;
import org.junit.Before;
import org.junit.Test;

import java.util.*;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.mock;

public class PortfolioServiceTest {

    private PortfolioService service;

    @Before
    public void setUp() {
        QuotesService quotesService = mock(QuotesService.class);
        HoldingsService holdingsService = mock(HoldingsService.class);
        service = new PortfolioService(quotesService, holdingsService);
    }

//    @Test
//    public void withOneHoldingPortfolioEntryIsCreatedCorrectly() throws Exception {
//        String ticker = "TEST";
//
//        Map<String, List<Holding>> holdingsMap = new HashMap<>();
//        Date tradeDate = Calendar.getInstance().getTime();
//        holdingsMap.put(ticker, Arrays.asList(new Holding(ticker, 5, tradeDate, 10.0, 0.0)));
//
//        QuoteDetail quoteDetail = new QuoteDetail(ticker, 11.0);
//
//        PortfolioEntry entry = service.createEntry(holdingsMap, quoteDetail);
//
//        assertNotNull(entry);
//        assertEquals(ticker, entry.getSymbol());
//        assertEquals(5, entry.getTotalShares().longValue());
//        assertEquals(0.1, entry.getTotalPercentGain().doubleValue(), 0.1);
//    }
//
//    @Test
//    public void withMultipleHoldingsPortfolioEntryIsCreatedCorrectly() throws Exception {
//        String ticker = "TEST";
//
//        Map<String, List<Holding>> holdingsMap = new HashMap<>();
//        Date tradeDate = Calendar.getInstance().getTime();
//        holdingsMap.put(ticker, Arrays.asList(
//                new Holding(ticker, 5, tradeDate, 10.0, 0.0),
//                new Holding(ticker, 10, tradeDate, 12.0, 0.0)
//        ));
//
//        QuoteDetail quoteDetail = new QuoteDetail(ticker, 13.0);
//
//        PortfolioEntry entry = service.createEntry(holdingsMap, quoteDetail);
//
//        assertNotNull(entry);
//        assertEquals(ticker, entry.getSymbol());
//        assertEquals(15, entry.getTotalShares().longValue());
//        assertEquals(0.147, entry.getTotalPercentGain().doubleValue(), 0.001);
//
//    }

}