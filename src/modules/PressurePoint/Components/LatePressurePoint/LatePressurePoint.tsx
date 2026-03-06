"use client";
import Image from "next/image";
import images from "@/src/assets/images";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter } from "next/navigation";
import PressurePointSection from "../PressurePointSection/PressurePointSection";

function LatePressurePoint() {
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
          Problems Surface Too Late
        </h1>

        {/* DESCRIPTION BOX */}
        <div className="bg-[#f8e1b8] text-[#0f4f58] text-[20px] leading-[28px] p-6 rounded-2xl max-w-3xl mb-16 font-[Roboto] ml-4">
          On the surface, things seem fine — updates sound positive and meetings
          stay polite. Issues tend to surface only when they’re already costly:
          deadlines slip, tensions rise, or clients escalate. There’s often a
          sense that something was off, but it wasn’t visible early enough to
          address lightly.
        </div>

        {/* SECTION 1 */}
        <PressurePointSection
          title="What’s usually underneath"
          description={`This pressure often grows in environments where raising concerns feels risky, uncomfortable, or disruptive. Signals get softened, delayed, or diverted into side conversations. 
Over time, the system rewards keeping things smooth on the surface — even when it slows learning and increases risk underneath.`}
        />

        {/* SECTION 2 */}
        <PressurePointSection
          title="A common leadership response"
          description={`Leaders may respond by asking for more detailed updates, tightening oversight, or getting involved once issues are already serious. That can help regain control — but it doesn’t always make it easier for concerns to surface earlier next time.`}
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

export default LatePressurePoint;
