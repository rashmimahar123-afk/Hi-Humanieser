import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import ChampionResourceCards from "../ChampionResourceCards/ChampionResourceCards";
import images from "@/src/assets/images";
import Image from "next/image";
import { useRouter } from "next/navigation";    
import MySelfCard from "@/src/modules/ChoosePathwayModule/Components/MySelfPage/MySelfCard/MySelfCard";
import { CHOOSE_MYSELF_PILLAR_TYPE } from "@/src/modules/ChoosePathwayModule/Types/ResponseTypes";
import useChooseMyselfQuery from "@/src/modules/ChoosePathwayModule/Hooks/useChooseMyselfQuery";
import { useMemo, useState } from "react";
import useGetListMppQuery from "@/src/modules/ChoosePathwayModule/Hooks/useGetListMppQuery";
import { openDeletePathwayModal } from "@/src/modules/ChoosePathwayModule/Components/DeletePathwayModal/DeletePathwayModal";
import { openShowMaxTwoMpp } from "@/src/modules/ChoosePathwayModule/Components/ShowMaxTwoMppModal/ShowMaxTwoMppModal";
import { useCreateMppMutation } from "@/src/modules/ChoosePathwayModule/Hooks/useCreateMppMutation";
import { useGetPathwaySelectMssgQuery } from "@/src/modules/WelcomeModule/Hooks/useGetPathwaySelectMssgQuery";
import { openActivePathwayModal } from "@/src/modules/ChoosePathwayModule/Components/ActivePathwayModal/ActivePathwayModal";

type ActivePathwayType = {
  pathwayNumber: string;
  uuid: string;
  data: any;
};


