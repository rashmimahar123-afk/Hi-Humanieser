function VerticalProgressBar({
  trackHeight,
  total,
  answered,
}: {
  trackHeight: number;
  total: number; // 24
  answered: number; // 0 → 8 (pillar-1)
}) {
  const fillHeight = (answered / total) * trackHeight;

  const segment1 = (8 / 24) * trackHeight;
  const segment2 = (16 / 24) * trackHeight;

  return (
    <div className="relative w-[57px]" style={{ height: trackHeight }}>
      {/* TRACK */}
      <div className="absolute inset-0 bg-[#CFCFCF] rounded-[77px]" />

      {/* FILL (TOP → DOWN) */}
      <div
        className="absolute top-0 w-full bg-[#4BA6A6] rounded-[77px]
                   transition-all duration-500"
        style={{ height: fillHeight }}
      />

      {/* DIVIDERS */}
      <div
        className="absolute left-0 w-full h-[2px] bg-white/70"
        style={{ top: segment1 }}
      />
      <div
        className="absolute left-0 w-full h-[2px] bg-white/70"
        style={{ top: segment2 }}
      />

      {/* STATIC LABELS */}
      <span className="absolute right-[-45px] top-[33%] text-[12px] text-[#737373]">
        8/24
      </span>
      <span className="absolute right-[-45px] top-[66%] text-[12px] text-[#737373]">
        16/24
      </span>
      <span className="absolute right-[-45px] bottom-0 text-[12px] text-[#737373]">
        24/24
      </span>

      {/* 🔥 LIVE FLOATING LABEL */}
      {answered > 0 && answered % 8 !== 0 && (
        <div
          className="absolute right-[-45px] top-[33%] text-[12px] text-[#737373]"
          style={{
            top: Math.min(fillHeight - 10, trackHeight - 20),
          }}
        >
          {answered}/{total}
        </div>
      )}
    </div>
  );
}

export default VerticalProgressBar;
