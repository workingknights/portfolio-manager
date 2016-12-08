package name.aknights;

import io.dropwizard.Application;
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
        // TODO: application initialization
    }

    @Override
    public void run(final PortfolioManagerConfiguration configuration,
                    final Environment environment) {
        final PortfolioManagerResource resource = new PortfolioManagerResource();

        environment.jersey().register(resource);
    }

}
