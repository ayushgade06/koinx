import { useHarvest } from "../../context/HarvestContext";
import { getNet, getTotal } from "../../utils/calculations";

export default function PreHarvestCard() {
  const { baseGains } = useHarvest();

  if (!baseGains) {
    return (
      <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 animate-pulse">
        <div className="h-6 w-32 bg-gray-800 rounded mb-4"></div>
        <div className="grid grid-cols-2 gap-6">
          <div className="h-12 bg-gray-800 rounded"></div>
          <div className="h-12 bg-gray-800 rounded"></div>
        </div>
      </div>
    );
  }

  const st = getNet(baseGains.stcg.profits, baseGains.stcg.losses);
  const lt = getNet(baseGains.ltcg.profits, baseGains.ltcg.losses);
  const total = getTotal(baseGains);

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-white">Pre Harvesting</h2>

      <div className="grid grid-cols-2 gap-6 text-sm">
        <div>
          <p className="text-gray-400 mb-1">Short-term</p>
          <p className={`${st >= 0 ? 'text-green-400' : 'text-red-400'} font-medium`}>
            ₹{st.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </p>
        </div>

        <div>
          <p className="text-gray-400 mb-1">Long-term</p>
          <p className={`${lt >= 0 ? 'text-green-400' : 'text-red-400'} font-medium`}>
            ₹{lt.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </p>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-700 pt-4">
        <p className="text-gray-400 text-sm">Realised Gains</p>
        <p className="text-2xl font-bold text-white mt-1">
          ₹{total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
        </p>
      </div>
    </div>
  );
}