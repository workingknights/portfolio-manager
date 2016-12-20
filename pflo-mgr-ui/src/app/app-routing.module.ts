import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HoldingsComponent } from './holdings/holdings.component';
import { HoldingDetailComponent } from './holding-detail/holding-detail.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'holdings', component: HoldingsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
