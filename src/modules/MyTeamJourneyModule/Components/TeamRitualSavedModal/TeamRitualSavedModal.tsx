"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import useEventEmitter, {
  emitEvent,
} from "@/src/components/Hooks/useEventEmitter";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import images from "@/src/assets/images";
import { useGetMtjMessagesQuery } from "../../Hooks/useGetMtjMessagesQuery";

const EVENT = "OPEN_TEAM_RITUAL_SAVED_MODAL";

export const openTeamRitualSavedModal = () => {
  emitEvent(EVENT, {});
};

function TeamRitualSavedModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEventEmitter(EVENT, () => {
    setIsOpen(true);
  });

  const { data: randomMessage } = useGetMtjMessagesQuery();

  return (
    <Dialog
      open={isOpen}
      onClose={() => {}}
      className="relative z-[9999]"
    >
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-[640px] rounded-[28px] bg-[#F5F0EB] p-8 sm:p-10 text-center">
          <SuccessMessage
            text={randomMessage || ""}
            fontSize="text-[22px] sm:text-[26px]"
            maxWidth="max-w-full"
            leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
            rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
            fontColor="#0F4F58"
            rotate="-35deg"
          />

          <p className="mt-6 text-[#0F4F58] text-[15px] sm:text-[17px] font-[Aptos] font-[400] leading-[1.6]">
            Your reflection is saved and you can see it in{" "}
            <strong>My Dashboard,</strong> where you can come back to view or
            edit it at any time.
          </p>

          <p className="mt-4 text-[#0F4F58] text-[15px] sm:text-[17px] font-[Aptos] font-[400] leading-[1.6]">
            This ritual will stay here while your team cycle is still
            running. Keep practising it with your team until your Champion
            starts the next cycle and a new ritual becomes available.
          </p>

          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
            >
              <PolygonButton
                width="150px"
                height="80px"
                bgColor="#C2E2E2"
                radius={16}
                clipPath={`polygon(0px 35%, -9% 20px, 87% 0px, 96% 100%, 100% 100%, -6px 92%)`}
              >
                <div className="h-full w-full flex items-center justify-center text-center">
                  <span className="text-[#0f4f58] text-[22px] font-[RocaTwo] font-bold">
                    close
                  </span>
                </div>
              </PolygonButton>
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default TeamRitualSavedModal;
