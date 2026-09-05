import BehaviourCard from "../BehaviourCard/BehaviourCard";
import Image from "next/image";
import images from "@/src/assets/images";
import MilestoneFooter from "../MilestoneFooter/MilestoneFooter";
import ArrowSquare from "@/src/components/ArrowSquare/ArrowSquare";
import styles from "./Milestone1.module.css";
import { useRouter } from "next/navigation";
import StartPracticePerspective from "../StartPracticePerspective/StartPracticePerspective";
import { useEffect, useState } from "react";
import { PILLAR_PRINCIPLE_TYPE } from "@/src/modules/ChoosePathwayModule/Types/ResponseTypes";
import { useUpdateMppMilestoneMutation } from "../../Hooks/useUpdateMppMilestoneMutation";
import useChooseMyselfQuery from "@/src/modules/ChoosePathwayModule/Hooks/useChooseMyselfQuery";
import { queryClient } from "@/src/lib/ReactQueryConfig";
import { GET_PERSONAL_PATHWAY_QUERY_KEY } from "../../Hooks/usePersonalPathwayQuery";
import { MILESTONE_ONE_DATA } from "../../Types/ResponseTypes";

type MILESTONE_ONE_PROPS = {
  onNext: () => void;
  pathwayDetails: PILLAR_PRINCIPLE_TYPE | null;
  pillarNumber: number | null;
  id: string;
  m1Data: MILESTONE_ONE_DATA;
};

