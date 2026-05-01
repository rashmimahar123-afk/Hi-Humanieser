/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import { useRouter } from "next/navigation";
import ContinuePressureCards from "../ContinuePressureCards/ContinuePressureCards";
import SelectTeamRitualModal, {
  openSelectTeamRitualModal,
} from "../SelectTeamRitualModal/SelectTeamRitualModal";
import { useRecommendFocusAreaMutation } from "../../Hooks/useRecommendFocusAreaMutation";
import { FOCUS_AREA_SCORES_DATA } from "../../Types/ResponseTypes";

function ContinuePressure() {
  const [animateText, setAnimateText] = useState(false);
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setEnter(true);
  }, []);

  const router = useRouter();

  const [openActiveRitual, setOpenActiveRitual] = useState(false);

  const [selected, setSelected] = useState("");
  const handleSelect = (item: string) => {
    setSelected(item);

    setOpen(false);
  };

  const { mutate, data, isPending } = useRecommendFocusAreaMutation();
  useEffect(() => {
    mutate();
  }, []);
  const ritualOptions = data?.scores?.map((item: any) => item.option) || [];
  const [open, setOpen] = useState(false);

  const selectedRituals =
    data?.recommended_team_rituals?.find(
      (item: any) => item.focus_area === selected,
    )?.team_rituals || [];

  return (
    <>
      <div className={`bg-[#F5F0EB] min-h-screen `}>
        <div className="relative">
          <Image
            src={images.quizPolygon}
            alt="login-rectangle"
            width={630}
            height={630}
            className="absolute top-0 right-0 z-0"
          />
        </div>

        <div className="px-8 py-6">
          <div className="max-w-[1100px]">
            <div className="flex items-center gap-6">
              <h2 className="text-[#0F4F58] text-[32px] font-[RocaTwo] font-bold">
                Focus Area:
              </h2>

              {/* DROPDOWN */}
              <div className="relative">
                <div
                  onClick={() => setOpen(!open)}
                  className="w-[260px] h-[52px] bg-white rounded-full px-6 flex items-center justify-between cursor-pointer shadow-sm"
                >
                  <span className="text-[#567F55] text-[18px]">{selected}</span>

                  <Image
                    src={images.dropdownImg}
                    alt="arrow"
                    width={18}
                    height={18}
                    className={`transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </div>

                {open && (
                  <div className="absolute top-[60px] w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                    {ritualOptions.map((item: string) => (
                      <div
                        key={item}
                        onClick={() => handleSelect(item)}
                        className="px-6 py-3 text-[#0F4F58] hover:bg-[#F3EDE6] cursor-pointer"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-6 text-[21px] text-[#0f4f58] max-w-[750px] leading-relaxed font-[Roboto]">
              Making expectations, priorities and communication clear so
              everyone knows where they stand and what they’re working toward.
            </p>
          </div>

          {/* ================= WHY THIS MATTERS ================= */}
          <div className="mt-20 flex justify-end">
            <div className="w-[600px] relative">
              {/* QUESTION IMAGE */}
              <Image
                src={images.questionsImg}
                alt="ques-img"
                width={120}
                height={120}
                className="absolute -top-10 -left-24 z-0"
              />

              {/* TEXT CONTENT */}
              <div className="relative z-10">
                <h3 className="text-[#0F4F58] text-[31px] font-[RocaTwo] font-bold">
                  Why This Focus Area Matters
                </h3>

                <p className="text-[#0F4F58] text-[19px] leading-relaxed font-[Roboto] mt-3">
                  Lack of clarity creates rework, slow decisions, and competing
                  priorities. Clear direction reduces friction, speeds
                  execution, and helps effort translate into results.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="text-[#0F4F58] text-[30px] font-[RocaTwo] font-bold mb-10">
              Team Rituals for this Focus Area
            </h2>
            <ContinuePressureCards
              bgColor="#f5c882"
              onCardClick={openSelectTeamRitualModal}
              cards={[
                {
                  title: "What’s the Purpose?",
                  description:
                    "Create clarity by naming the purpose of a conversation upfront, so everyone knows why they’re there and what matters.",
                  learnMoreColor: "#cde3cc",
                  impact:
                    "Reduces wasted meeting time and follow-up clarification by preventing conversations that drift or never land.",
                },
                {
                  title: "Be Real, Not Right",
                  description:
                    "Transform your messages into clear direction that people can actually act on.",
                  learnMoreColor: "#cde3cc",
                  impact:
                    "Reduces wasted meeting time and follow-up clarification by preventing conversations that drift or never land.",
                },
                {
                  title: "Be Real, Not Right",
                  description:
                    "Transform your messages into clear direction that people can actually act on.",
                  learnMoreColor: "#cde3cc",
                  impact:
                    "Reduces wasted meeting time and follow-up clarification by preventing conversations that drift or never land.",
                },
              ]}
            />
          </div>
        </div>
      </div>
      <SelectTeamRitualModal />
    </>
  );
}

export default ContinuePressure;
