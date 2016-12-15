import { Component, OnInit } from '@angular/core';

import { Holding }        from '.././holding';
import { HoldingService } from '.././holding.service';

import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.css']
})
export class HoldingsComponent implements OnInit {

  public holdings: Holding[] = [];

  constructor(private holdingService: HoldingService) { }

  public ngOnInit() {
    this.refreshHoldingsList();
  }

  refreshHoldingsList() {
    this.holdingService.getHoldings()
      .then(holdings => this.holdings = holdings);
  }

  delete(holding: Holding): void {
    this.holdingService
    .delete(holding.id)
    .then(() => {
      this.holdings = this.holdings.filter(h => h != holding);
    });
  }
}
