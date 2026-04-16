import type { Holding } from "../../types";
import { useHarvest } from "../../context/HarvestContext";

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

  return (
    <tr 
      className={`border-b border-gray-800 transition-colors duration-200 
      ${isSelected ? 'bg-blue-600/10' : 'hover:bg-[#1A2233]'}`}
    >
      <td className="p-4">
        <input 
          type="checkbox" 
          checked={isSelected} 
          onChange={toggle}
          className="w-4 h-4 rounded border-gray-600 bg-gray-800 text-blue-500 focus:ring-blue-500"
        />
      </td>
      
      <td className="p-4 flex items-center gap-3">
        <img src={data.logo} alt={data.coinName} className="w-8 h-8 rounded-full bg-gray-800" />
        <div>
          <p className="font-semibold text-white">{data.coin}</p>
          <p className="text-xs text-gray-400">{data.coinName}</p>
        </div>
      </td>

      <td className="p-4 text-white font-medium">
        {data.totalHolding.toFixed(4)} {data.coin}
      </td>
      
      <td className="p-4 text-gray-300">
        ₹{data.currentPrice.toLocaleString('en-IN')}
      </td>

      <td className={`p-4 font-medium ${data.stcg.gain >= 0 ? 'text-green-400' : 'text-red-400'}`}>
        {data.stcg.gain >= 0 ? '+' : ''}₹{data.stcg.gain.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
      </td>
      
      <td className={`p-4 font-medium text-right ${data.ltcg.gain >= 0 ? 'text-green-400' : 'text-red-400'}`}>
        {data.ltcg.gain >= 0 ? '+' : ''}₹{data.ltcg.gain.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
      </td>
    </tr>
  );
}