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
    <div className={`grid grid-cols-[1fr_80px_80px] sm:grid-cols-[1fr_120px_120px] py-3 sm:py-4 ${isBold ? 'font-bold text-white' : 'text-blue-100'} ${isTotal ? 'mt-4' : ''}`}>
      <div className="text-left text-xs sm:text-sm font-medium">{label}</div>
      <div className="text-right text-xs sm:text-sm">{formatCurrency(st)}</div>
      <div className="text-right text-xs sm:text-sm">{formatCurrency(lt)}</div>
    </div>
  );

  return (
    <div className="bg-[#1D69FF] rounded-xl p-6 sm:p-8 h-full flex flex-col justify-between text-white shadow-xl transition-all duration-300">
      <div>
        <h2 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8">After Harvesting</h2>

        <div className="grid grid-cols-[1fr_80px_80px] sm:grid-cols-[1fr_120px_120px] text-[10px] sm:text-sm text-blue-100/70 font-medium mb-4">
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
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-t border-blue-400/20 pt-6 sm:border-none sm:pt-0">
          <span className="text-base sm:text-lg font-bold text-white leading-tight">Effective Capital Gains:</span>
          <span className="text-xl sm:text-2xl font-bold text-white">
            {formatCurrency(totalNet)}
          </span>
        </div>

        {savingsValue > 0 && (
          <div className="mt-6 pt-6 border-t border-white/20">
            <div className="flex items-center flex-wrap gap-2 text-blue-100 font-medium">
              <span className="text-lg">🎉</span>
              <span className="text-sm">You’re going to save</span>
              <span className="text-white text-sm sm:text-base font-bold bg-white/10 px-2 py-0.5 rounded">
                {formatCurrency(savingsValue)}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}