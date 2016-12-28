package name.aknights.config;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.dropwizard.Configuration;

import javax.validation.Valid;

public class PortfolioManagerConfiguration extends Configuration {
    @Valid
    @JsonProperty
    private String env;

    @Valid
    @JsonProperty
    private DbConfiguration dbConfig;

    @Valid
    @JsonProperty
    private YahooQuotesConfiguration yahooConfig;

    public String getEnv() {
        return env;
    }

    public DbConfiguration getDbConfig() {
        return dbConfig;
    }

    public YahooQuotesConfiguration getYahooConfig() {
        return yahooConfig;
    }
}
