/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

type BEHAVIOUR_CARD_PROPS = {
  image: any;
  text: string;
};

function BehaviourCard({ image, text }: BEHAVIOUR_CARD_PROPS) {
  return (
    <div className="relative ">
      {/* Image */}
      <Image src={image} alt="core" width={201} height={160} />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <p className="text-white text-[16px] font-[700] leading-snug font-[Roboto]">
          {text}
        </p>
      </div>
    </div>
  );
}
export default BehaviourCard;
