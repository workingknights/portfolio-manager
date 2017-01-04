import { Component, OnInit, ApplicationRef } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, UrlSegment } from '@angular/router';

import { PortfolioEntry } from '.././portfolioEntry';
import { PortfolioService } from '.././portfolio.service';
import { Auth } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public portfolioEntries: PortfolioEntry[] = [];
  public summary: PortfolioEntry;
  private showAddHoldingForm = false;
  private errorMessage: string;

  constructor(
    private portfolioService: PortfolioService,
    private route: ActivatedRoute,
    private appRef: ApplicationRef,
    private auth: Auth) {
  }

  public ngOnInit() {
    console.log('DashboardComponent:ngOnInit() authenticated = ' + this.auth.authenticated());
    if (this.auth.authenticated()) {
      this.refreshPortfolio();
    }
  }

  refresh(event) {
    console.log('DashboardComponent:refresh()');
    this.refreshPortfolio();
  }

  refreshPortfolio() {
    console.log('refreshing portfolio');
    this.portfolioService.getPortfolio()
      .subscribe(portfolio => {
        this.portfolioEntries = portfolio.entries;
        this.summary = portfolio.summary;
      },
      error => this.errorMessage = <any>error);

    this.appRef.tick;
  }

  openAddHoldingForm() {
    this.showAddHoldingForm = true;
  }
}
