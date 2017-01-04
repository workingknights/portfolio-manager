package name.aknights.api;

public class PortfolioEntry {
    private String ticker;
    private String name;
    private Integer totalShares;
    private Double previousClose;
    private Double open;
    private Double percentChange;
    private Double dailyGain;
    private Double marketValue;
    private Double totalPercentGain;
    private Double totalGain;
    private String currency;
    private Double yearLow;
    private Double yearHigh;
    private String recommendation;
    private Double currPrice;
    private Double ma50Day;
    private Double ma200Day;

    public PortfolioEntry() {
    }

    public PortfolioEntry(String ticker, String name, Integer totalShares, Double previousClose, Double open, String currency, Double currPrice,
                          Double ma50Day, Double ma200Day, Double percentChange, Double dailyGain, Double marketValue, Double totalPercentGain,
                          Double totalGain, Double yearLow, Double yearHigh, String recommendation) {
        this.ticker = ticker;
        this.name = name;
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

    public String getTicker() {
        return ticker;
    }

    public String getName() {
        return name;
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

    public Double getMarketValue() {
        return marketValue;
    }

    public Double getTotalPercentGain() {
        return totalPercentGain;
    }

    public Double getTotalGain() {
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

    public Double getCurrPrice() {
        return currPrice;
    }

    public Double getMa50Day() {
        return ma50Day;
    }

    public Double getMa200Day() {
        return ma200Day;
    }
}
