"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import ChampionNotes from "../ChampionNotes/ChampionNotes";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";

const data = [
  { name: "Trust", value: 33.3 },
  { name: "Clarity", value: 26.7 },
  { name: "Collaboration", value: 20 },
  { name: "Belonging", value: 13.3 },
  { name: "Wellbeing", value: 6.7 },
];

const COLORS = ["#63C0C5", "#49A6BC", "#3A88AE", "#5977A3", "#6C6498"];

function ChampionNotesSecondSection() {
  return (
    <>
      {/* ================= TITLE ================= */}
      <h2 className="text-[33px] text-[#0F4F58] font-bold font-[RocaTwo] mb-2">
        How We Got Here
      </h2>

      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-2 gap-10">
        {/* ================= LEFT POLL CARD ================= */}
        <div className="bg-[#f8e1b8] rounded-3xl p-10 ">
          <h3 className="text-[25px] text-[#0F4F58] font-bold font-[RocaTwo] self-start">
            Team Poll Results
          </h3>

          <div className="w-[420px] h-[420px] mt-2">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  outerRadius={170}
                  label={({ name, percent }) =>
                    `${name} ${(percent ?? 0 * 100).toFixed(1)}%`
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
        </div>

        {/* ================= RIGHT STACK ================= */}
        <div className="flex flex-col gap-8">
          {/* Pressure Point */}
          <div className="bg-[#f8e1b8] rounded-3xl p-6">
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
          <div className="bg-[#f8e1b8] rounded-3xl p-6">
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

          {/* Chosen Team Ritual */}
          <div className="bg-[#f8e1b8] rounded-3xl p-6">
            <h3 className="text-[25px] text-[#0F4F58] font-bold font-[RocaTwo] ">
              Chosen Team Ritual
            </h3>

            <div className="mt-2 bg-[#ffffff] h-[64px] rounded-full px-8 flex items-center text-[#567F55] text-[20px] font-[Roboto]">
              Say It in One Line
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChampionNotesSecondSection;
