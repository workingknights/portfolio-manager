package name.aknights;

import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.configuration.EnvironmentVariableSubstitutor;
import io.dropwizard.configuration.SubstitutingSourceProvider;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import name.aknights.config.PortfolioManagerConfiguration;
import name.aknights.db.MongoModule;

public class PortfolioManagerApplication extends Application<PortfolioManagerConfiguration> {

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
        PortfolioManagerComponent component = name.aknights.DaggerPortfolioManagerComponent.builder()
                .portfolioManagerModule(new PortfolioManagerModule(configuration))
                .mongoModule(new MongoModule(configuration.getDbConfig(), environment))
                .build();

        environment.jersey().setUrlPattern("/api/*");

        environment.jersey().register(component.getHoldingsResource());
        environment.jersey().register(component.getQuotesResource());
        environment.jersey().register(component.getPortfolioResource());

        environment.healthChecks().register("MongoHealthCheck", component.getMongoHealthCheck());

        component.getDatastore().ensureIndexes();
    }

}
