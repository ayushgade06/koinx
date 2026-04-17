import { useState, useMemo } from "react";
import { useHarvest } from "../../context/HarvestContext";
import type { Holding } from "../../types";
import HoldingRow from "./HoldingRow";

type SortKey = "coin" | "stcg" | "ltcg" | null;

export default function HoldingsTable({ holdings }: { holdings: Holding[] }) {
  const { selected, setSelected } = useHarvest();
  const [sortKey, setSortKey] = useState<SortKey>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const sortedHoldings = useMemo(() => {
    if (!sortKey) return holdings;
    return [...holdings].sort((a, b) => {
      let valA: any, valB: any;
      
      if (sortKey === "coin") {
        valA = a.coin;
        valB = b.coin;
        return sortOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
      } else {
        valA = a[sortKey].gain;
        valB = b[sortKey].gain;
        return sortOrder === "asc" ? valA - valB : valB - valA;
      }
    });
  }, [holdings, sortKey, sortOrder]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("desc");
    }
  };

  const SortIcon = ({ active, order }: { active: boolean; order: "asc" | "desc" }) => (
    <span className={`inline-flex flex-col ml-1.5 align-middle ${active ? 'opacity-100' : 'opacity-20 group-hover:opacity-50'}`}>
      <span className={`text-[8px] leading-[1] ${active && order === 'asc' ? 'text-blue-400' : ''}`}>▲</span>
      <span className={`text-[8px] leading-[1] mt-0.5 ${active && order === 'desc' ? 'text-blue-400' : ''}`}>▼</span>
    </span>
  );

  const allSelected = holdings.length > 0 && holdings.length === selected.length;

  const toggleAll = () => {
    if (allSelected) {
      setSelected([]);
    } else {
      setSelected(holdings);
    }
  };

  const [showAll, setShowAll] = useState(false);
  const initialCount = 8;
  const displayHoldings = showAll ? sortedHoldings : sortedHoldings.slice(0, initialCount);

  return (
    <div className="bg-[#10141E] rounded-xl border border-gray-800 overflow-hidden shadow-lg mb-8">
      <div className="p-6 border-b border-gray-800">
        <h2 className="text-xl font-bold text-white">Holdings</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="text-gray-400 bg-[#161D2B]">
            <tr className="border-b border-gray-800">
              <th className="p-5 w-16 text-center">
                <input 
                  type="checkbox" 
                  checked={allSelected} 
                  onChange={toggleAll}
                  className="w-4 h-4 rounded border-gray-700 bg-gray-900 text-blue-500 focus:ring-blue-500 transition-all cursor-pointer"
                />
              </th>
              <th 
                className="p-5 font-bold text-xs uppercase tracking-wider cursor-pointer hover:text-white transition-colors group"
                onClick={() => toggleSort("coin")}
              >
                Asset <SortIcon active={sortKey === "coin"} order={sortOrder} />
              </th>
              <th className="p-5 font-bold text-xs uppercase tracking-wider">
                Holdings
                <div className="text-[10px] text-gray-500 font-normal mt-1">Avg Buy Price</div>
              </th>
              <th className="p-5 font-bold text-xs uppercase tracking-wider">Current Price</th>
              <th 
                className="p-5 font-bold text-xs uppercase tracking-wider cursor-pointer hover:text-white transition-colors group"
                onClick={() => toggleSort("stcg")}
              >
                Short-Term <SortIcon active={sortKey === "stcg"} order={sortOrder} />
              </th>
              <th 
                className="p-5 font-bold text-xs uppercase tracking-wider cursor-pointer hover:text-white transition-colors group"
                onClick={() => toggleSort("ltcg")}
              >
                Long-Term <SortIcon active={sortKey === "ltcg"} order={sortOrder} />
              </th>
              <th className="p-5 font-bold text-xs uppercase tracking-wider text-right">Amount to Sell</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-800">
            {displayHoldings.map((holding) => (
              <HoldingRow key={`${holding.coinName}-${holding.coin}`} data={holding} />
            ))}
          </tbody>
        </table>
      </div>

      {holdings.length > initialCount && (
        <div className="p-4 border-t border-gray-800 flex justify-center bg-[#10141E]">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 py-2 px-6 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold uppercase tracking-wider transition-all"
          >
            <span>{showAll ? 'Show Less' : `View All ${holdings.length} Assets`}</span>
            <span className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
        </div>
      )}
    </div>
  );
}