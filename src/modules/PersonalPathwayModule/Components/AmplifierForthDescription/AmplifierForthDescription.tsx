import Image from "next/image";
import images from "@/src/assets/images";
import {
  COMMON_ITEM_TYPE,
  COMMON_TRAPS_TYPE,
} from "@/src/modules/ChoosePathwayModule/Types/ResponseTypes";

type COMMON_TRAPS_PROPS_TYPE = {
  commonTraps: COMMON_TRAPS_TYPE;
};

function AmplifierForthDescription(props: COMMON_TRAPS_PROPS_TYPE) {
  const { commonTraps } = props;
  return (
    <div className="relative overflow-hidden">
      {/* Background illustration — hidden mobile, faint tablet, full desktop */}
      <Image
        src={images.amplifierForthImg}
        alt=""
        className="absolute right-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none hidden sm:block sm:opacity-30 lg:opacity-100 sm:max-w-[40%] lg:max-w-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-full lg:max-w-[900px]">
        <p className="text-[#0F4A4E] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.6] max-w-full lg:max-w-[760px] mb-[12px] lg:mb-[18px]">
          {commonTraps?.intro}
        </p>

        <ul className="list-disc pl-[18px] space-y-[8px] lg:space-y-[10px] text-[#0F4A4E] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.6] max-w-full lg:max-w-[820px]">
          {commonTraps?.items?.map((item: COMMON_ITEM_TYPE) => (
            <li key={item?.common_trap_number}>{item?.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AmplifierForthDescription;
