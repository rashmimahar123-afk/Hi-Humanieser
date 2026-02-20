import Image from "next/image";
import images from "@/src/assets/images";

function AmplifierFifthDescription() {
  return (
    <div className="relative rounded-[28px] px-[48px] overflow-hidden">
      {/* Top-right dotted arrow */}
      {/* <Image
        src={images.dotArrow}
        alt=""
        className="absolute top-[36px] right-[48px] pointer-events-none"
      /> */}

      {/* Item 1 */}
      <div className="flex gap-[16px] max-w-[820px]">
        <div className="w-[36px] h-[36px] rounded-full bg-[#7EC6C3] flex items-center justify-center shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 17L17 7M17 7H9M17 7V15"
              stroke="#0F4A4E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div>
          <h3 className="text-[#0F4A4E] text-[20px] font-bold mb-[4px]">
            The Zoom-Out Pause
          </h3>
          <p className="text-[#0F4A4E] text-[16px] leading-[1.6]">
            Sometimes being real starts with naming the moment. These prompts
            help you show honesty over certainty, reduce pressure, and make
            space for clearer, more human conversations — without needing to
            have all the answers.
          </p>
        </div>
      </div>

      {/* Divider */}
      {/* <Image
        src={images.waveDivider}
        alt=""
        className="my-[36px] pointer-events-none"
      /> */}

      {/* Item 2 */}
      <div className="flex gap-[16px] max-w-[820px]">
        <div className="w-[36px] h-[36px] rounded-full bg-[#7EC6C3] flex items-center justify-center shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 17L17 7M17 7H9M17 7V15"
              stroke="#0F4A4E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div>
          <h3 className="text-[#0F4A4E] text-[20px] font-bold mb-[4px]">
            From Label to Context
          </h3>
          <p className="text-[#0F4A4E] text-[16px] leading-[1.6]">
            When you catch yourself labelling someone (“difficult”, “careless”,
            “resistant”), rewrite it as a context-based explanation:
            <br />
            <em>
              What situation, pressure or uncertainty could be shaping this
              behaviour?
            </em>
          </p>
        </div>
      </div>

      {/* Divider */}
      {/* <Image
        src={images.waveDivider}
        alt=""
        className="my-[36px] pointer-events-none"
      /> */}

      {/* Item 3 */}
      <div className="flex gap-[16px] max-w-[820px]">
        <div className="w-[36px] h-[36px] rounded-full bg-[#7EC6C3] flex items-center justify-center shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 17L17 7M17 7H9M17 7V15"
              stroke="#0F4A4E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div>
          <h3 className="text-[#0F4A4E] text-[20px] font-bold mb-[4px]">
            The One-Question Shift
          </h3>
          <p className="text-[#0F4A4E] text-[16px] leading-[1.6]">
            In a moment of disagreement, ask:
            <br />
            <em>“Can you help me understand how this looks from your side?”</em>
            <br />
            Then listen without correcting or defending.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AmplifierFifthDescription;
