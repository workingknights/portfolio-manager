package name.aknights;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.jaxrs.json.JacksonJaxbJsonProvider;
import dagger.Module;
import dagger.Provides;
import name.aknights.config.YahooQuotesConfiguration;
import name.aknights.services.*;
import org.glassfish.jersey.client.ClientConfig;
import org.glassfish.jersey.client.JerseyClientBuilder;

import javax.inject.Singleton;
import javax.ws.rs.client.Client;

@Module
public class YahooQuotesModule {

    private final YahooQuotesConfiguration config;

    public YahooQuotesModule(YahooQuotesConfiguration config) {
        this.config = config;
    }

    private Client getClient()  {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.configure(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY, true);
        JacksonJaxbJsonProvider jacksonProvider = new JacksonJaxbJsonProvider();
        jacksonProvider.setMapper(objectMapper);
//        Client client = new JerseyClientBuilder().newClient(new ClientConfig(jacksonProvider));
//        return client;
        return  JerseyClientBuilder.createClient(new ClientConfig(jacksonProvider));
    }

    @Singleton
    @Provides
    QuotesService provideQuotesService() {
        YahooQuotesService yahooQuotesService = new YahooQuotesService(getClient(), config);
        if (config.getCacheTtl().isPresent())
            return new CachingQuotesService(yahooQuotesService, config.getCacheTtl().get());
        else
            return new CachingQuotesService(yahooQuotesService);
    }

    @Singleton
    @Provides
    FxRatesService provideFxRatesService() {
        YahooFxRatesService yahooFxRatesService = new YahooFxRatesService(getClient(), config);
        if (config.getCacheTtl().isPresent())
            return new CachingFxRatesService(yahooFxRatesService, config.getCacheTtl().get());
        else
            return new CachingFxRatesService(yahooFxRatesService);
    }

}