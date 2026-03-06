import Image from "next/image";
import images from "@/src/assets/images";

type PRESSURE_POINT_SECTION_PROPS = {
  title: string;
  description: string;
};

function PressurePointSection(props: PRESSURE_POINT_SECTION_PROPS) {
  const { title, description } = props;
  return (
    <div className="mb-16 ml-4">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative bg-[#4BA6A6] w-[36px] h-[24px] rounded-[10px] flex items-center justify-center">
          {/* Arrow */}
          <div
            className="absolute right-[-6px] w-0 h-0 
"
          />
          <Image
            src={images.smallArrow}
            alt="small-arrow"
            width={10}
            height={10}
          />
        </div>
        <h3 className="text-[#0f4f58] text-[30px] font-bold font-[RocaTwo]">
          {title}
        </h3>
      </div>

      <p className="text-[#0f4f58] text-[20px] leading-[28px] whitespace-pre-line font-[Roboto]">
        {description}
      </p>
    </div>
  );
}
export default PressurePointSection;
