import type { CapitalGains, Holding } from "../types";

export const calculateAfterHarvest = (
  base: CapitalGains,
  selected: Holding[]
): CapitalGains => {
  const updated = JSON.parse(JSON.stringify(base));

  selected.forEach((asset) => {
    // STCG
    if (asset.stcg.gain > 0) {
      updated.stcg.profits += asset.stcg.gain;
    } else {
      updated.stcg.losses += Math.abs(asset.stcg.gain);
    }

    // LTCG
    if (asset.ltcg.gain > 0) {
      updated.ltcg.profits += asset.ltcg.gain;
    } else {
      updated.ltcg.losses += Math.abs(asset.ltcg.gain);
    }
  });

  return updated;
};

// helpers
export const getNet = (profits: number, losses: number) =>
  profits - losses;

export const getTotal = (data: CapitalGains) => {
  const st = getNet(data.stcg.profits, data.stcg.losses);
  const lt = getNet(data.ltcg.profits, data.ltcg.losses);
  return st + lt;
};