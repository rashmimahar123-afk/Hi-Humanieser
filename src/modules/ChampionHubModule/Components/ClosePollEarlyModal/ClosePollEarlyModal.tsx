"use client";

import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";
import images from "@/src/assets/images";
import useEventEmitter, {
  emitEvent,
} from "@/src/components/Hooks/useEventEmitter";
import { useClosePollMutation } from "../../Hooks/useClosePollMutation";
import SnackbarHandler from "@/src/lib/SnackbarHandler";

const EVENT = "CLOSE_POLL_EARLY_MODAL_EVENT";

export const openClosePollEarlyModal = () => {
  emitEvent(EVENT);
};

type CLOSE_POLL_EARLY_MODAL_PROPS = {
  onPollClosed?: () => void;
};

function ClosePollEarlyModal({ onPollClosed }: CLOSE_POLL_EARLY_MODAL_PROPS) {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();

  useEventEmitter(EVENT, () => {
    setIsOpen(true);
  });

  const { mutate, isPending } = useClosePollMutation();
  const handleClosePoll = () => {
    mutate(undefined, {
      onSuccess: async () => {
        // Refresh poll status so the suggested focus areas show up
        await queryClient.invalidateQueries();
        onPollClosed?.();
        setIsOpen(false);
      },
      onError: (error: any) => {
        SnackbarHandler.errorToast(
          error?.response?.data?.detail?.message ||
            error?.response?.data?.message ||
            "Something went wrong",
        );
      },
    });
  };

  return (
    <Dialog open={isOpen} onClose={() => {}} className="relative z-[9999]">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

      {/* Modal wrapper */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-[560px] rounded-[28px] bg-[#FBE6BF] p-8 text-center space-y-6">
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="font-bold cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Timer Image */}
          <div className="flex justify-center">
            <Image
              src={images.signupTimer}
              alt="timer"
              width={80}
              height={80}
            />
          </div>

          {/* Title */}
          <DialogTitle className="text-[28px] font-[700] text-[#567F55]">
            Close the team poll early?
          </DialogTitle>

          {/* Description */}
          <p className="text-[18px] leading-[1.4] text-[#567F55] px-2">
            We recommend 70% participation to give more people a voice.
            However, once 50% of your team has responded, you can choose to
            move forward.
          </p>

          <p className="text-[18px] leading-[1.4] text-[#567F55] px-2">
            Once closed, no further responses can be submitted.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setIsOpen(false)}
              className="border border-[#567F55] text-[#567F55] px-6 py-3 rounded-full cursor-pointer"
              disabled={isPending}
            >
              Keep Poll Open
            </button>
            <button
              onClick={handleClosePoll}
              className="bg-[#567F55] text-white px-6 py-3 rounded-full cursor-pointer disabled:opacity-50"
              disabled={isPending}
            >
              {isPending ? "Closing..." : "Close Poll & Continue"}
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default ClosePollEarlyModal;
