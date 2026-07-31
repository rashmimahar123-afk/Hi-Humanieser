import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./FromIdeasPathwayCards.module.css";

type PATHWAY_CARD = {
  title: string;
  description: string;
  learnMoreColor: string;
  onLearnMore: () => void;
};

type IDEA_PATHWAY_CARD_PROPS = {
  sectionTitle: string;
  bgColor: string;
  cards: PATHWAY_CARD[];
  type?: string;
};

function FromIdeasPathwayCard(props: IDEA_PATHWAY_CARD_PROPS) {
  const { sectionTitle, bgColor, cards, type } = props;
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
      className={`rounded-[24px] pl-[40px] py-[40px] flex gap-[40px] w-full  overflow-visible ${styles.root}`}
      style={{ backgroundColor: bgColor }}
    >
      {/* LEFT TITLE */}
      <div className="w-64 flex-shrink-0 hidden lg:block">
        {type === "focus-area" && (
          <div
            className="text-[42px] text-[#0F4F58] leading-tight"
            style={{ fontFamily: "RocaTwo-Bold" }}
          >
            Focus Area:
          </div>
        )}

        <div
          className={`text-[42px] text-[#0F4F58] leading-tight ${
            type === "focus-area" ? "mt-[15px]" : ""
          }`}
          style={{ fontFamily: "RocaTwo-Bold" }}
        >
          {sectionTitle}
        </div>
      </div>

      {/* Mobile/tablet title — hidden on desktop (lg+) */}
      <div className={`hidden max-lg:block ${styles.mobileTitle}`}>
        {type === "focus-area" && (
          <div
            className="text-[42px] text-[#0F4F58] leading-tight"
            style={{ fontFamily: "RocaTwo-Bold" }}
          >
            Focus Area:
          </div>
        )}
        <div
          className={`text-[42px] text-[#0F4F58] leading-tight ${
            type === "focus-area" ? "mt-[15px]" : ""
          }`}
          style={{ fontFamily: "RocaTwo-Bold" }}
        >
          {sectionTitle}
        </div>
      </div>

      {/* RIGHT CAROUSEL */}
      <div className="flex-1 lg:w-[100%]">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          keyBoardControl={true}
          containerClass="carousel-container"
          itemClass="px-3"
          removeArrowOnDeviceType={[]}
          dotListClass="custom-dot-list-style"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F7F3ED] from-amber-50 to-stone-100 rounded-3xl p-8 shadow-lg h-full flex flex-col justify-between min-h-[320px]"
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
                    className="px-[28px] py-[8px] rounded-full text-[18px] text-[#0F4F58]"
                    style={{ backgroundColor: card.learnMoreColor }}
                    onClick={card.onLearnMore}
                  >
                    learn more
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

export default FromIdeasPathwayCard;
