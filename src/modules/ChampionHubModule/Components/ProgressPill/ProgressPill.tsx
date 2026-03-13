import { useEffect, useState } from "react";

function ProgressPill({ label, percent }: { label: string; percent: number }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percent);
    }, 200); // thoda delay taaki animation visible ho

    return () => clearTimeout(timer);
  }, [percent]);

  return (
    <div className="w-full">
      <div className="relative w-full h-[58px] bg-[#CBBDA6] rounded-full overflow-hidden">
        {/* BLUE FILL */}
        <div
          className="absolute left-0 top-0 h-full bg-[#79B7B6] rounded-full transition-all duration-[1200ms] ease-out"
          style={{ width: `${width}%` }}
        />

        {/* TEXT */}
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
