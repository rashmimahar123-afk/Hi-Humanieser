function ProgressPill({ label, percent }: { label: string; percent: number }) {
  return (
    <div className="w-full">
      <div className="relative w-full h-[58px] bg-[#CBBDA6] rounded-full overflow-hidden">
        {/* BLUE FILL (background only) */}
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
    </div>
  );
}
export default ProgressPill;
