"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import ChampionNotes from "../ChampionNotes/ChampionNotes";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import {
  GET_MTJ_KPI_CHOSEN_TEAM_RITUAL_DATA,
  GET_MTJ_KPI_POLL_RESULTS_DATA,
} from "../../Types/ResponseTypes";

type CHAMPION_NOTES_SECOND_SECTION = {
  cycleKpi: any;
  poll: any;
  recommendedFocusAreas: any;
};

function ChampionNotesSecondSection(props: CHAMPION_NOTES_SECOND_SECTION) {
  const { cycleKpi, poll, recommendedFocusAreas } = props;

  const COLORS = ["#63C0C5", "#49A6BC", "#3A88AE", "#5977A3", "#6C6498"];

  const chartData =
    poll?.results
      ?.filter((item: any) => item.vote_percentage > 0)
      .map((item: any) => ({
        name: item.option,
        value: item.vote_percentage,
      })) || [];

  console.log("cycleKpicycleKpicycleKpi", cycleKpi);
  return (
    <>
      {/* ================= TITLE ================= */}
      <h2 className="text-[33px] text-[#0F4F58] font-bold font-[RocaTwo] mb-2">
        How We Got Here
      </h2>

      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-2 gap-10">
        {/* ================= LEFT POLL CARD ================= */}
        <div className="bg-[#f8e1b8] rounded-3xl p-12 ">
          <h3 className="text-[25px] text-[#0F4F58] font-bold font-[RocaTwo] self-start">
            Team Poll Results
          </h3>

          <div className="w-[650px] h-[450px] mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={170}
                  label={({ x, y, name, value, textAnchor }: any) => {
                    const words = name.split(" ");

                    return (
                      <text
                        x={x}
                        y={y}
                        textAnchor={textAnchor}
                        fill="#0F4F58"
                        fontSize={16}
                      >
                        <tspan x={x} dy="0">
                          {words
                            .slice(0, Math.ceil(words.length / 2))
                            .join(" ")}
                        </tspan>

                        <tspan x={x} dy="18">
                          {words.slice(Math.ceil(words.length / 2)).join(" ")}
                        </tspan>

                        <tspan x={x} dy="18">
                          {value}%
                        </tspan>
                      </text>
                    );
                  }}
                >
                  {chartData.map((_: any, index: any) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <p className="text-center text-[20px] text-[#0F4F58] font-[RocaTwo] font-bold mt-4">
            What the team indicates would most support progress right now
          </p>
        </div>

        {/* ================= RIGHT STACK ================= */}
        <div className="flex flex-col gap-8">
          {/* Pressure Point */}
          <div className="bg-[#f8e1b8] rounded-3xl p-6">
            <h3 className="text-[25px] text-[#0F4F58] font-bold font-[RocaTwo]">
              Pressure Point
            </h3>

            <div className="mt-2 bg-[#ffffff] h-[64px] rounded-full px-8 flex items-center text-[#567F55] text-[20px] font-[Roboto] mb-4">
              {cycleKpi?.champion_pp || "--"}{" "}
            </div>

            <p className="text-center text-[20px] text-[#0F4F58] font-[RocaTwo] font-bold">
              What you’re noticing is creating pressure right now
            </p>
          </div>

          {/* Recommended Focus */}
          <div className="bg-[#f8e1b8] rounded-3xl p-6">
            <h3 className="text-[25px] text-[#0F4F58] font-bold font-[RocaTwo] ">
              Recommended Focus Area
            </h3>
            <div className="mt-4 flex justify-center gap-10 flex-wrap">
              {/* {cycleKpi?.recommended_focus_areas?.map(
                (item: string, index: number) => (
                  <PolygonButton
                    key={`${item}-${index}`}
                    height="106px"
                    width="87px"
                    bgColor={index % 2 === 0 ? "#acd5ab" : "#86c9c9"}
                    clipPath={`polygon(
        0% 29px,
        100% 7%,
        87% 89%,
        20% calc(100% - 13px)
      )`}
                  >
                    <div className="flex h-full items-center justify-center px-2 text-center">
                      <span className="text-[#0F4F58] text-[18px] font-[RocaTwo] font-bold">
                        {item}
                      </span>
                    </div>
                  </PolygonButton>
                ),
              )} */}
              {recommendedFocusAreas.map((item: any, index: number) => (
                <PolygonButton
                  key={item.rank ?? index}
                  height="106px"
                  width="87px"
                  bgColor={index % 2 === 0 ? "#acd5ab" : "#86c9c9"}
                  clipPath={`polygon(
      0% 29px,
      100% 7%,
      87% 89%,
      20% calc(100% - 13px)
    )`}
                >
                  <div className="flex h-full items-center justify-center px-2 text-center">
                    <span className="text-[#0F4F58] text-[18px] font-[RocaTwo] font-bold">
                      {item.option}
                    </span>
                  </div>
                </PolygonButton>
              ))}
            </div>
          </div>

          {/* Chosen Team Ritual */}
          <div className="bg-[#f8e1b8] rounded-3xl p-6">
            <h3 className="text-[25px] text-[#0F4F58] font-bold font-[RocaTwo] ">
              Chosen Team Ritual
            </h3>

            <div className="flex flex-col gap-4 mt-3">
              {cycleKpi?.chosen_team_rituals?.map((ritual: any) => (
                <div
                  key={ritual.team_ritual_id}
                  className="bg-white rounded-full h-[64px] px-8 flex items-center text-[#567F55]"
                >
                  {ritual.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChampionNotesSecondSection;
