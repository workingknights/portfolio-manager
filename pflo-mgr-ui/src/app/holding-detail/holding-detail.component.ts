import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { HoldingService } from '../holding.service'
import { Holding } from '../holding'

@Component({
    selector: 'app-holding-detail',
    templateUrl: './holding-detail.component.html',
    styleUrls: ['./holding-detail.component.css']
})
export class HoldingDetailComponent implements OnInit {

    private holding: Holding;

    constructor(
        private holdingService: HoldingService,
        private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.holdingService.getHolding(params['id']))
            .subscribe(holding => this.holding = holding);
    }

    goBack(): void {
        this.location.back();
    }

}
