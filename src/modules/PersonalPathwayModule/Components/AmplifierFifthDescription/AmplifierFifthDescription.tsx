import Image from "next/image";
import images from "@/src/assets/images";
import { MICRO_ACTIONS_TYPE } from "@/src/modules/ChoosePathwayModule/Types/ResponseTypes";

type MICRO_ACTION_PROPS_TYPE = {
  microActions?: Array<MICRO_ACTIONS_TYPE>;
};

function AmplifierFifthDescription(props: MICRO_ACTION_PROPS_TYPE) {
  const { microActions } = props;
  return (
    <div className="relative rounded-[28px] px-[16px] sm:px-[32px] lg:px-[48px] overflow-hidden">
      {microActions?.map((item: MICRO_ACTIONS_TYPE) => (
        <div
          className="flex gap-[12px] lg:gap-[16px] max-w-full lg:max-w-[820px]"
          key={item?.micro_action_number}
        >
          <div className="w-[28px] h-[28px] lg:w-[36px] lg:h-[36px] rounded-full bg-[#7EC6C3] flex items-center justify-center shrink-0 mt-1">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="lg:w-[16px] lg:h-[16px]"
            >
              <path
                d="M7 17L17 7M17 7H9M17 7V15"
                stroke="#0F4A4E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-[#0F4A4E] text-[16px] sm:text-[18px] lg:text-[20px] font-bold mb-[4px]">
              {item?.title}
            </h3>
            <p className="text-[#0F4A4E] text-[13px] sm:text-[14px] lg:text-[16px] leading-[1.6]">
              {item?.description}
            </p>
            <div className="flex justify-center">
              <Image
                src={images.waveDivider}
                alt=""
                className="my-[20px] lg:my-[36px] pointer-events-none max-w-full"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AmplifierFifthDescription;
