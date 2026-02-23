"use client";

import ViewAllReflectionCard from "@/src/modules/MyDashboardModule/Components/ViewAllReflectionCard/ViewAllReflectionCard";
import images from "@/src/assets/images";
import { createPatternRows } from "@/src/lib/Helpers";
import { useRouter } from "next/navigation";

export default function TeamSayingSection() {
  const reflectionTexts = [
    "I’ve started pausing before reacting in meetings, just to understand what others might be trying to say. It’s surprising how much smoother conversations feel when I do that. People seem more open, and I feel less defensive. It’s such a small change, but it’s helping me focus on the bigger picture instead of winning the moment — and honestly, it’s making collaboration feel lighter and more human",
    "I’ve started pausing before reacting in meetings, just to understand what others might be trying to say. It’s surprising how much smoother conversations feel when I do that. People seem more open, and I feel less defensive. It’s such a small change, but it’s helping me focus on the bigger picture instead of winning the moment — and honestly, it’s making collaboration feel lighter and more human",
    "I’ve started pausing before reacting in meetings, just to understand what others might be trying to say. It’s surprising how much smoother conversations feel when I do that. People seem more open, and I feel less defensive. It’s such a small change, but it’s helping me focus on the bigger picture instead of winning the moment — and honestly, it’s making collaboration feel lighter and more human",

    "I’ve started pausing before reacting in meetings, just to understand what others might be trying to say. It’s surprising how much smoother conversations feel when I do that. People seem more open, and I feel less defensive. It’s such a small change, but it’s helping me focus on the bigger picture instead of winning the moment — and honestly, it’s making collaboration feel lighter and more human",
    "I’ve started pausing before reacting in meetings, just to understand what others might be trying to say. It’s surprising how much smoother conversations feel when I do that. People seem more open, and I feel less defensive. It’s such a small change, but it’s helping me focus on the bigger picture instead of winning the moment — and honestly, it’s making collaboration feel lighter and more human",
  ];

  const reflections = Array.from({ length: 5 }).map((_, i) => ({
    id: i + 1,
    text: reflectionTexts[i % reflectionTexts.length],
    rotate: i % 2 === 0 ? "-rotate-2" : "rotate-1",
    imageKey: images[`reflectionWall${(i % 5) + 1}` as keyof typeof images],
  }));

  const rows = createPatternRows(reflections, [3, 2]);

  const router = useRouter();

  return (
    <section className="bg-[#F5F0EB] py-2">
      <div className="max-w-[1350px] mx-auto">
        {/* Title */}
        <h2 className="text-[32px] font-[RocaTwo] text-[#0F4F58]  font-bold">
          What Your Team is Saying
        </h2>

        {/* Subtitle */}
        <p className="text-[22px] text-[#0F4F58] mb-22 leading-relaxed">
          A few of the latest reflections your team has shared — small moments
          that offer insight into how they’re thinking, feeling, and practicing
          their Humaniser journey.
        </p>

        {/* WALL BACKGROUND */}
        {/* WALL BACKGROUND */}
        <div className="mt-10 bg-[#cae0de] py-16">
          <div className="flex flex-col items-center gap-16">
            {rows.map((row: any, rowIndex: any) => (
              <div key={rowIndex} className="flex gap-10">
                {row.map((item: any) => (
                  <ViewAllReflectionCard
                    key={item.id}
                    text={item.text}
                    rotate={item.rotate}
                    imageKey={item.imageKey}
                    index={item.id}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
