import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ModelEntry } from '.././model';

@Component({
  selector: 'app-model-entry-form',
  templateUrl: './model-entry-form.component.html',
  styleUrls: ['./model-entry-form.component.css']
})
export class ModelEntryFormComponent {

	@Output() submitted:EventEmitter<ModelEntry> = new EventEmitter();
	@Output() closed:EventEmitter<string> = new EventEmitter();

  protected modelEntry = new ModelEntry('', 0.0);
  private submittedForm = false;

  constructor() {}

  protected onSubmit() {
    this.submittedForm = true;

    let ticker = this.modelEntry.ticker.trim();
    if (!ticker) { return; }

		this.submitted.emit(this.modelEntry);
  }

	protected closeForm() {
		this.closed.emit('complete');
	}
}
