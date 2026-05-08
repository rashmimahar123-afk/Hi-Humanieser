import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import Image from "next/image";
import images from "@/src/assets/images";

function CardFooter({
  label,
  onClick,
  disabled = false,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <>
      <div className="mt-6 sm:mt-8 md:mt-10 pointer-events-none">
        <Image
          src={images.teamDots}
          alt=""
          width={100}
          height={100}
          className="w-[60px] sm:w-[80px] md:w-[100px] h-auto absolute -bottom-[44px] rotate-[90deg]"
        />
      </div>
      <div className="mt-4 sm:mt-6 md:mt-10 flex justify-end items-center">
        <div
          style={{
            pointerEvents: disabled ? "none" : "auto", // ❌ click block
            opacity: disabled ? 0.5 : 1, // ❌ faded UI
            cursor: disabled ? "not-allowed" : "pointer", // ❌ UX improve
          }}
        >
          <CommonButtons label={label} bgColor="#f2a39c" onClick={onClick} />
        </div>
      </div>
    </>
  );
}
export default CardFooter;
