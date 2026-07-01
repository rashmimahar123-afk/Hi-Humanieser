"use client";

import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import useEventEmitter, {
  emitEvent,
} from "@/src/components/Hooks/useEventEmitter";
import { useRouter } from "next/navigation";
import { openPreviewContentModal } from "../PreviewContentModal/PreviewContentModal";

const EVENT = "PREVIEW_QUESTIONS_MODAL";

export const openPreviewQuestionsModal = () => {
  emitEvent(EVENT);
};

function PreviewQuestionsModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEventEmitter(EVENT, () => {
    setIsOpen(true);
  });

  const router = useRouter();

  return (
    <Dialog open={isOpen} onClose={() => {}} className="relative z-[9999]">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

      {/* Wrapper */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-[720px] max-h-[90vh] overflow-y-auto rounded-[28px] bg-white p-8 text-left space-y-6">
          {/* Close */}
          {/* <button
            onClick={() => setIsOpen(false)}
            className="absolute right-6 top-4 text-xl font-bold cursor-pointer"
          >
            ✕
          </button> */}

          {/* Title */}
          <DialogTitle className="text-[26px] font-[700] text-[#0F4F58]">
            Preview Questions
          </DialogTitle>

          {/* Subtitle */}
          <p className="text-[16px] text-gray-600">
            Here’s what your organisation will see. <br />
            <span className="font-medium">
              10 quick questions, designed to reflect how work actually happens.
            </span>
          </p>

          {/* Sections */}
          <div className="space-y-5 text-[15px]">
            {/* CLARITY */}
            <div>
              <p className="font-semibold text-blue-600">🔵 CLARITY</p>
              <ul className="list-disc ml-5 mt-1 space-y-1 text-gray-600">
                <li>
                  When I start a piece of work, I’m clear on what good looks
                  like
                </li>
                <li>
                  I understand how my work connects to the bigger goals of my
                  team or organisation
                </li>
              </ul>
            </div>

            {/* ALIGNMENT */}
            <div>
              <p className="font-semibold text-purple-600">🟣 ALIGNMENT</p>
              <ul className="list-disc ml-5 mt-1 space-y-1 text-gray-600">
                <li>
                  I have a good sense of who to involve to move work forward
                </li>
                <li>
                  People across the team are usually working towards the same
                  outcomes
                </li>
              </ul>
            </div>

            {/* LOAD */}
            <div>
              <p className="font-semibold text-orange-500">🟠 LOAD</p>
              <ul className="list-disc ml-5 mt-1 space-y-1 text-gray-600">
                <li>I have enough time to do my work to a good standard</li>
                <li>I have enough space to think before acting on my work</li>
              </ul>
            </div>

            {/* SAFETY */}
            <div>
              <p className="font-semibold text-green-600">🟢 SAFETY</p>
              <ul className="list-disc ml-5 mt-1 space-y-1 text-gray-600">
                <li>
                  People raise concerns when they notice something is not right
                </li>
                <li>When issues are raised, they are handled constructively</li>
              </ul>
            </div>

            {/* OWNERSHIP */}
            <div>
              <p className="font-semibold text-red-600">🔴 OWNERSHIP</p>
              <ul className="list-disc ml-5 mt-1 space-y-1 text-gray-600">
                <li>
                  When something needs to move forward, people take initiative
                  to help
                </li>
                <li>People are able to make decisions within their role</li>
              </ul>
            </div>
          </div>

          {/* Footer Text */}
          <p className="text-[14px] text-gray-500 pt-2">
            Responses are given on a simple scale from strongly disagree to
            strongly agree.
          </p>

          {/* Back Button */}
          <div className="pt-4 flex justify-between items-center gap-2">
            {/* Back */}
            <button
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 rounded-full bg-gray-200 text-black font-semibold"
            >
              🟩 Back
            </button>

            {/* Proceed */}
            <button
              onClick={() => {
                setIsOpen(false);
                openPreviewContentModal();
              }}
              className="px-6 py-2 rounded-full bg-[#0F4F58] text-white font-semibold hover:opacity-90"
            >
              Proceed →
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default PreviewQuestionsModal;
