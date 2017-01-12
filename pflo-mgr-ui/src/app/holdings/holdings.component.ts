import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Holding } from '.././holding';
import { HoldingService } from '.././holding.service';
import { Auth } from '../auth.service';

@Component({
  selector: 'app-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.css'],
	providers: [ HoldingService ]
})
export class HoldingsComponent implements OnInit {

  public holdings: Holding[] = [];
	private errorMessage: string;

  constructor(
    private holdingService: HoldingService,
    private auth: Auth) { }

  public ngOnInit() {
    if (this.auth.authenticated()) {
      this.refreshHoldingsList();
    }
  }

  refreshHoldingsList() {
    this.holdingService.getHoldings()
      // .then(holdings => this.holdings = holdings);
      .subscribe(holdings => this.holdings = holdings,
			error => this.errorMessage = <any>error);
  }

  delete(holding: Holding): void {
    this.holdingService
      .delete(holding.id)
      // .then(() => {
      //   this.holdings = this.holdings.filter(h => h != holding);
      // });
      .subscribe(() => {
        this.holdings = this.holdings.filter(h => h != holding);
      },
			error => this.errorMessage = <any>error);
  }
}
