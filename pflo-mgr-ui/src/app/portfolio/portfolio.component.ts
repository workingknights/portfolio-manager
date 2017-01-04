import { Component, OnInit, ApplicationRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioEntry } from '.././portfolioEntry';
import { PortfolioService } from '.././portfolio.service';
import { Auth } from '../auth.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  public portfolioEntries: PortfolioEntry[] = [];
  public summary: PortfolioEntry;
  private showAddHoldingForm = false;
  private errorMessage: string;

  constructor(
    private portfolioService: PortfolioService,
    private appRef: ApplicationRef,
    private auth: Auth) {
  }

  public ngOnInit() {
    console.log('PortfolioComponent:ngOnInit() authenticated = ' + this.auth.authenticated());
    if (this.auth.authenticated()) {
      this.refreshPortfolio();
    }
		// else {
		// 	this.auth.login();
		// }
  }

  refresh(event) {
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
