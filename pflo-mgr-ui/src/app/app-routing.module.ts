import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HoldingsComponent } from './holdings/holdings.component';
import { PortfolioEntryDetailComponent } from './portfolio-entry-detail/portfolio-entry-detail.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
	{ path: '', component: DashboardComponent },
  { path: 'portfolio', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'holdings', component: HoldingsComponent, canActivate: [AuthGuard] },
  { path: 'portfolioEntry/:ticker', component: PortfolioEntryDetailComponent, canActivate: [AuthGuard] },
	{ path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
