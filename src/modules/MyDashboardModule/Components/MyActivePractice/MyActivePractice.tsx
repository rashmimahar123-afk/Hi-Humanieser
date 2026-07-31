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
      slidesToSlide: 1,
      partialVisibilityGutter: 80,
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
      partialVisibilityGutter: 20,
    },
  };
  console.log("practiceListpracticeList", practiceList);
  const hasActivePractice = practiceList?.some(
    (item: any) => item.checked === true,
  );

  return (
    <>
      {/* Heading */}
      <h2 className="text-[20px] sm:text-[24px] lg:text-[35px] font-bold text-[#F5F0EB] font-[RocaTwo]">
        My Active Practice List
      </h2>
      {/* Sub text */}
      {practiceList?.length === 0 && (
        <div className="text-[#0F4F58] font-[Roboto] font-[400] text-[13px] sm:text-[15px] lg:text-[22px] ml-[10px] sm:ml-[20px] lg:ml-[40px] mt-[15px]">
          Your practice list will appear here.
        </div>
      )}
      <p className="text-[#0F4F58] font-[Roboto] text-[13px] sm:text-[15px] lg:text-[22px] ml-[10px] sm:ml-[20px] lg:ml-[40px] mt-[15px]">
        {practiceList?.length === 0 || !hasActivePractice
          ? " Once you choose micro-actions from your Pathways, this space will help you keep them visible, so you can return to the small habits you’re building over time."
          : " Here are the micro-actions you've chosen to keep practising. They're your everyday habits-in-progress — small moves that build momentum over time."}
      </p>
      {practiceList?.length === 0 || !hasActivePractice ? (
        <>
          <>
            {/* Cards */}
            <div className="mt-[20px] space-y-6 lg:space-y-10">
              <div className="bg-[#F5F0EB] rounded-2xl p-[8rem] sm:p-6 lg:p-[8rem]">
                <div className="text-[#0f4f58] text-[16px] flex justify-center  font-[700] sm:text-[16px] lg:text-[20px] font-[Canva Sans] truncate">
                  No active practice list recorded yet
                </div>
              </div>
            </div>
          </>
        </>
      ) : (
        <>
          {/* Carousel */}
          <div className="mt-8 lg:mt-12">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              arrows={true}
              containerClass="carousel-container"
              itemClass="px-2 sm:px-3"
              partialVisible={true}
              renderDotsOutside={false}
            >
              {practiceList.map((item: any, index: number) => (
                <div key={`item${index}`}>
                  <div className="bg-[#F5C882] rounded-2xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 flex flex-col justify-between min-h-[280px] sm:min-h-[320px] lg:min-h-[360px]">
                    <div>
                      <h3 className="text-[17px] sm:text-[19px] lg:text-[26px] text-[#0F4F58] font-[RocaTwo] font-bold">
                        {item.title}
                      </h3>
                      <p className="mt-3 lg:mt-5 text-[#0F4F58] text-[13px] sm:text-[14px] lg:text-[18px] font-[Aptos]">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-6 lg:mt-8">
                      <div className="flex justify-end text-[#0F4F58] text-[12px] sm:text-[14px] lg:text-[17px] px-4 py-2 rounded-full font-[RocaTwo]">
                        <span
                          className="text-[12px] sm:text-[13px] lg:text-[16px] text-[#0F4F58]"
                          style={{ fontFamily: "Aptos" }}
                        >
                          Remove from Practice List{" "}
                        </span>
                        <input
                          type="checkbox"
                          checked={item.checked}
                          readOnly
                          className="ml-3 lg:ml-4 w-5 h-5 lg:w-6 lg:h-6 text-[#0F4F58] bg-gray-100 border-gray-300 rounded focus:ring-[#86C9C9] focus:ring-2 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </>
      )}
    </>
  );
}
export default MyActivePractice;
