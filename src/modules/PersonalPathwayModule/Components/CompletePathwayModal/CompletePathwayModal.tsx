"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import images from "@/src/assets/images";
import { useRouter } from "next/navigation";
import useEventEmitter, {
  emitEvent,
} from "@/src/components/Hooks/useEventEmitter";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";

const EVENT = "OPEN_COMPLETE_PATHWAY_MODAL";

export const openCompletePathwayModal = (message: string) => {
  emitEvent(EVENT, { message });
};

type CompletePathwayModalProps = {
  onReturnToPathway: () => void;
};

function CompletePathwayModal(props: CompletePathwayModalProps) {
  const { onReturnToPathway } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEventEmitter(EVENT, ({ message }) => {
    setMessage(message || "");
    setIsOpen(true);
  });

  return (
    <Dialog open={isOpen} onClose={() => {}} className="relative z-[9999]">
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-[560px] rounded-[28px] bg-[#FBF4EF] p-8 sm:p-10 text-center">
          <SuccessMessage
            text={message}
            fontSize="text-[16px] sm:text-[18px] lg:text-[21px]"
            leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
            rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
            fontColor="#0f4f58"
            bottom="-1px"
            rightImgBottom="-1px"
            rotate="-35deg"
          />

          <div className="mt-[40px] flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => {
                setIsOpen(false);
                onReturnToPathway();
              }}
              className="bg-[#F5F0EB] px-4 sm:px-6 py-3 rounded-xl text-[#0F4F58] font-[400] text-[14px] sm:text-[16px] flex items-center justify-center gap-3 sm:gap-4 font-[Aptos] cursor-pointer"
            >
              Return to My Personal Pathway
              <Image
                src={images.milestoneArrow}
                alt="arrow"
                width={51}
                height={51}
                className="w-[36px] sm:w-[51px] h-auto"
              />
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                router.push("/home");
              }}
              className="bg-[#F5F0EB] px-4 sm:px-6 py-3 rounded-xl text-[#0F4F58] font-[400] text-[14px] sm:text-[16px] flex items-center justify-center gap-3 sm:gap-4 font-[Aptos] cursor-pointer"
            >
              Go to Homepage
              <Image
                src={images.milestoneArrow}
                alt="arrow"
                width={51}
                height={51}
                className="w-[36px] sm:w-[51px] h-auto"
              />
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default CompletePathwayModal;
