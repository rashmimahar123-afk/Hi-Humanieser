import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { openSelectTeamRitualModal } from "../SelectTeamRitualModal/SelectTeamRitualModal";
import useHhFrameworkMtjQuery from "@/src/modules/MyTeamJourneyModule/Hooks/useHhFrameworkMtjQuery";
import { MY_TEAM_RITUALS_DATA } from "@/src/modules/MyTeamJourneyModule/Types/ResponseTypes";

type PATHWAY_CARD = {
  ritual_id?: number;
  title: string;
  description: string;
  learnMoreColor: string;
  impact: string;
  selected?: boolean;
  onSelect?: () => void;
  onLearnMore: () => void;
};

type IDEA_PATHWAY_CARD_PROPS = {
  bgColor: string;
  onCardClick?: (card: PATHWAY_CARD, index: number) => void;
  ritualCards: PATHWAY_CARD | any;
};

function ContinuePressureCards(props: IDEA_PATHWAY_CARD_PROPS) {
  const { bgColor, onCardClick, ritualCards } = props;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  console.log("ritualCardsritualCards", ritualCards);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2,
      partialVisibilityGutter: 120, // 👈 IMPORTANT
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 60,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div
      className="rounded-[24px] pl-[40px] py-[40px] flex  w-full overflow-visible"
      style={{ backgroundColor: bgColor }}
    >
      {/* RIGHT CAROUSEL */}
      <div className="flex-1 lg:w-[100%]">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          containerClass="carousel-container"
          itemClass="px-3"
          removeArrowOnDeviceType={[]}
          dotListClass="custom-dot-list-style"
          partialVisible={true} //  ADD THIS
        >
          {ritualCards.map((card: PATHWAY_CARD, index: number) => (
            <div
              key={index}
              className="bg-[#f8e1b8] from-amber-50 to-stone-100 rounded-3xl p-8 shadow-lg h-full flex flex-col justify-between min-h-[320px]"
            >
              <div>
                <h3
                  className="text-[24px] text-[#0F4F58] mb-[16px] flex justify-center font-bold"
                  style={{ fontFamily: "RocaTwo-Bold" }}
                >
                  {card?.title}
                </h3>

                <p className="text-[20px] text-[#0F4F58] mb-6 font-[Roboto]">
                  {card?.description}
                </p>

                <div>
                  <span className="font-bold text-[#0F4F58] text-[20px] font-[Roboto]">
                    Operational Impact:
                  </span>

                  <p className="text-[20px] text-[#0F4F58] leading-[32px] text-[17px] font-[Roboto]">
                    {card?.impact}
                  </p>
                </div>
              </div>
              <div className="flex justify-end items-center gap-3 mt-4 ">
                <span className="text-[#0F4F58] text-[16px] font-[Aptos]">
                  Select Ritual
                </span>

                <div
                  onClick={() => {
                    card.onSelect?.();
                    onCardClick?.(card, index);
                  }}
                  className="w-[26px] h-[26px] rounded-[6px] border-2 border-[#0F4F58] flex items-center justify-center cursor-pointer"
                >
                  {card.selected && (
                    <div className="w-[16px] h-[16px] bg-[#E6B86C] rounded-[4px]" />
                  )}
                </div>
              </div>
              <div className="flex justify-start mt-10">
                <div className="flex flex-col items-center gap-[20px]">
                  <button
                    className="px-[28px] py-[8px] rounded-full text-[18px] text-[#0F4F58] font-[Roboto] "
                    style={{ backgroundColor: card.learnMoreColor }}
                    onClick={card.onLearnMore}
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ContinuePressureCards;
