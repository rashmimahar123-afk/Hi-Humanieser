"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import useEventEmitter, {
  emitEvent,
} from "@/src/components/Hooks/useEventEmitter";
import PreviewQuestions from "../PreviewQuestions/PreviewQuestions";

const EVENT = "PREVIEW_CONTENT_MODAL";

export const openPreviewContentModal = () => {
  emitEvent(EVENT);
};

function PreviewContentModal() {
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
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

      {/* Fullscreen Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="relative w-full max-w-[950px] h-[85vh] bg-white rounded-[24px] shadow-2xl overflow-hidden">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-6 z-50 text-2xl font-bold"
          >
            ✕
          </button>
          {/* Scrollable Content */}
          <div className="h-[85vh] overflow-y-auto px-6 py-6">
            {" "}
            <PreviewQuestions />
          </div>{" "}
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default PreviewContentModal;
