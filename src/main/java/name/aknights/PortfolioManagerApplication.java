package name.aknights;

import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import name.aknights.resources.PortfolioManagerResource;

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
        bootstrap.addBundle( new AssetsBundle( "/assets/", "/", "index.html") );
    }

    @Override
    public void run(final PortfolioManagerConfiguration configuration,
                    final Environment environment) {
        final PortfolioManagerResource resource =
                new PortfolioManagerResource(configuration.getMongoDbUri(), configuration.getMongoDbName());

        environment.jersey().setUrlPattern("/api/*");

        environment.jersey().register(resource);
    }

}
