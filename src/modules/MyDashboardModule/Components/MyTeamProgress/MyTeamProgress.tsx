/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import images from "@/src/assets/images";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";

type MY_TEAM_PROGRESS_PROPS = {
  teamProgressList: Array<any>;
};
function MyTeamProgress(props: MY_TEAM_PROGRESS_PROPS) {
  const { teamProgressList } = props;
  return (
    <>
      {/* Heading */}
      <h2 className="text-[35px] font-bold text-[#F5F0EB] font-[RocaTwo]">
        My Team Progress
      </h2>
      <p className="text-[#0F4F58] font-[Roboto] font-[400] text-[22px] ml-[40px] mt-[15px] ">
        See the rituals your team is working on and your part in them. Track the
        ones you’ve contributed to — whether in progress or complete — and
        notice how your actions strengthen collective results.
      </p>

      {/* Cards */}
      <div className="mt-[20px] grid grid-cols-2 gap-10">
        {/* LEFT CARD */}
        <div className="bg-[#F5F0EB] rounded-2xl p-8">
          <ul className="space-y-6">
            {teamProgressList.map((item: any) => (
              <li key={item.id} className="flex items-center justify-between">
                {/* Left */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Image src={item.icon} alt="" width={32} height={32} />
                  </div>
                  <span className="text-[#000000] text-[17px] font-[Canva Sans] font-[400]">
                    {item.title}
                  </span>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3 text-sm">
                  {/* <Image src={images.compImg} alt="complete-img" /> */}
                  <div className="text-right">
                    <p className="text-[#000000] font-[400] font-[Aptos] text-[17px]">
                      {item.status === "Completed"
                        ? "Completed on"
                        : "In Progress"}
                    </p>
                    {item.date && (
                      <p className="text-[#000000] font-[400] font-[Aptos] text-[17px]">
                        {item.date}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-[#F5F0EB] rounded-2xl p-8 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image src={images.sustainImg} alt="" width={34} height={34} />
              </div>
              <h3 className="text-[#000000] text-[18px] font-[400] text-[17px] font-[Canva Sans]">
                Make it Sustainable
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyTeamProgress;
