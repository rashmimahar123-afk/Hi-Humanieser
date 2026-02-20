"use client";
import Image from "next/image";
import images from "@/src/assets/images";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter } from "next/navigation";
import PressurePointSection from "../PressurePointSection/PressurePointSection";

function PressurePoint() {
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
          Teams are Busy, but not Aligned
        </h1>

        {/* DESCRIPTION BOX */}
        <div className="bg-[#f8e1b8] text-[#0f4f58] text-[20px] leading-[28px] p-6 rounded-2xl max-w-3xl mb-16 font-[Roboto] ml-4">
          Your team is busy and capable, yet progress feels uneven and slower
          than expected. Different parts of the work move in parallel without
          fully connecting, creating rework and a sense that effort is not
          adding up.
        </div>

        {/* SECTION 1 */}
        <PressurePointSection
          title="What’s usually underneath"
          description={`This pressure tends to emerge when alignment relies on conversations rather than shared anchors. Goals exist, but they’re interpreted rather than held in common.

As the work grows more complex, small differences in understanding quietly multiply — until effort no longer translates cleanly into outcomes.`}
        />

        {/* SECTION 2 */}
        <PressurePointSection
          title="A common leadership response"
          description={`Leaders often try to restore alignment by explaining more, checking in more frequently, or holding additional coordination meetings. It brings temporary clarity — but alignment fades again once attention moves elsewhere.`}
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

        <div className="flex justify-end  mb-[7px]">
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

export default PressurePoint;
