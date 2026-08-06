import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import images from "@/src/assets/images";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import { useRouter } from "next/navigation";
import {
  createPatternRows,
  enrichProgressWithPractice,
  getSharedReflectionsFromEnriched,
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
import useGetTeamsQuery from "@/src/modules/ProfileModule/Hooks/useGetTeamsQuery";
import useGetReflectionWallsQuery from "../../Hooks/useGetReflectionWallsQuery";

function ReflectionWalls() {
  const [progressList, setProgressList] = useState<any>([]);
  const [practiceList, setPracticeList] = useState<any[]>([]);
  const [enter, setEnter] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState("");
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
      .filter((item: any) => item.active || item.completed)
      .map((item: any) => {
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
          [pathwayKey]: item[pathwayKey],
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
      const structuredList = generateStructuredProgressList(
        getListMppData.data.pathways,
      );
      const pathwayMap = getPathwayMap(chooseMyselfData.data);
      const updatedList = transformProgressList(structuredList, pathwayMap);
      const sortedList = updatedList.sort(
        (a: any, b: any) =>
          new Date(b.created).getTime() - new Date(a.created).getTime(),
      );
      const latestFive = sortedList.slice(0, 5);
      setProgressList(latestFive);

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

  // const enrichedProgressList = enrichProgressWithPractice(
  //   progressList,
  //   practiceList,
  // );

  // const getSharedReflectionsFromEnriched = (data: any[]) => {
  //   if (!Array.isArray(data)) return [];
  //   const result: any[] = [];
  //   data.forEach((item) => {
  //     const dynamicKey = Object.keys(item).find(
  //       (key) => !["created", "uuid", "active", "completed"].includes(key),
  //     );
  //     if (!dynamicKey) return;
  //     const pathwayData = item[dynamicKey];

  //     const m2 = pathwayData?.m2;
  //     if (m2) {
  //       Object.values(m2).forEach((actions: any) => {
  //         if (Array.isArray(actions)) {
  //           actions.forEach((action) => {
  //             if (action?.share && action?.reflection) {
  //               result.push({ text: action.reflection, created: item.created });
  //             }
  //           });
  //         }
  //       });
  //     }

  //     const m3 = pathwayData?.m3;
  //     if (m3?.reflection?.share === true && m3?.reflection?.reflection) {
  //       result.push({ text: m3.reflection.reflection, created: item.created });
  //     }
  //   });
  //   return result;
  // };

  const effectiveTeamId = useMemo(() => {
    if (!user) return undefined;

    if (user.user_type === 3) {
      return selectedTeam ? selectedTeam : user.team_id;
    }

    return user.team_id;
  }, [user, selectedTeam]);

  const enrichedProgressList = enrichProgressWithPractice(
    progressList,
    practiceList,
  );

  const { data: reflectionApiData } =
    useGetReflectionWallsQuery(effectiveTeamId);
  // const reflections = useMemo(() => {
  //   //  User Type 1 & 2 → local enrichedProgressList reflections
  //   if (user?.user_type === 1 || user?.user_type === 2) {
  //     const extracted = getSharedReflectionsFromEnriched(enrichedProgressList);

  //     return extracted
  //       .sort(
  //         (a: any, b: any) =>
  //           new Date(b.created).getTime() - new Date(a.created).getTime(),
  //       )
  //       .slice(0, 5)
  //       .map((item: any, i: number) => ({
  //         id: i + 1,
  //         text: item.text,
  //         rotate: i % 2 === 0 ? "-rotate-2" : "rotate-1",
  //         imageKey:
  //           images[`reflectionWall${(i % 5) + 1}` as keyof typeof images],
  //       }));
  //   }

  //   //  User Type 3 → API reflections
  //   if (!reflectionApiData?.data?.reflections) return [];

  //   return reflectionApiData.data.reflections
  //     .sort(
  //       (a: any, b: any) =>
  //         new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  //     )
  //     .slice(0, 5)
  //     .map((item: any, i: number) => ({
  //       id: i + 1,
  //       text: item.reflection,
  //       rotate: i % 2 === 0 ? "-rotate-2" : "rotate-1",
  //       imageKey: images[`reflectionWall${(i % 5) + 1}` as keyof typeof images],
  //     }));
  // }, [reflectionApiData, enrichedProgressList, user]);

  // const reflections = useMemo(() => {
  //   const localReflections = getSharedReflectionsFromEnriched(
  //     enrichedProgressList,
  //   ).map((item: any, i: number) => ({
  //     id: `local-${i}`,
  //     text: item.text,
  //     created: item.created,
  //   }));
  //   console.log(
  //     "localReflectionslocalReflectionslocalReflections",
  //     localReflections,
  //   );
  //   const apiReflections =
  //     reflectionApiData?.data?.reflections?.map((item: any, i: number) => ({
  //       id: item.id ?? `api-${i}`,
  //       text: item.reflection,
  //       created: item.created_at,
  //     })) || [];
  //   console.log(
  //     "apiReflectionsapiReflectionsapiReflectionsapiReflections",
  //     apiReflections,
  //   );
  //   return [...localReflections, ...apiReflections]
  //     .sort(
  //       (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime(),
  //     )
  //     .slice(0, 5)
  //     .map((item, i) => ({
  //       ...item,
  //       rotate: i % 2 === 0 ? "-rotate-2" : "rotate-1",
  //       imageKey: images[`reflectionWall${(i % 5) + 1}` as keyof typeof images],
  //     }));
  // }, [reflectionApiData, enrichedProgressList]);
  // const reflections = useMemo(() => {
  //   return getSharedReflectionsFromEnriched(enrichedProgressList)
  //     .sort(
  //       (a: any, b: any) =>
  //         new Date(b.created).getTime() - new Date(a.created).getTime(),
  //     )
  //     .slice(0, 5)
  //     .map((item: any, i: number) => ({
  //       id: i + 1,
  //       text: item.text,
  //       rotate: i % 2 === 0 ? "-rotate-2" : "rotate-1",
  //       imageKey: images[`reflectionWall${(i % 5) + 1}` as keyof typeof images],
  //     }));
  // }, [enrichedProgressList]);
  const reflections = useMemo(() => {
    if (!reflectionApiData?.data?.reflections) return [];

    const unique = Array.from(
      new Map(
        reflectionApiData.data.reflections
          .sort(
            (a: any, b: any) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime(),
          )
          .map((item: any) => [
            `${item.source}-${item.reflection.trim().toLowerCase()}`,
            item,
          ]),
      ).values(),
    );

    return unique.slice(0, 5).map((item: any, i: number) => ({
      id: item.id,
      text: item.reflection,
      rotate: i % 2 === 0 ? "-rotate-2" : "rotate-1",
      imageKey: images[`reflectionWall${(i % 5) + 1}` as keyof typeof images],
    }));
  }, [reflectionApiData]);
  const { data: teamsData } = useGetTeamsQuery();
  const teams = teamsData?.data?.teams || [];

  const selectedTeamData = teams.find((team: any) => team.id === selectedTeam);

  const MIN_REFLECTION_CARDS = 5;

  const finalReflections = useMemo(() => {
    const placeholderCount = Math.max(
      0,
      MIN_REFLECTION_CARDS - reflections.length,
    );

    const placeholders = Array.from({ length: placeholderCount }, (_, i) => ({
      id: reflections.length + i + 1,
      text: "A reflection will appear here soon…",
      rotate: (reflections.length + i) % 2 === 0 ? "-rotate-2" : "rotate-1",
      imageKey:
        images[
          `reflectionWall${((reflections.length + i) % 5) + 1}` as keyof typeof images
        ],
    }));

    return [...reflections, ...placeholders];
  }, [reflections]);

  // const isOwnTeam = selectedTeam ? selectedTeam === user?.team_id : true;

  const rows = createPatternRows(finalReflections, [3, 2]);
  console.log("rowsrowsrowsrows", rows);
  return (
    <>
      <div
        className={`min-h-screen bg-[#F5F0EB] ${styles.page} ${styles.enterRight} ${enter ? styles.enterActive : ""}`}
      >
        {/* Background polygon */}
        <div className="relative">
          <Image
            src={images.quizPolygon}
            alt="login-rectangle"
            width={400}
            height={400}
            className="absolute top-0 right-0 z-0 hidden lg:block"
          />
          <Image
            src={images.quizPolygon}
            alt="login-rectangle"
            width={260}
            height={260}
            className="absolute top-0 right-0 z-0 hidden sm:block lg:hidden"
          />
          <Image
            src={images.quizPolygon}
            alt="login-rectangle"
            width={160}
            height={160}
            className="absolute top-0 right-0 z-0 block sm:hidden"
          />
        </div>

        <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8">
          {/* Header */}
          <UserProfileHeader
            greetingColor="#0F4F58"
            nameColor="#0F4F58"
            userInfo={user}
          />

          {/* Center Heading */}
          <div className="text-center mt-6 sm:mt-8 lg:mt-10">
            <SuccessMessage
              text={randomMessage || ""}
              fontSize="text-[14px] sm:text-[18px] lg:text-[23px]"
              leftImg={{ src: images.arrowImg, width: 30, height: 30 }}
              rightImg={{ src: images.leftArrowImg, width: 45, height: 45 }}
              bottom="3px"
              rightImgBottom="-3px"
              fontColor="#0F4F58"
              rotate="-35deg"
            />
            <h2 className="text-[32px] sm:text-[42px] lg:text-[52px] font-[RocaTwo] font-bold text-[#4BA6A6] mt-[20px] sm:mt-[25px] lg:mt-[30px]">
              Reflection Walls
            </h2>
          </div>

          {/* Description */}
          <div className="mt-6 sm:mt-8 lg:mt-10">
            <h3 className="text-[18px] sm:text-[22px] lg:text-[25px] font-bold font-[Roboto] text-[#4BA6A6]">
              Small Reflections. Big Shifts.
            </h3>
            <p className="mt-2 text-[14px] sm:text-[18px] lg:text-[22px] text-[#0F4F58] leading-[20px] sm:leading-[22px] lg:leading-[23px] font-[Roboto] ml-0 sm:ml-4 lg:ml-[36px]">
              Every reflection adds a piece to the bigger picture of how your
              team works and grows. These walls capture the real, everyday
              moments that shape your culture — one insight at a time.
            </p>
          </div>

          {/* Right select */}

          {/* <select
                value={selectedTeam}
                onChange={(e) => setSelectedTeam(e.target.value)}
                className="
    appearance-none
    bg-[#86C9C9]
    text-[#0F4F58]
    text-[14px] sm:text-[16px] lg:text-[18px]
    font-[400]
    px-4 sm:px-5 lg:px-6
    pr-8 sm:pr-9 lg:pr-10
    h-[36px] sm:h-[38px] lg:h-[40px]
    w-[200px] sm:w-[250px] lg:w-[297px]
    rounded-full
    outline-none
    font-[Roboto]
  "
              >
                <option value="">Choose Team</option>

                {teams.map((team: any) => (
                  <option key={team.id} value={team.id}>
                    {team.team_name}
                  </option>
                ))}
              </select> */}
          <div className="mt-4 sm:mt-5 lg:mt-6 flex justify-end">
            {/* User Type 3 → show dropdown */}
            {user?.user_type === 3 ? (
              <div className="relative">
                <select
                  value={selectedTeam}
                  onChange={(e) => setSelectedTeam(e.target.value)}
                  className="
appearance-none
bg-[#86C9C9]
text-[#0F4F58]
text-[14px] sm:text-[16px] lg:text-[18px]
font-[400]
px-4 sm:px-5 lg:px-6
pr-8 sm:pr-9 lg:pr-10
h-[36px] sm:h-[38px] lg:h-[40px]
w-[200px] sm:w-[250px] lg:w-[297px]
rounded-full
outline-none
font-[Roboto]
"
                >
                  <option value="">Choose Team</option>

                  {teams.map((team: any) => (
                    <option key={team.id} value={team.id}>
                      {team.team_name}
                    </option>
                  ))}
                </select>

                <div className="pointer-events-none absolute right-3 lg:right-4 top-1/2 -translate-y-1/2">
                  <Image
                    src={images.dropdownImg}
                    alt="dropdown-img"
                    width={20}
                  />
                </div>
              </div>
            ) : (
              /* User Type 1 & 2 → show only own team */
              <div
                className="
bg-[#86C9C9]
text-[#0F4F58]
text-[14px] sm:text-[16px] lg:text-[18px]
px-4 sm:px-5 lg:px-6
h-[36px] sm:h-[38px] lg:h-[40px]
min-w-[400px] sm:min-w-[400px] lg:min-w-[500px]
rounded-full
flex items-center
font-[Roboto]
"
              >
                {teams.find((team: any) => team.id === user?.team_id)
                  ?.team_name || "My Team"}
              </div>
            )}
          </div>

          {/* Cards Section */}
          <div className="bg-[#F8E1B8] rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] mt-6 sm:mt-8 lg:mt-10 px-3 sm:px-5 lg:px-8 py-6 sm:py-8 lg:py-10 relative w-full min-h-[200px]">
            <div className="w-full">
              {/* Card Rows */}
              <div className="flex flex-col items-center gap-2 sm:gap-3 lg:gap-[50px]">
                {rows.map((row: any, rowIndex: any) => (
                  <div
                    key={rowIndex}
                    className="flex sm:gap-4 lg:gap-[20px] flex-wrap justify-center"
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

              {/* Buttons */}
              <div className="flex justify-end gap-4 sm:gap-6 lg:gap-8 mr-4 sm:mr-8 lg:mr-12 mt-6 sm:mt-8 pb-2">
                {user?.user_type !== 3 && (
                  <>
                    {/* Add Reflection */}
                    <div
                      className="relative w-[64px] h-[70px] sm:w-[72px] sm:h-[78px] lg:w-[80px] lg:h-[85px] cursor-pointer"
                      onClick={() => {
                        openFillupModal(
                          "reflection_wall", // microActionType (anything meaningful)
                          "", // uuid (not needed here)
                          undefined,
                          undefined,
                          selectedTeam, //  correct place
                        );
                      }}
                    >
                      <PolygonButton
                        width="100%"
                        height="100%"
                        bgColor="#F7C3BE"
                        clipPath={`polygon(0% 18px, 100% 0%, 100% 100%, 0% calc(100% - 14px))`}
                        radius={14}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-center pointer-events-none">
                        <span className="text-[#0F4F58] text-[12px] sm:text-[15px] lg:text-[18px] font-[RocaTwo] font-bold leading-[18px] sm:leading-[22px] lg:leading-[26px]">
                          Add
                          <br />
                          Reflection
                        </span>
                      </div>
                    </div>
                  </>
                )}

                {/* View Full Wall */}
                <div
                  className="relative w-[64px] h-[70px] sm:w-[72px] sm:h-[78px] lg:w-[80px] lg:h-[85px] cursor-pointer"
                  onClick={() =>
                    router.push(
                      `/view-reflection-wall?teamId=${effectiveTeamId}`,
                    )
                  }
                >
                  <PolygonButton
                    width="100%"
                    height="100%"
                    bgColor="#86C9C9"
                    radius={14}
                    clipPath={`polygon(0% 18px, 100% 0%, 100% 100%, 0% calc(100% - 14px))`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-center pointer-events-none">
                    <span className="text-[#0F4F58] text-[12px] sm:text-[15px] lg:text-[18px] font-[RocaTwo] font-bold leading-[18px] sm:leading-[22px] lg:leading-[26px]">
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
