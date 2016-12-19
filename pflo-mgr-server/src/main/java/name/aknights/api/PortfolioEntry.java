package name.aknights.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.math.BigDecimal;

public class PortfolioEntry {
    private static final Logger logger = LoggerFactory.getLogger(PortfolioEntry.class);

    private String symbol;
    private Integer totalShares;
    private Double previousClose;
    private Double open;
    private String percentChange;
    private Double marketValue;
    private BigDecimal totalPercentGain;
    private String change;
    private String currency;
    private Double yearLow;
    private Double yearHigh;
    private Double changeFromYearLow;
    private String percentChangeFromYearLow;
    private Double changeFromYearHigh;
    private String percentChangeFromYearHigh;
    private Double ask;
    private Double ma50Day;
    private Double ma200Day;
    private String percentChangeFrom50DayMA;
    private String percentChangeFrom200DayMA;

    public PortfolioEntry() {
    }

    public PortfolioEntry(String symbol, Integer totalShares, Double previousClose, Double open, String currency, Double ask,
                          Double ma50Day, Double ma200Day, String percentChange, Double marketValue, BigDecimal totalPercentGain
//                          String change, Double yearLow, Double yearHigh, Double changeFromYearLow,
//                          String percentChangeFromYearLow, Double changeFromYearHigh, String percentChangeFromYearHigh,
//         String percentChangeFrom50DayMA, String percentChangeFrom200DayMA
 ) {
        this.symbol = symbol;
        this.totalShares = totalShares;
        this.previousClose = previousClose;
        this.open = open;
        this.currency = currency;
        this.ask = ask;
        this.ma50Day = ma50Day;
        this.ma200Day = ma200Day;
        this.percentChange = percentChange;
        this.marketValue = marketValue;
//        this.change = change;
//        this.yearLow = yearLow;
//        this.yearHigh = yearHigh;
//        this.changeFromYearLow = changeFromYearLow;
//        this.percentChangeFromYearLow = percentChangeFromYearLow;
//        this.changeFromYearHigh = changeFromYearHigh;
//        this.percentChangeFromYearHigh = percentChangeFromYearHigh;
//        this.percentChangeFrom50DayMA = percentChangeFrom50DayMA;
//        this.percentChangeFrom200DayMA = percentChangeFrom200DayMA;
        this.totalPercentGain = totalPercentGain;
    }

    public String getSymbol() {
        return symbol;
    }

    public Integer getTotalShares() {
        return totalShares;
    }

    public Double getPreviousClose() {
        return previousClose;
    }

    public Double getOpen() {
        return open;
    }

    public String getPercentChange() {
        return percentChange;
    }

    public String getChange() {
        return change;
    }

    public String getCurrency() {
        return currency;
    }

    public Double getYearLow() {
        return yearLow;
    }

    public Double getYearHigh() {
        return yearHigh;
    }

    public Double getChangeFromYearLow() {
        return changeFromYearLow;
    }

    public String getPercentChangeFromYearLow() {
        return percentChangeFromYearLow;
    }

    public Double getChangeFromYearHigh() {
        return changeFromYearHigh;
    }

    public String getPercentChangeFromYearHigh() {
        return percentChangeFromYearHigh;
    }

    public Double getMarketValue() {
         return marketValue;
    }

    public Double getAsk() {
        return ask;
    }

    public Double getMa50Day() {
        return ma50Day;
    }

    public Double getMa200Day() {
        return ma200Day;
    }

    public String getPercentChangeFrom50DayMA() {
        return percentChangeFrom50DayMA;
    }

    public String getPercentChangeFrom200DayMA() {
        return percentChangeFrom200DayMA;
    }

    public BigDecimal getTotalPercentGain() {
        return totalPercentGain;
    }
}
