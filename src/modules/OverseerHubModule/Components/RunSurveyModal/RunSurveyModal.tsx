"use client";

import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import useEventEmitter, {
  emitEvent,
} from "@/src/components/Hooks/useEventEmitter";

const EVENT = "RUN_SURVEY_MODAL";

export const openRunSurveyModal = () => {
  emitEvent(EVENT);
};

function RunSurveyModal() {
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
      <div className="fixed inset-0 bg-black/60" />

      {/* Modal Wrapper */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-[520px] rounded-[28px] bg-[#FBE6BF] p-8 space-y-6 text-center relative">
          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-5 text-xl font-bold"
          >
            ✕
          </button>

          {/* Title */}
          <DialogTitle className="text-[26px] font-bold text-[#0F4F58] font-[RocaTwo]">
            Run Organisation Survey
          </DialogTitle>

          {/* Description */}
          <div className="text-[18px] text-[#0F4F58] space-y-4 font-[Roboto] leading-relaxed">
            <p>
              This will send a short, anonymous survey to everyone in your
              organisation.
            </p>

            <p>
              It includes 10 questions and takes less than 2 minutes to
              complete.
            </p>

            <p>
              Results will appear as responses come in, so you’ll be able to see
              participation and results in real time.
            </p>
          </div>

          {/* Buttons */}
          <div className="pt-4 flex justify-center gap-6">
            {/* Send Survey */}
            <button
              onClick={() => {
                setIsOpen(false);
                // 👉 yahan API call ya next action
              }}
              className="px-6 py-2 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700"
            >
              🟩 Send survey
            </button>

            {/* Cancel */}
            <button
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 rounded-full bg-gray-200 text-black font-semibold"
            >
              🟩 Cancel
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default RunSurveyModal;
