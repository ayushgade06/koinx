export interface Gain {
  balance: number;
  gain: number;
}

export interface Holding {
  coin: string;
  coinName: string;
  logo: string;
  totalHolding: number;
  averageBuyPrice: number;
  currentPrice: number;
  stcg: Gain;
  ltcg: Gain;
}

export interface CapitalGains {
  stcg: {
    profits: number;
    losses: number;
  };
  ltcg: {
    profits: number;
    losses: number;
  };
}

export const _VITE_FIX = true;