import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HoldingsComponent } from './holdings/holdings.component';
import { PortfolioEntryDetailComponent } from './portfolio-entry-detail/portfolio-entry-detail.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'holdings', component: HoldingsComponent, canActivate: [AuthGuard] },
  { path: 'portfolioEntry/:ticker', component: PortfolioEntryDetailComponent, canActivate: [AuthGuard] },
  { path: '', component: DashboardComponent },
	{ path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
