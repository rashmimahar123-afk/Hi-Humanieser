"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import images from "@/src/assets/images";
import useEventEmitter, {
  emitEvent,
} from "@/src/components/Hooks/useEventEmitter";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";

const EVENT = "PRESSURE_POINT_RECORDED_EVENT";

export const openPressurePointRecorded = () => {
  emitEvent(EVENT);
};

function PressurePointRecordedModal() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * Listen event
   */
  useEventEmitter(EVENT, () => {
    setIsOpen(true);
  });

  /**
   * Button click
   */
  const handleStartPoll = () => {
    router.push("/start-team-poll"); // change if route differs
    setIsOpen(false);
  };

  const handleContinue = () => {
    router.push("/pressure-point-record");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onClose={setIsOpen} className="relative z-[9999]">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm"
        aria-hidden="true"
      />
      {/* Wrapper */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-[900px] rounded-[28px] bg-[#FBE6BF] p-6 relative">
          {/* ================= YOUR DESIGN ================= */}
          <div className="relative  p-10 mt-4 rounded-xl overflow-hidden">
            {/* Background Image */}
            <Image
              src={images.pressureImg}
              alt="bg"
              width={380}
              height={380}
              className="absolute top-0 left-0 opacity-90"
            />

            <div className="relative z-10">
              <h2 className="text-[#0F4F58] text-[32px] font-bold font-[RocaTwo]">
                Pressure point recorded.{" "}
              </h2>

              <p className="text-[#0F4F58] font-bold mb-6 text-[20px] font-[Roboto]">
                This has been saved in your Champion Notes so you can revisit it
                at any time.
              </p>

              <p className="text-[#0F4F58] leading-relaxed mb-6 text-[20px] font-[Roboto]">
                A short team poll has now been sent automatically and the input
                will sit alongside your pressure point to help you choose the
                most helpful focus area.
              </p>

              <div className="flex items-start gap-4 mt-10">
                <Image src={images.screwImg} alt="info" width={25} />

                <p className="text-[#0F4F58] text-[17px] leading-relaxed">
                  The poll is one simple question and takes less than 10 seconds
                  to answer.
                </p>
              </div>

              {/* Button */}
              <div className="flex justify-end mt-8">
                <button
                  onClick={() => router.push("/pressure-point-record")}
                  className="border border-[#cde3cc] text-[#567F55] bg-[#cde3cc] px-6 py-3 rounded-full cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default PressurePointRecordedModal;
