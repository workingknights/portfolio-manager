package name.aknights.config;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.NotEmpty;

public class YahooQuotesConfiguration {
    @NotEmpty
    @JsonProperty
    private String apiUrl;

    @JsonCreator
    public YahooQuotesConfiguration(@JsonProperty("apiUrl") String apiUrl) {
        this.apiUrl = apiUrl;
    }

    public String getApiUrl() {
        return apiUrl;
    }
}
