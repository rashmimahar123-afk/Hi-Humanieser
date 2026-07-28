import Image, { StaticImageData } from "next/image";
import images from "@/src/assets/images";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import { useRouter } from "next/navigation";

type MY_PERSONAL_PROGRESS_PROPS = {
  progressList: Array<any>;
};
function MyPersonalProgress(props: MY_PERSONAL_PROGRESS_PROPS) {
  const { progressList } = props;

  const chunkArray = (arr: any[], size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const cards = chunkArray(progressList, 5);
  const rows = chunkArray(cards, 2);

  const iconList = [
    images.perspectiveImg,
    images.wellbeingSmallPoly,
    images.clarityImg,
    images.curiousImg,
    images.listenImg,
  ];
  const router = useRouter();
  return (
    <>
      {/* Heading */}
      <h2 className="text-[20px] sm:text-[24px] lg:text-[35px] font-bold text-[#F5F0EB] font-[RocaTwo]">
        My Personal Progress
      </h2>
      {progressList.length === 0 ? (
        <>
          <div className="text-[#0F4F58] font-[Roboto] font-[700] text-[13px] sm:text-[15px] lg:text-[22px] ml-[10px] sm:ml-[20px] lg:ml-[40px] mt-[15px]">
            Your progress will start to build here.
          </div>
          <p className="text-[#0F4F58] font-[Roboto] font-[400] text-[13px] sm:text-[15px] lg:text-[22px] ml-[10px] sm:ml-[20px] lg:ml-[40px] ">
            When you choose your first Pathway, this space will help you keep
            track the Pathways you’re exploring and what you’ve completed over
            time.
          </p>
        </>
      ) : (
        <p className="text-[#0F4F58] font-[Roboto] font-[400] text-[13px] sm:text-[15px] lg:text-[22px] ml-[10px] sm:ml-[20px] lg:ml-[40px] mt-[15px]">
          See the pathways you've taken on and how far you've come. Each one
          shows whether it's in progress or complete, so you can track your
          journey at a glance.
        </p>
      )}
      {progressList?.length === 0 ? (
        <>
          {/* Cards */}
          <div className="mt-[20px] space-y-6 lg:space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
              <div className="bg-[#F5F0EB] rounded-2xl p-[8rem] sm:p-6 lg:p-[8rem]">
                <div className="text-[#0f4f58] text-[16px] flex justify-center  font-[700] sm:text-[16px] lg:text-[20px] font-[Canva Sans] truncate">
                  Your pathways will appear here
                </div>
              </div>
              <div className="bg-[#F5F0EB] rounded-2xl p-[8rem] sm:p-6 lg:p-[8rem]">
                <div className="text-[#0f4f58] text-[16px] flex justify-center  font-[700] sm:text-[16px] lg:text-[20px] font-[Canva Sans] truncate">
                  Your pathways will appear here
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Cards */}
          <div className="mt-[20px] space-y-6 lg:space-y-10">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10"
              >
                {row.map((cardItems, cardIndex) => (
                  <div
                    key={cardIndex}
                    className="bg-[#F5F0EB] rounded-2xl p-4 sm:p-6 lg:p-8"
                  >
                    <ul className="space-y-4 lg:space-y-6">
                      {cardItems.map((item: any, index: number) => {
                        const pathwayName = Object.keys(item).find(
                          (key) =>
                            ![
                              "created",
                              "uuid",
                              "active",
                              "completed",
                            ].includes(key),
                        );

                        return (
                          <li
                            key={index}
                            className="flex items-center justify-between gap-2"
                          >
                            {/* LEFT */}
                            <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center">
                                <Image
                                  src={iconList[index % 5]}
                                  alt=""
                                  width={80}
                                  height={80}
                                />
                              </div>
                              <span className="text-[#000000] text-[12px] sm:text-[14px] lg:text-[17px] font-[Canva Sans] truncate">
                                {pathwayName}
                              </span>
                            </div>

                            {/* RIGHT */}
                            <div className="text-right flex-shrink-0">
                              <p className="text-[#000000] text-[11px] sm:text-[13px] lg:text-[17px]">
                                {item.completed
                                  ? "Completed on"
                                  : "In Progress"}
                              </p>
                              {item.completed && (
                                <p className="text-[#000000] text-[11px] sm:text-[13px] lg:text-[17px]">
                                  {new Date(
                                    item.completed * 1000,
                                  ).toLocaleDateString()}
                                </p>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom Buttons */}
          <div className="flex justify-center mt-[30px] lg:mt-[50px]">
            <div className="grid grid-cols-2 gap-6 lg:gap-10 w-auto">
              {/* Left Btn */}
              <div
                className="cursor-pointer"
                onClick={() => router.push("/view-all")}
              >
                <PolygonButton
                  height="129px"
                  bgColor="#F6E3BF"
                  clipPath={`polygon(0% 29px, 100% 7%, 87% 89%, 20% calc(100% - 13px))`}
                  decorationImg={{
                    src: images.arrowImg,
                    width: 48,
                    height: 48,
                  }}
                  decorationPosition={{ className: "-left-[44px] -top-[12px]" }}
                >
                  <div className="h-full flex items-center justify-center text-center">
                    <span className="text-[#0F4F58] text-[14px] sm:text-[16px] lg:text-[18px] font-[RocaTwo] font-bold leading-[24px] lg:leading-[28px]">
                      See all Micro-Actions I've tried
                    </span>
                  </div>
                </PolygonButton>
              </div>
              {/* Right Btn */}
              <div
                className="cursor-pointer"
                onClick={() => router.push("/view-all")}
              >
                <PolygonButton
                  height="129px"
                  bgColor="#acd5ab"
                  radius={14}
                  topTilt={18}
                  slantSide="right"
                  clipPath={`polygon(17% 17px, 77% 11%, 100% 81%, 0% calc(100% - 15px))`}
                  decorationImg={{
                    src: images.rightArrow,
                    width: 48,
                    height: 48,
                  }}
                  decorationPosition={{
                    className: "-right-[27px] -top-[20px]",
                  }}
                >
                  <div className="h-full flex items-center justify-center text-center">
                    <span className="text-[#0F4F58] text-[14px] sm:text-[16px] lg:text-[18px] font-[RocaTwo] font-bold leading-[24px] lg:leading-[28px] text-center whitespace-normal">
                      See all my Pathway Reflections
                    </span>
                  </div>
                </PolygonButton>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default MyPersonalProgress;