function FocusAreaRituals(){
      const [selectedPathways, setSelectedPathways] = useState<number[]>([]);
      const [localPathwayUuids, setLocalPathwayUuids] = useState<
        Record<number, string>
      >({});
    const router = useRouter();
      const { data, isLoading, isError } = useChooseMyselfQuery();
        const { mutate: createMpp } = useCreateMppMutation();
        const { refetch: getRandomMessage } = useGetPathwaySelectMssgQuery();
      
      // const pillarsData = data?.data?.slice(1); // skip pulse_check_config
      // const pillarsList = data?.data?.slice(1)?.[0]?.pillars || [];
      const pillarsData = data?.data?.[1];
    
      const pillarsList =
        pillarsData && "pillars" in pillarsData ? pillarsData.pillars : [];
          const { data: listMppData, refetch } = useGetListMppQuery();
          const pathwayData = listMppData?.data?.pathways;
      const activePathways = pathwayData?.filter((item) => item.active);

  const formattedActivePathways: ActivePathwayType[] = useMemo(() => {
    if (!activePathways) return [];

    return activePathways
      .map((item) => {
        const pathwayKey = Object.keys(item).find(
          (key) => !["created", "uuid", "active"].includes(key),
        );

        if (!pathwayKey) return null;

        return {
          pathwayNumber: pathwayKey,
          uuid: item.uuid,
          data: item[pathwayKey as keyof typeof item],
        };
      })
      .filter(Boolean) as ActivePathwayType[];
  }, [activePathways]);

  const activeFromAPI = (formattedActivePathways || []).map((item) =>
    Number(item.pathwayNumber),
  );

          const finalSelectedPathways = Array.from(
    new Set([...selectedPathways, ...activeFromAPI]),
  );

  
  
  const totalSelectedCount = finalSelectedPathways.length;

    const handleSelect = async (principleNumber: number) => {
      const isAlreadySelected = finalSelectedPathways.includes(principleNumber);
  
      if (isAlreadySelected) {
        const uuid = pathwayUuids[principleNumber];
  
        if (!uuid) {
          console.warn("UUID missing for pathway:", principleNumber);
          return;
        }
  
        openDeletePathwayModal({
          uuid,
          index: principleNumber,
        });
  
        return;
      }
  
      // CASE 2: MAX LIMIT (including prefilled)
      if (totalSelectedCount >= 2) {
        openShowMaxTwoMpp();
        return;
      }
  
      try {
        const res = await getRandomMessage();
        const messageObj = {
          message: res?.data || "",
        };
  
        createMpp(
          { pathways: [principleNumber] },
          {
            onSuccess: (res) => {
              const uuid = res?.new_uuids?.[0];
  
              if (uuid) {
                setLocalPathwayUuids((prev) => ({
                  ...prev,
                  [principleNumber]: uuid,
                }));
  
                openActivePathwayModal(
                  uuid,
                  messageObj,
                  principleNumber,
                  totalSelectedCount + 1,
                );
              }
            },
          },
        );
      } catch (err) {
        console.log(err);
      }
    };


      const pathwayUuids = useMemo(() => {
        const map: Record<number, string> = {};
    
        formattedActivePathways.forEach((item) => {
          map[Number(item.pathwayNumber)] = item.uuid;
        });
    
        return {
          ...map,
          ...localPathwayUuids,
        };
      }, [formattedActivePathways, localPathwayUuids]);
    return (   

        <>
  <div className="relative px-4 sm:px-6 lg:px-0">
            <Image
              src={images.targetImg} // toolbox illustration
              alt="toolkit"
              width={200}
              height={200}
              className="absolute right-10 top-0 z-0"
            />
            <div className="relative z-10">
              <h2 className="text-[44px] font-[RocaTwo] text-[#0F4F58] mb-4">
                Focus Areas & Rituals
              </h2>
              <h3 className="text-[24px] font-semibold text-[#0F4F58] mb-6">
                Explore the foundations behind each team rituals.
              </h3>
              <p className="text-[22px] text-[#0F4F58] leading-relaxed mb-14">
                Here you’ll find clear explanations of every Focus Area and the
                full library of rituals, including what each one builds and the
                operational impact you can expect. Most Champions use this space
                as a reference alongside Team Focus, so ritual choices stay
                linked to real pressure and team input.
              </p>
              <div className="mt-[70px]">
                <div className="mt-[32px]">
                  <ChampionResourceCards
                    sectionTitle="Build Trust"
                    bgColor="#4ba6a6"
                    cardBgColor="#c2e2e2"
                    cards={[
                      {
                        title: "What’s the Purpose?",
                        description:
                          "Create clarity by naming the purpose of a conversation upfront, so everyone knows why they’re there and what matters.",
                        learnMoreColor: "#4ba6a6",

                        impact:
                          "Reduces wasted meeting time and follow-up clarification by preventing conversations that drift or never land.",
                      },
                      {
                        title: "What Happens Next",
                        description:
                          "Reduce confusion by clearly naming next steps, ownership, and timing — instead of assuming alignment at the end of discussions.",
                        learnMoreColor: "#4ba6a6",
                        impact:
                          "Cuts down chasing, reminders, and “I thought you were doing it” escalations.",
                      },
                    ]}
                  />
                </div>
                <div className="mt-[32px]">
                  {pillarsList?.map(
                (item: CHOOSE_MYSELF_PILLAR_TYPE, index: any) => {
                  return (
                    <div className="mt-[32px] " key={item?.pillar_id}>
                      <MySelfCard
                        sectionTitle={item?.pillar_name}
                        bgColor={
                          item?.pillar_number === 1
                            ? "#9FD3D1"
                            : item?.pillar_number === 2
                              ? "#acd5ab"
                              : "#f8e1b8"
                        }
                        cards={item?.principles?.map((principleItem) => ({
                          title: principleItem?.principle_name,
                          description: principleItem?.definition,
                          learnMoreColor: "#7EC9C6",
                          onLearnMore: () =>
                            router.push(
                              `/pathway-card?pillar=${item?.pillar_number}&principle=${principleItem?.principle_number}`,
                            ),
                          selected: finalSelectedPathways.includes(
                            principleItem?.principle_number,
                          ),
                          onSelect: () =>
                            handleSelect(principleItem?.principle_number),
                        }))}
                      />
                    </div>
                  );
                },
              )}
                </div>
                <div className="mt-[32px] ">
                  <ChampionResourceCards
                    sectionTitle="Strengthen Collaboration"
                    bgColor="#acd5ab"
                    cardBgColor="#cde3cc"
                    cards={[
                      {
                        title: "What’s the Purpose?",
                        description:
                          "Create clarity by naming the purpose of a conversation upfront, so everyone knows why they’re there and what matters.",
                        learnMoreColor: "#acd5ab",
                        impact:
                          "Reduces wasted meeting time and follow-up clarification by preventing conversations that drift or never land.",
                      },
                      {
                        title: "What Happens Next",
                        description:
                          "Reduce confusion by clearly naming next steps, ownership, and timing — instead of assuming alignment at the end of discussions.",
                        learnMoreColor: "#acd5ab",
                        impact:
                          "Cuts down chasing, reminders, and “I thought you were doing it” escalations.",
                      },
                    ]}
                  />
                </div>
                <div className="mt-[32px]">
                  <ChampionResourceCards
                    sectionTitle="Foster Belonging"
                    bgColor="#f7c3be"
                    cardBgColor="#fbe1de"
                    cards={[
                      {
                        title: "What’s the Purpose?",
                        description:
                          "Create clarity by naming the purpose of a conversation upfront, so everyone knows why they’re there and what matters.",
                        learnMoreColor: "#f7c3be",
                        impact:
                          "Reduces wasted meeting time and follow-up clarification by preventing conversations that drift or never land.",
                      },
                      {
                        title: "What Happens Next",
                        description:
                          "Reduce confusion by clearly naming next steps, ownership, and timing — instead of assuming alignment at the end of discussions.",
                        learnMoreColor: "#f7c3be",
                        impact:
                          "Cuts down chasing, reminders, and “I thought you were doing it” escalations.",
                      },
                    ]}
                  />
                </div>
                <div className="mt-[32px] ">
                  <ChampionResourceCards
                    sectionTitle="Sustain Wellbeing"
                    bgColor="#4ba6a6"
                    cardBgColor="#c2e2e2"
                    cards={[
                      {
                        title: "What’s the Purpose?",
                        description:
                          "Create clarity by naming the purpose of a conversation upfront, so everyone knows why they’re there and what matters.",
                        learnMoreColor: "#4ba6a6",
                        impact:
                          "Reduces wasted meeting time and follow-up clarification by preventing conversations that drift or never land.",
                      },
                      {
                        title: "What Happens Next",
                        description:
                          "Reduce confusion by clearly naming next steps, ownership, and timing — instead of assuming alignment at the end of discussions.",
                        learnMoreColor: "#4ba6a6",
                        impact:
                          "Cuts down chasing, reminders, and “I thought you were doing it” escalations.",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end mt-10">
            {/* Bottom Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <CommonButtons
                label={`Return to Champion Hub`}
                bgColor="#cde3cc"
                onClick={() => router.push("/champion-hub")}
              />

              <CommonButtons
                label="Go to Homepage"
                bgColor="#cde3cc"
                onClick={() => router.push("/home")}
              />
            </div>
          </div>
        </>
         )

}
export default FocusAreaRituals;