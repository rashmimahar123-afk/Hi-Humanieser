import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import MyNotes from "../MyNotes/MyNotes";
import Image from "next/image";
import images from "@/src/assets/images";
import { PREVIOUS_CYCLE_DATA } from "../../Types/ResponseTypes";

type PREVIOUS_CYCLE_PROPS = {
  cycle: PREVIOUS_CYCLE_DATA;
};
function PreviousCycle(props: PREVIOUS_CYCLE_PROPS) {
  const { cycle } = props;

  const COLORS = ["#63C0C5", "#49A6BC", "#3A88AE", "#5977A3", "#6C6498"];
  const teamRituals = cycle?.team_rituals || [];
  const focusAreas = cycle?.focus_areas || [];

  const engagement = cycle?.engagement;

  // const pollData = cycle?.poll;

  const startedDate = cycle?.started_at
    ? new Date(cycle.started_at * 1000).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "--";

  const completedDate = cycle?.completed_at
    ? new Date(cycle.completed_at).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "--";
  return (
    <>
      {/* ================= MAIN WRAPPER ================= */}
      <div className="bg-[#F3EFE8] rounded-2xl px-16 py-14 relative">
        <div className="absolute right-0 bottom-0 ">
          <Image
            src={images.dottedCurve}
            alt="pattern"
            width={500}
            height={270}
          />
        </div>
        {/* 2 COLUMN GRID */}
        <div className="grid grid-cols-[260px_420px_420px] gap-y-10 gap-x-6 items-center">
          {" "}
          {/* ===== LEFT LABEL COLUMN ===== */}
          <div className="text-[#0F4F58] text-[30px] font-[RocaTwo] font-bold">
            Pressure Point
          </div>
          <div className="col-span-2">
            <div className="w-[420px] h-[64px] bg-[#E9E9E9] rounded-full px-8 flex items-center text-[#567F55] text-[22px]">
              {cycle?.champion_pp || "--"}
            </div>
          </div>
          <div className="text-[#0F4F58] text-[30px] font-[RocaTwo] font-bold">
            Focus Area
          </div>
          {focusAreas.map((focusArea: string, index: number) => (
            <div key={`${focusArea}-${index}`}>
              <div className="w-[420px] min-h-[64px] bg-[#E9E9E9] rounded-full px-8 py-3 flex items-center text-[#567F55] text-[22px]">
                {focusArea}
              </div>
            </div>
          ))}
          <div className="text-[#0F4F58] text-[30px] font-[RocaTwo] font-bold">
            Team Ritual
          </div>
          {teamRituals.map((ritual: any) => (
            <div key={ritual.team_ritual_id}>
              <div className="w-[420px] min-h-[64px] bg-[#E9E9E9] rounded-full px-8 py-3 flex items-center text-[#567F55] text-[22px]">
                {ritual.title}
              </div>
            </div>
          ))}
          <div className="text-[#0F4F58] text-[30px] font-[RocaTwo] font-bold">
            Started on
          </div>
          <div className="col-span-2">
            <div className="w-[420px] h-[64px] bg-[#E9E9E9] rounded-full px-8 flex items-center text-[#567F55] text-[22px]">
              {startedDate}
            </div>
          </div>
          <div className="text-[#0F4F58] text-[30px] font-[RocaTwo] font-bold">
            Finish
          </div>
          <div className="col-span-2">
            <div className="w-[420px] bg-[#E9E9E9] rounded-2xl px-8 py-5 text-[#567F55] text-[22px] leading-[32px]">
              {completedDate}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        {/* ================= TITLE ================= */}
        <h2 className="text-[33px] text-[#0F4F58] font-bold font-[RocaTwo] mb-2">
          How We Got Here
        </h2>

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-2 gap-10">
          {/* ================= LEFT POLL CARD ================= */}
          {/* <div className="bg-[#f5f0eb] rounded-3xl p-4 ">
            <h3 className="text-[25px] text-[#0F4F58] font-bold font-[RocaTwo] self-start">
              Team Poll Results
            </h3>

            <div className="h-[420px] mt-2">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    outerRadius={170}
                    label={({ name, percent }: any) =>
                      `${name} ${(percent * 100).toFixed(1)}%`
                    }
                  >
                    {data.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <p className="text-center text-[20px] text-[#0F4F58] font-[RocaTwo] font-bold mt-4">
              What the team indicates would most support progress right now
            </p>
          </div> */}

          {/* ================= RIGHT STACK ================= */}
          <div className="flex flex-col gap-8">
            {/* Pressure Point */}
            <div className="bg-[#f5f0eb] rounded-3xl p-4">
              <h3 className="text-[25px] text-[#0F4F58] font-bold font-[RocaTwo]">
                Pressure Point
              </h3>

              <div className="mt-2 bg-[#ffffff] h-[64px] rounded-full px-8 flex items-center text-[#567F55] text-[20px] font-[Roboto] mb-4">
                Everything feels urgent
              </div>

              <p className="text-center text-[20px] text-[#0F4F58] font-[RocaTwo] font-bold">
                What you’re noticing is creating pressure right now
              </p>
            </div>

            {/* Recommended Focus */}
            <div className="bg-[#f5f0eb] rounded-3xl p-4">
              <h3 className="text-[25px] text-[#0F4F58] font-bold font-[RocaTwo] ">
                Recommended Focus Area
              </h3>

              <div className="mt-2 flex justify-center gap-16">
                <div>
                  <PolygonButton
                    height="106px"
                    width="87px"
                    bgColor="#acd5ab"
                    clipPath={`polygon(
    0% 29px,
    100% 7%,
    87% 89%,
    20% calc(100% - 13px)
  )`}
                  >
                    <div className="h-full flex items-center justify-center text-center">
                      <span className="text-[#0F4F58] text-[18px] font-[RocaTwo] font-bold leading-[28px]">
                        Build Trust{" "}
                      </span>
                    </div>
                  </PolygonButton>
                </div>
                {/* -------slant Right Btn-------- */}
                <div>
                  <PolygonButton
                    height="106px"
                    width="87px"
                    bgColor="#86c9c9"
                    radius={14}
                    topTilt={18}
                    slantSide="right"
                    clipPath={`polygon(17% 17px, 77% 11%, 100% 81%, 0% calc(100% - 15px))`}
                  >
                    <div className="h-full flex items-center justify-center text-center">
                      <span
                        className="
      text-[#0F4F58]
      text-[18px]
      font-[RocaTwo]
      font-bold
      leading-[18px]
      text-center
      whitespace-normal
    "
                      >
                        Strengthen Collaboration{" "}
                      </span>
                    </div>
                  </PolygonButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 relative">
        {/* Section Title */}
        <h2 className="text-[32px] font-[RocaTwo] text-[#0F4F58] mt-6 font-bold">
          Engagement{" "}
        </h2>

        {/* Outer Beige Container */}
        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-12  mt-4">
          {/* CARD */}
          {[1, 2].map((_, index) => (
            <div key={index} className="bg-[#cde3cc] rounded-[20px] p-10 ">
              {/* TOP INFO SECTION */}
              <div className="space-y-6">
                {/* Focus Area */}
                <div className="flex items-center justify-between">
                  <span className="text-[20px] font-[RocaTwo] text-[#0F4F58]">
                    Focus Area
                  </span>
                  <div className="bg-[#EDEBE7] rounded-full px-6 py-2 text-[#567F55] text-[18px] font-[Roboto]">
                    {index === 0 ? "Improve Clarity" : "Build Trust"}
                  </div>
                </div>

                {/* Active Team Ritual */}
                <div className="flex items-center justify-between">
                  <span className="text-[20px] font-[RocaTwo] text-[#0F4F58] leading-tight">
                    Active Team <br /> Ritual
                  </span>
                  <div className="bg-[#EDEBE7] rounded-full px-6 py-2 text-[#567F55] text-[18px] font-[Roboto]">
                    {index === 0 ? "What Happens Next" : "Say It in One Line"}
                  </div>
                </div>

                {/* Time Remaining */}
                {/* <div className="flex items-center justify-between">
                  <span className="text-[20px] font-[RocaTwo] text-[#0F4F58] leading-tight">
                    Time remaining <br /> in this cycle
                  </span>
                  <div className="bg-[#EDEBE7] rounded-full px-6 py-2 text-[#567F55] text-[18px] font-[Roboto]">
                    [5 Weeks]
                  </div>
                </div> */}
              </div>

              {/* Engagement Section */}
              <div className="mt-12">
                <h3 className="text-[28px] font-[RocaTwo] text-[#0F4F58] mb-8">
                  Engagement so far:
                </h3>

                <ul className="space-y-6 text-[18px] text-[#0F4F58] font-[Roboto]">
                  <li className="flex items-start gap-4">
                    <Image
                      src={images.engagementImg}
                      alt="arrow"
                      width={22}
                      height={22}
                      className="mt-1"
                    />
                    <span>
                      Awareness: {engagement?.awareness?.percentage ?? 0}% have
                      viewed the ritual
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <Image
                      src={images.engagementImg}
                      alt="arrow"
                      width={22}
                      height={22}
                      className="mt-1"
                    />
                    <span>
                      Participation:{" "}
                      {engagement?.team_ritual_participation?.percentage ?? 0}%
                      have contributed at least one team reflection
                    </span>
                  </li>

                  {/* <li className="flex items-start gap-4">
                    <Image
                      src={images.engagementImg}
                      alt="arrow"
                      width={22}
                      height={22}
                      className="mt-1"
                    />
                    <span>Momentum: 41% have contributed more than once</span>
                  </li> */}

                  <li className="flex items-start gap-4">
                    <Image
                      src={images.engagementImg}
                      alt="arrow"
                      width={22}
                      height={22}
                      className="mt-1"
                    />
                    <span>
                      Sharing: {engagement?.sharing?.shared_count ?? 0}{" "}
                      reflections shared on Reflection Wall
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 ">
        <h2 className="text-[33px] text-[#0F4F58] font-[RocaTwo] font-bold">
          My Notes
        </h2>

        {/* ================= TWO CARDS ================= */}
        <div className="grid grid-cols-2 gap-14 mt-4">
          <MyNotes />
          <MyNotes />
        </div>
      </div>
    </>
  );
}
export default PreviousCycle;
