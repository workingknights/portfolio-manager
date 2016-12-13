import { Component, OnInit } from '@angular/core';

import { Holding }        from '.././holding';
import { HoldingService } from '.././holding.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public holdings: Holding[] = [];

  constructor(private holdingService: HoldingService) { }

  public ngOnInit() {
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
