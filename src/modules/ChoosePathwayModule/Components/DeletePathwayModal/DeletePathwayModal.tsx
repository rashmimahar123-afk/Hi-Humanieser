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
import { GET_LIST_MPP_QUERY_KEY } from "../../Hooks/useGetListMppQuery";

const EVENT = "OPEN_DELETE_PATHWAY_MODAL";
const SUCCESS_EVENT = "DELETE_PATHWAY_SUCCESS";

export const openDeletePathwayModal = (data: {
  uuid: string;
  index: number;
}) => {
  emitEvent(EVENT, data);
};

function DeletePathwayModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<{ uuid: string; index: number } | null>(
    null,
  );

  useEventEmitter(EVENT, (payload) => {
    setData(payload);
    setIsOpen(true);
  });

  const { mutate: deleteMutate } = useDeletePathwayMutation();

  const handleRemovePathway = () => {
    if (!data) return;

    deleteMutate(
      { uuid: data.uuid },
      {
        onSuccess: (res) => {
          setIsOpen(false);
          SnackbarHandler.successToast(res?.message);

          emitEvent(SUCCESS_EVENT, data);

          queryClient.invalidateQueries({ queryKey: GET_LIST_MPP_QUERY_KEY });
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
            This pathway will be removed from your Personal Pathway and deleted
            from your records.
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
              onClick={() => data && handleRemovePathway()}
              className="px-4 py-2 rounded-lg bg-[#0F4F58] text-white"
            >
              Delete Pathway
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default DeletePathwayModal;
