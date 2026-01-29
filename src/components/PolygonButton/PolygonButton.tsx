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
};

const PolygonButton = ({
  width = "137px",
  height = "151px",
  bgColor = "#f6e3bf",
  radius = 14,
  topTilt = 18,
  bottomTilt = 32,
  slantSide = "left",
  decorationImg,
  decorationPosition,
  children,
}: POLYGON_BUTTON_PROPS) => {
  const clipPath =
    slantSide === "left"
      ? `polygon(
          0% ${topTilt}px,
          100% 0%,
          100% 100%,
          0% calc(100% - ${bottomTilt}px)
        )`
      : `polygon(
          0% 0%,
          100% ${topTilt}px,
          100% calc(100% - ${bottomTilt}px),
          0% 100%
        )`;

  return (
    <div className="relative inline-flex items-center">
      {/* Decoration Image */}
      {decorationImg && slantSide === "left" && (
        <div
          className={`absolute ${decorationPosition?.className || ""}`}
          style={{
            top: decorationPosition?.top,
            left: decorationPosition?.left,
            right: decorationPosition?.right,
            bottom: decorationPosition?.bottom,
          }}
        >
          <Image
            src={decorationImg.src}
            alt={decorationImg.alt || "decoration"}
            width={decorationImg.width || 48}
            height={decorationImg.height || 48}
            className={`shrink-0 ${decorationImg.className || ""}`}
          />
        </div>
      )}

      {/* Shape */}
      <div
        style={{
          width,
          height,
          backgroundColor: bgColor,
          borderRadius: radius,
          clipPath: clipPath,
        }}
        className="flex justify-center text-center px-3 pt-4"
      >
        {children}
      </div>

      {decorationImg && slantSide === "right" && (
        <div
          className={`absolute ${decorationPosition?.className || ""}`}
          style={{
            top: decorationPosition?.top,
            left: decorationPosition?.left,
            right: decorationPosition?.right,
            bottom: decorationPosition?.bottom,
          }}
        >
          <Image
            src={decorationImg.src}
            alt={decorationImg.alt || "decoration"}
            width={decorationImg.width || 48}
            height={decorationImg.height || 48}
            className={`shrink-0 ${decorationImg.className || ""}`}
          />
        </div>
      )}
    </div>
  );
};

export default PolygonButton;
