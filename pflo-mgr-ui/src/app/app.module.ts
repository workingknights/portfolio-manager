import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Angular2DataTableModule } from 'angular2-data-table';

import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { provideAuth } from 'angular2-jwt';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HoldingService } from './holding.service';
import { PortfolioService } from './portfolio.service';
import { HoldingsComponent } from './holdings/holdings.component';
import { HoldingFormComponent } from './holding-form/holding-form.component';
import { PortfolioEntryDetailComponent } from './portfolio-entry-detail/portfolio-entry-detail.component';
import { AuthGuard } from './auth.guard';
import { Auth } from './auth.service';
import { PortfolioComponent } from './portfolio/portfolio.component';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Angular2DataTableModule,
    NgbModule.forRoot(),
  ],
  providers: [
    HoldingService,
    PortfolioService,
		Auth,
    AuthGuard,
    AUTH_PROVIDERS,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
