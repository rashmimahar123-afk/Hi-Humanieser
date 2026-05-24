import React from "react";
import Image, { StaticImageData } from "next/image";

type IMAGE_PROPS = {
  src: StaticImageData;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
};

type DECORATION_POSITION = {
  className?: string;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
};

type POLYGON_BUTTON_PROPS = {
  width?: number | string;
  height?: number | string;
  bgColor?: string;
  radius?: number;
  topTilt?: number;
  bottomTilt?: number;
  slantSide?: "left" | "right" | "none";
  decorationImg?: IMAGE_PROPS;
  children?: React.ReactNode;
  decorationPosition?: DECORATION_POSITION;
  clipPath?: string;
  childTop?: number;
  contentClassName?: string;
};

const PolygonButton = ({
  width = "137px",
  height = "151px",
  bgColor = "#f6e3bf",
  radius = 14,
  clipPath,
  decorationImg,
  decorationPosition,
  children,
  childTop,
  contentClassName,
}: POLYGON_BUTTON_PROPS) => {
  // Resolve numeric widths/heights to px strings for inline styles
  const resolvedWidth = typeof width === "number" ? `${width}px` : width;
  const resolvedHeight = typeof height === "number" ? `${height}px` : height;

  return (
    <div
      className="relative"
      style={{
        width: resolvedWidth,
        height: resolvedHeight,
        // On small screens, constrain oversized buttons so they don't overflow
        maxWidth: "100%",
      }}
    >
      {/* Decoration image */}
      {decorationImg && (
        <div
          className={`absolute z-30 ${decorationPosition?.className || ""}`}
          style={{
            top: decorationPosition?.top,
            left: decorationPosition?.left,
            right: decorationPosition?.right,
            bottom: decorationPosition?.bottom,
          }}
        >
          <Image
            src={decorationImg.src}
            alt="decoration"
            width={decorationImg.width || 48}
            height={decorationImg.height || 48}
            // Scale decoration image down slightly on mobile
            className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-auto md:h-auto"
          />
        </div>
      )}

      {/* Polygon clipped background shape */}
      <div
        style={{
          width: resolvedWidth,
          height: resolvedHeight,
          backgroundColor: bgColor,
          borderRadius: radius,
          clipPath,
          maxWidth: "100%",
        }}
      />

      {/* Text content — sits above the clip-path shape */}
      <div
        className={`absolute inset-2 flex ${contentClassName ?? "items-center justify-center text-center"} pointer-events-none`}
        style={{ top: childTop ? `-${childTop * 4}px` : undefined }}
      >
        {children}
      </div>
    </div>
  );
};

export default PolygonButton;
