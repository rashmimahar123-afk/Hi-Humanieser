import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import images from "@/src/assets/images";
import { useEffect, useState } from "react";
import styles from "./TeamJourneyPoll.module.css";
import { useSearchParams } from "next/navigation";

type PRACTICE_PERSPECTIVE_PROPS = {
  ClosePracticePerspective: () => void;
};

function TeamJourneyPoll(props: PRACTICE_PERSPECTIVE_PROPS) {
  const { ClosePracticePerspective } = props;

  const [showSuccess, setShowSuccess] = useState(false);

  const [animateText, setAnimateText] = useState(false);

  const [enter, setEnter] = useState(false);
  const searchParams = useSearchParams();
  const pathname = searchParams.get("step");
  useEffect(() => {
    setEnter(true);
  }, []);

  return (
    <div>
      {/* Yellow Poll Box */}
      <div className="bg-[#F5C882] rounded-[20px] p-8 space-y-6 mt-[20px]">
        {/* Practice Section */}
        <div className="mt-10 ">
          <h3
            className="
      text-[#0F4F58]
      text-[30px]
      font-bold
      mb-3
      font-[RocaTwo]
      leading-[1.2]
    "
          >
            Let’s roll our sleeves and put it into practice
          </h3>

          <p
            className="
      text-[#244E52]
      text-[21px]
      leading-[1.55]
      font-[Roboto]
      font-[400]
      ml-[40px]
    "
          >
            Read the team ritual and add at least one reflection below. One
            reflection completes the ritual — more are always welcome.
          </p>
        </div>

        {/* Two Column Section */}
        <div className="flex justify-between w-full mt-10">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* Ritual Card */}
            <div className="bg-[#F5F0EB] rounded-[18px] p-6 max-w-[381px]">
              <h4 className="text-[21px] font-[RocaTwo] font-bold text-[#4BA6A6] mb-4">
                Your Team Ritual: Check the Story
              </h4>

              <p className="text-[18px] font-[Aptos] font-[400] text-[#244E52] mb-4">
                This ritual helps teams slow down when frustration kicks in.
                Instead of jumping to conclusions, people pause to check the
                story they’re telling themselves. It doesn’t mean ignoring
                problems — it means approaching them with a bit more generosity
                and curiosity first.
              </p>

              <p className="text-[18px] font-[Aptos] font-[400] text-[#244E52] mb-2">
                Try saying
              </p>

              <ul className="list-disc pl-5 text-[18px] text-[#244E52] font-[Aptos] font-[400] space-y-1">
                <li>“What story am I telling myself here?”</li>
                <li>“What else could be going on?”</li>
              </ul>
            </div>

            {/* Champion Note */}
            <div className="bg-[#F5F0EB] rounded-[18px] p-6 text-center max-w-[381px]">
              <h4 className="text-[21px] font-[RocaTwo] font-bold text-[#4BA6A6] mb-6">
                Here’s a note from your Champion
              </h4>

              <p className="text-[#0F4F58] font-[Aptos] font-[400] text-[18px]">
                50 words
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="bg-[#F5F0EB] rounded-[18px] p-8  max-w-[501px]">
            <h4 className="text-[21px] font-[RocaTwo] font-bold text-[#4BA6A6] mb-6">
              Track & Reflect
            </h4>

            {/* Question 1 */}
            <div className="grid grid-cols-[200px_1fr] gap-6 mb-8">
              <p className="text-[18px] text-[#0F4F58] font-[Aptos] font-[400]">
                What did you notice when you try it?
              </p>

              <div className="space-y-2">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className="border-b border-dotted border-[#000000] h-[10px]"
                  />
                ))}
              </div>
            </div>

            {/* Question 2 */}
            <div className="grid grid-cols-[200px_1fr] gap-6 mb-6">
              <p className="text-[18px] text-[#0F4F58] font-[Aptos] font-[400]">
                What’s one small change you’ve noticed in your team since
                starting this ritual?
              </p>

              <div className="space-y-2">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="border-b border-dotted border-[#000000] h-[10px]"
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-end">
              <p className="text-[13px] italic text-[#0F4F58] mb-6 font-[Aptos] font-[400]">
                Answer one or both questions — your choice.
              </p>
            </div>
            {/* Save Button */}
            <div className="flex justify-end mb-8">
              <button
                className="bg-[#F8E1B8] px-6 py-2 rounded-full text-[14px] font-[RocaTwo] font-bold text-[#0F4F58]"
                onClick={() => {
                  setShowSuccess(true);
                }}
              >
                save reflection
              </button>
            </div>

            {/* Share Checkbox */}
            <div className="flex items-start gap-4">
              <div>
                <p className="text-[17px] text-[#0F4F58] font-[Aptos] font-[400]">
                  Share your insights with your team?
                </p>
                <p className="text-[14px] italic text-[#0F4F58] font-[Aptos] font-[400] mt-[20px]">
                  if yes, your reflection will be shared anonymously on
                  Reflection Walls
                </p>
              </div>
              <input
                type="checkbox"
                className="mt-1 w-5 h-5 rounded border-[#0F4F58]"
              />
            </div>
          </div>
        </div>

        {/* Common Traps */}
        <div className="bg-[#F5F0EB] rounded-xl p-6 mb-[40px]">
          <h5 className="text-[#4BA6A6] font-bold font-[RocaTwo] text-[21px] mb-2">
            Common Traps
          </h5>
          <ul className="text-[18px] text-[#0F4F58] list-disc pl-5 font-[Aptos] font-[400]">
            <li>Treating this as oversimplification instead of clarity aid</li>
            <li>
              Using it to cut people off rather than help the message land
            </li>
            <li>Asking for one-line answers before thinking is ready</li>
          </ul>
        </div>
        <div className="mt-[35px]">
          <SuccessMessage
            text="Congratulations! Another team ritual in the bag —
