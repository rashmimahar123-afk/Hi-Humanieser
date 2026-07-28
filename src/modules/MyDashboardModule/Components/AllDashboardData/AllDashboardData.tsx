/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import QuizPathwayCards from "../QuizPathwayCards/QuizPathwayCards";
import MilestoneTwoActionRow from "@/src/modules/PersonalPathwayModule/Components/MilestoneTwoActionRow/MilestoneTwoActionRow";
import ReflectionBlock from "../ReflectionBlock/ReflectionBlock";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import DashboardPathwayCard from "../DashboardPathwayCard/DashboardPathwayCard";
import GaugeChart from "react-gauge-chart";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import useQuizDetailsQuery from "@/src/modules/ChoosePathwayModule/Hooks/useQuizDetailsQuery";
import useMyQuizResultQuery from "@/src/modules/ChoosePathwayModule/Hooks/useMyQuizResultQuery";
import { useRouter } from "next/navigation";
import {
  ENRICH_PROGRESS_LIST,
  PRACTICE_LIST_ITEM,
} from "../../Types/ResponseTypes";
import useChooseMyselfQuery from "@/src/modules/ChoosePathwayModule/Hooks/useChooseMyselfQuery";
import usePersonalPathwayQuery from "@/src/modules/PersonalPathwayModule/Hooks/usePersonalPathwayQuery";
import { enrichProgressWithPractice } from "@/src/lib/Helpers";
import { useGetMppMessagesQuery } from "@/src/modules/WelcomeModule/Hooks/useGetMppMessagesQuery";
import useMyProfileQuery from "@/src/modules/ProfileModule/Hooks/useMyProfileQuery";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";

type Principle = {
  key: string;
  score: number;
  situation: number;
  pillar: string;
};

type PillarItem = {
  top: Principle;
  weak: Principle;
};

type PillarDataType = Record<string, PillarItem>;

