/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

type ImageConfig = {
  src: any;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
  fontColor?: string;
};

type SUCCESS_MESSAGE_PROPS = {
  text: string;
  leftImg?: ImageConfig;
  rightImg?: ImageConfig;
  fontSize?: string;
  maxWidth?: string;
  textClassName?: string;
  wrapperClassName?: string;
  fontColor?: string;
  left?: string;
  bottom?: string;
  rightImgRight?: string;
  rightImgBottom?: string;
  top?: string;
  rightImgTop?: string;
  rotate?: string;
};

const SuccessMessage = ({
  text,
  leftImg,
  rightImg,
  fontSize = "text-[30px]",
  maxWidth = "max-w-[600px]",
  textClassName = "",
  wrapperClassName = "",
  fontColor,
  bottom,
  rightImgBottom,
  rightImgTop,
  top,
  rotate,
}: SUCCESS_MESSAGE_PROPS) => {
  const leftImgWidth = leftImg?.width || 40;
  const leftImgHeight = leftImg?.height || 40;
  const rightImgWidth = rightImg?.width || 40;
  const rightImgHeight = rightImg?.height || 40;

  return (
    <div className={`flex items-center justify-center ${wrapperClassName}`}>
      {/* ── LEFT IMAGE ── */}
      {leftImg && (
        <>
          {/* Mobile: inline, half size */}
          <div className="flex-shrink-0 block md:hidden">
            <Image
              src={leftImg.src}
              alt={leftImg.alt || "left decoration"}
              width={Math.round(leftImgWidth * 0.5)}
              height={Math.round(leftImgHeight * 0.5)}
              className={leftImg.className || ""}
            />
          </div>

          {/* Desktop: normal size, inline flex */}
          <div className="flex-shrink-0 hidden md:block">
            <Image
              src={leftImg.src}
              alt={leftImg.alt || "left decoration"}
              width={leftImgWidth}
              height={leftImgHeight}
              className={leftImg.className || ""}
            />
          </div>
        </>
      )}

      {/* ── TEXT ── */}
      <h2
        className={`
          text-center
          font-bold
          leading-snug
          mx-3
          ${fontSize}
          ${textClassName}
        `}
        style={{
          fontFamily: "League Spartan",
          color: fontColor,
          maxWidth: maxWidth,
        }}
      >
        {text}
      </h2>

      {/* ── RIGHT IMAGE ── */}
      {rightImg && (
        <>
          {/* Mobile: inline, half size */}
          <div className="flex-shrink-0 block md:hidden">
            <Image
              src={rightImg.src}
              alt={rightImg.alt || "right decoration"}
              width={Math.round(rightImgWidth * 0.5)}
              height={Math.round(rightImgHeight * 0.5)}
              className={rightImg.className || ""}
              style={{ rotate: rotate }}
            />
          </div>

          {/* Desktop: normal size, inline flex */}
          <div className="flex-shrink-0 hidden md:block">
            <Image
              src={rightImg.src}
              alt={rightImg.alt || "right decoration"}
              width={rightImgWidth}
              height={rightImgHeight}
              className={rightImg.className || ""}
              style={{ rotate: rotate }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SuccessMessage;
