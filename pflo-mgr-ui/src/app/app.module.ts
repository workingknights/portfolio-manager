import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HoldingService } from './holding.service';
import { PortfolioService } from './portfolio.service';
import { HoldingsComponent } from './holdings/holdings.component';
import { HoldingDetailComponent } from './holding-detail/holding-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        HoldingsComponent,
        HoldingDetailComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
		NgbModule.forRoot(),
    ],
    providers: [HoldingService,
        		PortfolioService],
    bootstrap: [AppComponent]
})
export class AppModule { }
