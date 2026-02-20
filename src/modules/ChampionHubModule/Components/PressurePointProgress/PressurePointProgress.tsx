function PressurePointProgress({
  label,
  percent,
}: {
  label: string;
  percent: number;
}) {
  return (
    <div className="bg-[#d9cbb7] rounded-full h-[56px] relative overflow-hidden">
      <div
        className="absolute left-0 top-0 h-full bg-[#79B7B6] rounded-full transition-all duration-500"
        style={{ width: `${percent}%` }}
      />

      {/* TEXT (independent layer, full width centered) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[#0F4F58] font-bold text-[21px] font-[Roboto]">
          {label}
        </span>
      </div>
    </div>
  );
}
export default PressurePointProgress;
