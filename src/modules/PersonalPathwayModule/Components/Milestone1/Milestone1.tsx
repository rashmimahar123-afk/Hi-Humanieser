import BehaviourCard from "../BehaviourCard/BehaviourCard";
import Image from "next/image";
import images from "@/src/assets/images";
import MilestoneFooter from "../MilestoneFooter/MilestoneFooter";
import ArrowSquare from "@/src/components/ArrowSquare/ArrowSquare";
import styles from "./Milestone1.module.css";
import { useRouter } from "next/navigation";
import StartPracticePerspective from "../StartPracticePerspective/StartPracticePerspective";

function Milestone1({ onNext }: { onNext: () => void }) {
  const router = useRouter();

  return (
    <div className="animate-slideInRight">
      <StartPracticePerspective />
      <h2 className="text-[34px] font-[RocaTwo] font-bold text-[#0F4F58] mt-[40px]">
        Milestone 1: Understand & Commit
      </h2>
      <p className="mt-4 text-[#567F55] max-w-[700px] font-[Roboto] text-[18px] ml-[35px]">
        <span className=" font-bold ">
          This is a moment to pause and notice what resonates.{" "}
        </span>
        <br />
        You’ll look through the Core Behaviours, notice a few common patterns we
        all fall into, and answer one short reflection question. When you’re
        ready, you’ll move on to Milestone 2 to start experimenting with small,
        real-world actions.
      </p>
      <h3 className="mt-10 text-[#567F55] font-bold font-[Roboto] text-[23px]">
        CORE BEHAVIOURS
      </h3>
      <p className="font-[Roboto] text-[#567F55] text-[17px] font-[400] ml-[20px]">
        Core Behaviours turn this pathway into consistent practice — clear,
        simple habits that improve trust, reduce friction, and support better
        results.
      </p>
      {/* Cards */}
      <div className="mt-10 flex justify-center gap-10">
        <BehaviourCard
          image={images.coreOne}
          text="Listen to their meaning, not your assumptions, by noticing tone, context and emotion."
        />

        <BehaviourCard
          image={images.coreTwo}
          text="Notice when you’re tightening up inside, and give yourself a moment before responding."
        />
        <div className="relative">
          <BehaviourCard
            image={images.coreOne}
            text="Distinguish between your assumptions, others’ intent, and the wider context influencing behaviour."
          />
          <div>
            {" "}
            <Image
              src={images.coreArrow}
              alt="arrow"
              width={50}
              height={50}
              className="absolute -right-[27%] -bottom-[21%]"
            />
            <div className="absolute w-[130px] -right-[58%] -bottom-[60%] text-[#F2A39C] text-[14px] font-medium">
              Tap one — or a few — to begin. You can change this later
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-16 flex items-start ml-[126px] gap-6">
        {/* Q Hand */}
        <Image src={images.qImg} alt="hand-q" width={107} height={107} />

        {/* Question text */}
        <p className="max-w-[420px] text-[23px] text-[#567F55] leading-snug font-[Roboto]">
          Which of these behaviours feels most alive for you right now?
        </p>
      </div>
      {/* Footer */}
      <MilestoneFooter
        onNext={onNext}
        nextLabel="Return to Home"
        helperText="Leading others? Explore how to create perspective-taking moments for your team."
      />
      {/* COMMON TRAPS */}
      <div className="mt-20 ">
        {/* Heading */}
        <h3 className="text-[22px] font-[Roboto] font-bold text-[#567F55] uppercase tracking-wide">
          Common Traps
        </h3>

        {/* Intro text */}
        <p className="mt-4 text-[20px] text-[#567F55] leading-relaxed font-[Roboto] font-[400] ml-[20px]">
          Even with the best intentions, it’s easy to slip into habits that
          shrink our perspective without us noticing.
          <br />
          Watch out for these:
        </p>

        {/* List */}

        <ul className="mt-6 space-y-4 max-w-[620px] ml-[208px]">
          <li className="relative flex items-start gap-3">
            <div className="absolute mt-[4px]  z-20">
              <ArrowSquare width={"22"} height={"17"} />
            </div>
            <p className="text-[#567F55] text-[16px] leading-snug ml-[28px] font-[League Spartan] font-bold">
              Confusing harmony with safety — people appear agreeable, but real
              concerns stay unspoken.
            </p>
          </li>

          <li className="relative flex items-start gap-3">
            <div className="absolute mt-[4px]  z-20">
              <ArrowSquare width={"22"} height={"17"} />
            </div>
            <p className="text-[#567F55] text-[16px] leading-snug ml-[28px] font-[League Spartan] font-bold">
              Saying “it’s safe to speak” while reacting defensively when
              someone actually does.
            </p>
          </li>

          <li className="relative flex items-start gap-3">
            <div className="absolute mt-[4px]  z-20">
              <ArrowSquare width={"22"} height={"17"} />
            </div>
            <p className="text-[#567F55] text-[16px] leading-snug ml-[28px] font-[League Spartan] font-bold">
              Relying on individual bravery instead of designing safety into
              everyday ways of working.
            </p>
          </li>
        </ul>
      </div>
      {/* PULSE CHECK */}
      <div className="mt-24 flex items-start justify-between max-w-[900px]">
        {/* Left Content */}
        <div className="max-w-[420px]">
          <h3 className="text-[22px] font-[Roboto] font-bold text-[#567F55] uppercase tracking-wide">
            Pulse Check
          </h3>

          <p className="mt-4 text-[23px] font-[Roboto] font-[400] leading-snug text-[#567F55] ml-[20px]">
            Right now, how clear am I when I communicate — and how often do I
            pause to check that meaning has really landed?
          </p>
        </div>

        {/* Right Emojis */}
        <div className="relative mt-[80px]">
          {/* choose one arrow */}
          <div className="w-[200px] absolute right-[61%]">
            <Image
              src={images.emojiArrow} // curved arrow image
              alt="choose-arrow"
              width={100}
              height={100}
              className="absolute -top-19 left-1/2 -translate-x-1/2"
            />
            <div className="absolute w-[75px] bottom-[3px] left-[20%] text-[#F2A39C] text-[14px] font-medium">
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
              router.push("?step=2");
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
              Move into <br />
              Practice
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Milestone1;
