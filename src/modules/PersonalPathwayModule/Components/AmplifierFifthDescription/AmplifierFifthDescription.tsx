import Image from "next/image";
import images from "@/src/assets/images";
import { MICRO_ACTIONS_TYPE } from "@/src/modules/ChoosePathwayModule/Types/ResponseTypes";

type MICRO_ACTION_PROPS_TYPE = {
  microActions: Array<MICRO_ACTIONS_TYPE>;
};
function AmplifierFifthDescription(props: MICRO_ACTION_PROPS_TYPE) {
  const { microActions } = props;
  console.log("microActionsmicroActionsmicroActions", microActions);
  return (
    <div className="relative rounded-[28px] px-[48px] overflow-hidden">
      {/* Top-right dotted arrow */}
      {/* <Image
        src={images.dotArrow}
        alt=""
        className="absolute top-[36px] right-[48px] pointer-events-none"
      /> */}

      {/* Item 1 */}
      {microActions?.map((item: MICRO_ACTIONS_TYPE) => {
        return (
          <div
            className="flex gap-[16px] max-w-[820px]"
            key={item?.micro_action_number}
          >
            <div className="w-[36px] h-[36px] rounded-full bg-[#7EC6C3] flex items-center justify-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17L17 7M17 7H9M17 7V15"
                  stroke="#0F4A4E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div>
              <h3 className="text-[#0F4A4E] text-[20px] font-bold mb-[4px]">
                {item?.title}
              </h3>
              <p className="text-[#0F4A4E] text-[16px] leading-[1.6]">
                {item?.description}
              </p>
              <div className="flex justify-center">
                <Image
                  src={images.waveDivider}
                  alt=""
                  className="my-[36px] pointer-events-none"
                />
              </div>
            </div>
          </div>
        );
      })}

      {/* Divider */}
    </div>
  );
}

export default AmplifierFifthDescription;
