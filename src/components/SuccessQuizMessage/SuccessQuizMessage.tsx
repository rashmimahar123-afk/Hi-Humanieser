/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useSearchParams } from "next/navigation";
import images from "@/src/assets/images";
import Image from "next/image";

const SuccessQuizMessage = ({ show }: any) => {
  if (!show) return null;
  const searchParams = useSearchParams();
  const step = searchParams.get("step"); // "2"
  return (
    <div className={`absolute bottom-[71px] right-[240px] z-50 animate-fadeUp`}>
      <div className="relative max-w-[620px] text-center mx-auto">
        {/* Message text */}
        {step === "2" ? (
          <p className="text-[#0F4F58] text-[18px] font-bold leading-[1.4]">
            Great progress — two-thirds complete!
            <span className="block mt-1">
              Final stretch: the culture we shape together.
            </span>
          </p>
        ) : step === "3" ? (
          <p className="text-[#0F4F58] text-[18px] font-bold leading-[1.4]">
            You’ve reached the end — well done for taking the time to reflect.
            <br />
            <span className="block mt-1">
              Now, let’s discover your 3 Pathways
            </span>
          </p>
        ) : (
          <p className="text-[#0F4F58] text-[18px] font-bold leading-[1.4]">
            Nice work — that’s the first part done!
            <span className="block mt-1">
              Next up: how we connect with others.
            </span>
          </p>
        )}

        {/* Decorative lines / doodles (optional) */}
        <div className="absolute -left-9 -top-3 text-[#E3A45B] text-xl">
          <Image src={images.arrowImg} alt="arrow-img" width={32} />
        </div>
      </div>
    </div>
  );
};

export default SuccessQuizMessage;
