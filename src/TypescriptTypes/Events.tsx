export interface SelectionItem {
  id: string;
  name: string;
  price: number;
}

export interface MarketItem {
  id: string;
  name: string;
  selections: Array<SelectionItem>;
}

export interface EventItem {
  id: string;
  markets: Array<MarketItem>;
  name: string;
}
