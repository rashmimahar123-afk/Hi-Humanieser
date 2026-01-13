/* eslint-disable @typescript-eslint/no-explicit-any */
import { createPatternRows } from "@/src/lib/Helpers";
import ViewAllReflectionCard from "../ViewAllReflectionCard/ViewAllReflectionCard";
import Image from "next/image";
import images from "@/src/assets/images";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import { usePathname } from "next/navigation";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";

function ViewAllReflectionWall() {
  const pathname = usePathname();

  const hideUserProfile = pathname.includes("view-reflection-wall");

  const reflectionTexts = [
    "This week I tried explaining why before asking what. The shift was instant — people leaned in instead of shutting down. Clarity really is kindness, especially when everyone’s moving fast",
    "I’ve started pausing before reacting in meetings, just to understand what others might be trying to say. It’s surprising how much smoother conversations feel when I do that. People seem more open, and I feel less defensive. It’s such a small change, but it’s helping me focus on the bigger picture instead of winning the moment — and honestly, it’s making collaboration feel lighter and more human",
    "Noticed how much clarity helps when things get tense. One honest question can calm a whole meeting.",
    "Pausing before responding created clarity.",
    "Empathy helped resolve a conflict faster.",
    "Trust grows when intent is assumed positive.",
  ];

  const reflections = Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    text: reflectionTexts[i % reflectionTexts.length], // 👈 dynamic text
    rotate: i % 2 === 0 ? "-rotate-2" : "rotate-1",
    imageKey: images[`reflectionWall${(i % 5) + 1}` as keyof typeof images],
  }));

  const rows = createPatternRows(reflections, [3, 2]);

  return (
    <div className="min-h-screen bg-[#F6F1EB] px-20 py-14">
      {/* HEADER */}
      <UserProfileHeader
        greetingColor="#0F4F58"
        nameColor="#0F4F58"
        hideUserProfile={hideUserProfile}
      />
      <SuccessMessage
        text="Great to see you again — ready to explore?"
        fontSize="text-[21px]"
        leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
        rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
      />

      {/* TITLE */}
      <div className="text-center  ">
        <p className="text-[#4BA6A6] text-[52px] font-[RocaTwo] font-bold">
          [ TEAM ]
        </p>
        <h2 className="text-[52px] font-[RocaTwo] text-[#4BA6A6] font-bold leading-[45px]">
          Reflection Walls
        </h2>
      </div>

      {/* -------------------------------Download PDF------------ */}
      <div className="flex justify-end ">
        <button className="flex flex-col items-center gap-2">
          <Image src={images.downloadImg} alt="download" />

          <span className="text-sm text-[#3E5F5F]">Download in PDF</span>
        </button>
      </div>
      <div
        className="max-h-[700px] overflow-y-auto px-10 py-14 rounded-xl
             bg-[#C2E2E2] custom-scroll mt-14"
      >
        <div className="flex flex-col gap-28 items-center">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex ${row.length === 3 ? "gap-28" : "gap-40"}`}
            >
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

      {/* Footer */}
      <div className="relative mb-[250px]">
        {/* Footer Polygon Image */}
        <Image
          src={images.footerPolygon}
          alt="footer-shape"
          width={400}
          height={250}
          className="absolute -bottom-69 -left-29 z-0"
        />
      </div>
    </div>
  );
}

export default ViewAllReflectionWall;
