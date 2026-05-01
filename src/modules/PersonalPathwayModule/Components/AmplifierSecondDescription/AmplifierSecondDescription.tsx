import Image from "next/image";
import images from "@/src/assets/images";
import {
  CORE_BEHAVIOUR_TYPE,
  CORE_ITEM_TYPE,
} from "@/src/modules/ChoosePathwayModule/Types/ResponseTypes";

type CORE_BEHAVIOUR__PROPS_TYPE = {
  coreBehaviour: CORE_BEHAVIOUR_TYPE;
};

function AmplifierSecondDescription(props: CORE_BEHAVIOUR__PROPS_TYPE) {
  const { coreBehaviour } = props;
  return (
    <div className="relative space-y-5 overflow-hidden">
      {/* Description */}
      <p className="text-[#0F4A4E] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.6] max-w-full lg:max-w-[760px] mb-[12px] lg:mb-[18px]">
        {coreBehaviour?.intro}
      </p>

      {/* Bullet Points */}
      <ul className="list-disc pl-[18px] space-y-[6px] text-[#0F4A4E] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.6] max-w-full lg:max-w-[820px]">
        {coreBehaviour?.items?.map((item: CORE_ITEM_TYPE) => (
          <li key={item.core_behaviour_number}>{item?.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default AmplifierSecondDescription;
