"use client";

import Image from "next/image";
import MilestoneTwoActionRow from "../MilestoneTwoActionRow/MilestoneTwoActionRow";
import MilestoneFooter from "../MilestoneFooter/MilestoneFooter";
import styles from "./MilestoneTwo.module.css";
import images from "@/src/assets/images";
import { useRouter } from "next/navigation";
import StartPracticePerspective from "../StartPracticePerspective/StartPracticePerspective";
import { useEffect, useState } from "react";
import FillUpFormModal from "../FillUpFormModal/FillUpFormModal";
import { PILLAR_PRINCIPLE_TYPE } from "@/src/modules/ChoosePathwayModule/Types/ResponseTypes";
import { MILESTONE_TWO_DATA } from "../../Types/ResponseTypes";
import ShowMaxTwoMicroActionModal, {
  openShowMaxTwoMicroAction,
} from "../ShowMaxTwoMicroActionModal/ShowMaxTwoMicroActionModal";
import ConfirmShareReflectionModal from "../ConfirmShareReflectionModal/ConfirmShareReflectionModal";
import RemoveShareReflectionModal from "../RemoveShareReflectionModal/RemoveShareReflectionModal";

type MILESTONE_TWO_PROPS = {
  onNext: () => void;
  pathwayDetails: PILLAR_PRINCIPLE_TYPE;
  pillarNumber: number;
  id: string;
  m2Data: MILESTONE_TWO_DATA;
};

