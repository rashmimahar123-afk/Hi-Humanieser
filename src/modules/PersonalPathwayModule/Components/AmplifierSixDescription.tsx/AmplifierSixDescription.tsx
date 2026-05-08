import Image from "next/image";
import images from "@/src/assets/images";
import {
  CONVERSATION_ITEM_TYPE,
  CONVERSATION_STARTER_TYPE,
} from "@/src/modules/ChoosePathwayModule/Types/ResponseTypes";

type CONVERSATION_STARTER_PROPS_TYPE = {
  conversationStarter?: CONVERSATION_STARTER_TYPE;
};

function AmplifierSixDescription(props: CONVERSATION_STARTER_PROPS_TYPE) {
  const { conversationStarter } = props;
  return (
    <div className="relative rounded-[28px] px-[16px] sm:px-[32px] lg:px-[48px] overflow-hidden">
      {/* Background illustration — hidden mobile, faint tablet, full desktop */}
      <Image
        src={images.conversationImg}
        alt=""
        className="absolute right-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none hidden sm:block sm:opacity-30 lg:opacity-100 sm:max-w-[35%] lg:max-w-none"
      />

      <div className="relative z-10">
        <p className="text-[#0F4A4E] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.6] max-w-full lg:max-w-[760px] mb-[12px] lg:mb-[18px]">
          {conversationStarter?.intro}
        </p>

        <ul className="list-disc pl-[18px] space-y-[8px] lg:space-y-[10px] text-[#0F4A4E] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.6] max-w-full lg:max-w-[820px]">
          {conversationStarter?.items?.map(
            (item: CONVERSATION_ITEM_TYPE, index: number) => (
              <li key={`item${index}`}>{item?.text}</li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}

export default AmplifierSixDescription;
