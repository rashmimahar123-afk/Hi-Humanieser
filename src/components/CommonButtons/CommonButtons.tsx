import Image from "next/image";
import images from "@/src/assets/images";
import { usePathname } from "next/navigation";
import { useState } from "react";

type COMMON_BUTTON_PROPS = {
  label: string;
  onClick: () => void;
  bgColor: string;
  height?: string;
  disabled?: boolean;
  textColor?: string;
};

function CommonButtons({
  label,
  onClick,
  bgColor,
  height,
  disabled = false,
  textColor,
}: COMMON_BUTTON_PROPS) {
  const pathname = usePathname();
  const [showTooltip, setShowTooltip] = useState(false);
  const isChangePathway = pathname === "/manage-pathway";
  const isBehindScene = pathname === "/behind-scene";
  const isFormIdeas = pathname === "/from-ideas";
  const isTeamSetting = pathname === "/team-setting";
  const isProfile = pathname === "/profile";

  return (
    <div
      className="relative inline-block w-full sm:w-auto"
      onMouseEnter={() => disabled && setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {disabled && showTooltip && (
        <div className="absolute -top-[55px] left-1/2 -translate-x-1/2 bg-red-500 text-white text-[12px] sm:text-[13px] px-3 py-2 rounded-lg shadow-lg whitespace-nowrap z-50">
          Before continuing, first you have to select a pathway
          <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-red-500 rotate-45"></div>
        </div>
      )}
      <button
        onClick={!disabled ? onClick : undefined}
        disabled={disabled}
        title={
          disabled
            ? "Before continuing, first you have to select a pathway."
            : ""
        }
        className={`
          relative
          w-full sm:w-[271px]
          rounded-[12px]
          px-[16px] sm:px-[22px]
          text-[15px] sm:text-[18px]
          font-[400]
          transition
          flex items-center
          ${
            disabled
              ? "opacity-60 cursor-not-allowed"
              : "hover:opacity-90 cursor-pointer"
          }
        `}
        style={{
          backgroundColor: disabled ? "#E6E6E6" : bgColor,
          fontFamily: "Aptos",
          color: disabled ? "#A1A1A1" : "#0F4F58",
          height: height ?? "54px",
        }}
      >
        <span
          className="pr-[40px] sm:pr-[48px] leading-[120%] text-left"
          style={{ color: `${textColor}` }}
        >
          {label}
        </span>
        <span
          className={`absolute right-[8px] ${disabled ? "opacity-40" : ""}`}
        >
          <Image
            src={
              isChangePathway || isFormIdeas
                ? images.whiteDirection
                : isBehindScene
                  ? images.behindSceneArrow
                  : images.buttonArrow
            }
            alt="arrow"
            width={40}
            height={40}
            // className="w-[40px] h-[40px] sm:w-[49px] sm:h-[49px]"
          />
        </span>
      </button>
    </div>
  );
}
export default CommonButtons;
