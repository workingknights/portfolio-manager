import { Component, OnInit, ApplicationRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Model } from '.././model';
import { ModelService } from '.././model.service';
import { ModelEntryFormComponent } from '../model-entry-form/model-entry-form.component';
import { Auth } from '../auth.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
  providers: [ModelService]
})
export class ModelComponent implements OnInit {

  private model: Model;
  private showAddEntryForm: boolean = false;

  constructor(
    private modelService: ModelService,
    private auth: Auth,
    private appRef: ApplicationRef) {}

  public ngOnInit() {
    if (this.auth.authenticated()) {
      this.loadModel();
    }
  }

  loadModel() {
    this.modelService.getModelForCurrentUser()
      .subscribe(
      model => this.model = model,
      error => console.log(error));
  }

  createModel() {
    this.modelService.createModel()
      .subscribe(
      model => this.model = model,
      error => {
        console.log(error);
      });
  }

  saveEntry(modelEntry) {
    console.log('saving entry: ' + modelEntry);
    this.modelService.addModelEntry(this.model.id, modelEntry)
      .subscribe(
      model => this.model = model,
      error => console.log(error)
      );
  }

  openAddEntryForm(modelId: String) {
    this.showAddEntryForm = true;
  }
}
