/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

type RESULT_PATHWAY_CARD_PROPS = {
  title: string;
  description: string;
  selected: boolean;
  onSelect: () => void;
  onLearnMore: () => void;
};

function ResultPathwayCard(props: RESULT_PATHWAY_CARD_PROPS) {
  const { title, description, onLearnMore, selected, onSelect } = props;
  return (
    <div
      className={`
        w-[365px] h-[326px]
        bg-[#F5C882]
        rounded-[12px]
        px-6 py-8
        flex flex-col justify-between
        ${selected ? "ring-2 ring-[#0F4F58]" : ""}
      `}
    >
      {/* Top content */}
      <div>
        <h3
          className="text-[#0F4F58] text-[22px] mb-4 font-[700]"
          style={{ fontFamily: "RocaTwo-BI" }}
        >
          {title}
        </h3>

        <p
          className="text-[#0F4F58] text-[20px] leading-[130%] font-[400]"
          style={{ fontFamily: "Aptos" }}
        >
          {description}
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col items-end gap-4">
        <button
          onClick={onLearnMore}
          className="px-4 py-1 bg-[#F8E1B8] rounded-full text-[#0F4F58] text-[18px] "
          style={{ fontFamily: "RocaTwo-Bold" }}
        >
          learn more
        </button>

        <div className="flex gap-2 cursor-pointer" onClick={onSelect}>
          <span
            className="text-[16px] text-[#0F4F58]"
            style={{ fontFamily: "Aptos" }}
          >
            choose pathway
          </span>

          <span className="w-[21px] h-[23px] bg-[#86C9C9] clip-triangle" />
          {/* <div
            className={`
              w-4 h-4 rounded
              border border-[#0F4F58]
              flex items-center justify-center
              ${selected ? "bg-[#0F4F58]" : "bg-transparent"}
            `}
          >
            {selected && <span className="text-white text-[10px]">✓</span>}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ResultPathwayCard;
