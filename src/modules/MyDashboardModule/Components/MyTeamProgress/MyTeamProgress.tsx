/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import images from "@/src/assets/images";
import { MTJ_TEAM_RITUAL_DATA } from "@/src/modules/MyTeamJourneyModule/Types/ResponseTypes";

type MY_TEAM_PROGRESS_PROPS = {
  teamRituals?: Array<MTJ_TEAM_RITUAL_DATA>;
  ritualPractice?: {
    status?: string;
    completed_at?: string;
  } | null;
};

function MyTeamProgress(props: MY_TEAM_PROGRESS_PROPS) {
  const { teamRituals = [], ritualPractice } = props;
  const chunkArray = (arr: any[], size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const cards = chunkArray(teamRituals, 5);
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
      <h2 className="text-[22px] md:text-[28px] lg:text-[35px] font-bold text-[#F5F0EB] font-[RocaTwo]">
        My Team Progress
      </h2>

      {teamRituals?.length === 0 && (
        <div className="text-[#0F4F58] font-[Roboto] font-[400] text-[13px] sm:text-[15px] lg:text-[22px] ml-[10px] sm:ml-[20px] lg:ml-[40px] mt-[15px]">
          This space will grow as your team begins to practise together.
        </div>
      )}

      <p className="text-[#0F4F58] font-[Roboto] font-[400] text-[13px] md:text-[17px] lg:text-[22px] ml-0 sm:ml-[20px] md:ml-[40px] mt-[10px] md:mt-[15px]">
        {teamRituals?.length === 0
          ? "When your team starts using rituals, you’ll see the ones in progress, the ones completed, and the small ways your contributions are helping to shape collective progress."
          : "See the rituals your team is working on and your part in them. Track the ones you've contributed to — whether in progress or complete — and notice how your actions strengthen collective results."}
      </p>

      {teamRituals?.length === 0 ? (
        <>
          {/* Cards */}
          <div className="mt-[20px] space-y-6 lg:space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
              <div className="bg-[#F5F0EB] rounded-2xl p-[8rem] sm:p-6 lg:p-[8rem]">
                <div className="text-[#0f4f58] text-[16px] flex justify-center  font-[700] sm:text-[16px] lg:text-[20px] font-[Canva Sans] truncate">
                  Your team rituals will appear here{" "}
                </div>
              </div>
              <div className="bg-[#F5F0EB] rounded-2xl p-[8rem] sm:p-6 lg:p-[8rem]">
                <div className="text-[#0f4f58] text-[16px] flex justify-center  font-[700] sm:text-[16px] lg:text-[20px] font-[Canva Sans] truncate">
                  Your team rituals will appear here{" "}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Cards — stack on mobile, side-by-side on md+ */}
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
                      {cardItems.map((item: any, index: number) => (
                        <li
                          key={item.team_ritual_id}
                          className="flex items-center justify-between gap-2"
                        >
                          {/* LEFT */}
                          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0">
                              <Image
                                src={iconList[index % iconList.length]}
                                alt=""
                                width={80}
                                height={80}
                              />
                            </div>

                            <span className="text-[#000000] text-[12px] sm:text-[14px] lg:text-[17px] font-[Canva Sans] truncate">
                              {item.title}
                            </span>
                          </div>

                          {/* RIGHT */}
                          <div className="text-right flex-shrink-0">
                            <p className="text-[#000000] text-[11px] sm:text-[13px] lg:text-[17px]">
                              {ritualPractice?.status === "completed"
                                ? "Completed on"
                                : "In Progress"}
                            </p>

                            {ritualPractice?.status === "completed" &&
                              ritualPractice?.completed_at && (
                                <p className="text-[#000000] text-[11px] sm:text-[13px] lg:text-[17px]">
                                  {new Date(
                                    ritualPractice.completed_at,
                                  ).toLocaleDateString()}
                                </p>
                              )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default MyTeamProgress;
