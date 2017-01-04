import { Component } from '@angular/core';

import { HoldingService } from './holding.service';
import { PortfolioService } from './portfolio.service';
import { Auth } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Portfolio Viewer';

	constructor(private auth: Auth) {}
}
