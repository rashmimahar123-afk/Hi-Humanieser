"use client";

import Image from "next/image";
import images from "@/src/assets/images";
import { useRouter } from "next/navigation";
import ArrowSquare from "@/src/components/ArrowSquare/ArrowSquare";
import styles from "./MilestoneThree.module.css";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import { useEffect, useState } from "react";
import StartPracticePerspective from "../StartPracticePerspective/StartPracticePerspective";
import { openFillupModal } from "../FillUpFormModal/FillUpFormModal";
import FillUpFormModal from "../FillUpFormModal/FillUpFormModal";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import { PILLAR_PRINCIPLE_TYPE } from "@/src/modules/ChoosePathwayModule/Types/ResponseTypes";
import { useCompletePathwayMutation } from "../../Hooks/useCompletePathwayMutation";
import { getPulseMessage } from "@/src/lib/Helpers";
import useChooseMyselfQuery from "@/src/modules/ChoosePathwayModule/Hooks/useChooseMyselfQuery";
import { useGetCompPathwayQuery } from "@/src/modules/WelcomeModule/Hooks/useGetCompPathwayQuery";
import { useQueryClient } from "@tanstack/react-query";
import { MILESTONE_THREE_DATA } from "../../Types/ResponseTypes";
import { useUpdateMppMilestoneMutation } from "../../Hooks/useUpdateMppMilestoneMutation";
import RemoveShareReflectionModal, {
  openRemoveShareModal,
} from "../RemoveShareReflectionModal/RemoveShareReflectionModal";
import ConfirmShareReflectionModal, {
  openConfirmShareReflectionModal,
} from "../ConfirmShareReflectionModal/ConfirmShareReflectionModal";
import { GET_PERSONAL_PATHWAY_QUERY_KEY } from "../../Hooks/usePersonalPathwayQuery";

type MILESTONE_THREE_PROPS = {
  ClosePracticePerspective: () => void;
  pathwayDetails: PILLAR_PRINCIPLE_TYPE | null;
  pillarNumber: number | null;
  id: string;
  m3Data: MILESTONE_THREE_DATA;
  m1Pulse: number;
};

