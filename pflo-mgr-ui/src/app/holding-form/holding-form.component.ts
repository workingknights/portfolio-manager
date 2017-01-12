import { Component, EventEmitter, Output } from '@angular/core';

import { Holding } from '.././holding';

@Component({
  selector: 'app-holding-form',
  templateUrl: './holding-form.component.html',
  styleUrls: ['./holding-form.component.css']
})
export class HoldingFormComponent {

	@Output() submitted:EventEmitter<Holding> = new EventEmitter();
	@Output() closed:EventEmitter<string> = new EventEmitter();

  private holding = new Holding('1', '', 1, 1.0, 0.0, Date.now(), 0.0, 0.0, '');
  private submittedForm = false;

  constructor() {}

  protected onSubmit() {
    this.submittedForm = true;

    let symbol = this.holding.symbol.trim();
    if (!symbol) { return; }

		this.submitted.emit(this.holding);
  }

  protected newHolding() {
    this.holding = new Holding('1', '', 1, 1.0, 0.0, Date.now(), 0.0, 0.0, '');
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
