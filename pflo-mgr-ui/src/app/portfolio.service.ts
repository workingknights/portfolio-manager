import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Portfolio } from './portfolio';
import { PortfolioEntry } from './portfolioEntry';

@Injectable()
export class PortfolioService {

  constructor(private http: Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private portfolioUrl = 'api/portfolio';

  public getPortfolio(): Promise<Portfolio> {
    return this.http.get(this.portfolioUrl)
      .toPromise()
      .then(response => response.json() as Portfolio)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
