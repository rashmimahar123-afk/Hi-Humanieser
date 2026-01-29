import Image from "next/image";
import images from "@/src/assets/images";
import { usePathname } from "next/navigation";

type COMMON_BUTTON_PROPS = {
  label: string;
  onClick: () => void;
  bgColor: string;
};

function CommonButtons({ label, onClick, bgColor }: COMMON_BUTTON_PROPS) {
  const pathname = usePathname();

  const isChangePathway = pathname === "/change-pathway";
  const isBehindScene = pathname === "/behind-scene";
  const isFormIdeas = pathname === "/from-ideas";

  return (
    <button
      onClick={onClick}
      className="
    relative
    w-[271px] h-[54px]
    rounded-[12px]
    px-[22px]
    text-[18px]
    font-[400]
    hover:opacity-90
    transition
    flex items-center
    cursor-pointer
  "
      style={{
        backgroundColor: bgColor,
        fontFamily: "Aptos",
        color:
          isChangePathway || isFormIdeas || isBehindScene
            ? "#FFFFFF"
            : "#0F4F58",
      }}
    >
      <span className="pr-[48px] leading-[120%] text-left">{label}</span>

      <span className="absolute right-[8px]">
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
  );
}

export default CommonButtons;
