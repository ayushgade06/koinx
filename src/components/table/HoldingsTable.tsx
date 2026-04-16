import { useHarvest } from "../../context/HarvestContext";
import type { Holding } from "../../types";
import HoldingRow from "./HoldingRow";

export default function HoldingsTable({ holdings }: { holdings: Holding[] }) {
  const { selected, setSelected } = useHarvest();

  const allSelected = holdings.length > 0 && holdings.length === selected.length;

  const toggleAll = () => {
    if (allSelected) {
      setSelected([]);
    } else {
      setSelected(holdings);
    }
  };

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden shadow-sm">
      
      <div className="p-5 border-b border-gray-800 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-white">Holdings</h2>
        <button className="text-sm text-blue-400 font-medium hover:text-blue-300 transition-colors">
          View All Assets
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-gray-400 bg-[#0F172A]">
            <tr>
              <th className="p-4 w-12">
                <input 
                  type="checkbox" 
                  checked={allSelected} 
                  onChange={toggleAll}
                  className="w-4 h-4 rounded border-gray-600 bg-gray-800 text-blue-500 focus:ring-blue-500"
                />
              </th>
              <th className="p-4 font-medium uppercase tracking-wider text-xs">Asset</th>
              <th className="p-4 font-medium uppercase tracking-wider text-xs">Holdings</th>
              <th className="p-4 font-medium uppercase tracking-wider text-xs">Avg. Buy Price</th>
              <th className="p-4 font-medium uppercase tracking-wider text-xs">Short-term</th>
              <th className="p-4 font-medium uppercase tracking-wider text-xs text-right">Long-term</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-800">
            {holdings.map((holding) => (
              <HoldingRow key={holding.coin} data={holding} />
            ))}
            {holdings.length === 0 && (
              <tr>
                <td colSpan={6} className="p-20 text-center text-gray-500">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 border-2 border-gray-700 border-t-blue-500 rounded-full animate-spin"></div>
                    <p>Fetching your holdings...</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}