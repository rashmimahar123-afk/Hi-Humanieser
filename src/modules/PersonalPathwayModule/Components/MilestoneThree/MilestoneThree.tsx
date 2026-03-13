"use client";

import Image from "next/image";
import images from "@/src/assets/images";
import { useRouter } from "next/navigation";
import ArrowSquare from "@/src/components/ArrowSquare/ArrowSquare";
import styles from "./MilestoneThree.module.css";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import { useState } from "react";
import StartPracticePerspective from "../StartPracticePerspective/StartPracticePerspective";
import { openFillupModal } from "../FillUpFormModal/FillUpFormModal";
import FillUpFormModal from "../FillUpFormModal/FillUpFormModal";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";

type MILESTONE_THREE_PROPS = {
  ClosePracticePerspective: () => void;
};

function MilestoneThree(props: MILESTONE_THREE_PROPS) {
  const { ClosePracticePerspective } = props;

  const router = useRouter();

  const [showSuccess, setShowSuccess] = useState(false);

  const microActions = [
    "Ask yourself: “What else could be true?”",
    "Borrow someone else’s lens",
    "Before acting, pause and ask:“How will this land for people — and for performance?”",
  ];

  return (
    <div className="animate-slideInRight">
      <StartPracticePerspective />

      {/* Title */}
      <h2 className="text-[36px] font-[RocaTwo] font-bold text-[#0F4F58] mt-[40px]">
        Milestone 3: Lock In & Move Forward
      </h2>
      {/* Subtitle */}
      <p className="mt-4 text-[18px] text-[#567F55] font-[Roboto] ml-[35px]">
        <span className="font-bold">
          Reflect. Recognise Progress. Decide what sticks.
        </span>
        <br />
        <br />
        This is your moment to zoom out. Look at what’s shifted, celebrate the
        progress, and choose the habits you want to carry forward. The goal
        isn’t to do it all — it’s to lock in what works for both you and your
        performance.
      </p>
      {/* Pulse Check Section */}
      <div className="mt-[60px] flex items-center justify-between">
        {/* Left */}
        <div>
          <p className="text-[#567F55] text-[22px] font-bold tracking-wide font-[Roboto]">
            PULSE CHECK
          </p>

          <p className="mt-3 max-w-[420px] text-[#567F55] text-[23px] font-[Roboto] font-[400] ml-[82px]">
            How ready do you feel to approach challenges from different angles?
          </p>
        </div>

        {/* Right */}
        {/* Right Emojis */}
        <div className="relative mt-[80px]">
          {/* choose one arrow */}
          <div className="w-[200px] absolute right-[61%] top-[-96%]">
            <Image
              src={images.emojiArrow} // curved arrow image
              alt="choose-arrow"
              width={100}
              height={100}
              className="absolute -top-19 left-1/2 -translate-x-1/2"
            />
            <div className="absolute w-[75px] left-[20%] text-[#F2A39C] text-[14px] font-medium">
              choose one
            </div>
          </div>
          {/* Emoji row */}
          <div className="flex items-center gap-4 rounded-[12px] border border-[#A7D3CB] px-4 py-2 bg-transparent">
            <Image src={images.emojiImg} alt="emoji" width={200} height={200} />
            {/* <Image
              src={images.emojiOrange}
              alt="unclear"
              width={48}
              height={48}
            />
            <Image
              src={images.emojiYellow}
              alt="neutral"
              width={48}
              height={48}
            />
            <Image
              src={images.emojiLightGreen}
              alt="clear"
              width={48}
              height={48}
            />
            <Image
              src={images.emojiGreen}
              alt="very clear"
              width={48}
              height={48}
            /> */}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-start mt-[60px]">
        {/* Left Text */}
        <div className="max-w-[520px] ">
          <p className="text-[#567F55] text-[22px] font-bold font-[Roboto] tracking-wide">
            REFLECTION PROMPT
          </p>

          <p className="mt-3 text-[#567F55] text-[23px] leading-[1.6] font-[Roboto] font-[400] ml-[20px]">
            What did you notice about how safety (or lack of it) shows up in
            your day-to-day work?
          </p>
        </div>

        {/* Right Paper Image */}
        <div className="relative w-[360px]">
          {/* Paper Image */}
          <Image
            src={images.promptImg}
            alt="reflection prompt"
            width={360}
            height={420}
            className="w-full object-contain"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 px-8 py-10 flex flex-col">
            <Image
              src={images.calImg}
              alt="arrow"
              width={80}
              height={80}
              className="absolute -right-[1%] -top-[2%]"
            />
            <p className="text-[#F2A39C] text-[14px] leading-[1.5] absolute -top-[5%] -right-[12%] ">
              fill me up
            </p>
            {/* Dotted Lines */}
            <div className="space-y-3 mt-8">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="border-b border-dashed border-[#000000]"
                />
              ))}
            </div>
            {/* Checkbox */}
            {/* <div className="mt-[20px] flex items-start gap-3">
              <div>
                <p className="text-[14px] text-[#0F4F58] ml-[22px]">
                  Share your insights with your team?
                </p>
                <p className="text-[11px] text-[#0F4F58] leading-[1.4]">
                  If yes, your reflection will be shared anonymously on Ritual
                  Walls
                </p>
              </div>
              <input
                type="checkbox"
                className="mt-1 w-6 h-4 rounded border-[#0F4F58] mr-[18px]"
              />
            </div> */}
            <div
              className="flex justify-end mt-[7px] mb-[7px] cursor-pointer"
              onClick={openFillupModal}
            >
              <PolygonButton
                width="110px"
                height="80px"
                bgColor="#4ba6a6"
                radius={14}
                clipPath={`polygon(
    18% 12%,
    82% 2%,
    100% 88%,
    6% 100%
  )`}
              >
                <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-[#0F4F58] font-[RocaTwo] font-bold text-center pointer-events-none">
                  <span className="text-[20px] leading-[24px]">
                    Click Me To
                  </span>
                  <span className="text-[22px] leading-[24px]">Fill up</span>
                </div>
              </PolygonButton>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className=" relative">
        {/* ===== Heading & Description ===== */}
        <div className="max-w-[880px]">
          <p className="text-[#567F55] text-[22px] font-bold font-[Roboto]">
            SAVE YOUR FAVOURITE (optional){" "}
          </p>

          <p className="mt-3 text-[#567F55] text-[23px] leading-[1.6] font-[400] font-[Roboto] ml-[20px]">
            Choose any micro-actions you’d like to keep as favourites — they’ll
            live in your Dashboard so you can return to them anytime.
          </p>
        </div>

        {/* ===== Micro Actions Card ===== */}
        <div className="w-full">
          <div className="flex">
            <div className="mt-[40px] bg-[#F5F0EB] rounded-[20px] px-[40px] py-[30px] w-[800px] ml-[110px]">
              {/* Header */}
              <div className="flex justify-between mb-6">
                <p className="text-[#567F55] font-bold text-[19px] font-[Roboto]">
                  MICRO-ACTIONS
                </p>

                <p className="text-[#567F55] font-bold text-[19px] text-right font-[Roboto]">
                  ADD TO ACTIVE <br /> PRACTICE LIST?
                </p>
              </div>

              {/* Rows */}
              <div className="space-y-6">
                {microActions.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[1fr_72px] items-center"
                  >
                    {/* Left: arrow + text */}
                    <div className="flex items-start gap-4 max-w-[520px]">
                      <div className="mt-[4px] shrink-0">
                        <ArrowSquare width={"22"} height={"17"} />
                      </div>

                      <p className="text-[#567F55] text-[18px] leading-[1.5] font-[Roboto] font-[400]">
                        {item}
                      </p>
                    </div>

                    {/* Right: checkbox perfectly centered */}
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-[22px] h-[22px] rounded-[6px] border-2 border-[#0F4F58]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* ===== Helper Text ===== */}
        <div>
          <Image
            src={images.microArrow}
            alt="arrow"
            width={80}
            height={80}
            className="absolute left-[83%] top-[53%] "
          />

          <p className="text-[#F2A39C] text-[14px] leading-[1.5] absolute -right-[4%] top-[53%] max-w-[128px]">
            Tick the ones you want to keep in play — they’ll join your Active
            Practices, ready and waiting on your Dashboard.
          </p>
        </div>
      </div>
      <div className="flex justify-end mt-[126px]">
        <div className={styles.cardWrapper}>
          {/* Arrow */}
          <Image
            src={images.arrowImg}
            alt="arrow"
            width={50}
            height={50}
            className={styles.arrowLeft}
          />

          {/* Card */}
          <div
            className={`${styles.card} ${styles.leftCard} cursor-pointer`}
            onClick={() => {
              setShowSuccess(true);
            }}
          >
            {/* Card shape (SMALL) */}
            <Image
              src={images.personalQuiz}
              alt="card shape"
              width={80}
              height={140}
            />

            {/* Text OUTSIDE image bounds */}
            <div className={styles.cardText}>
              Complete <br />
              My pathway
            </div>
          </div>
        </div>
      </div>
      {showSuccess && (
        <>
          {/* <SuccessMessage
            text="Congratulations! Another pathway in the bag —
your dashboard is beaming"
            fontSize="text-[21px]"
            maxWidth="max-w-[445px]"
            leftImg={{
              src: images.arrowImg,
              width: 40,
              height: 40,
            }}
            rightImg={{
              src: images.leftArrowImg,
              width: 60,
              height: 60,
            }}
          /> */}
          <SuccessMessage
            text="Congratulations! Another pathway in the bag —
your dashboard is beaming"
            fontSize="text-[21px]"
            leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
            rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
            fontColor="#0f4f58"
            left="300px"
            bottom="130px"
            rightImgRight="290px"
            rightImgBottom="125px"
            rotate="-35deg"
            maxWidth="460px"
          />
          <div className=" mt-[40px] flex justify-between">
            <button
              onClick={() => router.push("/choose-pathway")}
              className="bg-[#F5F0EB] px-6 py-3 rounded-xl text-[#0F4F58] font-[400] text-[16px] flex items-center gap-4 font-[Aptos] cursor-pointer"
            >
              Start a New Pathway
              <Image
                src={images.milestoneArrow}
                alt="arrow"
                width={51}
                height={51}
              />
            </button>
            <button
              onClick={ClosePracticePerspective}
              className="bg-[#F5F0EB] px-6 py-3 rounded-xl text-[#0F4F58] font-[400] text-[16px] flex items-center gap-4 font-[Aptos] cursor-pointer"
            >
              Return to My Personal Pathway
              <Image
                src={images.milestoneArrow}
                alt="arrow"
                width={51}
                height={51}
              />
            </button>
          </div>
        </>
      )}
      <FillUpFormModal />
    </div>
  );
}

export default MilestoneThree;
