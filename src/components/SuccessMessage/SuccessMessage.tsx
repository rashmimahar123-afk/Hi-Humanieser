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
  left,
  bottom,
  rightImgRight,
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
    <div
      className={`flex items-center justify-center ${wrapperClassName}`}
      style={{ overflow: "visible" }}
    >
      <div
        className="relative flex items-center justify-center"
        // style={{
        //   paddingLeft: `${leftImgWidth + 12}px`,
        //   paddingRight: `${rightImgWidth + 12}px`,
        //   overflow: "visible",
        // }}
      >
        {/* Left Image — anchored to top of text with slight upward offset */}
        {leftImg && (
          <Image
            src={leftImg.src}
            alt={leftImg.alt || "left decoration"}
            width={leftImgWidth}
            height={leftImgHeight}
            className={`shrink-0 ${leftImg.className || ""} absolute`}
            style={{
              left: `-${leftImgWidth}px`,
              top: top ?? "-8px",
              bottom: bottom ?? undefined,
              transform: undefined,
            }}
          />
        )}

        {/* Text */}
        <h2
          className={`
            text-center
            font-bold
            leading-snug
            ${textClassName}
          `}
          style={{
            fontFamily: "League Spartan",
            color: fontColor,
            fontSize: "clamp(16px, 4vw, 30px)",
            maxWidth: maxWidth,
          }}
        >
          {text}
        </h2>

        {/* Right Image — anchored to top of text with slight upward offset */}
        {rightImg && (
          <Image
            src={rightImg.src}
            alt={rightImg.alt || "right decoration"}
            width={rightImgWidth}
            height={rightImgHeight}
            className={`shrink-0 ${rightImg.className || ""} absolute`}
            style={{
              right: `-${rightImgWidth}px`,
              top: rightImgTop ?? "-8px",
              bottom: rightImgBottom ?? undefined,
              transform: undefined,
              rotate: rotate,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SuccessMessage;
