package name.aknights.services;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.mock;

public class PortfolioServiceTest {

    private PortfolioService service;

    @Before
    public void setUp() {
        YahooQuotesService quotesService = mock(YahooQuotesService.class);
        HoldingsService holdingsService = mock(HoldingsService.class);
        service = new PortfolioService(quotesService, holdingsService);
    }

    @Test
    public void withSmallPercentChangeFromYearHighAndPositiveDailyChangeSellIsRecommended() throws Exception {
        assertEquals("SELL", service.calcRecommendation(14.0, 10.0, 0.05,
                40.0, -1.0));
    }

    @Test
    public void withLowPercentChangeFromYearHighBuyIsRecommended() throws Exception {
        assertEquals("BUY", service.calcRecommendation(10.0, 10.0, 0.0,
                5.0, -50.0));
    }

    @Test
    public void withSmallPositiveDeltaFrom200DayMABuyIsRecommended() throws Exception {
        assertEquals("BUY", service.calcRecommendation(10.2, 10.0, 0.0,
                20.0, -20.0));
    }

    @Test
    public void withSmallNegativeDeltaFrom200DayMAHoldIsRecommended() throws Exception {
        assertEquals("HOLD", service.calcRecommendation(9.0, 10.0, 0.0,
                20.0, -20.0));
    }

    @Test
    public void withHighDailyPercentChangeAndNoGoldenCrossHoldIsRecommended() throws Exception {
        assertEquals("HOLD", service.calcRecommendation(14.0, 10.0, 0.2,
                20.0, -20.0));
    }

    @Test
    public void withLowPercentChangeFromYearLowBuyIsRecommended() throws Exception {
        assertEquals("BUY", service.calcRecommendation(85.95, 88.36, -0.05,
                1.47, -5.72));
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
//        assertEquals(ticker, entry.getTicker());
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
//        assertEquals(ticker, entry.getTicker());
//        assertEquals(15, entry.getTotalShares().longValue());
//        assertEquals(0.147, entry.getTotalPercentGain().doubleValue(), 0.001);
//
//    }

}