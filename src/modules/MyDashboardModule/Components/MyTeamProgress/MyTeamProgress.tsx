/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import images from "@/src/assets/images";

type MY_TEAM_PROGRESS_PROPS = {
  teamProgressList: Array<any>;
  ritualPractice?: {
    status?: string;
  };
};

function MyTeamProgress(props: MY_TEAM_PROGRESS_PROPS) {
  const { teamProgressList, ritualPractice } = props;
  console.log(
    "teamProgressListteamProgressListteamProgressList",
    teamProgressList,
  );

  return (
    <>
      {/* Heading */}
      <h2 className="text-[22px] md:text-[28px] lg:text-[35px] font-bold text-[#F5F0EB] font-[RocaTwo]">
        My Team Progress
      </h2>

      {teamProgressList?.length === 0 && (
        <div className="text-[#0F4F58] font-[Roboto] font-[400] text-[13px] sm:text-[15px] lg:text-[22px] ml-[10px] sm:ml-[20px] lg:ml-[40px] mt-[15px]">
          This space will grow as your team begins to practise together.
        </div>
      )}

      <p className="text-[#0F4F58] font-[Roboto] font-[400] text-[13px] md:text-[17px] lg:text-[22px] ml-0 sm:ml-[20px] md:ml-[40px] mt-[10px] md:mt-[15px]">
        {teamProgressList?.length === 0
          ? "When your team starts using rituals, you’ll see the ones in progress, the ones completed, and the small ways your contributions are helping to shape collective progress."
          : "See the rituals your team is working on and your part in them. Track the ones you've contributed to — whether in progress or complete — and notice how your actions strengthen collective results."}
      </p>

      {teamProgressList?.length === 0 ? (
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
          <div className="mt-[20px] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
            {/* LEFT CARD */}
            <div className="bg-[#F5F0EB] rounded-2xl p-4 md:p-8">
              <ul className="space-y-4 md:space-y-6">
                {teamProgressList.map((item: any) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between gap-2"
                  >
                    {/* Left: icon + title */}
                    <div className="flex items-center gap-2 md:gap-4 min-w-0">
                      <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center">
                        <Image src={item.icon} alt="" width={28} height={28} />
                      </div>
                      <span className="text-[#000000] text-[12px] md:text-[14px] lg:text-[17px] font-[400] truncate">
                        {item.title}
                      </span>
                    </div>

                    {/* Right: status + date */}
                    <div className="flex-shrink-0 text-right">
                      <p className="text-[#000000] font-[400] font-[Aptos] text-[11px] md:text-[14px] lg:text-[17px] leading-tight">
                        {item.status === "Completed"
                          ? "Completed on"
                          : "In Progress"}
                      </p>
                      {item.date && (
                        <p className="text-[#000000] font-[400] font-[Aptos] text-[11px] md:text-[14px] lg:text-[17px] leading-tight">
                          {item.date}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT CARD */}
            <div className="bg-[#F5F0EB] rounded-2xl p-4 md:p-8">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src={images.sustainImg}
                    alt=""
                    width={34}
                    height={34}
                  />
                </div>
                <h3 className="text-[#000000] text-[13px] md:text-[15px] lg:text-[18px] font-[400] font-[Canva Sans]">
                  Make it Sustainable
                </h3>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MyTeamProgress;
