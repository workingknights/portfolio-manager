import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Holding } from '.././holding';
import { HoldingService } from '.././holding.service';

@Component({
  selector: 'app-holding-form',
  templateUrl: './holding-form.component.html',
  styleUrls: ['./holding-form.component.css']
})
export class HoldingFormComponent implements OnInit {

	@Output() added:EventEmitter<string> = new EventEmitter();
	@Output() closed:EventEmitter<string> = new EventEmitter();

  protected model = new Holding('1', '', 1, 1.0, 0.0, Date.now(), 0.0, 0.0, '');
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
		this.added.emit('complete');
  }

  protected newHolding() {
    this.model = new Holding('1', '', 1, 1.0, 0.0, Date.now(), 0.0, 0.0, '');
  }

	protected closeForm() {
		this.closed.emit('complete');
	}

	parseDate(dateString: string): Date {
	    if (dateString) {
	        return new Date(dateString);
	    } else {
	        return null;
	    }
	}
	
  get tradeDate() {
    return this.tradeDate.toISOString().substring(0, 10);
  }
}
