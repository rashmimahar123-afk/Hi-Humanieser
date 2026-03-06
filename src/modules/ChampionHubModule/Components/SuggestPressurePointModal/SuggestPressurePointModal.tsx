"use client";

import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Image from "next/image";
import images from "@/src/assets/images";
import useEventEmitter, {
  emitEvent,
} from "@/src/components/Hooks/useEventEmitter";

const EVENT = "SUGGEST_PRESSURE_POINT_EVENT";

export const openSuggestPressurePointModal = () => {
  emitEvent(EVENT);
};

function SuggestPressurePointModal() {
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
            Thanks for your message
          </DialogTitle>

          {/* Description */}
          <p className="text-[18px] leading-[1.4] text-[#567F55] px-2">
            Your note has been sent to the Hi Humaniser! team.
          </p>

          <p className="text-[18px] leading-[1.4] text-[#567F55] px-2">
            Feedback, ideas, and questions from Humanisers help us keep
            improving the platform, so we really appreciate you taking the time
            to share yours.
          </p>
          <p className="text-[18px] leading-[1.4] text-[#567F55] px-2">
            We’ll review it and respond by email if needed.
          </p>

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
              >
                Return to Portal
              </div>
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default SuggestPressurePointModal;
