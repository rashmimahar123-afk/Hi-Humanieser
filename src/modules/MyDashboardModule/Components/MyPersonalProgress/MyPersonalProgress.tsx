/* eslint-disable @typescript-eslint/no-explicit-any */
import Image, { StaticImageData } from "next/image";
import images from "@/src/assets/images";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";

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

  // 5 items per card
  const cards = chunkArray(progressList, 5);

  // 2 cards per row
  const rows = chunkArray(cards, 2);

  const iconList = [
    images.perspectiveImg,
    images.wellbeingSmallPoly,
    images.clarityImg,
    images.curiousImg,
    images.listenImg,
  ];
  return (
    <>
      {/* Heading */}
      <h2 className="text-[35px] font-bold text-[#F5F0EB] font-[RocaTwo]">
        My Personal Progress
      </h2>
      <p className="text-[#0F4F58] font-[Roboto] font-[400] text-[22px] ml-[40px] mt-[15px] ">
        See the pathways you’ve taken on and how far you’ve come. Each one shows
        whether it’s in progress or complete, so you can track your journey at a
        glance.
      </p>

      {/* Cards */}
      <div className="mt-[20px] space-y-10">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-2 gap-10">
            {row.map((cardItems, cardIndex) => (
              <div key={cardIndex} className="bg-[#F5F0EB] rounded-2xl p-8">
                <ul className="space-y-6">
                  {cardItems.map((item: any, index: number) => {
                    const pathwayName = Object.keys(item).find(
                      (key) =>
                        !["created", "uuid", "active", "completed"].includes(
                          key,
                        ),
                    );

                    return (
                      <li
                        key={index}
                        className="flex items-center justify-between"
                      >
                        {/* LEFT */}
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 flex items-center justify-center">
                            <Image
                              src={iconList[index % 5]}
                              alt=""
                              width={80}
                              height={80}
                            />
                          </div>

                          <span className="text-[#000000] text-[17px] font-[Canva Sans]">
                            {pathwayName}
                          </span>
                        </div>

                        {/* RIGHT */}
                        <div className="text-right">
                          <p className="text-[#000000] text-[17px]">
                            {item.completed ? "Completed on" : "In Progress"}
                          </p>

                          {item.completed && (
                            <p className="text-[#000000] text-[17px]">
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
      <div className=" flex justify-center mt-[50px]">
        <div className="grid grid-cols-2 gap-10">
          {/* -------slant Left Btn-------- */}
          <div>
            <PolygonButton
              height="129px"
              bgColor="#F6E3BF"
              clipPath={`polygon(
    0% 29px,
    100% 7%,
    87% 89%,
    20% calc(100% - 13px)
  )`}
              decorationImg={{
                src: images.arrowImg,
                width: 48,
                height: 48,
              }}
              decorationPosition={{
                className: "-left-[44px] -top-[12px]",
              }}
            >
              <div className="h-full flex items-center justify-center text-center">
                <span className="text-[#0F4F58] text-[18px] font-[RocaTwo] font-bold leading-[28px]">
                  See all Micro-Actions I’ve tried
                </span>
              </div>
            </PolygonButton>
          </div>
          {/* -------slant Right Btn-------- */}
          <div>
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
                <span
                  className="
      text-[#0F4F58]
      text-[18px]
      font-[RocaTwo]
      font-bold
      leading-[28px]
      text-center
      whitespace-normal
    "
                >
                  See all my Pathway Reflections
                </span>
              </div>
            </PolygonButton>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyPersonalProgress;
