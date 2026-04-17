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
    if (p >= 100000) return `₹${(p / 100000).toFixed(2)}L`;
    return formatCurrency(p);
  };

  const formatLarge = (v: number) => {
    const prefix = v >= 0 ? '+' : '-';
    const absV = Math.abs(v);
    if (absV >= 10000000) return `${prefix}₹${(absV / 10000000).toFixed(2)}Cr`;
    if (absV >= 100000) return `${prefix}₹${(absV / 100000).toFixed(2)}L`;
    return `${prefix}${formatCurrency(absV)}`;
  };

  return (
    <tr 
      className={`border-b border-gray-800/50 transition-colors duration-200 
      ${isSelected ? 'bg-blue-600/5' : 'hover:bg-white/5'}`}
    >
      <td className="p-4 text-center">
        <input 
          type="checkbox" 
          checked={isSelected} 
          onChange={toggle}
          className="w-4 h-4 rounded border-gray-700 bg-gray-900 text-blue-500 focus:ring-blue-500"
        />
      </td>
      
      <td className="p-4">
        <div className="flex items-center gap-3">
          <img src={data.logo} alt={data.coin} className="w-6 h-6 rounded-full" />
          <div className="flex flex-col">
            <span className="font-semibold text-white whitespace-nowrap">{data.coinName}</span>
            <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">{data.coin}</span>
          </div>
        </div>
      </td>

      <td className="p-4">
        <div className="flex flex-col text-white font-medium">
          <span className="text-sm">{data.totalHolding.toLocaleString()} {data.coin}</span>
          <span className="text-[10px] text-gray-500 font-normal mt-0.5">{formatCurrency(data.averageBuyPrice)}/{data.coin}</span>
        </div>
      </td>
      
      <td className="p-4 text-white font-bold text-sm">
        {formatPrice(data.currentPrice)}
      </td>

      <td className="p-4">
        <div className="flex flex-col items-start font-medium">
          <span className={`text-sm ${data.stcg.gain >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {formatLarge(data.stcg.gain)}
          </span>
          <span className="text-[10px] text-gray-500 font-normal mt-0.5">{data.stcg.balance.toLocaleString()} {data.coin}</span>
        </div>
      </td>
      
      <td className="p-4">
        <div className="flex flex-col items-start font-medium">
          <span className={`text-sm ${data.ltcg.gain >= 0 ? 'text-green-500' : 'text-red-500'}`}>
             {data.ltcg.gain === 0 ? '₹0.00' : formatLarge(data.ltcg.gain)}
          </span>
          <span className="text-[10px] text-gray-500 font-normal mt-0.5">{data.ltcg.balance.toLocaleString()} {data.coin}</span>
        </div>
      </td>

      <td className="p-4 text-right text-gray-500 font-medium">
        {isSelected ? (
          <span className="text-white">
            {data.totalHolding.toLocaleString()} {data.coin}
          </span>
        ) : (
          "-"
        )}
      </td>
    </tr>
  );
}