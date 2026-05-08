import Image from "next/image";
import images from "@/src/assets/images";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import { useCreateMppMutation } from "../../../Hooks/useCreateMppMutation";
import { useDeletePathwayMutation } from "../../../Hooks/useDeletePathwayMutation";
import { useGetPathwaySelectMssgQuery } from "@/src/modules/WelcomeModule/Hooks/useGetPathwaySelectMssgQuery";

type PATHWAY_CARD = {
  title: string;
  description: string;
  learnMoreColor: string;
  onLearnMore: () => void;
  selected: boolean;
  onSelect: () => void;
};

type MYSELF_CARD_PROPS = {
  sectionTitle: string;
  bgColor: string;
  cards: PATHWAY_CARD[];
};

function MySelfCard(props: MYSELF_CARD_PROPS) {
  const { sectionTitle, bgColor, cards } = props;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div
      className="rounded-[24px] pl-[40px] py-[40px] flex gap-[40px] w-full max-w-[1000px] overflow-visible"
      style={{ backgroundColor: bgColor }}
    >
      {/* LEFT TITLE */}
      <div className="w-64 flex-shrink-0 hidden lg:block">
        <h2
          className="text-[42px] text-[#0F4F58] leading-tight"
          style={{ fontFamily: "RocaTwo-Bold" }}
        >
          {sectionTitle}
        </h2>
      </div>

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
        >
          {cards.map((card, index) => (
            <div
              key={`card${index}`}
              className="relative bg-[#F7F3ED] rounded-3xl p-8 shadow-lg h-full flex flex-col justify-between min-h-[320px]"
            >
              <div>
                <h3
                  className="text-[28px] text-[#0F4F58] mb-[16px]"
                  style={{ fontFamily: "RocaTwo-Bold" }}
                >
                  {card.title}
                </h3>

                <p
                  className="text-[20px] text-[#0F4F58]"
                  style={{ fontFamily: "Aptos" }}
                >
                  {card.description}
                </p>
              </div>

              <div className="flex justify-end mt-[40px]">
                <div className="flex flex-col items-center gap-[20px]">
                  <button
                    onClick={card.onLearnMore}
                    className="px-[28px] py-[8px] rounded-full text-[18px] text-[#0F4F58] cursor-pointer"
                    style={{ backgroundColor: card.learnMoreColor }}
                  >
                    learn more
                  </button>

                  <div
                    className="flex items-center gap-[10px] text-[#0F4F58] cursor-pointer"
                    onClick={card.onSelect}
                  >
                    <span>choose pathway</span>
                    <span
                      className={`w-[21px] h-[23px]  clip-triangle`}
                      style={{ backgroundColor: card.learnMoreColor }}
                    />
                    {card.selected && (
                      <div className="absolute right-8">
                        <Image
                          src={images.tickImg}
                          alt="tick"
                          width={22}
                          height={22}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default MySelfCard;
