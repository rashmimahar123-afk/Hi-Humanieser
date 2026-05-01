"use client";

import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import useEventEmitter, {
  emitEvent,
} from "@/src/components/Hooks/useEventEmitter";

const EVENT = "SUGGEST_PRESSURE_POINT_MODAL_EVENT";

export const openSuggestPressurePointModal = () => {
  emitEvent(EVENT);
};

function SuggestPressurePointModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEventEmitter(EVENT, () => {
    setIsOpen(true);
    setIsSubmitted(false);
    setText("");
  });

  const handleSubmit = () => {
    if (!text.trim()) return;
    setIsSubmitted(true);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-[9999]"
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-[700px] rounded-[28px] bg-[#FBE6BF] p-8 space-y-6 text-center">
          {/* Close */}
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>

          {!isSubmitted ? (
            <>
              {/* Title */}
              <DialogTitle className="text-[26px] font-bold text-[#567F55]">
                Did we miss a pressure?
              </DialogTitle>

              {/* Description */}
              <p className="text-[16px] text-[#567F55]">
                These pressure points are based on common patterns we see across
                teams and organisations. If there’s a pressure you’re dealing
                with that is not reflected here, please let us know.
              </p>

              {/* Textarea */}
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write here..."
                className="w-full min-h-[150px] rounded-[16px] border border-[#A7D3CB] p-4 focus:outline-none"
              />

              {/* Submit */}
              <button
                onClick={handleSubmit}
                className="bg-[#567F55] text-white px-6 py-2 rounded-full"
              >
                Send
              </button>
            </>
          ) : (
            <>
              {/* Confirmation */}
              <DialogTitle className="text-[24px] font-bold text-[#567F55]">
                Thank you - we’ve got it.
              </DialogTitle>

              <p className="text-[16px] text-[#567F55]">
                We read these regularly and use them to evolve HH! over time.
              </p>

              <button
                onClick={() => setIsOpen(false)}
                className="bg-[#567F55] text-white px-6 py-2 rounded-full"
              >
                Close
              </button>
            </>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default SuggestPressurePointModal;
