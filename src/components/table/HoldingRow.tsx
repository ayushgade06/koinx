import type { Holding } from "../../types";
import { useHarvest } from "../../context/HarvestContext";
import { formatCurrency } from "../../utils/formatters";

export default function HoldingRow({ data }: { data: Holding }) {
  const { selected, setSelected } = useHarvest();

  const isSelected = selected.some((s) => s.coin === data.coin);

  const toggle = () => {
    if (isSelected) {
      setSelected(selected.filter((s) => s.coin !== data.coin));
    } else {
      setSelected([...selected, data]);
    }
  };

  const formatPrice = (p: number) => {
    if (p >= 1000) return `$${(p / 1000).toFixed(2)}K`;
    return formatCurrency(p);
  };

  const formatLarge = (v: number) => {
    const absV = Math.abs(v);
    let formatted = "";
    if (absV >= 1000000) formatted = `$${(absV / 1000000).toFixed(2)}M`;
    else if (absV >= 1000) formatted = `$${(absV / 1000).toFixed(2)}K`;
    else formatted = formatCurrency(absV);
    
    return v < 0 ? `-${formatted}` : formatted;
  };

  return (
    <tr 
      className={`border-b border-gray-100 dark:border-gray-800/50 transition-colors duration-200 
      ${isSelected ? 'bg-blue-50 dark:bg-blue-600/5' : 'hover:bg-gray-50 dark:hover:bg-white/5'}`}
    >
      <td className="p-4 text-center">
        <input 
          type="checkbox" 
          checked={isSelected} 
          onChange={toggle}
          className="w-4 h-4 rounded border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-blue-500 focus:ring-blue-500 cursor-pointer"
        />
      </td>
      
      <td className="p-4">
        <div className="flex items-center gap-3">
          <img src={data.logo} alt={data.coin} className="w-6 h-6 rounded-full" />
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900 dark:text-white whitespace-nowrap">{data.coinName}</span>
            <span className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-bold tracking-wider">{data.coin}</span>
          </div>
        </div>
      </td>

      <td className="p-4">
        <div className="flex flex-col text-gray-700 dark:text-white font-medium">
          <span className="text-sm">{data.totalHolding.toLocaleString()} {data.coin}</span>
          <span className="text-[10px] text-gray-400 dark:text-gray-500 font-normal mt-0.5 whitespace-nowrap">
            {formatCurrency(data.averageBuyPrice)}/{data.coin}
          </span>
        </div>
      </td>
      
      <td className="p-4">
        <div className="relative inline-block group">
          <div className="text-gray-900 dark:text-white font-bold text-sm whitespace-nowrap">
            {formatPrice(data.currentPrice)}
          </div>
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-50 pointer-events-none">
            <div className="bg-white text-gray-900 text-[11px] font-bold py-1.5 px-3 rounded-lg shadow-xl border border-gray-100 whitespace-nowrap">
              {formatCurrency(data.currentPrice)}
            </div>
            {/* Arrow */}
            <div className="w-2 h-2 bg-white rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2 border-b border-r border-gray-100"></div>
          </div>
        </div>
      </td>

      <td className="p-4">
        <div className="relative inline-block group">
          <div className="flex flex-col items-start font-medium">
            <span className={`text-sm ${data.stcg.gain >= 0 ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'}`}>
              {formatLarge(data.stcg.gain)}
            </span>
            <span className="text-[10px] text-gray-400 dark:text-gray-500 font-normal mt-0.5">{data.stcg.balance.toLocaleString()} {data.coin}</span>
          </div>
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-50 pointer-events-none">
            <div className="bg-white text-gray-900 text-[11px] font-bold py-1.5 px-3 rounded-lg shadow-xl border border-gray-100 whitespace-nowrap">
              {formatCurrency(data.stcg.gain)}
            </div>
            <div className="w-2 h-2 bg-white rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2 border-b border-r border-gray-100"></div>
          </div>
        </div>
      </td>
      
      <td className="p-4">
        <div className="relative inline-block group">
          <div className="flex flex-col items-start font-medium">
            <span className={`text-sm ${data.ltcg.gain >= 0 ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'}`}>
               {data.ltcg.gain === 0 ? '$0.00' : formatLarge(data.ltcg.gain)}
            </span>
            <span className="text-[10px] text-gray-400 dark:text-gray-500 font-normal mt-0.5">{data.ltcg.balance.toLocaleString()} {data.coin}</span>
          </div>
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-50 pointer-events-none">
            <div className="bg-white text-gray-900 text-[11px] font-bold py-1.5 px-3 rounded-lg shadow-xl border border-gray-100 whitespace-nowrap">
              {formatCurrency(data.ltcg.gain)}
            </div>
            <div className="w-2 h-2 bg-white rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2 border-b border-r border-gray-100"></div>
          </div>
        </div>
      </td>

      <td className="p-4 text-right text-gray-400 dark:text-gray-500 font-medium">
        {isSelected ? (
          <span className="text-gray-900 dark:text-white">
            {data.totalHolding.toLocaleString()} {data.coin}
          </span>
        ) : (
          "-"
        )}
      </td>
    </tr>
  );
}