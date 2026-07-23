"use client";

import ViewAllReflectionCard from "@/src/modules/MyDashboardModule/Components/ViewAllReflectionCard/ViewAllReflectionCard";
import images from "@/src/assets/images";
import { createPatternRows } from "@/src/lib/Helpers";
import { useRouter } from "next/navigation";

type TEAM_SAYING_SECTIONS_PROPS = {
  reflections: any[];
};
export default function TeamSayingSection(props: TEAM_SAYING_SECTIONS_PROPS) {
  const { reflections } = props;

  const reflectionCards = reflections
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    )
    .slice(0, 5)
    .map((item, i) => ({
      id: i + 1,
      text: item.reflection,
      rotate: i % 2 === 0 ? "-rotate-2" : "rotate-1",
      imageKey: images[`reflectionWall${(i % 5) + 1}` as keyof typeof images],
    }));

  const rows = createPatternRows(reflectionCards, [3, 2]);

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
        {reflectionCards.length === 0 ? (
          <div className="py-16 text-center text-[#0F4F58] text-[20px]">
            No reflections available.
          </div>
        ) : (
          <div className="mt-10 bg-[#cae0de] py-16">
            <div className="flex flex-col items-center gap-16">
              {rows.map((row: any, rowIndex: number) => (
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
        )}
      </div>
    </section>
  );
}
