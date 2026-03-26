"use client";

import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Image from "next/image";
import images from "@/src/assets/images";
import useEventEmitter, {
  emitEvent,
} from "@/src/components/Hooks/useEventEmitter";
import { queryClient } from "@/src/lib/ReactQueryConfig";
import { GET_PERSONAL_PATHWAY_QUERY_KEY } from "../../Hooks/usePersonalPathwayQuery";
import { useMilestoneDataContext } from "@/src/context/MilestoneDataContextProvider";

const EVENT = "OPEN_REMOVE_SHARE_REFLECTION_MODAL";

export const openRemoveShareModal = (data: string) => {
  emitEvent(EVENT, data);
};

function RemoveShareReflectionModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState();
  const { milestoneData, setMilestoneData } = useMilestoneDataContext();

  useEventEmitter(EVENT, (data) => {
    setId(data);
    setIsOpen(true);
  });
  const handleOkButton = async () => {
    await queryClient.refetchQueries({
      queryKey: GET_PERSONAL_PATHWAY_QUERY_KEY,
      type: "active",
    });

    setIsOpen(false);
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
            Updated!!
          </DialogTitle>

          {/* Description */}
          <p className="text-[18px] leading-[1.4] text-[#567F55] px-2">
            You have Successfully Remove Reflection from Reflection Wall
          </p>

          <button
            onClick={() => handleOkButton()}
            className="border border-[#567F55] text-[#567F55] px-6 py-3 rounded-full cursor-pointer"
          >
            Ok
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default RemoveShareReflectionModal;
