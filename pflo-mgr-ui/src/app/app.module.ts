import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Angular2DataTableModule } from 'angular2-data-table';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HoldingService } from './holding.service';
import { PortfolioService } from './portfolio.service';
import { HoldingsComponent } from './holdings/holdings.component';
import { HoldingDetailComponent } from './holding-detail/holding-detail.component';
import { HoldingFormComponent } from './holding-form/holding-form.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        HoldingsComponent,
        HoldingDetailComponent,
        HoldingFormComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
		Angular2DataTableModule,
		NgbModule.forRoot(),
    ],
    providers: [HoldingService,
        		PortfolioService],
    bootstrap: [AppComponent]
})
export class AppModule { }