function MilestoneTwo(props: MILESTONE_TWO_PROPS) {
  const { onNext, pathwayDetails, pillarNumber, id, m2Data } = props;
  const router = useRouter();
  const [pinned, setPinned] = useState<string[]>([]);
  const [showContinueError, setShowContinueError] = useState(false);

  const togglePin = (title: string) => {
    setPinned((prev) => {
      if (prev.includes(title)) {
        return prev.filter((item) => item !== title);
      }

      if (prev.length >= 2) {
        openShowMaxTwoMicroAction();
        return prev;
      }

      return [...prev, title];
    });
  };

  const hasAnyReflection = Object.keys(m2Data || {}).some((key) => {
    if (key.startsWith("micro_action_")) {
      return (m2Data?.[key]?.length ?? 0) > 0;
    }
    return false;
  });

  return (
    <div className="animate-slideInRight">
      <StartPracticePerspective pathwayDetails={pathwayDetails} />

      {/* Header */}
      <h2 className="text-[24px] sm:text-[28px] lg:text-[34px] font-[RocaTwo] font-bold text-[#0F4F58] mt-[40px]">
        Milestone 2: Practice & Embed
      </h2>

      <p className="mt-4 text-[#567F55] font-[Roboto] text-[14px] sm:text-[16px] lg:text-[18px] ml-0 sm:ml-[35px]">
        <span className="font-bold">
          Make it real. Try new Behaviours. See what shifts.
        </span>
        <br />
        <br />
        This is where it gets real. Below are small, doable actions you can
        weave into your day. Pick up to 2 to try on — they're experiments, not
        exams. For each one, add at least one short reflection on how it lands.
        See what shifts, and tweak as you go — in your own time.
      </p>

      {/* Main Card Container */}
      <div className="mt-10 bg-[#F6E7C3] rounded-[20px] px-4 sm:px-8 lg:px-10 py-8 sm:py-12 relative">
        {/* Decorative images — hidden on mobile to avoid overflow */}
        <Image
          src={images.calImg}
          alt="arrow"
          width={80}
          height={80}
          className="hidden lg:block absolute -right-[3%] top-[10%]"
        />
        <p className="hidden lg:block text-[#F2A39C] text-[14px] leading-[1.5] absolute top-[8%] -right-[3%]">
          fill me up
        </p>
        <Image
          src={images.actionImg}
          alt="arrow"
          width={80}
          height={80}
          className="hidden lg:block absolute -top-[3%] -left-[2%]"
        />
        <p className="hidden lg:block text-[#F2A39C] text-[14px] leading-[1.5] absolute max-w-[80px] top-[1%] -left-[4%]">
          choose up to 2 micro-actions
        </p>

        {/* Mobile hint */}
        <p className="block lg:hidden text-[#F2A39C] text-[12px] mb-4">
          Choose up to 2 micro-actions
        </p>

        {/* Top labels */}
        <div className="flex justify-between mb-6 sm:mb-8">
          <span className="text-[#567F55] text-[13px] sm:text-[15px] lg:text-[17px] font-bold font-[League Spartan] ml-0 sm:ml-[60px] lg:ml-[115px]">
            MICRO-ACTIONS
          </span>

          <span className="text-[#567F55] text-[13px] sm:text-[15px] lg:text-[17px] font-bold font-[League Spartan] mr-0 sm:mr-[40px] lg:mr-[90px] text-right">
            PRACTICE in your own time
          </span>
        </div>

        {/* Action Rows */}
        <div className="space-y-8 sm:space-y-10 relative">
          {pathwayDetails?.micro_actions?.map((item) => {
            return (
              <div key={item?.micro_action_id}>
                <MilestoneTwoActionRow
                  title={`${item?.title}?`}
                  description={item?.description}
                  showSaveReflection={true}
                  isPinned={pinned.includes(`${item?.title}?`)}
                  onPinToggle={() => togglePin(`${item?.title}?`)}
                  isPracticeEnabled={pinned.includes(`${item?.title}?`)}
                  id={id}
                  microActionNumber={item?.micro_action_number}
                  pathwayDetails={pathwayDetails}
                  m2Data={m2Data}
                />
              </div>
            );
          })}
        </div>

        {/* Footer line */}
        <div className="w-full flex justify-center">
          <p className="mt-10 sm:mt-12 text-center text-[#567F55] text-[16px] sm:text-[20px] lg:text-[23px] font-bold font-[RocaTwo] max-w-[576px]">
            Tiny pivots, big shifts. Each action is a chance to see more,
            connect better, and boost performance in the moment.
          </p>
        </div>
      </div>

      <MilestoneFooter
        nextRoute={`/pathway-card?pillar=${pillarNumber}&principle=${pathwayDetails?.principle_number}`}
        nextLabel="Conversation Starters"
        helperText={`Want to go deeper?\nExplore 'Conversation Starters Pack' with few prompts to bring into team meetings, 1:1 and coffee chats.`}
      />

      {/* Next Button */}
      <div className="flex justify-end mt-[80px] sm:mt-[126px]">
        <div className={styles.cardWrapper}>
          <Image
            src={images.arrowImg}
            alt="arrow"
            width={50}
            height={50}
            className={styles.arrowLeft}
          />

          <div
            className={`${styles.card} ${styles.leftCard} ${
              hasAnyReflection
                ? "cursor-pointer"
                : "opacity-50 cursor-not-allowed"
            }`}
            onMouseEnter={() => !hasAnyReflection && setShowContinueError(true)}
            onMouseLeave={() => setShowContinueError(false)}
            onClick={() => {
              if (!hasAnyReflection) return;
              router.push("?step=3");
              onNext();
            }}
          >
            <Image
              src={images.personalQuiz}
              alt="card shape"
              width={80}
              height={140}
            />

            <div className={styles.cardText}>
              Go to <br />
              Milestone 3
            </div>
          </div>
        </div>
      </div>

      {!hasAnyReflection && showContinueError && (
        <p className="text-red-500 text-[13px] sm:text-[14px] text-right mt-2">
          Add at least one reflection to continue
        </p>
      )}

      <FillUpFormModal />
      <ShowMaxTwoMicroActionModal />
      <ConfirmShareReflectionModal />
      <RemoveShareReflectionModal />
    </div>
  );
}

export default MilestoneTwo;