function Milestone1(props: MILESTONE_ONE_PROPS) {
  const { onNext, pathwayDetails, pillarNumber, id, m1Data } = props;
  const router = useRouter();
  const [selectedBehaviours, setSelectedBehaviours] = useState<number[]>([]);
  const [selectedPulse, setSelectedPulse] = useState<number | null>(null);
  const [showCompMilestoneError, setShowCompMilestoneError] = useState(false);
  const [initialData, setInitialData] = useState<{
    behaviours: number[];
    pulse: number | null;
  } | null>(null);

  const { mutate: updateMpp } = useUpdateMppMilestoneMutation();

  const toggleBehaviour = (index: number) => {
    setSelectedBehaviours((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index],
    );
  };

  const handlePulseSelect = (value: number) => {
    setSelectedPulse(value);
  };

  const handleNext = () => {
    if (isDisabled) return;

    const isSameBehaviour =
      JSON.stringify(initialData?.behaviours.sort()) ===
      JSON.stringify([...selectedBehaviours].sort());

    const isSamePulse = initialData?.pulse === selectedPulse;

    if (isSameBehaviour && isSamePulse) {
      router.push("?step=2");
      onNext();
      return;
    }

    const behaviourValues = selectedBehaviours.map(
      (i) => pathwayDetails?.core_behaviours?.items[i]?.core_behaviour_number,
    );

    updateMpp(
      {
        uuid: id,
        milestone_key: "m1",
        data: {
          kind: "m1",
          behaviour_selection: behaviourValues,
          pulse_check: selectedPulse,
        },
      },
      {
        onSuccess: async () => {
          await queryClient.refetchQueries({
            queryKey: GET_PERSONAL_PATHWAY_QUERY_KEY,
            type: "active",
          });

          router.push("?step=2");
          onNext();
        },
      },
    );
  };

  const isDisabled = selectedBehaviours.length === 0 || selectedPulse === null;

  const { data: chooseMyselfData } = useChooseMyselfQuery();

  const getErrorMessage = () => {
    if (selectedBehaviours.length === 0 && selectedPulse === null) {
      return "Please select at least one behaviour and a pulse check";
    }
    if (selectedBehaviours.length === 0) {
      return "Please select at least one behaviour";
    }
    if (selectedPulse === null) {
      return "Please select a pulse check";
    }
    return "";
  };

  useEffect(() => {
    if (!m1Data || !pathwayDetails?.core_behaviours?.items) return;

    const selectedIndexes = pathwayDetails.core_behaviours.items
      .map((item, index) =>
        m1Data.behaviour_selection?.includes(item.core_behaviour_number)
          ? index
          : null,
      )
      .filter((i) => i !== null) as number[];

    setSelectedBehaviours(selectedIndexes);

    const pulseValue =
      m1Data?.pulse_check !== undefined && m1Data?.pulse_check !== null
        ? m1Data.pulse_check
        : null;

    setSelectedPulse(pulseValue);

    setInitialData({
      behaviours: selectedIndexes,
      pulse: pulseValue,
    });
  }, [m1Data, pathwayDetails]);

  return (
    <div className="animate-slideInRight">
      <StartPracticePerspective pathwayDetails={pathwayDetails} />

      <h2 className="text-[24px] sm:text-[28px] lg:text-[34px] font-[RocaTwo] font-bold text-[#0F4F58] mt-[40px]">
        Milestone 1: Understand & Commit
      </h2>

      <p className="mt-4 text-[#567F55] font-[Roboto] text-[14px] sm:text-[16px] lg:text-[18px] ml-0 sm:ml-[35px]">
        <span className="font-bold">
          This is a moment to pause and notice what resonates.{" "}
        </span>
        <br />
        You'll look through the Core Behaviours, notice a few common patterns we
        all fall into, and answer one short reflection question. When you're
        ready, you'll move on to Milestone 2 to start experimenting with small,
        real-world actions.
      </p>

      <h3 className="mt-10 text-[#567F55] font-bold font-[Roboto] text-[18px] sm:text-[20px] lg:text-[23px]">
        CORE BEHAVIOURS
      </h3>

      <p className="font-[Roboto] text-[#567F55] text-[14px] sm:text-[16px] lg:text-[17px] font-[400] ml-0 sm:ml-[20px]">
        {pathwayDetails?.core_behaviours?.intro}
      </p>

      {/* Question Row */}
      <div className="relative mt-10 flex items-start ml-0 sm:ml-[126px] gap-4 sm:gap-6">
        <Image
          src={images.qImg}
          alt="hand-q"
          width={107}
          height={107}
          className="w-[60px] sm:w-[80px] lg:w-[107px] h-auto shrink-0"
        />

        <p className="text-[16px] sm:text-[20px] lg:text-[23px] text-[#567F55] leading-snug font-[Roboto] mt-[10px] sm:mt-[30px]">
          Which of these behaviours feels most alive for you right now?
        </p>
      </div>

      {/* Behaviour Cards */}
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6 sm:gap-10">
        {pathwayDetails?.core_behaviours?.items.map((item, index) => (
          <BehaviourCard
            key={item?.core_behaviour_number}
            image={index === 1 ? images.coreTwo : images.coreOne}
            text={item?.text}
            isSelected={selectedBehaviours.includes(index)}
            onClick={() => toggleBehaviour(index)}
          />
        ))}
      </div>

      {/* Footer */}
      <MilestoneFooter
        nextLabel="Amplifier Behaviours"
        nextRoute={`/pathway-card?pillar=${pillarNumber}&principle=${pathwayDetails?.principle_number}`}
        openInNewTab={true}
        helperText={
          <>
            <strong>Lead or influence others?</strong> Explore Amplifier
            Behaviours, extra ways to shape culture through how you show up.
          </>
        }
      />

      {/* COMMON TRAPS */}
      <div className="mt-20">
        <h3 className="text-[18px] sm:text-[20px] lg:text-[23px] font-[Roboto] font-bold text-[#567F55] uppercase tracking-wide">
          Common Traps
        </h3>

        <p className="mt-4 text-[15px] sm:text-[17px] lg:text-[20px] text-[#567F55] leading-relaxed font-[Roboto] font-[400] ml-0 sm:ml-[20px]">
          {pathwayDetails?.common_traps?.intro}
        </p>

        {pathwayDetails?.common_traps?.items?.map((item) => {
          return (
            <ul
              className="mt-6 space-y-4 ml-[20px] sm:ml-[80px] lg:ml-[150px]"
              key={item?.common_trap_number}
            >
              <li className="relative flex items-start gap-5">
                <div className="absolute mt-[4px] z-20">
                  <ArrowSquare width={"24"} height={"19"} />
                </div>
                <p className="text-[#567F55] text-[14px] sm:text-[16px] lg:text-[17px] leading-snug ml-[32px] font-[League Spartan] font-bold">
                  {item?.text}
                </p>
              </li>
            </ul>
          );
        })}
      </div>

      {/* PULSE CHECK */}
      <div className="mt-24 flex flex-col lg:flex-row items-start lg:justify-between gap-10 max-w-[1000px]">
        {/* Left Content */}
        <div className="max-w-full lg:max-w-[420px]">
          <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-[Roboto] font-bold text-[#567F55] uppercase tracking-wide">
            Pulse Check
          </h3>

          <p className="mt-4 text-[16px] sm:text-[20px] lg:text-[23px] font-[Roboto] font-[400] leading-snug text-[#567F55] ml-0 sm:ml-[20px]">
            {pathwayDetails?.pulse_check_question}
          </p>
        </div>

        {/* Right Emojis */}
        <div className="relative mt-0 lg:mt-[80px]">
          {/* choose one arrow — hide on mobile to avoid overflow */}
          <div className="hidden lg:block w-[200px] absolute right-[81%] top-[-96%]">
            <Image
              src={images.emojiArrow}
              alt="choose-arrow"
              width={100}
              height={100}
              className="absolute -top-19 left-1/2 -translate-x-1/2"
            />
            <div className="absolute w-[75px] left-[20%] text-[#F2A39C] text-[14px] font-medium">
              choose one
            </div>
          </div>

          {/* Mobile label */}
          <p className="block lg:hidden text-[#F2A39C] text-[13px] mb-2">
            choose one
          </p>

          {/* Emoji row */}
          <div className="flex items-center gap-2 sm:gap-4 bg-transparent relative flex-wrap">
            {[1, 2, 3, 4, 5].map((val, index) => {
              const colors = [
                "#FF2D55",
                "#FF7A1A",
                "#FFC300",
                "#1FAA59",
                "#6BCB77",
              ];
              const isSelected = selectedPulse === val;

              return (
                <div
                  key={val}
                  className="cursor-pointer relative"
                  onClick={() => handlePulseSelect(val)}
                >
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    className="w-[52px] h-[52px] sm:w-[65px] sm:h-[65px] lg:w-[80px] lg:h-[80px]"
                  >
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke={colors[index]}
                      strokeWidth="3"
                      fill="none"
                    />
                    <circle cx="26" cy="30" r="4" fill={colors[index]} />
                    <circle cx="54" cy="30" r="4" fill={colors[index]} />
                    {val === 3 ? (
                      <line
                        x1="26"
                        y1="52"
                        x2="54"
                        y2="52"
                        stroke={colors[index]}
                        strokeWidth="3"
                      />
                    ) : val < 3 ? (
                      <path
                        d="M24 52 Q40 40 56 52"
                        stroke={colors[index]}
                        strokeWidth="3"
                        fill="none"
                      />
                    ) : (
                      <path
                        d="M24 48 Q40 60 56 48"
                        stroke={colors[index]}
                        strokeWidth="3"
                        fill="none"
                      />
                    )}
                  </svg>

                  {isSelected && (
                    <Image
                      src={images.orangeTick}
                      alt="tick"
                      width={60}
                      height={60}
                      className="absolute top-[0.75rem] right-1 w-[36px] sm:w-[48px] lg:w-[60px] h-auto"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

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
              isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            onMouseEnter={() => isDisabled && setShowCompMilestoneError(true)}
            onMouseLeave={() => setShowCompMilestoneError(false)}
            onClick={handleNext}
          >
            <Image
              src={images.personalQuiz}
              alt="card shape"
              width={80}
              height={140}
            />

            <div className={styles.cardText}>
              Move into <br />
              Practice
            </div>
          </div>
        </div>
      </div>

      {showCompMilestoneError && isDisabled && (
        <p className="text-red-500 text-[13px] sm:text-[14px] mt-3 text-right mr-[20px]">
          {getErrorMessage()}
        </p>
      )}
    </div>
  );
}

export default Milestone1;
