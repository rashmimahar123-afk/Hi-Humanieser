"use client";

import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Image from "next/image";
import images from "@/src/assets/images";
import useEventEmitter, {
  emitEvent,
} from "@/src/components/Hooks/useEventEmitter";
import { useDeletePathwayMutation } from "@/src/modules/ChoosePathwayModule/Hooks/useDeletePathwayMutation";
import SnackbarHandler from "@/src/lib/SnackbarHandler";
import { queryClient } from "@/src/lib/ReactQueryConfig";
import { GET_PERSONAL_PATHWAY_QUERY_KEY } from "../../Hooks/usePersonalPathwayQuery";

const EVENT = "OPEN_REMOVE_PATHWAY_MODAL";

export const openRemovePathwayModal = (data: string) => {
  emitEvent(EVENT, data);
};

function RemovePathwayModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");

  useEventEmitter(EVENT, (data) => {
    setId(data);
    setIsOpen(true);
  });

  const { mutate: deleteMutate } = useDeletePathwayMutation();

  const handleRemovePathway = (id: string) => {
    deleteMutate(
      { uuid: id },
      {
        onSuccess: async (res) => {
          setIsOpen(false);
          SnackbarHandler.successToast(res?.message);
          await queryClient.refetchQueries({
            queryKey: GET_PERSONAL_PATHWAY_QUERY_KEY,
            type: "active",
          });
        },
        onError: (err) => {
          console.log("Delete API error", err);
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
        <DialogPanel className="w-full max-w-[520px] rounded-[28px] bg-[#FBE6BF] p-8 text-center space-y-6">
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
            Remove this pathway?
          </DialogTitle>

          {/* Description */}
          <p className="text-[18px] leading-[1.4] text-[#567F55] px-2">
            This will remove the pathway from your Personal Pathway and your
            Dashboard. Your progress will be cleared.
          </p>

          <div className="flex gap-6 justify-center">
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-lg border border-[#0F4F58] text-[#0F4F58]"
            >
              Cancel
            </button>

            {/* REMOVE */}
            <button
              onClick={() => {
                handleRemovePathway(id);
              }}
              className="px-4 py-2 rounded-lg bg-[#0F4F58] text-white"
            >
              Remove pathway
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default RemovePathwayModal;
