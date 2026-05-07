import Image from "next/image";

interface ViewAllReflectionCardProps {
  text: string;
  rotate: string;
  imageKey: any;
  index: number;
}

function ViewAllReflectionCard({
  text,
  rotate,
  imageKey,
  index,
}: ViewAllReflectionCardProps) {
  const insetStyles: Record<number, any> = {
    1: { top: "12px", bottom: "-30px", left: 0, right: 0 },
    2: { top: "12px", bottom: "-50px", left: 0, right: 0 },
    3: { top: "12px", bottom: "-30px", left: "3px", right: "3px" },
    4: { top: "12px", bottom: "-30px", left: "-3px", right: "-3px" },
  };
  const currentInset = insetStyles[index] || insetStyles[1];
  return (
    <div
      className={`relative ${rotate} flex-shrink-0 w-full h-full object-contain`}
      style={{ width: "380px", minHeight: "220px" }}
    >
      {/* Card background image */}
      <div className="relative w-full h-full">
        <Image
          src={imageKey}
          alt={`reflection-card-${index}`}
          width={220}
          height={220}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Text overlay — sits inside the card image bounds */}
      {/* <div
        className="absolute inset-0 flex items-center justify-center px-5 py-8"
        style={{ top: "12px", bottom: "8px", left: "0", right: "0" }}
      > */}
      <div
        className="absolute inset-0 flex items-center justify-center px-10 py-8"
        // style={{ top: "12px", bottom: "-50px", left: "0", right: "0" }}
        style={{
          top: currentInset.top,
          bottom: currentInset.bottom,
          left: currentInset.left,
          right: currentInset.right,
        }}
      >
        <p
          className="text-[#0F4F58] font-[Roboto] text-center overflow-hidden"
          // style={{
          //   fontSize: "16px",
          //   lineHeight: "1.5",
          //   fontWeight: 500,
          //   display: "-webkit-box",
          //   WebkitLineClamp: 7,
          //   WebkitBoxOrient: "vertical",
          //   overflow: "hidden",
          //   wordBreak: "break-word",
          //   maxHeight: "100%",
          // }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default ViewAllReflectionCard;
