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

    protected model = new Holding('1', 'ticker', 1);
    private submitted = false;

    constructor(
        private holdingService: HoldingService,
        private router: Router) {
    }

    ngOnInit() {
    }

		protected onSubmit() {
		    this.submitted = true;

		    let symbol =  this.model.symbol.trim();
		    if (!symbol) { return; }

		    this.holdingService.create(this.model);
		  }

		  protected newHolding() {
		    this.model = new Holding('1', '', 0);
		  }
}
