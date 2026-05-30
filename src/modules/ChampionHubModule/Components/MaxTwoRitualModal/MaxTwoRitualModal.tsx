"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import images from "@/src/assets/images";
import useEventEmitter, {
  emitEvent,
} from "@/src/components/Hooks/useEventEmitter";

const EVENT = "SHOW_MAX_TWO_RITUAL_EVENT";

export const openMaxTwoRitual = () => {
  emitEvent(EVENT);
};

function MaxTwoRitualModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEventEmitter(EVENT, () => {
    setIsOpen(true);
  });

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-[9999]"
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px]" />

      {/* Modal Wrapper */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="relative w-full max-w-[520px] overflow-hidden rounded-[32px] bg-[#FFF8EE] shadow-2xl">
          
          {/* Top Decorative Section */}
          <div className="relative bg-[#FBE6BF] px-8 pt-10 pb-16">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#567F55] shadow-md transition hover:scale-105"
            >
              ✕
            </button>

            {/* Icon */}
            <div className="flex justify-center">
              <div className="flex h-[95px] w-[95px] items-center justify-center rounded-full bg-white shadow-lg">
                <Image
                  src={images.signupTimer}
                  alt="timer"
                  width={52}
                  height={52}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 pb-8 -mt-8 text-center">
            <div className="rounded-[28px] px-8 py-10 shadow-lg">
              
              <h2
                className="text-[30px] text-[#0F4F58] font-bold mb-4"
                style={{ fontFamily: "RocaTwo-Bold" }}
              >
                Ritual Limit Reached
              </h2>

              <p className="text-[18px] leading-[30px] text-[#567F55] font-[Roboto]">
                Your team can only select{" "}
                <span className="font-bold text-[#0F4F58]">
                  2 rituals
                </span>{" "}
                at a time.
                <br />
                Please deselect an existing ritual before choosing another.
              </p>

              {/* Button */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full bg-[#567F55] px-8 py-3 text-[17px] font-medium text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default MaxTwoRitualModal;