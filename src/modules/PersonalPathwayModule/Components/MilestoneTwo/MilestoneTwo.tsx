"use client";

import Image from "next/image";
import MilestoneTwoActionRow from "../MilestoneTwoActionRow/MilestoneTwoActionRow";
import MilestoneFooter from "../MilestoneFooter/MilestoneFooter";
import styles from "./MilestoneTwo.module.css";
import images from "@/src/assets/images";
import { useRouter } from "next/navigation";
import StartPracticePerspective from "../StartPracticePerspective/StartPracticePerspective";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import { useState } from "react";
import FillUpFormModal from "../FillUpFormModal/FillUpFormModal";

type MILESTONE_TWO_PROPS = {
  onNext: () => void;
};
function MilestoneTwo(props: MILESTONE_TWO_PROPS) {
  const { onNext } = props;
  const router = useRouter();
  const [pinned, setPinned] = useState<string[]>([]);

  const togglePin = (title: string) => {
    setPinned((prev) => {
      if (prev.includes(title)) {
        // Unpin
        return prev.filter((item) => item !== title);
      } else {
        // Pin
        return [...prev, title];
      }
    });
  };

  return (
    <div className="animate-slideInRight">
      <StartPracticePerspective />

      {/* Header */}
      <h2 className="text-[34px] font-[RocaTwo] font-bold text-[#0F4F58] mt-[40px]">
        Milestone 2: Practice & Embed
      </h2>

      <p className="mt-4 text-[#567F55] font-[Roboto] text-[18px] ml-[35px]">
        <span className="font-bold">
          Make it real. Try new Behaviours. See what shifts.
        </span>
        <br />
        <br />
        This is where it gets real. Below are small, doable actions you can
        weave into your day. Pick up to 2 to try on — they’re experiments, not
        exams. For each one, add at least one short reflection on how it lands.
        See what shifts, and tweak as you go — in your own time.
      </p>

      {/* Main Card Container */}
      <div className="mt-10 bg-[#F6E7C3] rounded-[20px] px-10 py-12 relative">
        <Image
          src={images.calImg}
          alt="arrow"
          width={80}
          height={80}
          className="absolute -right-[3%] top-[10%]"
        />
        <p className="text-[#F2A39C] text-[14px] leading-[1.5] absolute top-[8%] -right-[3%] ">
          fill me up
        </p>
        <Image
          src={images.actionImg}
          alt="arrow"
          width={80}
          height={80}
          className="absolute -top-[3%] -left-[2%]"
        />
        <p className="text-[#F2A39C] text-[14px] leading-[1.5] absolute max-w-[80px] top-[1%] -left-[4%]">
          choose up to 2 micro-actions
        </p>
        {/* Top labels */}
        <div className="flex justify-between mb-8">
          <span className="text-[#567F55] text-[17px] font-bold font-[League Spartan] ml-[115px]">
            MICRO-ACTION 1
          </span>

          <span className="text-[#567F55] text-[17px] font-bold font-[League Spartan] mr-[90px]">
            PRACTICE in your own time
          </span>
        </div>

        {/* Action Rows */}
        <div className="space-y-8 relative">
          {/* Row 1 */}
          {/* <div className="relative"> */}
          {/* Row 1 */}
          <MilestoneTwoActionRow
            title="Ask yourself: “What else could be true?”"
            description={`If someone is corrected or dismissed publicly, intervene gently to restore safety:
“Let’s hear their full thinking before we respond.”
It takes courage — but it quietly protects trust, dignity and voice in the room.`}
            showSaveReflection={true}
            isPinned={pinned.includes(
              "Ask yourself: “What else could be true?”",
            )}
            onPinToggle={() =>
              togglePin("Ask yourself: “What else could be true?”")
            }
            isPracticeEnabled={pinned.includes(
              "Ask yourself: “What else could be true?”",
            )}
          />

          {/* Polygon button BETWEEN first & second card */}
          {/* <div className="flex justify-end mt-[7px] mb-[7px] cursor-pointer">
              <PolygonButton
                width="110px"
                height="88px"
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
                  <span className="text-[22px] leading-[24px]">
                    Add another
                  </span>
                  <span className="text-[22px] leading-[24px]">reflection</span>
                </div>
              </PolygonButton>
            </div> */}
          {/* Row 2 */}
          <MilestoneTwoActionRow
            title="Borrow someone else’s lens"
            description={`Begin your next interaction with a light, human check-in that invites but never pressures. Try something like: “Good to see you — how’s your day going so far?”. Let their tone guide how you move forward.`}
            showSaveReflection={false}
            isPinned={pinned.includes("Borrow someone else’s lens")}
            onPinToggle={() => togglePin("Borrow someone else’s lens")}
            isPracticeEnabled={pinned.includes("Borrow someone else’s lens")}
          />
          {/* </div> */}
          {/* Row 3 */}
          <MilestoneTwoActionRow
            title="The Quiet Recognition"
            description={`In your next conversation, to make sure you’ve understood correctly, ask one clarifying question: “Can I check if I’m hearing this right?” Then share your understanding. This prevents the brain from filling gaps with prediction.`}
            showSaveReflection={false}
            isPinned={pinned.includes("The Quiet Recognition")}
            onPinToggle={() => togglePin("The Quiet Recognition")}
            isPracticeEnabled={pinned.includes("The Quiet Recognition")}
          />
        </div>

        {/* Footer line */}
        <div className="w-full flex justify-center">
          <p className="mt-12 text-center text-[#567F55] text-[23px] font-bold font-[RocaTwo] max-w-[576px]">
            Tiny pivots, big shifts. Each action is a chance to see more,
            connect better, and boost performance in the moment.
          </p>
        </div>
      </div>
      <MilestoneFooter
        nextRoute="/pathway-card"
        nextLabel="Conversation Starters"
        helperText="Want to go deeper?
Explore “Conversation Starters Pack’  with few prompts to bring into team meetings, 1:1 and coffee chats."
      />
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
              router.push("?step=3");
              onNext();
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
              Go to <br />
              Milestone 3
            </div>
          </div>
        </div>
      </div>
      <FillUpFormModal />
    </div>
  );
}
export default MilestoneTwo;
