import type { Holding, CapitalGains } from "../types";

export const fetchHoldings = async (): Promise<Holding[]> => {

  return new Promise((res) => {
    setTimeout(() => 
      res([
        {
          coin: "BTC",
          coinName: "Bitcoin",
          logo: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/btc.png",
          totalHolding: 0.63,
          averageBuyPrice: 55320,
          currentPrice: 62000,
          stcg: { balance: 1000, gain: -1200 },
          ltcg: { balance: 5000, gain: 2400 }
        },
        {
          coin: "ETH",
          coinName: "Ethereum",
          logo: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/eth.png",
          totalHolding: 4.5,
          averageBuyPrice: 2800,
          currentPrice: 3200,
          stcg: { balance: 500, gain: 400 },
          ltcg: { balance: 2000, gain: -800 }
        },
        {
          coin: "SOL",
          coinName: "Solana",
          logo: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/sol.png",
          totalHolding: 120,
          averageBuyPrice: 140,
          currentPrice: 160,
          stcg: { balance: 300, gain: -500 },
          ltcg: { balance: 1000, gain: 1200 }
        }
      ]), 500
    );
  });
};

export const fetchCapitalGains = async (): Promise<CapitalGains> => {
  return new Promise((res) => {
    setTimeout(() =>
      res({
        stcg: { profits: 70200.88, losses: 1548.53 },
        ltcg: { profits: 5020, losses: 3050 },
      }), 500
    );
  });
};