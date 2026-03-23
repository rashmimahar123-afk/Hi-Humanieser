import Image from "next/image";
import images from "@/src/assets/images";
import {
  AMPLIFIER_BEHAVIOUR_TYPE,
  AMPLIFIER_ITEMS_TYPE,
} from "@/src/modules/ChoosePathwayModule/Types/ResponseTypes";

type AMPLIFIER_BEHAVIOUR_PROPS_TYPE = {
  amplifierBehaviour: AMPLIFIER_BEHAVIOUR_TYPE;
};

function AmplifierThirdDescription(props: AMPLIFIER_BEHAVIOUR_PROPS_TYPE) {
  const { amplifierBehaviour } = props;

  return (
    <div className="relative  overflow-hidden">
      {/* Right background lightning illustration */}
      <Image
        src={images.amplifierSecondImg}
        alt=""
        className="absolute right-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[900px]">
        {/* Description */}
        <p className="text-[#0F4A4E] text-[16px] leading-[1.6] max-w-[760px] mb-[18px]">
          {amplifierBehaviour?.intro}
        </p>

        {/* Bullet Points */}
        <ul className="list-disc pl-[18px] space-y-[10px] text-[#0F4A4E] text-[16px] leading-[1.6] max-w-[820px]">
          {amplifierBehaviour?.items?.map(
            (item: AMPLIFIER_ITEMS_TYPE, index: number) => {
              return (
                <li key={item.amplifier_behaviour_number ?? index}>
                  {item?.text}
                </li>
              );
            },
          )}
        </ul>
      </div>
    </div>
  );
}

export default AmplifierThirdDescription;
