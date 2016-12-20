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
        public ma200Day: number,
				public totalPercentGain: number,
				public totalGain: number,
				public yearLow: number,
				public yearHigh: number,
				public percentChange: string
    ) {}
}
