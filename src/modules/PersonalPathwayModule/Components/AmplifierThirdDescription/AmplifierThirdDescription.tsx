import Image from "next/image";
import images from "@/src/assets/images";

function AmplifierThirdDescription() {
  return (
    <div className="relative  overflow-hidden">
      {/* Right background lightning illustration */}
      <Image
        src={images.amplifierSecondImg}
        alt=""
        className="absolute right-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[900px]">
        {/* Description */}
        <p className="text-[#0F4A4E] text-[16px] leading-[1.6] max-w-[760px] mb-[18px]">
          Amplifier behaviours take perspective beyond individual reflection and
          turn it into a visible leadership practice. They help make multiple
          viewpoints legitimate, broaden how decisions are made and strengthen
          collective performance across the system.
        </p>

        {/* Bullet Points */}
        <ul className="list-disc pl-[18px] space-y-[10px] text-[#0F4A4E] text-[16px] leading-[1.6] max-w-[820px]">
          <li>
            Deliberately invite perspectives that challenge the dominant view,
            especially from quieter voices or those closest to the work. Treat
            difference as valuable data, not disruption.
          </li>
          <li>
            Name the unseen pressures in the room — deadlines, risk, politics,
            capacity — so behaviour is understood in context, not judged in
            isolation.
          </li>
          <li>
            Model perspective-taking out loud by saying what you’re noticing:
            “From your role, I imagine this might feel…” This makes systems
            thinking visible and learnable for others.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AmplifierThirdDescription;
