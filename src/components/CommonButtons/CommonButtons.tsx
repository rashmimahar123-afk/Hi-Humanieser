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
};

function CommonButtons({
  label,
  onClick,
  bgColor,
  height,
  disabled = false,
}: COMMON_BUTTON_PROPS) {
  const pathname = usePathname();
  const [showTooltip, setShowTooltip] = useState(false);

  const isChangePathway = pathname === "/change-pathway";
  const isBehindScene = pathname === "/behind-scene";
  const isFormIdeas = pathname === "/from-ideas";
  const isTeamSetting = pathname === "/team-setting";

  return (
    <div className="relative inline-block">
      {disabled && showTooltip && (
        <div className="absolute -top-[55px] left-1/2 -translate-x-1/2 bg-red-500 text-white text-[13px] px-3 py-2 rounded-lg shadow-lg whitespace-nowrap z-50">
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
    w-[271px]
    rounded-[12px]
    px-[22px]
    text-[18px]
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
        <span className="pr-[48px] leading-[120%] text-left">{label}</span>

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
            width={49}
            height={49}
          />
        </span>
      </button>
    </div>
  );
}

export default CommonButtons;
