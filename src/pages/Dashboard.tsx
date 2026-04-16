import { useEffect, useState } from "react";
import { fetchHoldings, fetchCapitalGains } from "../api/mockApi";
import { useHarvest } from "../context/HarvestContext";
import type { Holding } from "../types";
import PreHarvestCard from "../components/cards/PreHarvestCard";
import PostHarvestCard from "../components/cards/PostHarvestCard";
import HoldingsTable from "../components/table/HoldingsTable";

export default function Dashboard() {
  const { setBaseGains } = useHarvest();
  const [holdings, setHoldings] = useState<Holding[]>([]);

  useEffect(() => {
    fetchHoldings().then(setHoldings);
    fetchCapitalGains().then(setBaseGains);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white p-6">
      
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-4">Tax Harvesting</h1>

      {/* Info Banner */}
      <div className="bg-[#111827] border border-gray-700 rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-300">
          Maximize your tax savings by realizing losses to offset gains.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <PreHarvestCard />
        <PostHarvestCard />
      </div>

      {/* Table */}
      <HoldingsTable holdings={holdings} />
    </div>
  );
}