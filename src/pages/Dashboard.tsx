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

  useEffect(() => {
    fetchHoldings().then(setHoldings);
    fetchCapitalGains().then(setBaseGains);
  }, []);

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
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white text-gray-800 rounded-2xl w-[400px] p-8 shadow-2xl relative">
              <button 
                onClick={() => setShowHowItWorks(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
              <ul className="space-y-4 text-sm leading-relaxed mb-6">
                <li className="flex gap-2">
                  <span className="text-gray-400">•</span>
                  <span>See your capital gains for FY 2024-25 in the left card</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Check boxes for assets you plan on selling to reduce your tax liability</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Instantly see your updated tax liability in the right card</span>
                </li>
              </ul>
              <div className="text-xs border-t pt-4 text-gray-600">
                <span className="font-bold">Pro tip:</span> Experiment with different combinations of your holdings to optimize your tax liability
              </div>
            </div>
          </div>
        )}

        {/* Disclaimer Bar */}
        <div className="bg-[#112244] border border-blue-900/50 rounded-lg mb-8">
          <button 
            onClick={() => setIsDisclaimerExpanded(!isDisclaimerExpanded)}
            className="w-full flex items-center justify-between p-4 px-6 hover:bg-blue-900/20 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 flex items-center justify-center rounded-full border border-blue-400 text-blue-400 text-xs font-bold font-serif">i</div>
              <span className="text-sm font-medium">Important Notes And Disclaimers</span>
            </div>
            <span className={`transition-transform duration-300 ${isDisclaimerExpanded ? 'rotate-180' : ''}`}>
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
        <div className="bg-[#111827] rounded-xl border border-gray-800 overflow-hidden shadow-lg">
          <div className="p-6 border-b border-gray-800">
            <h2 className="text-xl font-bold">Holdings</h2>
          </div>
          <HoldingsTable holdings={holdings} />
        </div>

      </div>
    </div>
  );
}