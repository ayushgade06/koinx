import type { Holding, CapitalGains } from "../types";

export const fetchHoldings = async (): Promise<Holding[]> => {
  return new Promise((res) => {
    setTimeout(() => 
      res([
        {
          "coin": "WBTC",
          "coinName": "Wrapped Bitcoin",
          "logo": "https://coin-images.coingecko.com/coins/images/2518/large/weth.png",
          "currentPrice": 104390,
          "totalHolding": 2218.81,
          "averageBuyPrice": 92980.19,
          "stcg": {
            "balance": 2218.81,
            "gain": 25310000 
          },
          "ltcg": {
            "balance": 0,
            "gain": 0
          }
        },
        {
          "coin": "BTC",
          "coinName": "Bitcoin",
          "logo": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png",
          "currentPrice": 104250,
          "totalHolding": 1184.12,
          "averageBuyPrice": 93072.64,
          "stcg": {
            "balance": 1184.12,
            "gain": 13240000
          },
          "ltcg": {
            "balance": 0,
            "gain": 0
          }
        },
        {
          "coin": "ETH",
          "coinName": "Ethereum",
          "logo": "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png",
          "currentPrice": 2531.06,
          "totalHolding": 20028.05,
          "averageBuyPrice": 3367.78,
          "stcg": {
            "balance": 20028.05,
            "gain": -16760000
          },
          "ltcg": {
            "balance": 0,
            "gain": 0
          }
        },
        {
          "coin": "BNB",
          "coinName": "BNB",
          "logo": "https://coin-images.coingecko.com/coins/images/825/large/bnb.png",
          "currentPrice": 665.55,
          "totalHolding": 7020.16,
          "averageBuyPrice": 708.72,
          "stcg": {
            "balance": 7020.16,
            "gain": -303050
          },
          "ltcg": {
            "balance": 0,
            "gain": 0
          }
        },
        {
          "coin": "SOL",
          "coinName": "Solana",
          "logo": "https://coin-images.coingecko.com/coins/images/4128/large/solana.png",
          "currentPrice": 162.45,
          "totalHolding": 8432.41,
          "averageBuyPrice": 184.12,
          "stcg": {
            "balance": 8432.41,
            "gain": -182814
          },
          "ltcg": {
            "balance": 0,
            "gain": 0
          }
        },
        {
          "coin": "MATIC",
          "coinName": "Polygon",
          "logo": "https://coin-images.coingecko.com/coins/images/4713/large/polygon.png",
          "currentPrice": 0.65,
          "totalHolding": 26038.45,
          "averageBuyPrice": 0.13,
          "stcg": {
            "balance": 26038.45,
            "gain": 3348.92
          },
          "ltcg": {
            "balance": 0,
            "gain": 0
          }
        },
        {
          "coin": "XRP",
          "coinName": "XRP",
          "logo": "https://coin-images.coingecko.com/coins/images/44/large/xrp.png",
          "currentPrice": 1.25,
          "totalHolding": 154200,
          "averageBuyPrice": 0.58,
          "stcg": {
            "balance": 0,
            "gain": 0
          },
          "ltcg": {
            "balance": 154200,
            "gain": 103314
          }
        },
        {
          "coin": "ADA",
          "coinName": "Cardano",
          "logo": "https://coin-images.coingecko.com/coins/images/975/large/cardano.png",
          "currentPrice": 0.38,
          "totalHolding": 42300,
          "averageBuyPrice": 1.12,
          "stcg": {
            "balance": 42300,
            "gain": -31262
          },
          "ltcg": {
            "balance": 0,
            "gain": 0
          }
        },
        {
          "coin": "DOT",
          "coinName": "Polkadot",
          "logo": "https://coin-images.coingecko.com/coins/images/12171/large/polkadot.png",
          "currentPrice": 6.80,
          "totalHolding": 3500,
          "averageBuyPrice": 18.40,
          "stcg": {
            "balance": 0,
            "gain": 0
          },
          "ltcg": {
            "balance": 3500,
            "gain": -40600
          }
        },
        {
          "coin": "LINK",
          "coinName": "Chainlink",
          "logo": "https://coin-images.coingecko.com/coins/images/877/large/chainlink-new-logo.png",
          "currentPrice": 18.20,
          "totalHolding": 2100,
          "averageBuyPrice": 14.50,
          "stcg": {
            "balance": 2100,
            "gain": 7770
          },
          "ltcg": {
            "balance": 0,
            "gain": 0
          }
        }
      ]), 500
    );
  });
};

export const fetchCapitalGains = async (): Promise<CapitalGains> => {
  return new Promise((res) => {
    setTimeout(() =>
      res({
        "stcg": {
          "profits": 4049.48,
          "losses": 32127.03
        },
        "ltcg": {
          "profits": 0,
          "losses": 0
        },
      }), 500
    );
  });
};