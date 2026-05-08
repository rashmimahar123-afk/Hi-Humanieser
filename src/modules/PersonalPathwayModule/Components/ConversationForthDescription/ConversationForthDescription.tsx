import Image from "next/image";
import images from "@/src/assets/images";

type CONVERSATION_FORTH_DESC_PROPS = {
  selectedFocusAreaTraps?: Array<string>;
};

function ConversationForthDescription(props: CONVERSATION_FORTH_DESC_PROPS) {
  const { selectedFocusAreaTraps } = props;
  return (
    <div className="relative overflow-hidden">
      {/* Right background illustration */}
      <Image
        src={images.amplifierForthImg}
        alt=""
        className="absolute right-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none"
        height={10}
        width={120}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[900px]">
        <ul className="list-disc pl-[18px] space-y-[10px] text-[#0F4A4E] text-[16px] leading-[1.6] max-w-[820px]">
          {selectedFocusAreaTraps?.map((trap: string, index: number) => (
            <li key={index}>{trap}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ConversationForthDescription;
