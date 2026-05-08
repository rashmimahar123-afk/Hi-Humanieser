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
import useHhFrameworkMtjQuery from "@/src/modules/MyTeamJourneyModule/Hooks/useHhFrameworkMtjQuery";
import { MY_TEAM_RITUALS_DATA } from "@/src/modules/MyTeamJourneyModule/Types/ResponseTypes";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useFocusAndRitualSelectMutation } from "../../Hooks/useFocusAndRitualSelectMutation";

function ContinuePressure() {
  const [animateText, setAnimateText] = useState(false);
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setEnter(true);
  }, []);

  const router = useRouter();

  const [openActiveRitual, setOpenActiveRitual] = useState(false);

  const [selected, setSelected] = useState("");
  const [selectedRitual, setSelectedRitual] = useState<string | null>(null);

  const handleSelect = (item: string) => {
    setSelected(item);

    setOpen(false);
  };

  const { mutate, data, isPending } = useRecommendFocusAreaMutation();

  useEffect(() => {
    mutate();
  }, []);
  const [open, setOpen] = useState(false);

  const selectedRituals =
    data?.recommended_team_rituals?.find(
      (item: any) => item.focus_area === selected,
    )?.team_rituals || [];

  const {
    data: frameworkMtjData,
    isLoading,
    isError,
  } = useHhFrameworkMtjQuery();
  const focusAreas = frameworkMtjData?.data?.focus_areas || [];
  useEffect(() => {
    if (focusAreas.length > 0 && !selected) {
      setSelected(focusAreas[0].title);
    }
  }, [focusAreas, selected]);

  const selectedFocusArea = focusAreas.find(
    (item: any) => item.title === selected,
  );

  const ritualOptions = focusAreas.map((item: any) => item.title);
  const ritualCards =
    selectedFocusArea?.team_rituals?.map((ritual: MY_TEAM_RITUALS_DATA) => ({
      ritual_id: ritual.team_ritual_id,
      title: ritual.title,
      description: ritual.long_description,
      impact: ritual.operational_impact,
      learnMoreColor: "#cde3cc",

      selected: selectedRitual === ritual.team_ritual_id,
      onLearnMore: () =>
        router.push(
          `/conversation?focusArea=${selectedFocusArea?.focus_area_id}`,
        ),
      onSelect: () => handleRitualSelect(ritual),
    })) || [];

  const handleRitualSelect = (ritual: MY_TEAM_RITUALS_DATA) => {
    openSelectTeamRitualModal({
      ritualId: ritual.team_ritual_id ?? "",
      focusAreaId: selectedFocusArea?.focus_area_id ?? "",
    });
  };

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
              {selectedFocusArea?.description_long}
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
                  {selectedFocusArea?.why_it_matters}
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
              ritualCards={ritualCards}
            />
          </div>

          <div className="mt-[60px] flex justify-end items-center  ">
            <div>
              <CommonButtons
                label="Go back to Team Focus"
                bgColor="#FBE1DE"
                onClick={() => router.push("/team-focus")}
              />
            </div>
          </div>
        </div>
      </div>
      <SelectTeamRitualModal />
    </>
  );
}

export default ContinuePressure;
