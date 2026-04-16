import { useHarvest } from "../../context/HarvestContext";
import { calculateAfterHarvest, getTotal } from "../../utils/calculations";

export default function PostHarvestCard() {
  const { selected, baseGains } = useHarvest();

  if (!baseGains) {
    return (
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white opacity-50 shadow-md">
        <h2 className="text-lg font-semibold mb-4">After Harvesting</h2>
        <p className="text-sm">Select holdings to see potential estimates...</p>
      </div>
    );
  }

  const updated = calculateAfterHarvest(baseGains, selected);

  const total = getTotal(updated);
  const baseTotal = getTotal(baseGains);

  const savingsValue = (baseTotal - total) * 0.3; // 30% tax slab example

  return (
    <div className="rounded-2xl p-6 text-white shadow-lg bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 relative overflow-hidden">
      <h2 className="text-lg font-semibold mb-4">After Harvesting</h2>

      <div className="grid grid-cols-2 gap-6 text-sm">
        <div>
          <p className="text-blue-100 mb-1">Short-term</p>
          <p className="font-medium">
            ₹{getTotal({ ...updated, ltcg: { profits: 0, losses: 0 } }).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </p>
        </div>

        <div>
          <p className="text-blue-100 mb-1">Long-term</p>
          <p className="font-medium">
            ₹{getTotal({ ...updated, stcg: { profits: 0, losses: 0 } }).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </p>
        </div>
      </div>

      <div className="mt-6 border-t border-blue-400/50 pt-4">
        <p className="text-blue-100 text-sm">Effective Capital Gains</p>
        <p className="text-2xl font-bold mt-1">
          ₹{total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
        </p>

        {savingsValue > 0 && (
          <div className="mt-4 bg-white/10 rounded-xl px-4 py-3 text-sm flex items-center gap-2 backdrop-blur-sm border border-white/5">
            <span className="text-lg">💰</span>
            <span className="font-medium">You save ₹{savingsValue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
          </div>
        )}
      </div>
    </div>
  );
}