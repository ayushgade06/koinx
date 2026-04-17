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
  const [showHowItWorks, setShowHowItWorks] = useState(false);
  const [isDisclaimerExpanded, setIsDisclaimerExpanded] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetchHoldings().then(setHoldings),
      fetchCapitalGains().then(setBaseGains)
    ]).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0F1A] flex flex-col items-center justify-center text-white gap-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-400 font-medium animate-pulse">Analysing your portfolio...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white p-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-2xl font-bold">Tax Optimisation</h1>
          <button 
            onClick={() => setShowHowItWorks(!showHowItWorks)}
            className="text-blue-500 underline text-sm hover:text-blue-400"
          >
            How it works?
          </button>
        </div>

        {/* Popup */}
        {showHowItWorks && (
          <div className="absolute top-[70px] left-[220px] z-50 animate-in fade-in zoom-in duration-200 pointer-events-none">
            <div className="bg-white text-[#111827] rounded-xl w-[280px] p-5 shadow-2xl relative border border-gray-100 pointer-events-auto">
              {/* Arrow upward tip */}
              {/* <div className="absolute -top-2 left-6 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100"></div> */}
              
              <ul className="space-y-3 text-[11px] leading-relaxed mb-4 list-disc pl-4 marker:text-gray-400">
                <li>See your capital gains for FY 2024-25 in the left card</li>
                <li>Check boxes for assets you plan on selling to reduce your tax liability</li>
                <li>Instantly see your updated tax liability in the right card</li>
              </ul>
              <div className="text-[10px] border-t border-gray-100 pt-3 text-gray-500 leading-normal">
                <span className="font-bold text-gray-800">Pro tip:</span> Experiment with different combinations of your holdings to optimize your tax liability
              </div>
            </div>
          </div>
        )}

        {/* Disclaimer Bar */}
        <div className="bg-[#112244] border border-blue-900/50 rounded-lg mb-8">
          <button 
            onClick={() => setIsDisclaimerExpanded(!isDisclaimerExpanded)}
            className="w-full flex items-center justify-between p-3 px-6 hover:bg-blue-900/20 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 flex items-center justify-center rounded-full border border-blue-400 text-blue-400 text-[10px] font-bold">i</div>
              <span className="text-sm font-medium text-white">Important Notes And Disclaimers</span>
            </div>
            <span className={`text-[#6B7280] text-xs transition-transform duration-300 ${isDisclaimerExpanded ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          
          {isDisclaimerExpanded && (
            <div className="px-6 pb-6 pt-2 space-y-4 text-sm text-gray-400 leading-relaxed border-t border-blue-900/20">
               <p>• <span className="text-gray-200 font-bold">Price Source:</span> Current prices may vary by exchange. We use CoinGecko as our global price oracle.</p>
               <p>• <span className="text-gray-200 font-bold">Jurisdictions:</span> Tax loss harvesting rules differ by country. Always check local laws.</p>
               <p>• <span className="text-gray-200 font-bold">Loss Utilization:</span> Utility is limited to offsetting gains. Zero-gain portfolios may not benefit.</p>
            </div>
          )}
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <PreHarvestCard />
          <PostHarvestCard />
        </div>

        {/* Table Container */}
        <HoldingsTable holdings={holdings} />

      </div>
    </div>
  );
}