"use client";

import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import images from "@/src/assets/images";
import useEventEmitter, {
  emitEvent,
} from "@/src/components/Hooks/useEventEmitter";

const EVENT = "COMPLETE_PRESSURE_POINT";

export const openCompletePressurePoint = (payload?: {
  type?: "ERROR_409";
  message?: string;
}) => {
  emitEvent(EVENT, payload);
};

function CompletePressurePointModal() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [reflection, setReflection] = useState("");

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  /**
   *  Listen for event
   */
  useEventEmitter(EVENT, (payload) => {
    setIsOpen(true);

    if (payload?.type === "ERROR_409") {
      setIsError(true);
      setErrorMessage(payload.message || "");
    } else {
      setIsError(false);
      setErrorMessage("");
    }
  });

  /**
   *  Button click handler
   */
  const handleAction = () => {
    if (isError) {
      //  Go to active cycle / record page
      router.push("/champion-hub");
      setIsOpen(false);
      return;
    }

    //  Normal flow (you can integrate API here if needed)

    router.push("/champion-hub");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onClose={setIsOpen} className="relative z-[9999]">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

      {/* Modal wrapper */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-[800px] rounded-[28px] bg-[#FBE6BF] p-8 text-center space-y-6 relative">
          {/* Close button */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="font-bold cursor-pointer text-[#0F4F58]"
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
            {isError
              ? "You already have an active ritual"
              : "Great choice - this ritual can really help your team."}
          </DialogTitle>

          {/* Description */}
          <p className="text-[18px] leading-[1.4] text-[#567F55] px-2">
            {isError
              ? errorMessage
              : "Before activating it, add a short note to introduce it to your team. A few warm words from you help set the tone and make the practice feel inviting and human."}
          </p>

          {/* Textarea (only for normal flow) */}
          {!isError && (
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
          )}

          {/* Action Button */}
          <div className="flex justify-center pt-2">
            <button
              onClick={handleAction}
              className="relative flex items-center justify-center"
            >
              <Image
                src={images.signupPolygon}
                alt="btn"
                width={100}
                height={100}
                className="rotate-[-6deg]"
              />

              <div
                className="absolute inset-0 flex items-center justify-center text-[#0F4F58] font-bold text-[18px] leading-[1] text-center"
                style={{ fontFamily: "RocaTwo" }}
              >
                {isError ? (
                  "Close"
                ) : (
                  <>
                    Activate <br /> Ritual
                  </>
                )}
              </div>
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default CompletePressurePointModal;
