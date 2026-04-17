import type { Holding, CapitalGains } from "../types";

export const fetchHoldings = async (): Promise<Holding[]> => {
  return new Promise((res) => {
    setTimeout(() => 
      res([
        {
          coin: "WBTC",
          coinName: "Wrapped Bitcoin",
          logo: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/wbtc.png",
          totalHolding: 2218.81,
          averageBuyPrice: 92980.19,
          currentPrice: 104390,
          stcg: { balance: 2218.81, gain: 25310000 },
          ltcg: { balance: 0, gain: 0 }
        },
        {
          coin: "BTC",
          coinName: "Bitcoin",
          logo: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/btc.png",
          totalHolding: 1184.12,
          averageBuyPrice: 93072.64,
          currentPrice: 104250,
          stcg: { balance: 1184.12, gain: 13240000 },
          ltcg: { balance: 0, gain: 0 }
        },
        {
          coin: "ETH",
          coinName: "Ethereum",
          logo: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/eth.png",
          totalHolding: 20028.05,
          averageBuyPrice: 3367.78,
          currentPrice: 2531.06,
          stcg: { balance: 20028.05, gain: -16760000 },
          ltcg: { balance: 0, gain: 0 }
        },
        {
          coin: "BNB",
          coinName: "BNB",
          logo: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/bnb.png",
          totalHolding: 7020.16,
          averageBuyPrice: 708.72,
          currentPrice: 665.55,
          stcg: { balance: 7020.16, gain: -303050 },
          ltcg: { balance: 0, gain: 0 }
        },
        {
          coin: "SOL",
          coinName: "Solana",
          logo: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/sol.png",
          totalHolding: 8432.41,
          averageBuyPrice: 184.12,
          currentPrice: 162.45,
          stcg: { balance: 8432.41, gain: -182814 },
          ltcg: { balance: 0, gain: 0 }
        },
        {
          coin: "XRP",
          coinName: "XRP",
          logo: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/xrp.png",
          totalHolding: 154200,
          averageBuyPrice: 0.62,
          currentPrice: 0.58,
          stcg: { balance: 0, gain: 0 },
          ltcg: { balance: 154200, gain: -6168 }
        },
        {
          coin: "ADA",
          coinName: "Cardano",
          logo: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/ada.png",
          totalHolding: 42300,
          averageBuyPrice: 0.45,
          currentPrice: 0.38,
          stcg: { balance: 42300, gain: -2961 },
          ltcg: { balance: 0, gain: 0 }
        },
        {
          coin: "AVAX",
          coinName: "Avalanche",
          logo: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/avax.png",
          totalHolding: 1240,
          averageBuyPrice: 42.10,
          currentPrice: 32.10,
          stcg: { balance: 1240, gain: -12400 },
          ltcg: { balance: 0, gain: 0 }
        },
        {
          coin: "DOT",
          coinName: "Polkadot",
          logo: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/dot.png",
          totalHolding: 3500,
          averageBuyPrice: 8.40,
          currentPrice: 6.80,
          stcg: { balance: 0, gain: 0 },
          ltcg: { balance: 3500, gain: -5600 }
        },
        {
          coin: "LINK",
          coinName: "Chainlink",
          logo: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/link.png",
          totalHolding: 2100,
          averageBuyPrice: 14.50,
          currentPrice: 18.20,
          stcg: { balance: 2100, gain: 7770 },
          ltcg: { balance: 0, gain: 0 }
        },
        {
          coin: "MATIC",
          coinName: "Polygon",
          logo: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/matic.png",
          totalHolding: 12500,
          averageBuyPrice: 0.72,
          currentPrice: 0.65,
          stcg: { balance: 12500, gain: -875 },
          ltcg: { balance: 0, gain: 0 }
        },
        {
          coin: "DOGE",
          coinName: "Dogecoin",
          logo: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/doge.png",
          totalHolding: 85000,
          averageBuyPrice: 0.18,
          currentPrice: 0.16,
          stcg: { balance: 85000, gain: -1700 },
          ltcg: { balance: 0, gain: 0 }
        },
        {
          coin: "SHIB",
          coinName: "Shiba Inu",
          logo: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/shib.png",
          totalHolding: 45000000,
          averageBuyPrice: 0.000028,
          currentPrice: 0.000022,
          stcg: { balance: 45000000, gain: -270 },
          ltcg: { balance: 0, gain: 0 }
        },
        {
          coin: "UNI",
          coinName: "Uniswap",
          logo: "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/uni.png",
          totalHolding: 1540,
          averageBuyPrice: 11.20,
          currentPrice: 7.45,
          stcg: { balance: 1540, gain: -5775 },
          ltcg: { balance: 0, gain: 0 }
        }
      ]), 500
    );
  });
};

export const fetchCapitalGains = async (): Promise<CapitalGains> => {
  return new Promise((res) => {
    setTimeout(() =>
      res({
        stcg: { profits: 4049.48, losses: 32127.03 },
        ltcg: { profits: 0, losses: 0 },
      }), 500
    );
  });
};