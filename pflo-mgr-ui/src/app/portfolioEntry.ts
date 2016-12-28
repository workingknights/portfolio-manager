export class PortfolioEntry {
    constructor(
        public symbol: string,
				public totalShares: number,
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
				public percentChange: number,
				public dailyGain: number,
				public recommendation: string
    ) {}
}
