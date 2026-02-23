"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Own Your Impact", value: 32 },
  { name: "Stay Curious", value: 21 },
  { name: "Be Real, Not Right", value: 18 },
  { name: "Recognise the Person", value: 11 },
  { name: "Make it Safe", value: 9 },
  { name: "Wellbeing is Infrastructure", value: 7 },
];

export default function TeamWorkingOn() {
  return (
    <div className=" mx-auto bg-[#EBD6B3] rounded-[20px] p-8 relative">
      {/* Title */}
      <h2 className="text-[32px] text-[#0F4F58] font-[RocaTwo] mb-6 font-bold">
        What Your Team is Working On
      </h2>

      {/* Subtitle */}
      <p className="text-[22px] text-[#0F4F58] mb-14 font-[Roboto]">
        This snapshot reflects the Personal Pathways your team members are
        exploring — giving you a sense of where their individual attention and
        energy currently sit.
      </p>

      {/* Chart Card */}
      <div className="bg-[#D7D8C8] rounded-[20px] p-16">
        <ResponsiveContainer width="100%" height={450}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 10, right: 30, left: 120, bottom: 40 }}
          >
            <CartesianGrid
              stroke="#A8A99A"
              strokeOpacity={0.4}
              horizontal={false}
            />

            <XAxis
              type="number"
              domain={[0, 35]}
              ticks={[0, 5, 10, 15, 20, 25, 30, 35]}
              tick={{ fontSize: 20, fill: "#000" }}
              axisLine={false}
              tickLine={false}
              label={{
                value: "% of people",
                position: "bottom",
                offset: 10,
                style: { fontSize: 22, fill: "#000" },
              }}
            />

            <YAxis
              type="category"
              dataKey="name"
              tick={{ fontSize: 22, fill: "#000" }}
              axisLine={false}
              tickLine={false}
              width={260}
            />

            <Bar
              dataKey="value"
              fill="#79B3B3"
              radius={[8, 8, 8, 8]}
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
