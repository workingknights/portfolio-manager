package name.aknights;

import dagger.Module;
import dagger.Provides;
import name.aknights.services.FxRatesService;
import name.aknights.services.LocalFxRatesService;
import name.aknights.services.LocalQuotesService;
import name.aknights.services.QuotesService;

import javax.inject.Singleton;

@Module
public class LocalQuotesModule {

    public LocalQuotesModule() {}

    @Singleton
    @Provides
    QuotesService provideQuotesService() {
        return new LocalQuotesService();
    }

    @Singleton
    @Provides
    FxRatesService provideFxRatesService() {
        return new LocalFxRatesService();
    }
}