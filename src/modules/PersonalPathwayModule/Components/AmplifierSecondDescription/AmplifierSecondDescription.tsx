import Image from "next/image";
import images from "@/src/assets/images";

function AmplifierSecondDescription() {
  return (
    <div className="relative space-y-5 overflow-hidden">
      {/* Description */}
      <p className="text-[#0F4A4E] text-[16px] leading-[1.6] max-w-[760px] mb-[18px]">
        Core Behaviours turn this pathway into consistent practice – clear,
        simple habits that improve trust, reduce friction, and support better
        results.
      </p>

      {/* Bullet Points */}
      <ul className="list-disc pl-[18px] space-y-[6px] text-[#0F4A4E] text-[16px] leading-[1.6] max-w-[820px]">
        <li>
          Pause your first interpretation and zoom out before forming a
          judgement.
        </li>
        <li>
          Explore how different roles and pressures shape how others experience
          the same situation.
        </li>
        <li>
          Look beyond the individual to the wider context and system shaping
          behaviour.
        </li>
      </ul>
    </div>
  );
}
export default AmplifierSecondDescription;
