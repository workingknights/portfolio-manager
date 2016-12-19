package name.aknights.services;

public class QuoteNotFoundException extends Throwable {
    public QuoteNotFoundException(String ticker) {
        super(String.format("No quote found for ticker [%]", ticker));
    }

}
