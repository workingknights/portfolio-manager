package name.aknights.services;

import name.aknights.api.Holding;
import name.aknights.api.PortfolioEntry;
import name.aknights.core.quotes.QuoteDetail;
import org.junit.Before;
import org.junit.Test;

import java.util.Arrays;
import java.util.Calendar;
import java.util.Collections;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.mock;

public class PortfolioServiceTest {

    private PortfolioService service;

    @Before
    public void setUp() {
        QuotesService quotesService = mock(QuotesService.class);
        FxRatesService fxRatesService = mock(FxRatesService.class);
        HoldingsService holdingsService = mock(HoldingsService.class);
        ModelService modelService = mock(ModelService.class);
        service = new PortfolioService(quotesService, fxRatesService, holdingsService, modelService);
    }

    @Test
    public void withSmallPercentChangeFromYearHighAndPositiveDailyChangeSellIsRecommended() throws Exception {
        assertEquals("SELL", service.calcRecommendation(14.0, 10.0, 0.05,
                40.0, -1.0).getDirection());
    }

    @Test
    public void withLowPercentChangeFromYearHighBuyIsRecommended() throws Exception {
        assertEquals("BUY", service.calcRecommendation(10.0, 10.0, 0.0,
                5.0, -50.0).getDirection());
    }

    @Test
    public void withSmallPositiveDeltaFrom200DayMABuyIsRecommended() throws Exception {
        assertEquals("BUY", service.calcRecommendation(10.2, 10.0, 0.0,
                20.0, -20.0).getDirection());
    }

    @Test
    public void withSmallNegativeDeltaFrom200DayMAHoldIsRecommended() throws Exception {
        assertEquals("HOLD", service.calcRecommendation(9.0, 10.0, 0.0,
                20.0, -20.0).getDirection());
    }

    @Test
    public void withHighDailyPercentChangeAndNoGoldenCrossHoldIsRecommended() throws Exception {
        assertEquals("HOLD", service.calcRecommendation(14.0, 10.0, 0.2,
                20.0, -20.0).getDirection());
    }

    @Test
    public void withLowPercentChangeFromYearLowBuyIsRecommended() throws Exception {
        assertEquals("BUY", service.calcRecommendation(85.95, 88.36, -0.05,
                1.47, -5.72).getDirection());
    }

    @Test
    public void withSingleNonUSDHolding_EntryCreatedCorrectly() throws Exception {
        Calendar tradeDate = Calendar.getInstance();
        tradeDate.set(2016, 7, 30);
        String ticker = "CPJ1.L";
        Holding holding = new Holding(ticker, 20, tradeDate.getTime(), 9138.25, 0.0);

        QuoteDetail quote = new QuoteDetail(ticker, "GBp", 9739.00, "+0.44", "+0.69%",
                "+0.1%", "+0.05%", 	112.01, 110.75);
        Double fxRate = 81.1999483;

        PortfolioEntry entry = service.createEntry(Collections.singletonList(holding), quote, fxRate);

        assertNotNull(entry);
        assertEquals(ticker, entry.getTicker());
        assertEquals("GBp",entry.getCurrency());
        assertEquals(20, (long) entry.getTotalShares());
        assertEquals(182765.0, entry.getTotalCost(), 0.001);
        assertEquals(194780.0, entry.getMarketValue(), 0.001);
        assertEquals(12015.0, entry.getTotalGain(), 0.01);
        assertEquals(147.968, entry.getTotalGainBase(), 0.01);
    }

    @Test
    public void withTwoUSDHoldings_EntryCreatedCorrectly() throws Exception {
        Calendar tradeDate = Calendar.getInstance();
        String ticker = "VBR";
        tradeDate.set(2016, 6, 20);
        Holding holding1 = new Holding(ticker, 30, tradeDate.getTime(), 109.44, 1.5);

        tradeDate.set(2016, 11, 6);
        Holding holding2 = new Holding(ticker, 10, tradeDate.getTime(), 121.32, 0.5);

        QuoteDetail quote = new QuoteDetail(ticker, "USD", 123.8, "+0.44", "+0.69%",
                "+0.1%", "+0.05%", 	112.01, 110.75);
        Double fxRate = 1.0;

        PortfolioEntry entry = service.createEntry(Arrays.asList(holding1, holding2), quote, fxRate);

        assertNotNull(entry);
        assertEquals(ticker, entry.getTicker());
        assertEquals("USD",entry.getCurrency());
        assertEquals(40, (long) entry.getTotalShares());
        assertEquals(4498.4, entry.getTotalCost(), 0.001);
        assertEquals(4952.0, entry.getMarketValue(), 0.001);
        assertEquals(453.60, entry.getTotalGain(), 0.01);
        assertEquals(453.60, entry.getTotalGainBase(), 0.01);
    }
}