function MilestoneThree(props: MILESTONE_THREE_PROPS) {
  const {
    ClosePracticePerspective,
    pathwayDetails,
    pillarNumber,
    id,
    m3Data,
    m1Pulse,
  } = props;
  const router = useRouter();

  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedPulse, setSelectedPulse] = useState<number | null>(null);
  const [pulseMessage, setPulseMessage] = useState<string>("");
  const [showPulseError, setShowPulseError] = useState(false);
  const [completionMessage, setCompletionMessage] = useState<string>("");
  const [showCompleteError, setShowCompleteError] = useState(false);
  const [selectedMicroActions, setSelectedMicroActions] = useState<string[]>(
    [],
  );
  const [isPulseInitialized, setIsPulseInitialized] = useState(false);

  const handlePulseSelect = (value: number) => {
    setIsPulseInitialized(true);

    setSelectedPulse(value);
    setPulseMessage(getPulseMessage(value, m1Pulse, pulseConfig));
  };
  const reflectionText = m3Data?.reflection?.reflection || "";
  const isReflectionFilled = !!reflectionText?.trim();
  const isCompleteEnabled = selectedPulse && isReflectionFilled;

  const { mutate: completePathwayMutate, isPending: isCompleting } =
    useCompletePathwayMutation();

  const handleCompleteClick = () => {
    completePathwayMutate(
      { uuid: id },
      {
        onSuccess: async () => {
          try {
            const res = await getRandomMessage();
            setCompletionMessage(res?.data || "");
            setShowSuccess(true);
          } catch (err) {
            setShowSuccess(true);
          }
        },
      },
    );
  };

  const { data: chooseMyselfData } = useChooseMyselfQuery();
  const pulseConfig =
    chooseMyselfData?.data?.[0]?.pulse_check_config?.comparison_feedback;

  const { data: pathwayMessage, refetch: getRandomMessage } =
    useGetCompPathwayQuery();

  const queryClient = useQueryClient();

  useEffect(() => {
    if (isPulseInitialized || !m3Data?.pulse_check || !pulseConfig) {
      return;
    }

    setSelectedPulse(m3Data.pulse_check);
    setPulseMessage(getPulseMessage(m3Data.pulse_check, m1Pulse, pulseConfig));

    setIsPulseInitialized(true);
  }, [isPulseInitialized, m3Data?.pulse_check, m1Pulse, pulseConfig]);
  const { mutate: updateM3 } = useUpdateMppMilestoneMutation();

  const handleCheckboxChange = (index: number) => {
    const key = `ma${index + 1}`;

    setSelectedMicroActions((prev) => {
      let updated;

      if (prev.includes(key)) {
        updated = prev.filter((item) => item !== key);
      } else {
        updated = [...prev, key];
      }

      const payload = {
        uuid: id,
        milestone_key: "m3",
        data: {
          kind: "m3",
          reflection: m3Data?.reflection || {
            reflection: "",
            share: false,
          },
          pulse_check: selectedPulse || m3Data?.pulse_check || 1,
          pin_to_dash: updated,
        },
      };

      updateM3(payload);

      return updated;
    });
  };

  const handleShareToggle = async (value: boolean) => {
    await queryClient.refetchQueries({
      queryKey: GET_PERSONAL_PATHWAY_QUERY_KEY,
      type: "active",
    });

    const freshData = queryClient.getQueryData<any>(
      GET_PERSONAL_PATHWAY_QUERY_KEY,
    );

    const pathways = freshData?.data?.pathways || [];
    const currentPathway = pathways.find((p: any) => p.uuid === id);

    const firstKey = Object.keys(currentPathway || {}).find(
      (k) => !["uuid", "created", "active"].includes(k),
    );

    const existingM3 = firstKey ? currentPathway?.[firstKey]?.m3 || {} : {};

    const payload = {
      uuid: id,
      milestone_key: "m3",
      data: {
        kind: "m3",
        reflection: {
          reflection:
            existingM3?.reflection?.reflection ??
            m3Data?.reflection?.reflection ??
            "",
          share: value,
        },
        // Keep existing pulse value
        pulse_check:
          selectedPulse ?? existingM3?.pulse_check ?? m3Data?.pulse_check,

        // Keep pinned micro actions
        pin_to_dash: existingM3?.pin_to_dash ?? m3Data?.pin_to_dash ?? [],
      },
    };

    updateM3(payload, {
      onSuccess: () => {
        if (value) {
          openConfirmShareReflectionModal(id);
        } else {
          openRemoveShareModal(id);
        }

        queryClient.invalidateQueries({
          queryKey: GET_PERSONAL_PATHWAY_QUERY_KEY,
        });
      },
    });
  };
  return (
    <div className="animate-slideInRight">
      <StartPracticePerspective pathwayDetails={pathwayDetails} />

      {/* Title */}
      <h2 className="text-[24px] sm:text-[28px] lg:text-[36px] font-[RocaTwo] font-bold text-[#0F4F58] mt-[40px]">
        Milestone 3: Lock In & Move Forward
      </h2>

      {/* Subtitle */}
      <p className="mt-4 text-[14px] sm:text-[16px] lg:text-[18px] text-[#567F55] font-[Roboto] ml-0 sm:ml-[35px]">
        <span className="font-bold">
          Reflect. Recognise Progress. Decide what sticks.
        </span>
        <br />
        <br />
        This is your moment to zoom out. Look at what's shifted, celebrate the
        progress, and choose the habits you want to carry forward. The goal
        isn't to do it all — it's to lock in what works for both you and your
        performance.
      </p>

      {/* Pulse Check Section */}
      <div className="mt-[40px] sm:mt-[60px] flex flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-8 lg:gap-0">
        {/* Left */}
        <div>
          <p className="text-[#567F55] text-[18px] sm:text-[20px] lg:text-[22px] font-bold tracking-wide font-[Roboto]">
            PULSE CHECK
          </p>

          <p className="mt-3 max-w-full lg:max-w-[420px] text-[#567F55] text-[16px] sm:text-[20px] lg:text-[23px] font-[Roboto] font-[400] ml-0 sm:ml-[82px]">
            How ready do you feel to approach challenges from different angles?
          </p>
        </div>

        {/* Right Emojis */}
        <div className="relative mt-0 lg:mt-[80px]">
          {/* Arrow decoration — desktop only */}
          <div className="hidden lg:block w-[200px] absolute right-[61%] top-[-96%]">
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

      {selectedPulse && pulseMessage && (
        <div className="mt-10 relative">
          <SuccessMessage
            text={pulseMessage}
            fontSize="text-[16px] sm:text-[19px] lg:text-[22px]"
            leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
            rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
            fontColor="#0F4F58"
            left="0px"
            bottom="-1px"
            rightImgRight="0px"
            rightImgBottom="-5px"
            rotate="-35deg"
          />
        </div>
      )}

      {/* Reflection Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start mt-[40px] sm:mt-[60px] gap-8 lg:gap-0">
        {/* Left Text */}
        <div className="max-w-full lg:max-w-[520px]">
          <p className="text-[#567F55] text-[18px] sm:text-[20px] lg:text-[22px] font-bold font-[Roboto] tracking-wide">
            REFLECTION PROMPT
          </p>

          <p className="mt-3 text-[#567F55] text-[16px] sm:text-[20px] lg:text-[23px] leading-[1.6] font-[Roboto] font-[400] ml-0 sm:ml-[20px]">
            What did you notice about how safety (or lack of it) shows up in
            your day-to-day work?
          </p>
        </div>

        {/* Right Paper Image */}
        <div className="relative w-full lg:w-[360px] max-w-[400px]">
          <Image
            src={images.promptImg}
            alt="reflection prompt"
            width={560}
            height={420}
            className="w-full object-contain"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 px-6 sm:px-8 py-8 sm:py-10 flex flex-col">
            <Image
              src={images.calImg}
              alt="arrow"
              width={80}
              height={80}
              className="hidden lg:block absolute -right-[1%] -top-[2%]"
            />
            <p className="hidden lg:block text-[#F2A39C] text-[14px] leading-[1.5] absolute -top-[5%] -right-[12%]">
              fill me up
            </p>

            {/* Dotted Lines */}
            <div className="space-y-3 mt-8">
              {reflectionText ? (
                <div className={styles.reflectionWrapper}>
                  <p className={styles.reflectionText}>{reflectionText}</p>
                </div>
              ) : (
                <>
                  {Array?.from({ length: 8 }).map((_item, i) => (
                    <div
                      key={`_item${i}`}
                      className="border-b border-dashed border-[#000000]"
                    />
                  ))}
                </>
              )}
            </div>

            {/* <div className="flex justify-end mt-[7px]">
              <div
                className={
                  selectedPulse
                    ? "cursor-pointer"
                    : "cursor-not-allowed opacity-50"
                }
                onMouseEnter={() => !selectedPulse && setShowPulseError(true)}
                onMouseLeave={() => setShowPulseError(false)}
                onClick={() => {
                  if (!selectedPulse) return;
                  openFillupModal(
                    "milestone3",
                    id,
                    selectedPulse,
                    selectedMicroActions,
                  );
                }}
              >
                <PolygonButton
                  width="90px"
                  height="68px"
                  bgColor="#4ba6a6"
                  radius={14}
                  clipPath={`polygon(18% 12%, 82% 2%, 100% 88%, 6% 100%)`}
                >
                  <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-[#0F4F58] font-[RocaTwo] font-bold text-center pointer-events-none">
                    <span className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[22px]">
                      Click Me To
                    </span>
                    <span className="text-[17px] sm:text-[19px] lg:text-[22px] leading-[22px]">
                      Fill up
                    </span>
                  </div>
                </PolygonButton>
              </div>
            </div> */}
            {!reflectionText ? (
              <div className="flex justify-end mt-[7px]">
                <div
                  className={
                    selectedPulse
                      ? "cursor-pointer"
                      : "cursor-not-allowed opacity-50"
                  }
                  onClick={() => {
                    if (!selectedPulse) return;

                    openFillupModal(
                      "milestone3",
                      id,
                      selectedPulse,
                      selectedMicroActions,
                    );
                  }}
                >
                  <PolygonButton
                    width="90px"
                    height="68px"
                    bgColor="#4ba6a6"
                    radius={14}
                    clipPath={`polygon(18% 12%, 82% 2%, 100% 88%, 6% 100%)`}
                  >
                    <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-[#0F4F58] font-[RocaTwo] font-bold">
                      <span>Click Me To</span>
                      <span>Fill up</span>
                    </div>
                  </PolygonButton>
                </div>
              </div>
            ) : (
              <div className="mt-6">
                <div className="flex justify-between">
                  <div className="text-[17px] text-[#0F4F58] font-[Aptos] font-[400]">
                    Share your insights with your team?
                  </div>

                  <input
                    type="checkbox"
                    checked={m3Data?.reflection?.share ?? false}
                    onChange={(e) => handleShareToggle(e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-[#0F4F58] cursor-pointer"
                  />
                </div>

                <p className="text-[14px] italic text-[#0F4F58] font-[Aptos] font-[400]">
                  If yes, your reflection will be shared anonymously on
                  Reflection Walls
                </p>
              </div>
            )}
            {showPulseError && !selectedPulse && (
              <p className="text-red-500 text-[12px] sm:text-[14px] text-right">
                First select the pulse check then move forward
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Save Favourite Section */}
      <div className="relative mt-[40px] sm:mt-[60px]">
        {/* Heading & Description */}
        <div className="max-w-full lg:max-w-[880px]">
          <p className="text-[#567F55] text-[18px] sm:text-[20px] lg:text-[22px] font-bold font-[Roboto]">
            SAVE YOUR FAVOURITE (optional)
          </p>

          <p className="mt-3 text-[#567F55] text-[15px] sm:text-[19px] lg:text-[23px] leading-[1.6] font-[400] font-[Roboto] ml-0 sm:ml-[20px]">
            Choose any micro-actions you'd like to keep as favourites — they'll
            live in your Dashboard so you can return to them anytime.
          </p>
        </div>

        {/* Micro Actions Card */}
        <div className="w-full">
          <div className="flex">
            <div className="mt-[40px] bg-[#F5F0EB] rounded-[20px] px-[20px] sm:px-[40px] py-[24px] sm:py-[30px] w-full lg:w-[800px] ml-0 lg:ml-[110px]">
              {/* Header */}
              <div className="flex justify-between mb-6">
                <p className="text-[#567F55] font-bold text-[14px] sm:text-[17px] lg:text-[19px] font-[Roboto]">
                  MICRO-ACTIONS
                </p>

                <p className="text-[#567F55] font-bold text-[13px] sm:text-[16px] lg:text-[19px] text-right font-[Roboto]">
                  ADD TO ACTIVE <br /> PRACTICE LIST?
                </p>
              </div>

              {/* Rows */}
              <div className="space-y-6">
                {pathwayDetails?.micro_actions.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[1fr_40px] sm:grid-cols-[1fr_72px] items-center gap-2"
                  >
                    {/* Left: arrow + text */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="mt-[4px] shrink-0">
                        <ArrowSquare width={"22"} height={"17"} />
                      </div>

                      <p className="text-[#567F55] text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.5] font-[Roboto] font-[400]">
                        {item?.description}
                      </p>
                    </div>

                    {/* Right: checkbox */}
                    <div className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        checked={selectedMicroActions.includes(
                          `ma${index + 1}`,
                        )}
                        onChange={() => handleCheckboxChange(index)}
                        className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] rounded-[6px] border-2 border-[#0F4F58]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Helper Text — desktop only, absolutely positioned */}
        <div className="hidden lg:block">
          <Image
            src={images.microArrow}
            alt="arrow"
            width={80}
            height={80}
            className="absolute left-[83%] top-[53%]"
          />

          <p className="text-[#F2A39C] text-[14px] leading-[1.5] absolute -right-[4%] top-[53%] max-w-[128px]">
            Tick the ones you want to keep in play — they'll join your Active
            Practices, ready and waiting on your Dashboard.
          </p>
        </div>

        {/* Mobile helper text */}
        <p className="block lg:hidden text-[#F2A39C] text-[12px] mt-3 ml-1">
          Tick the ones you want to keep in play — they'll join your Active
          Practices on your Dashboard.
        </p>
      </div>

      {/* Complete Button */}
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
              isCompleteEnabled
                ? "cursor-pointer"
                : "opacity-50 cursor-not-allowed"
            }`}
            onMouseEnter={() =>
              !isCompleteEnabled && setShowCompleteError(true)
            }
            onMouseLeave={() => setShowCompleteError(false)}
            onClick={() => {
              if (!isCompleteEnabled) return;
              handleCompleteClick();
            }}
          >
            <Image
              src={images.personalQuiz}
              alt="card shape"
              width={80}
              height={140}
            />

            <div className={styles.cardText}>
              Complete <br />
              My pathway
            </div>
          </div>
        </div>
      </div>

      {showCompleteError && !isCompleteEnabled && (
        <p className="text-red-500 text-[13px] sm:text-[14px] text-right mt-2">
          Please complete pulse check and all reflection prompts before
          continuing
        </p>
      )}

      {showSuccess && (
        <>
          <SuccessMessage
            text={completionMessage}
            fontSize="text-[16px] sm:text-[18px] lg:text-[21px]"
            leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
            rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
            fontColor="#0f4f58"
            bottom="-1px"
            rightImgBottom="-1px"
            rotate="-35deg"
          />

          <div className="mt-[40px] flex flex-col sm:flex-row justify-between gap-4">
            <button
              onClick={() => router.push("/choose-pathway")}
              className="bg-[#F5F0EB] px-4 sm:px-6 py-3 rounded-xl text-[#0F4F58] font-[400] text-[14px] sm:text-[16px] flex items-center gap-3 sm:gap-4 font-[Aptos] cursor-pointer"
            >
              Start a New Pathway
              <Image
                src={images.milestoneArrow}
                alt="arrow"
                width={51}
                height={51}
                className="w-[36px] sm:w-[51px] h-auto"
              />
            </button>

            <button
              onClick={() => {
                queryClient.invalidateQueries({
                  queryKey: ["getPersonalPathwyQueryKey"],
                });
                ClosePracticePerspective();
              }}
              className="bg-[#F5F0EB] px-4 sm:px-6 py-3 rounded-xl text-[#0F4F58] font-[400] text-[14px] sm:text-[16px] flex items-center gap-3 sm:gap-4 font-[Aptos] cursor-pointer"
            >
              Return to My Personal Pathway
              <Image
                src={images.milestoneArrow}
                alt="arrow"
                width={51}
                height={51}
                className="w-[36px] sm:w-[51px] h-auto"
              />
            </button>
          </div>
        </>
      )}

      <FillUpFormModal />
      <ConfirmShareReflectionModal />
      <RemoveShareReflectionModal />
    </div>
  );
}

export default MilestoneThree;