your dashboard is beaming"
            fontSize="text-[23px]"
            leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
            rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
            fontColor="#0F4F58"
            left="400px"
            top="63%"
            rightImgRight="388px"
            rightImgTop="62.8%"
            rotate="-35deg"
          />
        </div>

        {/* Footer Message */}
        {showSuccess && (
          <SuccessMessage
            text="Congratulations! Another team ritual in the bag —
your dashboard is beaming"
            fontSize="text-[21px]"
            maxWidth="max-w-[445px]"
            leftImg={{
              src: images.pathwayArrowLeft,
              width: 40,
              height: 40,
            }}
            rightImg={{
              src: images.pathwayArrowRight,
              width: 40,
              height: 40,
            }}
          />
        )}
      </div>
      {/* Bottom note */}
      <div className="mt-12 px-10">
        <h2
          className="text-[32px] text-[#4BA6A6] mb-2 font-[RocaTwo] font-bold"
          style={{ fontFamily: "RocaTwo" }}
        >
          How We Are Doing
        </h2>
        <div className="flex justify-between">
          {/* Heading */}
          <div>
            {/* Sub text */}
            <p className="text-[21px] text-[#0F4F58] max-w-[520px] leading-[1.4] font-[Roboto] font-[400]">
              Every voice matters — and every small
              <br />
              action adds momentum.
            </p>
          </div>
          <div className="w-[420px] relative">
            {/* Progress Bar */}
            <div className="relative w-full h-[64px] rounded-full bg-[#C2E2E2] overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-[58%] bg-[#4BA6A6] rounded-full" />
            </div>

            {/* Progress Text */}
            <p className="text-[18px] mt-3 text-center text-[#000000] font-bold font-[Aptos]">
              7 of 12 teammates have tried this ritual so far.
            </p>
            <Image
              src={images.microArrow}
              alt="arrow"
              width={80}
              height={80}
              className="absolute -top-[76px] right-[40px] rotate-[143deg]"
            />

            <p
              className="absolute -top-[67px] right-[-95px] max-w-[140px]
    text-[#F2A39C] text-[14px] leading-[1.5]"
            >
              Small actions, shared progress
            </p>
          </div>
        </div>
        {/* Progress Row */}

        {/* Bold line */}
        <p className="mt-12 text-[21px] font-bold text-[#000000] font-[League Spartan] ">
          Over time, teams pause to reflect on what’s helping — and what’s worth
          keeping.
        </p>

        {/* Reflection Wall Card */}
        <div className="flex justify-end w-full">
          <div className="mt-10 bg-[#C2E2E2] rounded-[28px] px-8 py-6 max-w-[720px] w-full">
            <div>
              {/* Left text */}
              <p className="text-[21px] text-[#737373] leading-[1.4] font-[Aptos] font-[400]">
                Want to see what <br />
                your team mates are <br />
                noticing? Visit
              </p>

              {/* Center badge */}
              <div className="relative flex items-center justify-center shrink-0">
                <Image
                  src={images.reflectionPoly}
                  alt="Reflection Wall"
                  width={90}
                  height={90}
                />

                <span className="absolute text-[#0F4F58] text-[24px] leading-[1.1] text-center font-[RocaTwo-Bold] font-bold">
                  Reflection <br /> Wall
                </span>

                <Image
                  src={images.leftArrowImg}
                  alt="arrow"
                  width={60}
                  height={60}
                  className="absolute -top-[38px] right-[232px] -rotate-[35deg]"
                />
              </div>

              {/* Right text */}
              <div className="flex justify-end">
                <p className="text-[21px] text-[#737373] leading-[1.4] font-[Aptos] font-[400]">
                  an anonymous space to reflect, <br />
                  share and be inspired
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamJourneyPoll;
