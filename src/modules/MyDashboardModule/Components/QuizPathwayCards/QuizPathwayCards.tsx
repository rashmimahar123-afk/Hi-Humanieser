import { usePathname } from "next/navigation";

type RESULT_PATHWAY_CARD_PROPS = {
  title: string;
  description: string;
  onLearnMore: () => void;
  bgColor: string;
};

function QuizPathwayCards(props: RESULT_PATHWAY_CARD_PROPS) {
  const { title, description, onLearnMore, bgColor } = props;
  const pathname = usePathname();
  const hideLearnMore = pathname.includes("dashboard-pdf");

  return (
    <div
      className={`
        w-full
        lg:w-[357px]
        min-h-[220px] lg:h-[274px]
        rounded-[12px]
        px-5 md:px-6
        py-6 md:py-8
        flex flex-col justify-between
      `}
      style={{ backgroundColor: bgColor }}
    >
      {/* Top content */}
      <div>
        <h3
          className="text-[#0F4F58] text-[15px] md:text-[18px] lg:text-[22px] mb-3 md:mb-4 font-[700]"
          style={{ fontFamily: "RocaTwo-BI" }}
        >
          {title}
        </h3>
        <p
          className="text-[#0F4F58] text-[13px] md:text-[16px] lg:text-[20px] leading-[130%] font-[400]"
          style={{ fontFamily: "Aptos" }}
        >
          {description}
        </p>
      </div>

      {/* Learn More Action */}
      {!hideLearnMore && (
        <div className="flex flex-col items-center sm:items-end gap-4 mt-4 md:mt-0">
          <button
            onClick={onLearnMore}
            className="px-4 py-1 bg-[#F8E1B8] rounded-full text-[#0F4F58] text-[14px] md:text-[16px] lg:text-[18px]"
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
