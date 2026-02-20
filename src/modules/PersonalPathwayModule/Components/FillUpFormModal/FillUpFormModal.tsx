"use client";

import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Image from "next/image";
import images from "@/src/assets/images";
import useEventEmitter, {
  emitEvent,
} from "@/src/components/Hooks/useEventEmitter";

const EVENT = "FILL_UP_FORM_MODAL_EVENT";

export const openFillupModal = () => {
  emitEvent(EVENT);
};

function FillUpFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [reflection, setReflection] = useState("");
  const [share, setShare] = useState(false);

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

      {/* Modal wrapper */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="relative w-full max-w-[520px] rounded-[28px] bg-[#FBE6BF] p-8 space-y-6">
          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-6 top-6 text-[18px] font-bold cursor-pointer"
          >
            ✕
          </button>

          {/* Image */}
          <div className="flex justify-center">
            <Image
              src={images.signupTimer}
              alt="timer"
              width={70}
              height={70}
            />
          </div>

          {/* Title */}
          <DialogTitle className="text-[26px] font-bold text-[#567F55] text-center">
            Take a moment to reflect
          </DialogTitle>

          {/* ===== Textarea ===== */}
          <textarea
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            placeholder="Write your reflection here…"
            className="
              w-full
              min-h-[180px]
              resize-none
              rounded-[18px]
              border border-[#A7D3CB]
              bg-transparent
              px-4 py-3
              text-[15px]
              text-[#0F4F58]
              placeholder:text-[#8FA8A4]
              focus:outline-none
              focus:ring-2
              focus:ring-[#A7D3CB]
            "
          />

          {/* ===== Checkbox Section ===== */}
          <div className="mt-[10px] flex items-start justify-between gap-3">
            <div>
              <p className="text-[14px] text-[#0F4F58]">
                Share your insights with your team?
              </p>
              <p className="text-[11px] text-[#0F4F58] leading-[1.4]">
                If yes, your reflection will be shared anonymously on Ritual
                Walls
              </p>
            </div>

            <input
              type="checkbox"
              checked={share}
              onChange={(e) => setShare(e.target.checked)}
              className="
                mt-1
                w-5 h-5
                rounded
                border-2
                border-[#0F4F58]
                accent-[#0F4F58]
                cursor-pointer
              "
            />
          </div>

          {/* ===== Save Button ===== */}
          <button
            onClick={() => {
              console.log({ reflection, share });
              setIsOpen(false);
            }}
            className="
              mt-4
              w-full
              rounded-xl
              bg-[#0F4F58]
              py-3
              text-white
              text-[15px]
              font-medium
              hover:opacity-90
              transition
            "
          >
            Save reflection
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default FillUpFormModal;
