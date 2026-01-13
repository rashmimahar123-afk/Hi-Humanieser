"use client";

import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Image from "next/image";
import images from "@/src/assets/images";
import useEventEmitter, {
  emitEvent,
} from "@/src/components/Hooks/useEventEmitter";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter } from "next/navigation";

const EVENT = "ADD_VOICE_MODAL_EVENT";

export const openVoiceModal = () => {
  emitEvent(EVENT);
};

function AddVoiceModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEventEmitter(EVENT, () => {
    setIsOpen(true);
  });
  const router = useRouter();

  return (
    <Dialog open={isOpen} onClose={() => {}} className="relative z-[9999]">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

      {/* Modal wrapper */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="relative w-full max-w-[720px] rounded-[28px] bg-[#F5F0EB] px-14 py-12">
          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-[#244E52] text-xl font-bold"
          >
            ✕
          </button>

          {/* Logo */}
          <p className="font-[Aptos] text-[#567F55] text-[23px] mb-6">
            Hi Humaniser!™
          </p>

          {/* Title */}
          <DialogTitle
            className="text-[51px] font-bold text-[#0F4F58] mb-6 font-[RocaTwo ] ml-[40px]"
            style={{ fontFamily: "RocaTwo" }}
          >
            Thank You Maria!
          </DialogTitle>
          <div className="ml-[80px]">
            {/* Subtitle */}
            <p className="text-[#0F4F58] text-[22px] font-[700] font-[Aptos] mb-4 ">
              Your voice matters.
            </p>

            {/* Description */}
            <p className="text-[#0F4F58] text-[22px] max-w-[520px] leading-relaxed mb-10 font-[Aptos] font-[400]">
              Once the whole team has voted, your Champion will choose a ritual
              based on everyone’s input. You’ll see it right here, ready for
              your team to try together.
            </p>
          </div>
          {/* CTA Buttons */}
          <div className="flex justify-end ">
            <div className="mt-[30px] flex flex-col items-center gap-[14px] ">
              <CommonButtons
                label="Return to
My Personal Pathway"
                bgColor="#C2E2E2"
                onClick={() => router.push("/choose-pathway")}
              />
              <CommonButtons
                label="Return to Home"
                bgColor="#C2E2E2"
                onClick={() => router.push("/choose-pathway")}
              />
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default AddVoiceModal;
