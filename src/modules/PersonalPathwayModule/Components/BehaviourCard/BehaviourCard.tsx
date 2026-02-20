/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import images from "@/src/assets/images";

type BEHAVIOUR_CARD_PROPS = {
  image: any;
  text: string;
  isSelected?: boolean;
  onClick?: () => void;
};

function BehaviourCard({
  image,
  text,
  isSelected,
  onClick,
}: BEHAVIOUR_CARD_PROPS) {
  return (
    <div
      onClick={onClick}
      className={`
        relative cursor-pointer
        transition-all duration-300 ease-out
                ${isSelected ? "-translate-y-6" : "translate-y-0"}

      `}
    >
      {/* Image */}
      <Image
        src={isSelected ? images.shadowPoly : image}
        alt="core"
        width={201}
        height={160}
        className="transition-all duration-300"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center pointer-events-none">
        <p className="text-white text-[16px] font-[700] leading-snug font-[Roboto]">
          {text}
        </p>
      </div>
    </div>
  );
}

export default BehaviourCard;
