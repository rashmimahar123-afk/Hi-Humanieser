import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import images from "@/src/assets/images";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import { useRouter } from "next/navigation";
import {
  createPatternRows,
  enrichProgressWithPractice,
} from "@/src/lib/Helpers";
import ViewAllReflectionCard from "../ViewAllReflectionCard/ViewAllReflectionCard";
import { useGetMppMessagesQuery } from "@/src/modules/WelcomeModule/Hooks/useGetMppMessagesQuery";
import { useEffect, useMemo, useState } from "react";
import usePersonalPathwayQuery from "@/src/modules/PersonalPathwayModule/Hooks/usePersonalPathwayQuery";
import useChooseMyselfQuery from "@/src/modules/ChoosePathwayModule/Hooks/useChooseMyselfQuery";
import FillUpFormModal, {
  openFillupModal,
} from "@/src/modules/PersonalPathwayModule/Components/FillUpFormModal/FillUpFormModal";
import styles from "./ReflectionWalls.module.css";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import LogoutModal from "@/src/modules/WelcomeModule/Components/LogoutModal/LogoutModal";

function ReflectionWalls() {
  const [progressList, setProgressList] = useState<any>([]);
  const [practiceList, setPracticeList] = useState<any[]>([]);
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setEnter(true);
  }, []);

  const router = useRouter();
  const { user } = useAuthValue();
  const { data: getListMppData, isError, refetch } = usePersonalPathwayQuery();
  const { data: chooseMyselfData } = useChooseMyselfQuery();
  const generateStructuredProgressList = (mppData: any[]) => {
    if (!Array.isArray(mppData)) return [];

    return mppData
      .filter((item: any) => item.active || item.completed) // only active/completed
      .map((item: any) => {
        // 🔍 find dynamic key like "The Mindset We Bring"
        const pathwayKey = Object.keys(item).find(
          (key) =>
            ![
              "created",
              "uuid",
              "active",
              "completed",
              "pathway_id",
              "id",
            ].includes(key),
        );

        if (!pathwayKey) return null;

        return {
          [pathwayKey]: item[pathwayKey], // 👈 main structured data
          created: item.created,
          uuid: item.uuid,
          active: item.active,
          ...(item.completed && { completed: item.completed }),
        };
      })
      .filter(Boolean);
  };
  const getPathwayMap = (chooseData: any[]) => {
    const map: Record<number, string> = {};

    chooseData?.forEach((item: any) => {
      item?.pillars?.forEach((pillar: any) => {
        pillar?.principles?.forEach((principle: any) => {
          map[principle.pathway_number] = principle.pathway_title;
        });
      });
    });

    return map;
  };
  const transformProgressList = (progressList: any[], pathwayMap: any) => {
    return progressList.map((item) => {
      const dynamicKey = Object.keys(item).find(
        (key) => !["created", "uuid", "active", "completed"].includes(key),
      );

      if (!dynamicKey) return item;

      const pathwayNumber = Number(dynamicKey);
      const pathwayName = pathwayMap[pathwayNumber] || dynamicKey;

      return {
        [pathwayName]: item[dynamicKey],
        created: item.created,
        uuid: item.uuid,
        active: item.active,
        ...(item.completed && { completed: item.completed }),
      };
    });
  };

  const getSelectedMicroActions = (pathways: any[]) => {
    if (!Array.isArray(pathways)) return [];

    let selected: string[] = [];

    pathways.forEach((item) => {
      const dynamicKey = Object.keys(item).find(
        (key) =>
          ![
            "created",
            "uuid",
            "active",
            "completed",
            "pathway_id",
            "id",
          ].includes(key),
      );

      if (!dynamicKey) return;

      const m3 = item?.[dynamicKey]?.m3;

      if (m3?.pin_to_dash?.length) {
        selected.push(...m3.pin_to_dash);
      }
    });

    return [...new Set(selected)];
  };
  useEffect(() => {
    if (getListMppData?.data?.pathways && chooseMyselfData?.data) {
      // -------- Progress List --------
      const structuredList = generateStructuredProgressList(
        getListMppData.data.pathways,
      );

      const pathwayMap = getPathwayMap(chooseMyselfData.data);

      const updatedList = transformProgressList(structuredList, pathwayMap);

      const sortedList = updatedList.sort(
        (a: any, b: any) =>
          new Date(b.created).getTime() - new Date(a.created).getTime(),
      );

      const latest20 = sortedList.slice(0, 20);
      setProgressList(latest20);

      // -------- Practice List --------
      const selectedKeys = getSelectedMicroActions(
        getListMppData.data.pathways,
      );

      const list: any[] = [];

      chooseMyselfData.data.forEach((item: any) => {
        item?.pillars?.forEach((pillar: any) => {
          pillar?.principles?.forEach((principle: any) => {
            principle?.micro_actions?.forEach((action: any, index: number) => {
              const key = `ma${index + 1}`;

              list.push({
                id: key,
                title: action.title,
                description: action.description,
                pathway: principle.pathway_title,
                checked: selectedKeys.includes(key),
              });
            });
          });
        });
      });

      setPracticeList(list);
    }
  }, [getListMppData, chooseMyselfData]);
  const { data: randomMessage } = useGetMppMessagesQuery();

  const enrichedProgressList = enrichProgressWithPractice(
    progressList,
    practiceList,
  );
  const getSharedReflectionsFromEnriched = (data: any[]) => {
    if (!Array.isArray(data)) return [];

    const result: any[] = [];

    data.forEach((item) => {
      const dynamicKey = Object.keys(item).find(
        (key) => !["created", "uuid", "active", "completed"].includes(key),
      );

      if (!dynamicKey) return;

      const pathwayData = item[dynamicKey];

      // -------- M2 --------
      const m2 = pathwayData?.m2;

      if (m2) {
        Object.values(m2).forEach((actions: any) => {
          if (Array.isArray(actions)) {
            actions.forEach((action) => {
              if (action?.share && action?.reflection) {
                result.push({
                  text: action.reflection,
                  created: item.created,
                });
              }
            });
          }
        });
      }

      // -------- M3 --------
      const m3 = pathwayData?.m3;

      if (m3?.reflection?.share === true && m3?.reflection?.reflection) {
        result.push({
          text: m3.reflection.reflection,
          created: item.created,
        });
      }
    });

    return result;
  };
  const reflectionList = useMemo(() => {
    if (!enrichedProgressList?.length) return [];

    const extracted = getSharedReflectionsFromEnriched(enrichedProgressList);

    return extracted.sort((a, b) => b.created - a.created).slice(0, 5);
  }, [enrichedProgressList]);
  const reflections = reflectionList.map((item, i) => ({
    id: i + 1,
    text: item.text,
    rotate: i % 2 === 0 ? "-rotate-2" : "rotate-1",
    imageKey: images[`reflectionWall${(i % 5) + 1}` as keyof typeof images],
  }));
  const rows = createPatternRows(reflections, [3, 2]);

  return (
    <>
      <div
        className={`min-h-screen bg-[#F5F0EB] ${styles.page}
   ${styles.enterRight}
  ${enter ? styles.enterActive : ""} `}
      >
        <div className="relative">
          <Image
            src={images.quizPolygon}
            alt="login-rectangle"
            width={630}
            height={630}
            className="absolute top-0 right-0 z-0"
          />
        </div>
        <div className="relative z-10 px-10 py-8">
          {/* Header */}
          <UserProfileHeader
            greetingColor="#0F4F58"
            nameColor="#0F4F58"
            userInfo={user}
          />

          {/* Center Heading */}
          <div className="text-center mt-10">
            <SuccessMessage
              text={randomMessage || ""}
              fontSize="text-[23px]"
              leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
              rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
              bottom="3px"
              rightImgBottom="-3px"
              fontColor="#0F4F58"
              rotate="-35deg"
            />
            <h2 className="text-[52px] font-[RocaTwo] font-bold  text-[#4BA6A6] mt-[30px]">
              Reflection Walls
            </h2>
          </div>

          {/* Description + Filters */}

          {/* Left text */}
          <div className="mt-10">
            <h3 className="text-[25px] font-bold font-[Roboto] text-[#4BA6A6]">
              Small Reflections. Big Shifts.
            </h3>

            <p className="mt-2 text-[22px] text-[#0F4F58] leading-[23px] font-[Roboto] ml-[36px]">
              Every reflection adds a piece to the bigger picture of how your
              team works and grows. These walls capture the real, everyday
              moments that shape your culture — one insight at a time.
            </p>
          </div>

          {/* Right select */}
          <div className="mt-6 flex justify-end">
            <div className="relative">
              <select
                className="
          appearance-none
          bg-[#86C9C9]
          text-[#0F4F58]
          text-[18px]
          font-[400]
          px-6
          pr-10
          h-[40px]
          w-[297px]
          rounded-full
          outline-none
          font-[Roboto]

        "
              >
                <option>Choose Team</option>
              </select>

              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                <Image src={images.dropdownImg} alt="dropdown-img" width={25} />
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <div className="bg-[#F8E1B8] rounded-[32px] mt-10 px-4 py-4 relative max-w-[1150px] h-[873px] ml-[95px] ">
            <div className="absolute -left-[53px]">
              <div className="flex flex-col items-center">
                {rows.map((row: any, rowIndex: any) => (
                  <div key={rowIndex} className={`flex gap-10`}>
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
              {/* Buttons */}
              <div className="flex justify-end gap-8 mr-[95px]">
                {/* -------- Add Reflection -------- */}
                <div
                  className="relative w-[80px] h-[85px] cursor-pointer"
                  onClick={() => {
                    if (!progressList?.length) return; // safety
                    openFillupModal("micro_action_1", progressList[0].uuid);
                  }}
                >
                  <PolygonButton
                    width="80px"
                    height="85px"
                    bgColor="#F7C3BE"
                    clipPath={`polygon(
    0% 18px,
    100% 0%,
    100% 100%,
    0% calc(100% - 14px)
  )`}
                    radius={14}
                  />

                  {/* TEXT OUTSIDE / OVER POLYGON */}
                  <div className="absolute inset-0 flex items-center justify-center text-center pointer-events-none">
                    <span className="text-[#0F4F58] text-[18px] font-[RocaTwo] font-bold leading-[26px]">
                      Add
                      <br />
                      Reflection
                    </span>
                  </div>
                </div>

                {/* -------- View Full Wall -------- */}
                <div
                  className="relative w-[80px] h-[85px]  cursor-pointer"
                  onClick={() => router.push("/view-reflection-wall")}
                >
                  <PolygonButton
                    width="80px"
                    height="85px"
                    bgColor="#86C9C9"
                    radius={14}
                    clipPath={`polygon(
    0% 18px,
    100% 0%,
    100% 100%,
    0% calc(100% - 14px)
  )`}
                  />

                  {/* TEXT OUTSIDE / OVER POLYGON */}
                  <div className="absolute inset-0 flex items-center justify-center text-center pointer-events-none ">
                    <span className="text-[#0F4F58] text-[18px] font-[RocaTwo] font-bold leading-[26px]">
                      View Full
                      <br />
                      Wall
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FillUpFormModal />
      </div>
      <LogoutModal />
    </>
  );
}
export default ReflectionWalls;
