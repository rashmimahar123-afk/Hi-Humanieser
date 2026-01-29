import { usePathname } from "next/navigation";

type RESULT_PATHWAY_CARD_PROPS = {
  title: string;
  description: string;
  selected: boolean;
  onSelect: () => void;
  onLearnMore: () => void;
  bgColor: string;
};

function QuizPathwayCards(props: RESULT_PATHWAY_CARD_PROPS) {
  const { title, description, onLearnMore, selected, onSelect, bgColor } =
    props;
  const pathname = usePathname();

  const hideLearnMore = pathname.includes("dashboard-pdf");
  return (
    <div
      className={`
        w-[357px] h-[274px]
        rounded-[12px]
        px-6 py-8
        flex flex-col justify-between
      
        ${selected ? "ring-2 ring-[#0F4F58]" : ""}
      `}
      style={{ backgroundColor: bgColor }}
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
      {!hideLearnMore && (
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={onLearnMore}
            className="px-4 py-1 bg-[#F8E1B8] rounded-full text-[#0F4F58] text-[18px] ml-[121px]"
            style={{ fontFamily: "RocaTwo-Bold" }}
          >
            learn more
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizPathwayCards;
