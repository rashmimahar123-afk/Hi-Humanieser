import { useState } from "react";
import { openFillupModal } from "../FillUpFormModal/FillUpFormModal";
import { renderBoldQuotesText } from "@/src/lib/Helpers";
import { PILLAR_PRINCIPLE_TYPE } from "@/src/modules/ChoosePathwayModule/Types/ResponseTypes";
import {
  MICRO_ACTION_DATA,
  MILESTONE_TWO_DATA,
} from "../../Types/ResponseTypes";
import { useMilestoneDataContext } from "@/src/context/MilestoneDataContextProvider";
import usePersonalPathwayQuery, {
  GET_PERSONAL_PATHWAY_QUERY_KEY,
} from "../../Hooks/usePersonalPathwayQuery";
import { useUpdateMppMilestoneMutation } from "../../Hooks/useUpdateMppMilestoneMutation";
import { openConfirmShareReflectionModal } from "../ConfirmShareReflectionModal/ConfirmShareReflectionModal";
import { queryClient } from "@/src/lib/ReactQueryConfig";
import { openRemoveShareModal } from "../RemoveShareReflectionModal/RemoveShareReflectionModal";
import styles from "./MilestoneTwoActionRow.module.css";

type MILESTONE_TWO_ACTION_ROW_PROPS = {
  title: string;
  description: string;
  showSaveReflection?: boolean;
  isPinned: boolean;
  onPinToggle: () => void;
  isPracticeEnabled: boolean;
  id: string;
  microActionNumber: number;
  pathwayDetails: PILLAR_PRINCIPLE_TYPE;
  m2Data: MILESTONE_TWO_DATA;
};
function MilestoneTwoActionRow(props: MILESTONE_TWO_ACTION_ROW_PROPS) {
  const {
    title,
    description,
    showSaveReflection,
    isPinned,
    onPinToggle,
    isPracticeEnabled,
    id,
    microActionNumber,
    pathwayDetails,
    m2Data,
  } = props;

  // const { milestoneData } = useMilestoneDataContext();
  // const microActionReflections =
  //   milestoneData?.[pathwayDetails?.principle_number]?.m2?.[
  //     `micro_action_${microActionNumber}`
  //   ] ?? [];

  const microActionReflections =
    m2Data?.[`micro_action_${microActionNumber}`] ?? [];

  const { mutate: updateMilestone } = useUpdateMppMilestoneMutation();
  // const latestReflection =
  //   microActionReflections[microActionReflections.length - 1];
  // const isLatestShared = latestReflection?.share || false;

  const latestReflection =
    microActionReflections.length > 0
      ? microActionReflections[microActionReflections.length - 1]
      : null;

  const isLatestShared = latestReflection?.share ?? false;

  const handleShareToggle = async (value: boolean) => {
    // STEP 1: latest reflections update
    const updatedReflections = microActionReflections.map(
      (r: any, index: number) => {
        if (index === microActionReflections.length - 1) {
          return {
            ...r,
            share: value,
          };
        }
        return r;
      },
    );

    // STEP 2: always get fresh data
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

    const existingM2 = currentPathway?.[firstKey]?.m2 || {};
    const { micro_actions, ...cleanM2Data } = existingM2;

    // STEP 3: merge safely
    const payload = {
      uuid: id,
      milestone_key: "m2",
      data: {
        kind: "m2",
        ...cleanM2Data,
        [`micro_action_${microActionNumber}`]: updatedReflections,
      },
    };

    updateMilestone(payload, {
      onSuccess: async () => {
        if (value === true) {
          openConfirmShareReflectionModal(id);
        } else {
          openRemoveShareModal(id);
        }
      },
    });
  };
  const handleAddReflectionClick = () => {
    openFillupModal(`micro_action_${microActionNumber}`, id);
  };

  return (
    // <div className="grid grid-cols-[420px_360px_360px] gap-8">
    <div className="grid grid-cols-[450px_450px] gap-10">
      {/* MICRO-ACTION */}
      {/* <div className="relative bg-[#F5F0EB] rounded-[16px] p-6">
        <h4 className="text-[#567F55] font-bold text-[20px] mb-3 font-[Roboto]">
          {title}
        </h4>

        <p className="text-[#567F55] text-[18px] whitespace-pre-line leading-relaxed font-[Roboto] font-[400]">
          {renderBoldQuotes(description)}
        </p>
      </div> */}

      {/* MICRO-ACTION */}
      <div
        className={`relative bg-[#F5F0EB] rounded-[16px] p-6 pb-14 transition-all duration-300
  ${isPinned ? "bg-[#EAF4F2]" : ""}
`}
      >
        <h4 className="text-[#567F55] font-bold text-[20px] mb-3 font-[Roboto]">
          {title}
        </h4>

        <p className="text-[#567F55] text-[18px] whitespace-pre-line leading-relaxed font-[Roboto] font-[400]">
          {renderBoldQuotesText(description).map((part, i) =>
            part.startsWith("“") && part.endsWith("”") ? (
              <strong key={i}>{part}</strong>
            ) : (
              <span key={i}>{part}</span>
            ),
          )}{" "}
        </p>

        <div className="absolute bottom-5 right-6 flex items-center gap-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <span className="text-[15px] text-[#0F4F58] font-[Aptos]">
              Pin this Micro-Action
            </span>

            <input
              type="checkbox"
              checked={isPinned}
              onChange={onPinToggle}
              className="w-[22px] h-[22px] 
                 rounded-[6px] 
                 border-2 border-[#0F4F58] 
                 accent-[#0F4F58]
                 focus:outline-none 
                 focus:ring-0
                 cursor-pointer"
            />
          </label>
        </div>
      </div>

      {/* REFLECTION 1 */}
      {/* REFLECTIONS */}
      <div
        className={`relative bg-[#F5F0EB] rounded-[16px] p-6 transition-all duration-300
    ${isPracticeEnabled ? "opacity-100" : "opacity-40 pointer-events-none cursor-not-allowed"}
  `}
      >
        <div className="space-y-5">
          {/* Render existing reflections */}
          {latestReflection ? (
            // <div className="border-b border-dotted border-[#000000] py-2">
            //   <p className="text-[15px] text-[#0F4F58]">
            //     {latestReflection.reflection}
            //   </p>
            // </div>
            <div className={styles.reflectionWrapper}>
              <p className={styles.reflectionText}>
                {latestReflection.reflection}
              </p>
            </div>
          ) : (
            // Show empty lines if no reflections yet
            [...Array(7)].map((_, i) => (
              <div
                key={i}
                className="border-b border-dotted border-[#000000]"
              />
            ))
          )}
        </div>
        {/* Save Button */}
        <div className="flex justify-end mb-4 mt-4">
          {microActionReflections.length === 0 ? (
            <div>
              <button
                disabled={!isPracticeEnabled}
                onClick={() =>
                  openFillupModal(`micro_action_${microActionNumber}`, id)
                }
                className={`px-6 py-2 rounded-full text-[14px] font-[RocaTwo] font-bold cursor-pointer
          ${isPracticeEnabled ? "bg-[#F8E1B8] text-[#0F4F58]" : "bg-gray-200 text-gray-400 cursor-not-allowed"}
        `}
              >
                add reflection
              </button>
            </div>
          ) : microActionReflections.length < 2 ? (
            <div className="ml-4">
              <button
                disabled={!isPracticeEnabled}
                onClick={() => handleAddReflectionClick()}
                className={`px-6 py-2 rounded-full text-[14px] font-[RocaTwo] font-bold cursor-pointer
          ${isPracticeEnabled ? "bg-[#F8E1B8] text-[#0F4F58]" : "bg-gray-200 text-gray-400 cursor-not-allowed"}
        `}
              >
                add another reflection
              </button>
            </div>
          ) : null}
        </div>
        {/* Share Checkbox */}
        {microActionReflections.length > 0 && (
          <>
            <div className="flex justify-between">
              <div className="text-[17px] text-[#0F4F58] font-[Aptos] font-[400]">
                Share your insights with your team?
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={isLatestShared}
                  onChange={(e) => handleShareToggle(e.target.checked)}
                  className="mt-1 w-5 h-5 rounded border-[#0F4F58] cursor-pointer"
                />
              </div>
            </div>
            <p className="text-[14px] italic text-[#0F4F58] font-[Aptos] font-[400] ">
              if yes, your reflection will be shared anonymously on Reflection
              Walls
            </p>
          </>
        )}
      </div>
    </div>
  );
}
export default MilestoneTwoActionRow;
