"use client";

import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Image from "next/image";
import images from "@/src/assets/images";
import useEventEmitter, {
  emitEvent,
} from "@/src/components/Hooks/useEventEmitter";

const EVENT = "YES_COMPLETE_RITUAL_EVENT";

export const openCompleteRitualModal = () => {
  emitEvent(EVENT);
};

function YesCompleteRitualModal() {
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

          {/* Title */}
          <DialogTitle className="text-[28px] font-[700] text-[#567F55]">
            Cycle completed!
          </DialogTitle>

          {/* Description */}
          <p className="text-[18px] leading-[1.4] text-[#567F55] px-2">
            Your team has finished this cycle.
          </p>

          <p className="text-[18px] leading-[1.4] text-[#567F55] px-2">
            Ready to keep the momentum? Start a new cycle to choose the next
            pressure point and set your next team ritual.
          </p>
          <div className="flex justify-center items-center gap-3 pt-2">
            {/* Resend Button */}
            <button
              className="relative flex items-center justify-center ml-[30px]"
              onClick={() => setIsOpen(false)}
            >
              {/* Polygon */}
              <Image
                src={images.signupPolygon}
                alt="resend-bg"
                width={120}
                height={90}
                className="rotate-[-6deg]"
              />

              {/* Text on polygon */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center
                 text-[#0F4F58] font-bold text-[22px] leading-[1] cursor-pointer"
                style={{ fontFamily: "RocaTwo" }}
              >
                Start New Cycle
              </div>
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default YesCompleteRitualModal;
