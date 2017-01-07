package name.aknights.core;

public enum Currency {
    GBP ("GBP", 1),
    GBp ("GBp", 100),
    USD ("USD", 1);

    private final String symbol;
    private final double factor;

    Currency(String symbol, double factor) {
        this.symbol = symbol;
        this.factor = factor;
    }

    public double getFactor() {
        return factor;
    }
}
