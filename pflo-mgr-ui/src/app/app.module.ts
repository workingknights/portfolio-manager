import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { provideAuth } from 'angular2-jwt';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HoldingService } from './holding.service';
import { PortfolioService } from './portfolio.service';
import { ModelService } from './model.service';
import { SandboxService } from './sandbox.service';
import { TickerService } from './ticker.service';
import { HoldingsComponent } from './holdings/holdings.component';
import { HoldingFormComponent } from './holding-form/holding-form.component';
import { PortfolioEntryDetailComponent } from './portfolio-entry-detail/portfolio-entry-detail.component';
import { AuthGuard } from './auth.guard';
import { Auth } from './auth.service';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ModelComponent } from './model/model.component';
import { ModelEntryFormComponent } from './model-entry-form/model-entry-form.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { TickersComponent } from './tickers/tickers.component';
import { Utils } from './utils';
import { TickerDetailFormComponent } from './ticker-detail-form/ticker-detail-form.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    globalHeaders: [{ 'Content-Type': 'application/json' }],
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HoldingsComponent,
    HoldingFormComponent,
    PortfolioEntryDetailComponent,
    PortfolioComponent,
    ModelComponent,
    ModelEntryFormComponent,
    SandboxComponent,
    TickersComponent,
    TickerDetailFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgxDatatableModule,
    NgbModule.forRoot(),
  ],
  providers: [
    HoldingService,
    PortfolioService,
    ModelService,
    SandboxService,
		TickerService,
		Auth,
		Utils,
    AuthGuard,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
