import Image from "next/image";
import images from "@/src/assets/images";
import {
  CONVERSATION_ITEM_TYPE,
  CONVERSATION_STARTER_TYPE,
} from "@/src/modules/ChoosePathwayModule/Types/ResponseTypes";

type CONVERSATION_STARTER_PROPS_TYPE = {
  conversationStarter: CONVERSATION_STARTER_TYPE;
};

function AmplifierSixDescription(props: CONVERSATION_STARTER_PROPS_TYPE) {
  const { conversationStarter } = props;

  return (
    <div className="relative rounded-[28px] px-[48px] overflow-hidden">
      {/* Top-right dotted arrow */}
      <Image
        src={images.conversationImg}
        alt=""
        className="absolute right-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none"
      />

      {/* Item 1 */}
      <div className="flex gap-[16px] max-w-[820px]">
        {/* Description */}
        <p className="text-[#0F4A4E] text-[16px] leading-[1.6] max-w-[760px] mb-[18px]">
          {conversationStarter?.intro}
        </p>
      </div>

      <ul className="list-disc pl-[18px] space-y-[10px] text-[#0F4A4E] text-[16px] leading-[1.6] max-w-[820px]">
        {conversationStarter?.items?.map(
          (item: CONVERSATION_ITEM_TYPE, index: number) => {
            return <li key={`item${index}`}>{item?.text}</li>;
          },
        )}
      </ul>
    </div>
  );
}

export default AmplifierSixDescription;
