import { useHarvest } from "../../context/HarvestContext";
import { calculateAfterHarvest, getNet, getTotal } from "../../utils/calculations";
import { formatCurrency } from "../../utils/formatters";

export default function PostHarvestCard() {
  const { selected, baseGains } = useHarvest();

  if (!baseGains) return <div className="bg-[#1D69FF] rounded-xl h-[340px] animate-pulse"></div>;

  const updated = calculateAfterHarvest(baseGains, selected);
  const stNet = getNet(updated.stcg.profits, updated.stcg.losses);
  const ltNet = getNet(updated.ltcg.profits, updated.ltcg.losses);
  const totalNet = stNet + ltNet;

  const baseTotal = getTotal(baseGains);
  const savingsValue = baseTotal - totalNet;

  const Row = ({ label, st, lt, isBold, isTotal }: { label: string; st: number; lt: number; isBold?: boolean; isTotal?: boolean }) => (
    <div className={`grid grid-cols-[1fr_repeat(2,120px)] py-3 ${isBold ? 'font-bold text-white' : 'text-blue-100'} ${isTotal ? 'mt-6 border-t border-blue-400/30 pt-6' : ''}`}>
      <div className="text-left text-sm">{label}</div>
      <div className="text-right text-sm">{formatCurrency(st)}</div>
      <div className="text-right text-sm">{formatCurrency(lt)}</div>
    </div>
  );

  return (
    <div className="bg-[#1D69FF] rounded-xl p-10 h-full flex flex-col justify-between text-white shadow-xl">
      <div>
        <h2 className="text-2xl font-bold mb-10">After Harvesting</h2>

        <div className="grid grid-cols-[1fr_repeat(2,120px)] text-sm text-blue-100/70 mb-6">
          <div></div>
          <div className="text-right">Short-term</div>
          <div className="text-right">Long-term</div>
        </div>

        <div className="divide-y divide-blue-400/10">
          <Row label="Profits" st={updated.stcg.profits} lt={updated.ltcg.profits} />
          <Row label="Losses" st={updated.stcg.losses} lt={updated.ltcg.losses} />
          <Row label="Net Capital Gains" st={stNet} lt={ltNet} isBold isTotal />
        </div>
      </div>

      <div>
        <div className="mt-12 flex items-center gap-6">
          <span className="text-2xl font-bold text-white leading-tight">Effective Capital Gains:</span>
          <span className="text-3xl font-black text-white leading-none">
            {formatCurrency(totalNet)}
          </span>
        </div>

        {savingsValue > 0 && (
          <div className="mt-6 pt-6 border-t border-white/20">
            <div className="flex items-center gap-2 text-blue-100 font-medium">
              <span className="text-lg">🎉</span>
              <span className="text-sm">You’re going to save</span>
              <span className="text-white text-base font-bold bg-white/10 px-2 py-0.5 rounded">
                {formatCurrency(savingsValue)}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}