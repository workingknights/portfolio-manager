package name.aknights.api;

import java.math.BigDecimal;

public class PortfolioEntry {
    private String symbol;
    private Integer totalShares;
    private Double previousClose;
    private Double open;
    private Double percentChange;
    private Double dailyGain;
    private BigDecimal marketValue;
    private BigDecimal totalPercentGain;
    private BigDecimal totalGain;
    private String currency;
    private Double yearLow;
    private Double yearHigh;
    private String recommendation;
    private BigDecimal currPrice;
    private Double ma50Day;
    private Double ma200Day;

    public PortfolioEntry() {
    }

    public PortfolioEntry(String symbol, Integer totalShares, Double previousClose, Double open, String currency, BigDecimal currPrice,
                          Double ma50Day, Double ma200Day, Double percentChange, Double dailyGain, BigDecimal marketValue, BigDecimal totalPercentGain,
                          BigDecimal totalGain, Double yearLow, Double yearHigh, String recommendation) {
        this.symbol = symbol;
        this.totalShares = totalShares;
        this.previousClose = previousClose;
        this.open = open;
        this.currency = currency;
        this.currPrice = currPrice;
        this.ma50Day = ma50Day;
        this.ma200Day = ma200Day;
        this.percentChange = percentChange;
        this.dailyGain = dailyGain;
        this.marketValue = marketValue;
        this.totalPercentGain = totalPercentGain;
        this.totalGain = totalGain;
        this.yearLow = yearLow;
        this.yearHigh = yearHigh;
        this.recommendation = recommendation;
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

    public Double getPercentChange() {
        return percentChange;
    }

    public Double getDailyGain() {
        return dailyGain;
    }

    public BigDecimal getMarketValue() {
        return marketValue;
    }

    public BigDecimal getTotalPercentGain() {
        return totalPercentGain;
    }

    public BigDecimal getTotalGain() {
        return totalGain;
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

    public String getRecommendation() {
        return recommendation;
    }

    public BigDecimal getCurrPrice() {
        return currPrice;
    }

    public Double getMa50Day() {
        return ma50Day;
    }

    public Double getMa200Day() {
        return ma200Day;
    }
}
