import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./ProfilePathwayCard.module.css";

/* Card Component */
function ProfilePathwayCard({
  title,
  description,
  shapeImg,
  arrowImg,
  arrowPosition,
  width,
  rotate,
  onClick,
}: {
  title: string;
  description: string;
  shapeImg: any;
  arrowImg?: any;
  arrowPosition?: string;
  width?: string;
  rotate?: string;
  onClick?: () => void;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Shape Wrapper */}
      <div
        className="relative w-[170px] h-[170px] flex items-center justify-center cursor-pointer"
        onClick={onClick}
      >
        {/* Background Shape Image */}
        <Image
          src={shapeImg}
          alt="quiz shape"
          fill
          className="object-contain"
        />

        {/* Arrow Image */}
        {arrowImg && (
          <Image
            src={arrowImg}
            alt="arrow decoration"
            className={`absolute ${arrowPosition} h-auto`}
            style={{ width: width, rotate: rotate }}
          />
        )}
        {/* Text on top */}
        <h3 className="relative z-10 text-[#0F4F58] text-[26px] font-[RocaTwo] font-bold leading-[32px] text-center px-4">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-[#0F4F58] text-[18px] mt-[24px] leading-[26px]">
        {description}
      </p>
    </div>
  );
}

export default ProfilePathwayCard;
