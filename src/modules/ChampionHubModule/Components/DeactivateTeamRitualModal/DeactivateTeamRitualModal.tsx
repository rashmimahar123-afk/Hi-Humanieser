"use client";

import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Image from "next/image";
import images from "@/src/assets/images";
import useEventEmitter, {
  emitEvent,
} from "@/src/components/Hooks/useEventEmitter";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import useGetMtjCycleOverviewQuery from "../../Hooks/useGetCycleOverviewQuery";
import { useDeactivateRitualMutation } from "../../Hooks/useDeactivateRitualMutation";
import SnackbarHandler from "@/src/lib/SnackbarHandler";
import useGetMtjListQuery from "@/src/modules/MyTeamJourneyModule/Hooks/useGetMtjListQuery";
// import { useDeactivateRitualMutation } from "../../Hooks/useDeactivateRitualMutation";

const EVENT = "OPEN_DEACTIVATE_RITUAL_MODAL";

export const openDeactivateRitualModal = (data: {
  ritualId: string;
  focusAreaId: string;
}) => {
  emitEvent(EVENT, data);
};

function DeactivateRitualModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [ritualId, setRitualId] = useState("");
  const [focusAreaId, setFocusAreaId] = useState("");

  const { user } = useAuthValue();
  useEventEmitter(EVENT, (data) => {
    setRitualId(data.ritualId);
    setFocusAreaId(data.focusAreaId);
    setIsOpen(true);
  });
  const { refetch: refetchCycleOverview } = useGetMtjCycleOverviewQuery(
    user?.team_id,
  );

  const { refetch: refetchMtjList } = useGetMtjListQuery();

  // const { mutate: deactivateRitual, isPending } =
  //   useDeactivateRitualMutation();

  const { mutate: deactivateRitual, isPending } = useDeactivateRitualMutation();

  const handleDeactivate = () => {
    deactivateRitual(
      {
        team_ritual_id: ritualId,
      },
      {
        onSuccess: async (res) => {
          SnackbarHandler.successToast(res.message);

          await Promise.all([refetchCycleOverview(), refetchMtjList()]);

          setIsOpen(false);
        },
      },
    );
  };

  return (
    <Dialog open={isOpen} onClose={() => {}} className="relative z-[9999]">
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-[520px] rounded-[28px] bg-[#FBE6BF] p-8 text-center space-y-6">
          {/* Close */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="font-bold cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Icon */}
          <div className="flex justify-center">
            <Image
              src={images.signupTimer}
              alt="timer"
              width={80}
              height={80}
            />
          </div>

          {/* Title */}
          <DialogTitle className="text-[28px] font-[700] text-[#567F55]">
            Deactivate this ritual?
          </DialogTitle>

          {/* Description */}
          <p className="text-[18px] leading-[1.5] text-[#567F55] px-2">
            This ritual will no longer be active for your team. You can activate
            it again anytime if you decide to continue the practice.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-5 pt-2">
            <button
              onClick={() => setIsOpen(false)}
              className="min-w-[120px] rounded-xl border border-[#0F4F58] px-6 py-3 text-[#0F4F58] font-semibold hover:bg-[#0F4F58]/5"
            >
              Cancel
            </button>

            <button
              onClick={handleDeactivate}
              disabled={isPending}
              className="min-w-[180px] rounded-xl bg-[#0F4F58] px-6 py-3 text-white font-semibold disabled:opacity-50"
            >
              {isPending ? "Deactivating..." : "Deactivate Ritual"}
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default DeactivateRitualModal;
