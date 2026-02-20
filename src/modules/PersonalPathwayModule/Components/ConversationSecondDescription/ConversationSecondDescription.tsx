import Image from "next/image";
import images from "@/src/assets/images";

function ConversationSecondDescription() {
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
            Say What You Can Do{" "}
          </h3>
          <p className="text-[#0F4A4E] text-[16px] leading-[1.6]">
            This ritual is about being honest with your capacity. Instead of
            saying yes automatically, people name what they can realistically do
            — and what they can’t. Over time, this builds trust because
            commitments become more reliable, and people stop guessing whether
            things will actually happen.
          </p>
          <div className="font-bold mt-2">Try Saying</div>
          <div>“What I can commit to is…”</div>
          “I can’t do all of that, but I can do this part”
        </div>
      </div>

      {/* Divider */}
      <Image
        src={images.waveImg}
        alt=""
        className="my-[36px] pointer-events-none"
      />

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
            Name the Boundary
          </h3>
          <p className="text-[#0F4A4E] text-[16px] leading-[1.6]">
            This ritual makes it normal to say where the line is — on time,
            scope, energy, or responsibility. Instead of pushing through quietly
            or getting frustrated later, boundaries are named early and clearly.
            Trust grows when people don’t have to read minds or absorb pressure
            in silence.
          </p>
          <div className="font-bold mt-2">Try Saying</div>
          <div>“I need to name a boundaries...”</div>
          “That’s outside my scope / time right now”{" "}
        </div>
      </div>

      {/* Divider */}
      <Image
        src={images.waveImg}
        alt=""
        className="my-[36px] pointer-events-none"
      />

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
            Own the Miss{" "}
          </h3>
          <p className="text-[#0F4A4E] text-[16px] leading-[1.6]">
            This ritual builds trust by making it safe to admit when something
            didn’t land or didn’t happen. The focus isn’t on excuses — it’s on
            naming the miss and its impact. Teams that can do this openly
            recover faster and stop small issues from turning into lasting
            tension.
          </p>
          <div className="font-bold mt-2">Try Saying</div>
          <div>“I missed this — and I can see the impact”</div>
          “That didn’t land how I intended”
        </div>
      </div>

      {/* Divider */}
      <Image
        src={images.waveImg}
        alt=""
        className="my-[36px] pointer-events-none"
      />

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
            Check the Story
          </h3>
          <p className="text-[#0F4A4E] text-[16px] leading-[1.6]">
            This ritual helps teams slow down when frustration kicks in. Instead
            of jumping to conclusions, people pause to check the story they’re
            telling themselves. It doesn’t mean ignoring problems — it means
            approaching them with a bit more generosity and curiosity first.
          </p>
          <div className="font-bold mt-2">Try Saying</div>
          <div>“What story am I telling myself here?”</div>
          “What else could be going on?”
        </div>
      </div>

      {/* Divider */}
      <Image
        src={images.waveImg}
        alt=""
        className="my-[36px] pointer-events-none"
      />

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
            Ask for Help Early
          </h3>
          <p className="text-[#0F4A4E] text-[16px] leading-[1.6]">
            This ritual treats asking for help as part of doing good work — not
            a sign of weakness. People are encouraged to name uncertainty or
            overload before things go off track. Trust grows when support is
            normalised and no one has to struggle quietly.
          </p>
          <div className="font-bold mt-2">Try Saying</div>
          <div>“I might need help with this sooner rather than later”</div>
          “This bit feels unclear — can we talk it through?”
        </div>
      </div>
    </div>
  );
}

export default ConversationSecondDescription;
