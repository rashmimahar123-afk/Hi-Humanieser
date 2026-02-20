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
}: POLYGON_BUTTON_PROPS) => {
  return (
    <div className="relative" style={{ width, height }}>
      {/* Decoration */}
      {decorationImg && (
        <div className={`absolute ${decorationPosition?.className || ""}`}>
          <Image
            src={decorationImg.src}
            alt="decoration"
            width={decorationImg.width || 48}
            height={decorationImg.height || 48}
          />
        </div>
      )}

      {/* Polygon Shape ONLY */}
      <div
        style={{
          width,
          height,
          backgroundColor: bgColor,
          borderRadius: radius,
          clipPath,
        }}
      />

      {/* TEXT – free from clip-path */}
      <div
        className={`absolute -inset-2 flex items-center justify-center text-center pointer-events-none -top-${childTop ? childTop : "4"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default PolygonButton;
