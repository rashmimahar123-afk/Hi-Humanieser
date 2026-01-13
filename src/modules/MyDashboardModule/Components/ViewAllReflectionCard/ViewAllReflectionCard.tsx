/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

interface Props {
  text?: string;
  rotate?: string;
  imageKey: any;
  index: number;
}

const textColors = [
  "text-[#1F4D52]", // teal
  "text-[#355F5B]", // dark teal
  "text-[#2F6F73]", // bluish
  "text-[#4A6E6A]", // muted green
];

export default function ViewAllReflectionCard({
  text,
  rotate,
  imageKey,
  index,
}: Props) {
  return (
    <div className={`relative w-[337px] h-[350px] ${rotate}`}>
      {/* NOTE IMAGE */}
      <Image
        src={imageKey}
        alt="reflection wall"
        fill
        className="object-contain"
      />

      {/* TEXT */}
      {text && (
        <div className="absolute inset-0 flex items-center justify-center px-8 text-center">
          <p
            className={`${textColors[index % textColors.length]}
            text-[16px] leading-[15px] font-[Roboto] font-[400]`}
          >
            {text}
          </p>
        </div>
      )}
    </div>
  );
}
