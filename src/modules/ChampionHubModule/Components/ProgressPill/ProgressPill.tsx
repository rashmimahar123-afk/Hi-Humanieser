import { useEffect, useState } from "react";

function ProgressPill({ label, percent }: { label: string; percent: number }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percent);
    }, 200);

    return () => clearTimeout(timer);
  }, [percent]);

  return (
    <div className="w-full">
      <div className="relative h-[58px] w-full overflow-hidden rounded-full bg-[#F5C882]">
        {/* Fill */}
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-[#79B7B6] transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />

        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[#0F4F58] text-[20px] md:text-[22px] font-bold font-[Roboto] text-center whitespace-nowrap">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProgressPill;
