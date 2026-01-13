/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

type ImageConfig = {
  src: any;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
};

type SUCCESS_MESSAGE_PROPS = {
  text: string;

  leftImg?: ImageConfig;
  rightImg?: ImageConfig;

  fontSize?: string; // e.g. "text-[30px]"
  maxWidth?: string; // e.g. "max-w-[520px]"
  textClassName?: string;
  wrapperClassName?: string;
};

const SuccessMessage = ({
  text,
  leftImg,
  rightImg,
  fontSize = "text-[30px]",
  maxWidth = "max-w-[600px]",
  textClassName = "",
  wrapperClassName = "",
}: SUCCESS_MESSAGE_PROPS) => {
  return (
    <div
      className={`flex items-center justify-center gap-2 ${wrapperClassName}`}
    >
      {/* Left Image */}
      {leftImg && (
        <Image
          src={leftImg.src}
          alt={leftImg.alt || "left decoration"}
          width={leftImg.width || 40}
          height={leftImg.height || 40}
          className={`shrink-0 ${leftImg.className || ""}`}
        />
      )}

      {/* Text */}
      <h2
        className={`
          ${fontSize}
          ${maxWidth}
          text-[#0F4F58]
          text-center
          font-bold
          leading-snug
          ${textClassName}
        `}
        style={{ fontFamily: "League Spartan" }}
      >
        {text}
      </h2>

      {/* Right Image */}
      {rightImg && (
        <Image
          src={rightImg.src}
          alt={rightImg.alt || "right decoration"}
          width={rightImg.width || 40}
          height={rightImg.height || 40}
          className={`shrink-0 ${rightImg.className || ""}`}
        />
      )}
    </div>
  );
};

export default SuccessMessage;
