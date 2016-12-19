import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Holding } from '.././holding';
import { HoldingService } from '.././holding.service';

@Component({
  selector: 'app-holding-form',
  templateUrl: './holding-form.component.html',
  styleUrls: ['./holding-form.component.css']
})
export class HoldingFormComponent implements OnInit {

  protected model = new Holding('1', 'ticker', 1, 1.0, 0.0, Date.now(), 0.0);
  private submitted = false;

  constructor(
    private holdingService: HoldingService,
    private router: Router) {
  }

  ngOnInit() {
  }

  protected onSubmit() {
    this.submitted = true;

    let symbol = this.model.symbol.trim();
    if (!symbol) { return; }

    this.holdingService.create(this.model);
  }

  protected newHolding() {
    this.model = new Holding('1', 'ticker', 1, 1.0, 0.0, new Date(), 0.0);
  }

  set tradeDate(e) {
    e = e.split('-');
    let d = new Date(Date.UTC(e[0], e[1] - 1, e[2]));
    this.tradeDate.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + 1);
  }

  get tradeDate() {
    return this.tradeDate.toISOString().substring(0, 10);
  }
}
