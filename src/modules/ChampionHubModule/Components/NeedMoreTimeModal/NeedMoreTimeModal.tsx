"use client";

import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Image from "next/image";
import images from "@/src/assets/images";
import useEventEmitter, {
  emitEvent,
} from "@/src/components/Hooks/useEventEmitter";
import { openExtendTimeModal } from "../YesExtendTimeModal/YesExtendTimeModal";

const EVENT = "NEED_MORE_TIME_MODAL_EVENT";

export const openNeedMoreTimeModal = () => {
  emitEvent(EVENT);
};

function NeedMoreTimeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEventEmitter(EVENT, () => {
    setIsOpen(true);
  });

  return (
    <Dialog open={isOpen} onClose={() => {}} className="relative z-[9999]">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

      {/* Modal wrapper */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-[520px] rounded-[28px] bg-[#FBE6BF] p-8 text-center space-y-6">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute left-[65%] font-bold cursor-pointer"
          >
            ✕
          </button>

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
            Extend Ritual?
          </DialogTitle>

          {/* Description */}
          <p className="text-[18px] leading-[1.4] text-[#567F55] px-2">
            Your team is in a good rhythm.
          </p>

          <p className="text-[18px] leading-[1.4] text-[#567F55] px-2">
            Would you like to extend this ritual for up to 2 more weeks?
          </p>
          <div className="flex gap-4 justify-center ">
            {" "}
            <button
              onClick={() => {
                setIsOpen(false);
                openExtendTimeModal();
              }}
              className="bg-[#567F55] text-white px-6 py-3 rounded-full cursor-pointer"
            >
              Yes, extend 2 weeks
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="border border-[#567F55] text-[#567F55] px-6 py-3 rounded-full cursor-pointer"
            >
              No, go back
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default NeedMoreTimeModal;
