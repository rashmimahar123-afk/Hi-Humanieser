"use client";
import Image from "next/image";
import images from "@/src/assets/images";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter } from "next/navigation";
import PressurePointSection from "../PressurePointSection/PressurePointSection";

function DependencyPressurePoint() {
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
          Too Much Depends On Me
        </h1>

        {/* DESCRIPTION BOX */}
        <div className="bg-[#f8e1b8] text-[#0f4f58] text-[20px] leading-[28px] p-6 rounded-2xl max-w-3xl mb-16 font-[Roboto] ml-4">
          Decisions slow down unless you’re involved. People look to you for
          reassurance before acting, and progress stalls when you’re
          unavailable. Even capable leaders hesitate without your input, and the
          organisation feels more fragile than it should.
        </div>

        {/* SECTION 1 */}
        <PressurePointSection
          title="What’s usually underneath"
          description={`This pressure often emerges when ownership and decision rights have not scaled with the complexity of the work. 

Clarity about who decides, who owns what, and how risk is shared has not kept pace — so responsibility drifts upward by default.`}
        />

        {/* SECTION 2 */}
        <PressurePointSection
          title="A common leadership response"
          description={`Leaders often stay close to decisions, step in to unblock work, or “just handle it” themselves to keep things moving. It works in the moment — but can quietly reinforce reliance and limit autonomy over time.`}
        />

        {/* CENTER EMPHASIS */}
        <SuccessMessage
          text="Many leaders experience this as organisations grow 
and demands increase."
          fontSize="text-[21px]"
          leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
          rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
          fontColor="#0f4f58"
          left="346px"
          bottom="192px"
          rightImgRight="340px"
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

export default DependencyPressurePoint;
