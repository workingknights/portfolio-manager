import { Component, OnInit } from '@angular/core';


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
		private showAddHoldingForm = false;

    constructor(private portfolioService: PortfolioService) {
    }

    public ngOnInit() {
        this.refreshPortfolio();
    }

    refreshPortfolio() {
        this.portfolioService.getPortfolio()
            .then(portfolioEntries => this.portfolioEntries = portfolioEntries);
    }

		openAddHoldingForm() {
			console.log("Hello");
			this.showAddHoldingForm = true;
		}
}
