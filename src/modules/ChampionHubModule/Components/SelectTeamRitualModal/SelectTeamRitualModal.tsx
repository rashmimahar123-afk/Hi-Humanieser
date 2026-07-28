"use client";

import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Image from "next/image";
import images from "@/src/assets/images";
import useEventEmitter, {
  emitEvent,
} from "@/src/components/Hooks/useEventEmitter";
import { useFocusAndRitualSelectMutation } from "../../Hooks/useFocusAndRitualSelectMutation";
import useGetMtjCycleOverviewQuery from "../../Hooks/useGetCycleOverviewQuery";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import { useActivateRitualMutation } from "../../Hooks/useActivateRitualMutation";
import SnackbarHandler from "@/src/lib/SnackbarHandler";

const EVENT = "SELECT_TEAM_RITUAL_MODAL_EVENT";

export const openSelectTeamRitualModal = (data: {
  ritualId: string;
  focusAreaId: string;
}) => {
  emitEvent(EVENT, data);
};
function SelectTeamRitualModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [reflection, setReflection] = useState("");
  const [selectedRitualId, setSelectedRitualId] = useState<string>("");
  const [focusAreaId, setFocusAreaId] = useState<string>("");
  const { user } = useAuthValue();

  useEventEmitter(EVENT, (data) => {
    setSelectedRitualId(data?.ritualId);
    setFocusAreaId(data?.focusAreaId);
    setIsOpen(true);
  });

  // const { mutate: submitFocusAndRitualSelection, isPending } =
  //   useFocusAndRitualSelectMutation();

  const { mutate: submitFocusAndRitualSelection, isPending } =
    useActivateRitualMutation();

  const { refetch: refetchCycleOverview } = useGetMtjCycleOverviewQuery(
    user?.team_id,
  );

  //   const handleActivateRitual = () => {
  //     submitFocusAndRitualSelection(
  //       {
  //         focus_area: focusAreaId,
  //         team_ritual_id: selectedRitualId,
  //               activation_message: reflection,

  //       },
  //       {
  //        onSuccess: async () => {
  //   await refetchCycleOverview();
  //   setIsOpen(false);
  // }
  //       },
  //     );
  //   };

  const handleActivateRitual = () => {
    submitFocusAndRitualSelection(
      {
        focus_area: focusAreaId,
        team_ritual_id: selectedRitualId,
        activation_message: reflection,
      },
      {
        onSuccess: async (res) => {
          SnackbarHandler.successToast(res.message);
          await refetchCycleOverview();
          setReflection("");
          setIsOpen(false);
        },
      },
    );
  };

  return (
    <Dialog open={isOpen} onClose={() => {}} className="relative z-[9999]">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

      {/* Modal wrapper */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-[800px] rounded-[28px] bg-[#FBE6BF] p-8 text-center space-y-6">
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className=" font-bold cursor-pointer"
            >
              ✕
            </button>
          </div>
          {/* Timer Image */}
          <div className="flex justify-center">
            <Image
              src={images.signupTimer} // hourglass / timer image
              alt="timer"
              width={80}
              height={80}
            />
          </div>

          {/* Title */}
          <DialogTitle className="text-[28px] font-[700] text-[#567F55]">
            Great choice - this ritual can really help your team.
          </DialogTitle>

          {/* Description */}
          <p className="text-[18px] leading-[1.4] text-[#567F55] px-2">
            Before activating it, add a short note to introduce it to your team.
            A few warm words from you help set the tone and make the practice
            feel inviting and human.
          </p>

          <textarea
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            placeholder="Write your reflection here…"
            className="
              w-full
              min-h-[180px]
              resize-none
              rounded-[18px]
              border border-[#A7D3CB]
              bg-transparent
              px-4 py-3
              text-[15px]
              text-[#0F4F58]
              placeholder:text-[#8FA8A4]
              focus:outline-none
              focus:ring-2
              focus:ring-[#A7D3CB]
            "
          />

          {/* Resend */}

          {/* Resend */}

          <div className="flex justify-center items-center gap-3 pt-2">
            {/* Resend Button */}
            <button className="relative flex items-center justify-center ml-[30px]">
              {/* Polygon */}
              <Image
                src={images.signupPolygon}
                alt="resend-bg"
                width={90}
                height={90}
                className="rotate-[-6deg]"
              />

              {/* Text on polygon */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center
                 text-[#0F4F58] font-bold text-[22px] leading-[1] cursor-pointer"
                style={{ fontFamily: "RocaTwo" }}
                onClick={handleActivateRitual}
              >
                Activate Ritual
              </div>
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default SelectTeamRitualModal;
