import { Holding } from './holding';

export class PortfolioEntry {
    constructor(
        public holding: Holding,
        public previousClose: number,
        public marketValue: number,
        public open: number,
        public currency: string,
        public ask: number,
        public ma50Day: number,
        public ma200Day: number
    ) { }

    getMarketValue(): string {
        return this.round(this.marketValue, 2).toFixed(2);
    }

	round(value, precision) {
	    var multiplier = Math.pow(10, precision || 0);
	    return Math.round(value * multiplier) / multiplier;
	}
}
