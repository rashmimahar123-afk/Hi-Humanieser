import Image from "next/image";
import images from "@/src/assets/images";

function AmplifierForthDescription() {
  return (
    <div className="relative  overflow-hidden">
      {/* Right background lightning illustration */}
      <Image
        src={images.amplifierForthImg}
        alt=""
        className="absolute right-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none"
        height={10}
        width={120}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[900px]">
        {/* Bullet Points */}
        <ul className="list-disc pl-[18px] space-y-[10px] text-[#0F4A4E] text-[16px] leading-[1.6] max-w-[820px]">
          <li>Waiting until things are already off track</li>
          <li>Framing help as incompetence</li>
          <li>Asking vaguely instead of naming what’s unclear or heavy</li>
        </ul>
      </div>
    </div>
  );
}

export default AmplifierForthDescription;
