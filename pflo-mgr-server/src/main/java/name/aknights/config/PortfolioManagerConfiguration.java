package name.aknights.config;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.dropwizard.Configuration;
import name.aknights.config.YahooQuotesConfiguration;
import name.aknights.config.DbConfiguration;

import javax.validation.Valid;

public class PortfolioManagerConfiguration extends Configuration {
    @Valid
    @JsonProperty
    private DbConfiguration dbConfig;

    @Valid
    @JsonProperty
    private YahooQuotesConfiguration yahooConfig;

    public DbConfiguration getDbConfig() {
        return dbConfig;
    }

    public YahooQuotesConfiguration getYahooConfig() {
        return yahooConfig;
    }
}
