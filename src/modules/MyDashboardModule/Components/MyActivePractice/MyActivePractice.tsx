import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./MyActivePractice.module.css";

/* eslint-disable @typescript-eslint/no-explicit-any */
type MY_ACTIVE_PRACTICE_PROPS = {
  practiceList: Array<any>;
};

function MyActivePractice(props: MY_ACTIVE_PRACTICE_PROPS) {
  const { practiceList } = props;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1, // 👈 CHANGE (smooth scroll)
      partialVisibilityGutter: 80, // 👈 adjust this
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
      partialVisibilityGutter: 40,
    },
  };

  return (
    <>
      {/* Heading */}
      <h2 className="text-[35px] font-bold text-[#F5F0EB] font-[RocaTwo]">
        My Active Practice List
      </h2>

      {/* Sub text */}
      <p className="text-[#0F4F58] font-[Roboto] text-[22px] ml-[40px] mt-[15px]">
        Here are the micro-actions you’ve chosen to keep practising. They’re
        your everyday habits-in-progress — small moves that build momentum over
        time.
      </p>

      {/* Carousel */}
      <div className="mt-12">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          arrows={true}
          containerClass="carousel-container"
          itemClass="px-3"
          partialVisible={true}
          renderDotsOutside={false}
        >
          {practiceList.map((item: any, index: number) => (
            <div key={`item${index}`}>
              <div className="bg-[#F5C882] rounded-2xl px-8 py-10 flex flex-col justify-between min-h-[360px]">
                <div>
                  <h3 className="text-[26px] text-[#0F4F58] font-[RocaTwo] font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[#0F4F58] text-[18px] font-[Aptos]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8">
                  <div className="flex justify-end  text-[#0F4F58] text-[17px] px-4 py-2 rounded-full font-[RocaTwo] ">
                    <span
                      className="text-[16px] text-[#0F4F58]"
                      style={{ fontFamily: "Aptos" }}
                    >
                      Remove from Pactice List{" "}
                    </span>

                    <input
                      type="checkbox"
                      checked={item.checked}
                      readOnly
                      className="ml-4 w-6 h-6 text-[#0F4F58] bg-gray-100 border-gray-300 rounded focus:ring-[#86C9C9] focus:ring-2 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default MyActivePractice;
