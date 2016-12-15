import { Holding } from './holding';

export class PortfolioEntry {
  constructor(
    public holding: Holding,
    public previousClose: number
    // public tradeDate: string;
  ) { }
}
