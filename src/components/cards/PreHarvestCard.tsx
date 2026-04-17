import { useHarvest } from "../../context/HarvestContext";
import { formatCurrency } from "../../utils/formatters";
import { getNet } from "../../utils/calculations";

export default function PreHarvestCard() {
  const { baseGains } = useHarvest();

  if (!baseGains) return <div className="bg-[#10141E] rounded-xl h-[340px] animate-pulse"></div>;

  const stNet = getNet(baseGains.stcg.profits, baseGains.stcg.losses);
  const ltNet = getNet(baseGains.ltcg.profits, baseGains.ltcg.losses);
  const totalNet = stNet + ltNet;

  const Row = ({ label, st, lt, isBold, isTotal }: { label: string; st: number; lt: number; isBold?: boolean; isTotal?: boolean }) => (
    <div className={`grid grid-cols-[1fr_repeat(2,120px)] py-4 ${isBold ? 'font-bold text-white' : 'text-[#94A3B8]'} ${isTotal ? 'mt-4' : ''}`}>
      <div className="text-left text-sm font-medium">{label}</div>
      <div className="text-right text-sm">{formatCurrency(st)}</div>
      <div className="text-right text-sm">{formatCurrency(lt)}</div>
    </div>
  );

  return (
    <div className="bg-[#10141E] border border-gray-800 rounded-xl p-8 h-full flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold text-white mb-8">Pre Harvesting</h2>

        <div className="grid grid-cols-[1fr_repeat(2,120px)] text-sm text-[#475569] font-medium mb-4">
          <div></div>
          <div className="text-right">Short-term</div>
          <div className="text-right">Long-term</div>
        </div>

        <div className="divide-y divide-gray-800/10">
          <Row label="Profits" st={baseGains.stcg.profits} lt={baseGains.ltcg.profits} />
          <Row label="Losses" st={baseGains.stcg.losses} lt={baseGains.ltcg.losses} />
          <Row label="Net Capital Gains" st={stNet} lt={ltNet} isBold isTotal />
        </div>
      </div>

      <div className="mt-10 flex items-center gap-4">
        <span className="text-lg font-bold text-white">Realised Capital Gains:</span>
        <span className="text-2xl font-bold text-white">
          {formatCurrency(totalNet)}
        </span>
      </div>
    </div>
  );
}