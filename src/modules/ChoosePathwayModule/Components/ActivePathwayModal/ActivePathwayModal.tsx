"use client";

import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Image from "next/image";
import images from "@/src/assets/images";
import useEventEmitter, {
  emitEvent,
} from "@/src/components/Hooks/useEventEmitter";
import { useActivePathwayMutation } from "../../Hooks/useActivePathwayMutation";
import SnackbarHandler from "@/src/lib/SnackbarHandler";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";

const EVENT = "OPEN_ACTIVE_PATHWAY_MODAL";

export const openActivePathwayModal = (
  uuid: string,
  mssg: any,
  principleNumber: number,
) => {
  emitEvent(EVENT, { uuid, mssg, principleNumber });
};

function ActivePathwayModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [uuid, setUuid] = useState<string | null>(null);
  const [mssgData, setMssgData] = useState<any>();
  const [principleNumber, setPrincipleNumber] = useState<number | null>(null);

  useEventEmitter(EVENT, ({ uuid, mssg, principleNumber }) => {
    setIsOpen(true);
    setUuid(uuid);
    setMssgData(mssg);
    setPrincipleNumber(principleNumber);
  });
  const { mutate: activateMpp, isPending } = useActivePathwayMutation();

  const handleActivate = () => {
    if (!uuid || principleNumber === null) return;

    activateMpp(
      { uuid },
      {
        onSuccess: () => {
          setIsOpen(false);

          // ✅ notify parent AFTER confirmation
          emitEvent("PATHWAY_CONFIRMED", {
            principleNumber,
          });

          SnackbarHandler.successToast("Pathway Activated");
        },
      },
    );
  };

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
            <div className="relative mt-10">
              <SuccessMessage
                text={mssgData?.message}
                fontSize="text-[22px]"
                leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
                rightImg={{
                  src: images.leftArrowImg,
                  width: 60,
                  height: 60,
                }}
                fontColor="#0F4F58"
                bottom="-1px"
                rightImgBottom="-1px"
                rotate="-35deg"
                maxWidth="400px"
              />
            </div>{" "}
          </DialogTitle>

          {/* Description */}
          <p className="text-[18px] leading-[1.4] text-[#567F55] px-2">
            This pathway has now been added to your Personal Pathway
          </p>

          <button
            onClick={() => handleActivate()}
            className="border border-[#567F55] text-[#567F55] px-6 py-3 rounded-full cursor-pointer"
          >
            Continue
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default ActivePathwayModal;
