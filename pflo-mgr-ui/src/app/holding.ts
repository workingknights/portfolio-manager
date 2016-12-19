export class Holding {
  constructor(
    public id: string,
    public symbol: string,
    public shares: number,
    public tradePrice: number,
		public commission: number,
    public tradeDate: any,
		public initialMarketValue: number
  ) { }
}