function AllDashboardData() {
  const [resultData, setResultData] = useState<{
    pillarData: PillarDataType;
    pillarAvg: Record<string, number>;
  } | null>(null);
  const [progressList, setProgressList] = useState<any>([]);
  const currentYear = new Date().getFullYear().toString();
  const [selected, setSelected] = useState(currentYear);
  const [isDownloading, setIsDownloading] = useState(false);
  const [topStrengthDetails, setTopStrengthDetails] = useState<any[]>([]);
  const [weakStrengthDetails, setWeakStrengthDetails] = useState<any[]>([]);
  const [practiceList, setPracticeList] = useState<any[]>([]);
  const [showPdf, setShowPdf] = useState(false);
  const [enter] = useState(true);
  const router = useRouter();
  const { data, isLoading } = useMyQuizResultQuery();
  const reflections = Array.from({ length: 3 });
  const sortFn = (a: any, b: any, asc = false) => {
    // 1. Score comparison
    if (a.score !== b.score) {
      return asc ? a.score - b.score : b.score - a.score;
    }

    // 2. Tie-breaker → lower situation wins
    if (a.situation !== b.situation) {
      return a.situation - b.situation;
    }

    // 3. Final fallback (stable sort)
    return a.key.localeCompare(b.key);
  };
  const processQuizResults = (results: any) => {
    const wS = 0.5;
    const wZ = 0.5;

    const pillarData: any = {};
    const pillarAvg: any = {};

    Object.keys(results).forEach((pillarKey) => {
      const principles = results[pillarKey];

      const arr: any[] = [];

      Object.keys(principles).forEach((pKey) => {
        const item = principles[pKey];

        const score = wS * item.strength + wZ * item.situation;

        arr.push({
          key: pKey,
          score,
          situation: item.situation,
          pillar: pillarKey,
        });
      });

      const sortedDesc = [...arr].sort((a, b) => sortFn(a, b, false));
      const sortedAsc = [...arr].sort((a, b) => sortFn(a, b, true));

      //  Store per pillar
      pillarData[pillarKey] = {
        top: sortedDesc[0],
        weak: sortedAsc[0],
      };

      // Avg
      pillarAvg[pillarKey] =
        arr.reduce((sum, p) => sum + p.score, 0) / arr.length;
    });

    return {
      pillarData,
      pillarAvg,
    };
  };

  const getTopStrengthDetails = (topStrengths: any[], quizData: any) => {
    if (!quizData?.pillars) return [];

    const result: any[] = [];

    topStrengths.forEach((item) => {
      const formattedKey = item.key.replace("principle", "Principle");

      Object.values(quizData.pillars).forEach((pillar: any) => {
        const principle = pillar.principles?.[formattedKey];

        if (principle) {
          result.push({
            key: item.key,
            title: principle.display_name,
            description: principle.description,
          });
        }
      });
    });

    return result;
  };
  const { data: quizDetails } = useQuizDetailsQuery();
  const { data: myProfileDaa, isLoading: myProfileLoading } =
    useMyProfileQuery();
  const profileData = myProfileDaa?.data;
  const getWeakStrengthDetails = (growthTargets: any[], quizData: any) => {
    if (!quizData?.pillars) return [];

    const result: any[] = [];

    growthTargets.forEach((item) => {
      const formattedKey = item.key.replace("principle", "Principle");

      // 👇 extract numbers
      const principle_number = parseInt(item.key.split("_")[1], 10);
      const pillar_number = parseInt(item.pillar.split("_")[1], 10);

      Object.values(quizData.pillars).forEach((pillar: any) => {
        const principle = pillar.principles?.[formattedKey];

        if (principle) {
          result.push({
            key: item.key,
            title: principle.display_name,
            description: principle.description,
            principle_number,
            pillar_number,
          });
        }
      });
    });

    return result;
  };

  useEffect(() => {
    if (resultData?.pillarData && quizDetails?.data) {
      const topStrengths = Object.values(resultData.pillarData).map(
        (p: any) => p.top,
      );

      const details = getTopStrengthDetails(topStrengths, quizDetails.data);

      setTopStrengthDetails(details);

      // agar overall message chahiye
      const allScores = topStrengths.map((p: any) => p.score);
      const avg =
        allScores.reduce((a: number, b: number) => a + b, 0) / allScores.length;
    }
  }, [resultData, quizDetails]);

  useEffect(() => {
    if (resultData?.pillarData && quizDetails?.data) {
      const weakPrinciples = Object.values(resultData.pillarData).map(
        (p: any) => p.weak,
      );

      const weakDetails = getWeakStrengthDetails(
        weakPrinciples,
        quizDetails.data,
      );

      setWeakStrengthDetails(weakDetails);
    }
  }, [resultData, quizDetails]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // months are 0-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };
  // const formattedDate = formatDate(data?.data?.quiz?.created_at ?? "");
  const { data: chooseMyselfData } = useChooseMyselfQuery();

  const { data: getListMppData, isError, refetch } = usePersonalPathwayQuery();

  // ------------------------------->Latest Quiz<-----------------------
  const getLatestQuizByYear = (quizList: any[], selectedYear: string) => {
    if (!Array.isArray(quizList)) return null;

    // 1. Filter by year
    const filtered = quizList.filter((item) => {
      const year = new Date(item.created_at).getFullYear().toString();
      return year === selectedYear;
    });

    if (filtered.length === 0) return null;

    // 2. Sort by timestamp DESC (latest first)
    const sorted = filtered.sort((a, b) => b.timestamp - a.timestamp);

    // 3. Return latest
    return sorted[0];
  };

  const latestQuiz = getLatestQuizByYear(
    data?.data?.quiz || [],
    selected || new Date().getFullYear().toString(),
  );

  useEffect(() => {
    if (latestQuiz?.results) {
      const processed = processQuizResults(latestQuiz.results);
      setResultData(processed);
    } else {
      setResultData(null); // optional clear
    }
  }, [latestQuiz]);

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
          [pathwayKey]: item[pathwayKey], //  main structured data
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

  useEffect(() => {
    if (getListMppData?.data?.pathways && chooseMyselfData?.data) {
      const structuredList = generateStructuredProgressList(
        getListMppData.data.pathways,
      );

      const pathwayMap = getPathwayMap(chooseMyselfData.data);

      const updatedList = transformProgressList(structuredList, pathwayMap);

      //  Sort by latest created date
      const sortedList = updatedList.sort(
        (a: any, b: any) =>
          new Date(b.created).getTime() - new Date(a.created).getTime(),
      );

      //  Take latest 20
      const latest20 = sortedList.slice(0, 20);

      setProgressList(latest20);
    }
  }, [getListMppData, chooseMyselfData]);
  // Extract pindash from get list mpp and microaction details from choose myself and merge them to create a new list for practice perspective pathway progress
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
                checked: selectedKeys.includes(key), //  MAIN
              });
            });
          });
        });
      });

      setPracticeList(list);
    }
  }, [getListMppData, chooseMyselfData]);

  //Active practice list for dashboard pdf
  const activePracticeList = practiceList.filter((item) => item.checked);

  const enrichedProgressList = enrichProgressWithPractice(
    progressList,
    practiceList,
  );

  const { data: randomMessage } = useGetMppMessagesQuery();
  const currentMonthYear = new Date().toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  return (
    <div className="min-h-screen bg-[#F5F0EB] font-sans">
      <div className="relative">
        <Image
          src={images.quizPolygon}
          alt="login-rectangle"
          width={630}
          height={630}
          className="absolute top-0 right-0 z-0"
          priority
        />
      </div>
      {/* Header */}
      <div className=" px-10 py-8">
        <div>
          <h1
            className="text-[#567F55] text-[47px] font-[Aptos] mb-6 font-[Aptos] font-[700] cursor-pointer"
            onClick={() => router.push("/home")}
          >
            Hi Humaniser! ™
          </h1>
        </div>
        {/* Record Section */}
        <div>
          <h2 className="text-[#0F4F58] text-[37px] font-bold font-[RocaTwo] mb-1">
            My Humaniser Record
          </h2>
          <p className="text-[#737373] ml-[10px] mb-6 font-[RocaTwo] font-bold text-[21px]">
            Real actions. Real reflections. Real performance.
          </p>

          <div className="flex flex-col gap-6 w-full max-w-3xl mt-10">
            {/* Name */}
            <div className="flex items-center gap-6">
              <label className="w-32 text-[#567F55] text-[20px] font-[400] font-[Roboto]">
                Name
              </label>
              <input
                type="text"
                value={profileData?.first_name}
                placeholder="pre-filled if possible"
                className="w-full h-[44px] rounded-full px-6 text-[16px] bg-white shadow-sm outline-none text-[#737373]"
              />
            </div>

            {/* Time Period */}
            <div className="flex items-center gap-6">
              <label className="w-32 text-[#567F55] text-[20px] font-[400] font-[Roboto]">
                Time Period
              </label>
              <input
                type="text"
                value={currentMonthYear}
                placeholder="pre-filled if possible"
                className="w-full h-[44px] rounded-full px-6 text-[16px] bg-white shadow-sm outline-none text-[#737373]"
              />
            </div>
          </div>
        </div>

        {/* Quiz Result */}
        <div>
          <div className="relative">
            {/* Number badge */}
            <div
              className="
      absolute
      top-[35px]
      -right-[23px]
      w-[150px]
      h-[150px]
      rounded-full
      bg-[#FFE9B3]
      flex
      items-center
      justify-center
      text-white
      text-[72px]
      leading-none
      font-[700]
      z-10
      rotate-[12deg]
    "
              style={{ fontFamily: "RocaTwo-BI" }}
            >
              1
            </div>
          </div>
          <h2 className="text-[#0F4F58] text-[35px] font-bold font-[RocaTwo] mb-1 mt-14">
            My Quiz Results
          </h2>
          <p className="text-[#737373] font-[Aptos] text-[19px] mb-6 font-[400]">
            Your starting point — strengths, scores, and the pathways
            recommended for you.
          </p>

          {topStrengthDetails?.length === 0 ? (
            <div className="bg-[#ffffff] pt-[1px] px-[16px] sm:px-[28px] md:px-[45px] pb-[15px] mt-[50px] border rounded-[10px]">
              <div className="flex justify-between mt-[60px] ">
                {" "}
                {/* What's Working Well */}
                <p className="text-[#0F4F58] font-[Aptos] text-[13px] md:text-[17px] lg:text-[22px] mt-[10px] ml-0 sm:ml-[10px] md:ml-[20px]">
                  Once you complete your first check-in, you’ll see what was
                  coming through for you, along with a few suggested Pathways to
                  help you choose where to begin.
                </p>
                {/* Retake Button */}
                <div
                  className="cursor-pointer"
                  onClick={() => router.push("/start-quiz")}
                >
                  <PolygonButton
                    width="126px"
                    height="107px"
                    bgColor="#F6E3BF"
                    radius={14}
                    clipPath={`polygon(15% 11%, 81% 0%, 100% 87%, 3% calc(100% - 15px))`}
                    decorationImg={{
                      src: images.arrowImg,
                      width: 48,
                      height: 48,
                    }}
                    decorationPosition={{
                      className: "-left-[37px] -top-[47px] rotate-[20deg]",
                    }}
                  >
                    <span className="text-[#0F4F58] text-[17px] md:text-[20px] lg:text-[26px] font-[RocaTwo] font-bold leading-tight text-center">
                      Take the Check-In
                    </span>
                  </PolygonButton>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative rounded-2xl p-8 bg-white">
              <div>
                <div>
                  <div className="text-[#737373] text-[26px] font-[League Spartan] font-[400]">
                    Your Strenghts
                  </div>
                  <p className="text-[#737373] font-[Aptos]text-[20px] mt-[10px]">
                    {/* {` ${profileData?.first_name || ""}, your results show clear strengths in:`} */}
                    {`${profileData?.first_name || ""}, from what you shared, a few things are already coming through strongly:`}
                  </p>
                  <div className="mt-[20px] ml-14">
                    <div className=" mt-2 ml-[65px]">
                      {topStrengthDetails.map((item: any, index: number) => (
                        <div
                          key={`item${index}`}
                          className="relative"
                          style={{ fontFamily: "Aptos" }}
                        >
                          <span className="relative z-10 px-2 py-1 rounded text-[#0F4F58] text-[20px]">
                            {/* <span className="font-[700]">{item.title} — </span> */}
                            {item.description}
                          </span>

                          {/* Arrow */}
                          <div className="absolute -left-8 top-1/2 -translate-y-1/2 z-20">
                            <div className="relative bg-[#4BA6A6] w-[18px] h-[14px] rounded-[4px] flex items-center justify-center">
                              <Image
                                src={images.smallArrow}
                                alt="small-arrow"
                                priority
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="w-full flex justify-center">
                      <div className="text-[#0F4F58] text-[20px] font-[700] font-[Roboto] max-w-[823px] flex justify-center mt-[40px]">
                        These are qualities worth celebrating. They’re not just
                        traits you have — they’re the foundations you can keep
                        building on as you grow in your Pathway.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[60px]">
                  {/* TEXT (Always on top) */}
                  <div className="relative z-20 text-[#567F55] font-[400]">
                    <h3 className="text-[#737373] text-[26px] font-[RocaRwo]">
                      Your Pillars Scores
                    </h3>
                    <p
                      className="text-[22px] text-[#737373] ml-[20px]  "
                      style={{ fontFamily: "Aptos" }}
                    >
                      Here’s how you scored across the 3 pillars — showing where
                      your strengths shine, and where there’s room to grow:
                    </p>
                    {/* PILLARS GRID */}
                    <div className="mt-[40px] ml-[65px]">
                      <div className="grid grid-cols-3 gap-[60px] text-center ">
                        {/* Pillar 1 */}
                        <div className="flex flex-col items-center">
                          <h4
                            className="text-[#4BA6A6] text-[22px] leading-[100%] font-[700]"
                            style={{ fontFamily: "RocaTwo-BI" }}
                          >
                            The Mindset We Bring
                          </h4>

                          <p
                            className="mt-2 text-[#737373] text-[20px] w-[300px]"
                            style={{ fontFamily: "Aptos" }}
                          >
                            How you show up — your habits, openness, and
                            self-awareness.
                          </p>

                          <div className="mt-6 relative w-[250px]">
                            <GaugeChart
                              id="connect-gauge"
                              nrOfLevels={1}
                              // percent={
                              //   (resultData?.pillarData?.pillar_03?.top
                              //     ?.score || 0) / 5
                              // }
                              percent={
                                (resultData?.pillarAvg?.pillar_01 || 0) / 5
                              }
                              hideText={true}
                              arcWidth={0.38} // thicker arc
                              colors={["#D3CBB6"]}
                              needleColor="#F28B82"
                            />
                            {/* Labels */}
                            <span className="absolute left-[45px] -bottom-[8px] text-[#4BA6A6]  text-[16px] font-[400]">
                              1
                            </span>

                            <span className="absolute right-[45px] -bottom-[8px] text-[#4BA6A6]  text-[16px] font-[400]">
                              5
                            </span>
                          </div>
                        </div>

                        {/* Pillar 2 */}
                        <div className="flex flex-col items-center">
                          <h4
                            className="text-[#4BA6A6] text-[22px] leading-[100%] font-[700]"
                            style={{ fontFamily: "RocaTwo-BI" }}
                          >
                            The Way We Connect
                          </h4>

                          <p
                            className="mt-2 text-[#737373] text-[20px] w-[300px]"
                            style={{ fontFamily: "Aptos" }}
                          >
                            How you communicate, listen, and build trust with
                            others.
                          </p>

                          <div className="mt-6 relative w-[250px]">
                            <GaugeChart
                              id="connect-gauge"
                              nrOfLevels={1}
                              // percent={
                              //   (resultData?.pillarData?.pillar_02?.top
                              //     ?.score || 0) / 5
                              // }
                              percent={
                                (resultData?.pillarAvg?.pillar_02 || 0) / 5
                              }
                              hideText={true}
                              arcWidth={0.38} // thicker arc
                              colors={["#D3CBB6"]}
                              needleColor="#F28B82"
                            />
                            {/* Labels */}
                            <span className="absolute left-[45px] -bottom-[8px] text-[#4BA6A6]  text-[16px] font-[400]">
                              1
                            </span>

                            <span className="absolute right-[45px] -bottom-[8px] text-[#4BA6A6]  text-[16px] font-[400]">
                              5
                            </span>
                          </div>
                        </div>

                        {/* Pillar 3 */}
                        <div className="flex flex-col items-center">
                          <h4
                            className="text-[#4BA6A6] text-[22px] leading-[100%] font-[700]"
                            style={{ fontFamily: "RocaTwo-BI" }}
                          >
                            The Culture We Shape
                          </h4>

                          <p
                            className="mt-2 text-[#737373] text-[20px] w-[300px]"
                            style={{ fontFamily: "Aptos" }}
                          >
                            How your actions influence the team environment and
                            wellbeing.
                          </p>

                          <div className="mt-6 relative w-[250px]">
                            <GaugeChart
                              id="connect-gauge"
                              nrOfLevels={1}
                              // percent={
                              //   (resultData?.pillarData?.pillar_03?.top
                              //     ?.score || 0) / 5
                              // }
                              percent={
                                (resultData?.pillarAvg?.pillar_03 || 0) / 5
                              }
                              hideText={true}
                              arcWidth={0.38} // thicker arc
                              colors={["#D3CBB6"]}
                              needleColor="#F28B82"
                            />
                            {/* Labels */}
                            <span className="absolute left-[45px] -bottom-[8px] text-[#4BA6A6]  text-[16px] font-[400]">
                              1
                            </span>

                            <span className="absolute right-[45px] -bottom-[8px] text-[#4BA6A6]  text-[16px] font-[400]">
                              5
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SKY SHAPE CARD */}
                </div>

                <div className="mt-[60px]">
                  {/* TEXT (Always on top) */}
                  <div className="relative z-20 text-[#567F55] font-[400]">
                    <h3
                      className="text-[#737373] text-[26px]"
                      style={{ fontFamily: "RocaRwo-Bold" }}
                    >
                      Your 3 Recommended Pathways
                    </h3>
                    <p
                      className="text-[22px] text-[#737373] ml-[20px] w-[900px] "
                      style={{ fontFamily: "Aptos" }}
                    >
                      Here are a few Pathways that could be a powerful place to
                      start.
                    </p>
                    <div className="mt-[40px] ml-[28px]">
                      <div className="grid grid-cols-3 gap-[40px]">
                        {weakStrengthDetails.map((item: any, index: any) => (
                          <QuizPathwayCards
                            key={`item${index}`}
                            title={item.title}
                            description={item.description}
                            onLearnMore={() =>
                              console.log("Learn more:", item.title)
                            }
                            bgColor={"#CDE3CC"}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* My Personal Progress */}
        <div>
          <div className="relative">
            {/* Number badge */}
            <div
              className="
      absolute
      top-[25px]
      -right-[23px]
      w-[150px]
      h-[150px]
      rounded-full
      bg-[#FFE9B3]
      flex
      items-center
      justify-center
      text-white
      text-[72px]
      leading-none
      font-[700]
      z-10
      rotate-[12deg]
    "
              style={{ fontFamily: "RocaTwo-BI" }}
            >
              2
            </div>

            {/* Your card content */}
          </div>
          <h2 className="text-[#0F4F58] text-[35px] font-bold font-[RocaTwo] mb-1 mt-14">
            My Personal Progress{" "}
          </h2>
          <p className="text-[#737373] font-[Aptos] text-[19px] mb-6 font-[400]">
            The micro-actions you’ve chosen to keep alive in your daily work.
          </p>

          {/* Highlight Box */}

          <div className="relative rounded-2xl p-8 bg-white">
            {enrichedProgressList.map((item: any, index: number) => {
              const titleKey = Object.keys(item).find(
                (key) =>
                  key !== "created" &&
                  key !== "uuid" &&
                  key !== "active" &&
                  key !== "completed",
              );

              const data = item[titleKey as string];
              const microActions = [
                ...(data?.m2?.micro_action_1 || []),
                ...(data?.m2?.micro_action_2 || []),
              ];
              const groupedMicroActions = Object.values(
                microActions.reduce((acc: any, curr: any) => {
                  if (!acc[curr.title]) {
                    acc[curr.title] = {
                      title: curr.title,
                      description: curr.description,
                      reflections: [],
                    };
                  }

                  acc[curr.title].reflections.push({
                    reflection: curr.reflection,
                    share: curr.share,
                  });

                  return acc;
                }, {}),
              );
              return (
                <div key={`item${index}`} className="mb-10">
                  {/* Header */}
                  <div className="flex items-center justify-between rounded-xl">
                    <div className="flex items-center gap-4">
                      <Image
                        src={images.pathEye}
                        alt="path-eye"
                        width={93}
                        height={83}
                        priority
                      />
                      <div className="flex flex-col">
                        <h3 className="font-[700] text-[19px] text-[#3C4C59]">
                          {titleKey}
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-col mr-[230px]">
                      <span className="text-[#567F55] text-[17px]">
                        Completed on
                      </span>
                      <p className="text-[#567F55] text-[17px]">
                        {item.completed
                          ? new Date(item.completed * 1000).toLocaleDateString()
                          : "-"}
                      </p>
                    </div>
                  </div>

                  {/* Micro Actions */}
                  <div className="mt-6 bg-[#F6E7C3] rounded-[20px] px-10 py-6">
                    <div className="flex justify-between mb-4">
                      <span className="text-[#567F55] font-bold ml-[115px]">
                        MICRO-ACTIONS
                      </span>
                      <span className="text-[#567F55] font-bold mr-[340px]">
                        REFLECTION
                      </span>
                    </div>

                    <div className="space-y-6">
                      {groupedMicroActions.map((ma: any, i: number) => (
                        <DashboardPathwayCard
                          key={`ma${i}`}
                          title={ma.title}
                          description={ma.description}
                          reflections={ma.reflections}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* My Active Practice List */}
        <div>
          <div className="relative">
            {/* Number badge */}
            <div
              className="
      absolute
      top-[35px]
      -right-[23px]
      w-[150px]
      h-[150px]
      rounded-full
      bg-[#FFE9B3]
      flex
      items-center
      justify-center
      text-white
      text-[72px]
      leading-none
      font-[700]
      z-10
      rotate-[12deg]
    "
              style={{ fontFamily: "RocaTwo-BI" }}
            >
              3
            </div>
          </div>
          <h2 className="text-[#0F4F58] text-[35px] font-bold font-[RocaTwo] mb-1 mt-14">
            My Active Practice List
          </h2>
          <p className="text-[#567F55] font-[Aptos] text-[19px] mb-6 font-[400]">
            The micro-actions you’ve chosen to keep alive in your daily work.
          </p>

          {activePracticeList?.length === 0 ? (
            <>
              {/* Cards */}
              <div className="mt-[20px] space-y-6 lg:space-y-10">
                <div className="bg-[#ffffff] rounded-2xl p-[8rem] sm:p-6 lg:p-[8rem]">
                  <div className="text-[#0f4f58] text-[16px] flex justify-center  font-[700] sm:text-[16px] lg:text-[20px] font-[Canva Sans] truncate">
                    No active practice list recorded yet
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Highlight Box */}
              <div className="relative rounded-2xl p-8 bg-white">
                <div>
                  <div className=" grid grid-cols-2 gap-8">
                    {activePracticeList?.map((item: any, index: number) => (
                      <div
                        key={`item${index}`}
                        className="bg-[#CDE3CC] rounded-2xl px-8 py-10 flex flex-col justify-between "
                      >
                        {/* Content */}
                        <div>
                          <h3 className="text-[26px] text-[#0F4F58] font-[RocaTwo] font-bold leading-snug">
                            {item.title}
                          </h3>

                          <p className="mt-5 text-[#0F4F58] text-[18px] font-[400] font-[Aptos] leading-6">
                            {item.description}
                          </p>
                        </div>

                        {/* Pathway pill */}
                        <div className="mt-8">
                          <span className="flex justify-end bg-[#F8E1B8] text-[#0F4F58] text-[15px] px-4 py-2 rounded-full font-[RocaTwo] font-bold">
                            {item.pathway}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* My Team Progress */}
        <div>
          <div className="relative">
            {/* Number badge */}
            <div
              className="
      absolute
      top-[35px]
      -right-[23px]
      w-[150px]
      h-[150px]
      rounded-full
      bg-[#FFE9B3]
      flex
      items-center
      justify-center
      text-white
      text-[72px]
      leading-none
      font-[700]
      z-10
      rotate-[12deg]
    "
              style={{ fontFamily: "RocaTwo-BI" }}
            >
              4
            </div>
          </div>
          <h2 className="text-[#0F4F58] text-[35px] font-bold font-[RocaTwo] mt-14">
            My Team Progress
          </h2>

          <p className="text-[#567F55] font-[Aptos] text-[19px] mb-10">
            The rituals you’ve contributed to and the reflections you’ve shared
            with your team.
          </p>

          <div className="relative bg-white rounded-[28px] p-10">
            {/* Focus area */}
            <div>
              <div className="flex items-start gap-8">
                {/* Left */}
                <div className="min-w-[220px]">
                  <p className="text-[#0F4F58] font-bold font-[RocaTwo] text-[26px]">
                    Focus Area:
                  </p>
                  <p className="text-[#0F4F58] font-bold font-[RocaTwo] text-[26px] leading-tight">
                    Improving Clarity
                  </p>
                </div>

                {/* Right */}
                <p className="text-[#567F55] text-[21px] font-[Aptos] leading-relaxed max-w-3xl">
                  Making expectations, priorities, and communication clear so
                  everyone knows where they stand and what they’re working
                  toward
                </p>
              </div>
            </div>

            {/* Repeating reflection blocks */}
            {reflections.map((_item, index) => (
              <ReflectionBlock key={`_item${index}`} />
            ))}
          </div>
        </div>

        <div className="mt-14 relative">
          <SuccessMessage
            text={randomMessage || ""}
            fontSize="text-[23px]"
            leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
            rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
            bottom="3px"
            fontColor="#0f4f58"
            rightImgBottom="-3px"
            rotate="-35deg"
          />
        </div>
      </div>
    </div>
  );
}
export default AllDashboardData;
