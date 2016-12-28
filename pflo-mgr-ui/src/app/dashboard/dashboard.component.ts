import { Component, OnInit, ApplicationRef } from '@angular/core';


import { PortfolioEntry } from '.././portfolioEntry';
import { PortfolioService } from '.././portfolio.service';

import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public portfolioEntries: PortfolioEntry[] = [];
  public summary: PortfolioEntry[] = [];
  private showAddHoldingForm = false;

  constructor(private portfolioService: PortfolioService, private appRef: ApplicationRef) {
  }

  public ngOnInit() {
    this.refreshPortfolio();
  }

  refresh(event) {
    this.refreshPortfolio();
  }

  refreshPortfolio() {
    console.log('refreshing portfolio');
    this.portfolioService.getPortfolio()
      .then(portfolio => {
				this.portfolioEntries = portfolio.entries;
				this.summary = [portfolio.summary];
			}
			);

    this.appRef.tick;
  }

  openAddHoldingForm() {
    this.showAddHoldingForm = true;
  }

  gainClassName() {
    return 'redCell';
  }
}
