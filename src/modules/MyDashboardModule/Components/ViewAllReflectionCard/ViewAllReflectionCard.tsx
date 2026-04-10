/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

interface Props {
  text?: string;
  rotate?: string;
  imageKey: any;
  index: number;
}

const textColors = [
  "text-[#1F4D52]",
  "text-[#355F5B]",
  "text-[#2F6F73]",
  "text-[#4A6E6A]",
];

export default function ViewAllReflectionCard({
  text,
  rotate,
  imageKey,
  index,
}: Props) {
  const isReflectionWall2 =
    typeof imageKey === "object" && imageKey?.src?.includes("reflectionWall2");

  return (
    <div className={`relative w-[397px] h-[373px] ${rotate} `}>
      {/* NOTE IMAGE */}
      <Image
        src={imageKey}
        alt="reflection wall"
        fill
        className="object-contain"
      />

      {/* TEXT */}
      {text && (
        <div
          className={`absolute inset-0 flex items-center justify-center px-10 text-center ${
            isReflectionWall2 ? "mt-[80px]" : ""
          }`}
        >
          <p
            className={`${textColors[index % textColors.length]}
              text-[17px] leading-[20px] font-[Roboto] font-[400] max-w-[280px] `}
          >
            {text}
          </p>
        </div>
      )}
    </div>
  );
}
