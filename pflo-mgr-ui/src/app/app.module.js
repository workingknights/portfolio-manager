"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var angular2_data_table_1 = require("angular2-data-table");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var portfolio_component_1 = require("./portfolio/portfolio.component");
var holding_form_component_1 = require("./holding-form/holding-form.component");
var portfolio_entry_detail_component_1 = require("./portfolio-entry-detail/portfolio-entry-detail.component");
var holdings_component_1 = require("./holdings/holdings.component");
var model_component_1 = require("./model/model.component");
var model_entry_form_component_1 = require("./model-entry-form/model-entry-form.component");
var sandbox_component_1 = require("./sandbox/sandbox.component");
var tickers_component_1 = require("./tickers/tickers.component");
var ticker_detail_form_component_1 = require("./ticker-detail-form/ticker-detail-form.component");
var holding_service_1 = require("./holding.service");
var portfolio_service_1 = require("./portfolio.service");
var model_service_1 = require("./model.service");
var sandbox_service_1 = require("./sandbox.service");
var ticker_service_1 = require("./ticker.service");
var utils_1 = require("./utils");
var angular2_jwt_1 = require("angular2-jwt");
var auth_service_1 = require("./auth.service");
var auth_guard_1 = require("./auth.guard");
function authHttpServiceFactory(http, options) {
    return new angular2_jwt_1.AuthHttp(new angular2_jwt_1.AuthConfig({
        globalHeaders: [{ 'Content-Type': 'application/json' }],
    }), http, options);
}
exports.authHttpServiceFactory = authHttpServiceFactory;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            angular2_data_table_1.Angular2DataTableModule
        ],
        declarations: [
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            portfolio_component_1.PortfolioComponent,
            holding_form_component_1.HoldingFormComponent,
            portfolio_entry_detail_component_1.PortfolioEntryDetailComponent,
            holdings_component_1.HoldingsComponent,
            model_component_1.ModelComponent,
            model_entry_form_component_1.ModelEntryFormComponent,
            sandbox_component_1.SandboxComponent,
            tickers_component_1.TickersComponent,
            ticker_detail_form_component_1.TickerDetailFormComponent
        ],
        providers: [
            holding_service_1.HoldingService,
            portfolio_service_1.PortfolioService,
            model_service_1.ModelService,
            sandbox_service_1.SandboxService,
            ticker_service_1.TickerService,
            utils_1.Utils,
            auth_service_1.Auth,
            {
                provide: angular2_jwt_1.AuthHttp,
                useFactory: authHttpServiceFactory,
                deps: [http_1.Http, http_1.RequestOptions]
            },
            auth_guard_1.AuthGuard
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
