import Image from "next/image";
import images from "@/src/assets/images";

function AmplifierSixDescription() {
  return (
    <div className="relative rounded-[28px] px-[48px] overflow-hidden">
      {/* Top-right dotted arrow */}
      <Image
        src={images.conversationImg}
        alt=""
        className="absolute right-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none"
      />

      {/* Item 1 */}
      <div className="flex gap-[16px] max-w-[820px]">
        {/* Description */}
        <p className="text-[#0F4A4E] text-[16px] leading-[1.6] max-w-[760px] mb-[18px]">
          Amplifier behaviours take perspective beyond individual reflection and
          turn it into a visible leadership practice. They help make multiple
          viewpoints legitimate, broaden how decisions are made and strengthen
          collective performance across the system.
        </p>
      </div>

      {/* Divider */}
      {/* <Image
        src={images.waveDivider}
        alt=""
        className="my-[36px] pointer-events-none"
      /> */}

      {/* Item 2 */}

      {/* Divider */}
      {/* <Image
        src={images.waveDivider}
        alt=""
        className="my-[36px] pointer-events-none"
      /> */}

      {/* Item 3 */}
      <ul className="list-disc pl-[18px] space-y-[10px] text-[#0F4A4E] text-[16px] leading-[1.6] max-w-[820px]">
        <li>
          “I might not have this perfectly right, but here’s what I’m thinking…”
        </li>
        <li>
          “I realise I may have rushed my point — here’s the honest version”
        </li>
        <li>
          “I’m open to rethinking this if it didn’t land quite how I meant it”
        </li>
        <li>“This is where I am right now, and I’m still working it out”</li>
        <li>“If I’m missing something here, I’d genuinely like to know”</li>
      </ul>
    </div>
  );
}

export default AmplifierSixDescription;
