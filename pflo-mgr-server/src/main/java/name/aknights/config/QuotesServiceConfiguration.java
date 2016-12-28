package name.aknights.config;

import com.fasterxml.jackson.annotation.JsonProperty;

public class QuotesServiceConfiguration {

    @JsonProperty
    private String quotesImpl;

    public String getQuotesImpl() {
        return quotesImpl;
    }
}
