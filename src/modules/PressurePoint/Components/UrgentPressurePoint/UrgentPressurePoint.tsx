"use client";
import Image from "next/image";
import images from "@/src/assets/images";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter } from "next/navigation";
import PressurePointSection from "../PressurePointSection/PressurePointSection";

function UrgentPressurePoint() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#E9E6E2] relative overflow-hidden">
      {/* RIGHT ABSTRACT SHAPES */}
      <div className="relative">
        <Image
          src={images.quizPolygon}
          alt="login-rectangle"
          width={630}
          height={630}
          className="absolute top-0 right-0 z-0"
        />
      </div>
      <div className="px-8 py-6 relative z-10">
        {/* TITLE */}
        <h1 className="text-[#0f4f58] text-[32px] leading-[50px] font-bold mb-6 font-[RocaTwo]">
          Pressure Point <br />
          Everything Feels Urgent
        </h1>

        {/* DESCRIPTION BOX */}
        <div className="bg-[#f8e1b8] text-[#0f4f58] text-[20px] leading-[28px] p-6 rounded-2xl max-w-3xl mb-16 font-[Roboto] ml-4">
          Your days are filled with escalations, last-minute decisions, and
          “quick questions” that are not quick. Priorities keep shifting,
          there’s little uninterrupted time to think, and work feels reactive
          rather than led.
        </div>

        {/* SECTION 1 */}
        <PressurePointSection
          title="What’s usually underneath"
          description={`This pressure often shows up when decision boundaries are not clear, priorities keep shifting, or uncertainty flows upward instead of being resolved where the work happens. 

Over time, urgency becomes the default operating mode — not because everything is truly critical, but because the system lacks the clarity needed to resolve issues at the right level.`}
        />

        {/* SECTION 2 */}
        <PressurePointSection
          title="A common leadership response"
          description={`To keep things moving, leaders often step in more, stay constantly available, and absorb pressure personally. It works in the short term — but can quietly increase dependency and reinforce urgency over time.`}
        />

        {/* CENTER EMPHASIS */}
        <SuccessMessage
          text="This is a common leadership pressure — and it’s workable."
          fontSize="text-[21px]"
          leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
          rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
          fontColor="#0f4f58"
          left="410px"
          bottom="186px"
          rightImgRight="410px"
          rightImgBottom="186px"
          rotate="-35deg"
        />

        <div
          className="flex justify-end  mb-[7px]"
          onClick={() => router.push("/pressure-point-record")}
        >
          <PolygonButton
            width="106px"
            height="107px"
            bgColor="#acd5ab"
            radius={14}
            clipPath={`polygon(
    15% 11%,
    81% 0%,
    100% 87%,
    3% calc(100% - 15px)
  )`}
          >
            <span className="text-[#0F4F58] text-[20px] font-[RocaTwo] font-bold leading-tight text-center">
              Continue with
              <br />
              <span className="whitespace-nowrap">this pressure</span>
            </span>
          </PolygonButton>
        </div>

        {/* Choose Another */}
        <div className="flex justify-end">
          <CommonButtons
            label="Choose
Another Pressure"
            bgColor="#fbe1de"
            onClick={() => router.push("/choose-another-pressure")}
          />
        </div>
      </div>
    </div>
  );
}

export default UrgentPressurePoint;
