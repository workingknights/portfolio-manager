package name.aknights;

import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.configuration.EnvironmentVariableSubstitutor;
import io.dropwizard.configuration.SubstitutingSourceProvider;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import name.aknights.config.PortfolioManagerConfiguration;
import name.aknights.db.MongoModule;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class PortfolioManagerApplication extends Application<PortfolioManagerConfiguration> {
    private static final Logger logger = LoggerFactory.getLogger(PortfolioManagerApplication.class);

    public static void main(final String[] args) throws Exception {
        new PortfolioManagerApplication().run(args);
    }

    @Override
    public String getName() {
        return "PortfolioManager";
    }

    @Override
    public void initialize(final Bootstrap<PortfolioManagerConfiguration> bootstrap) {
        // Enable variable substitution with environment variables
        bootstrap.setConfigurationSourceProvider(
                new SubstitutingSourceProvider(
                        bootstrap.getConfigurationSourceProvider(),
                        new EnvironmentVariableSubstitutor())
        );
        bootstrap.addBundle(new AssetsBundle( "/assets/", "/", "index.html") );
    }

    @Override
    public void run(final PortfolioManagerConfiguration configuration,
                    final Environment environment) {
        PortfolioManagerComponent component;

        if (configuration.getEnv() == null || configuration.getEnv().equalsIgnoreCase("prod")) {
            component = DaggerPortfolioManagerComponent.builder()
                    .yahooQuotesModule(new YahooQuotesModule(configuration.getYahooConfig()))
                    .mongoModule(new MongoModule(configuration.getDbConfig(), environment))
                    .build();
        }
        else {
            logger.info("*** Building Test Instance of PortfolioManager ***");
            component = DaggerTestPortfolioManagerComponent.builder()
                    .mongoModule(new MongoModule(configuration.getDbConfig(), environment))
                    .build();
        }

        environment.jersey().setUrlPattern("/api/*");

        environment.jersey().register(component.getHoldingsResource());
        environment.jersey().register(component.getQuotesResource());
        environment.jersey().register(component.getPortfolioResource());

        environment.jersey().register(LogRequestFeature.class);

        environment.healthChecks().register("MongoHealthCheck", component.getMongoHealthCheck());

        component.getDatastore().ensureIndexes();
    }

}
