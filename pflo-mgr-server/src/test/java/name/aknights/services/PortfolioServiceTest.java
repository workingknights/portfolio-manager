package name.aknights.services;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.mock;

public class PortfolioServiceTest {

    private PortfolioService service;

    @Before
    public void setUp() {
        QuotesService quotesService = mock(QuotesService.class);
        FxRatesService fxRatesService = mock(FxRatesService.class);
        HoldingsService holdingsService = mock(HoldingsService.class);
        service = new PortfolioService(quotesService, fxRatesService, holdingsService);
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

}