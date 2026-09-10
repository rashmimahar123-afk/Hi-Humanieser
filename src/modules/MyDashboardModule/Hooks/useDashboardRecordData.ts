/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import useMyQuizResultQuery from "@/src/modules/ChoosePathwayModule/Hooks/useMyQuizResultQuery";
import useQuizDetailsQuery from "@/src/modules/ChoosePathwayModule/Hooks/useQuizDetailsQuery";
import useChooseMyselfQuery from "@/src/modules/ChoosePathwayModule/Hooks/useChooseMyselfQuery";
import usePersonalPathwayQuery from "@/src/modules/PersonalPathwayModule/Hooks/usePersonalPathwayQuery";
import { enrichProgressWithPractice } from "@/src/lib/Helpers";
import { useGetMppMessagesQuery } from "@/src/modules/WelcomeModule/Hooks/useGetMppMessagesQuery";
import useMyProfileQuery from "@/src/modules/ProfileModule/Hooks/useMyProfileQuery";
import useGetMtjListQuery from "@/src/modules/MyTeamJourneyModule/Hooks/useGetMtjListQuery";
import useHhFrameworkMtjQuery from "@/src/modules/MyTeamJourneyModule/Hooks/useHhFrameworkMtjQuery";

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

const sortFn = (a: any, b: any, asc = false) => {
  if (a.score !== b.score) {
    return asc ? a.score - b.score : b.score - a.score;
  }
  if (a.situation !== b.situation) {
    return a.situation - b.situation;
  }
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

    pillarData[pillarKey] = { top: sortedDesc[0], weak: sortedAsc[0] };
    pillarAvg[pillarKey] =
      arr.reduce((sum, p) => sum + p.score, 0) / arr.length;
  });

  return { pillarData, pillarAvg };
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

const getWeakStrengthDetails = (growthTargets: any[], quizData: any) => {
  if (!quizData?.pillars) return [];
  const result: any[] = [];
  growthTargets.forEach((item) => {
    const formattedKey = item.key.replace("principle", "Principle");
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

const getLatestQuizByYear = (quizList: any[], selectedYear: string) => {
  if (!Array.isArray(quizList)) return null;

  const filtered = quizList.filter((item) => {
    const year = new Date(item.created_at).getFullYear().toString();
    return year === selectedYear;
  });

  if (filtered.length === 0) return null;

  const sorted = filtered.sort((a, b) => b.timestamp - a.timestamp);
  return sorted[0];
};

const generateStructuredProgressList = (mppData: any[]) => {
  if (!Array.isArray(mppData)) return [];

  return mppData
    .filter((item: any) => item.active || item.completed)
    .map((item: any) => {
      const pathwayKey = Object.keys(item).find(
        (key) =>
          !["created", "uuid", "active", "completed", "pathway_id", "id"].includes(
            key,
          ),
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

function useDashboardRecordData() {
  const [resultData, setResultData] = useState<{
    pillarData: PillarDataType;
    pillarAvg: Record<string, number>;
  } | null>(null);
  const [progressList, setProgressList] = useState<any[]>([]);
  const [topStrengthDetails, setTopStrengthDetails] = useState<any[]>([]);
  const [weakStrengthDetails, setWeakStrengthDetails] = useState<any[]>([]);
  const [practiceList, setPracticeList] = useState<any[]>([]);
  const [currentYear, setCurrentYear] = useState("");
  const [currentMonthYear, setCurrentMonthYear] = useState("");

  const {
    data,
    isLoading: isQuizResultLoading,
    isError: isQuizResultError,
  } = useMyQuizResultQuery();
  const { data: quizDetails } = useQuizDetailsQuery();
  const { data: myProfileData, isLoading: isProfileLoading } =
    useMyProfileQuery();
  const {
    data: getListMppData,
    isLoading: isPersonalPathwayLoading,
    isError: isPersonalPathwayError,
  } = usePersonalPathwayQuery();
  const { data: chooseMyselfData } = useChooseMyselfQuery();
  const { data: randomMessage } = useGetMppMessagesQuery();
  const { data: mtjListData } = useGetMtjListQuery();
  const { data: frameworkMtjData } = useHhFrameworkMtjQuery();

  const profileData = myProfileData?.data;
  const teamRituals = mtjListData?.data?.team_rituals || [];
  const teamFocusAreas = frameworkMtjData?.data?.focus_areas || [];
  const activeFocusArea = teamFocusAreas.find(
    (focusArea) => focusArea.title === teamRituals[0]?.focus_area,
  );

  useEffect(() => {
    const now = new Date();
    setCurrentYear(now.getFullYear().toString());
    setCurrentMonthYear(
      now.toLocaleDateString("en-US", { month: "long", year: "numeric" }),
    );
  }, []);

  const latestQuiz = getLatestQuizByYear(
    data?.data?.quiz || [],
    currentYear || new Date().getFullYear().toString(),
  );

  useEffect(() => {
    if (latestQuiz?.results) {
      setResultData(processQuizResults(latestQuiz.results));
    } else {
      setResultData(null);
    }
  }, [latestQuiz]);

  useEffect(() => {
    if (resultData?.pillarData && quizDetails?.data) {
      const topStrengths = Object.values(resultData.pillarData).map(
        (p: any) => p.top,
      );
      setTopStrengthDetails(getTopStrengthDetails(topStrengths, quizDetails.data));
    }
  }, [resultData, quizDetails]);

  useEffect(() => {
    if (resultData?.pillarData && quizDetails?.data) {
      const weakPrinciples = Object.values(resultData.pillarData).map(
        (p: any) => p.weak,
      );
      setWeakStrengthDetails(
        getWeakStrengthDetails(weakPrinciples, quizDetails.data),
      );
    }
  }, [resultData, quizDetails]);

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
      setProgressList(sortedList.slice(0, 20));
    }
  }, [getListMppData, chooseMyselfData]);

  useEffect(() => {
    if (getListMppData?.data?.pathways && chooseMyselfData?.data) {
      const list: any[] = [];

      getListMppData.data.pathways.forEach((pathway: any) => {
        const dynamicKey = Object.keys(pathway).find(
          (key) =>
            !["created", "uuid", "active", "completed", "pathway_id", "id"].includes(
              key,
            ),
        );

        if (!dynamicKey) return;

        const pathwayNumber = parseInt(dynamicKey);
        const m3Data = pathway[dynamicKey]?.m3;
        const pinToDashIds = m3Data?.pin_to_dash || [];

        chooseMyselfData.data.forEach((item: any) => {
          item?.pillars?.forEach((pillar: any) => {
            pillar?.principles?.forEach((principle: any) => {
              if (principle.pathway_number === pathwayNumber) {
                const pathwayName = principle.pathway_title;

                principle?.micro_actions?.forEach((action: any) => {
                  const maId = `ma${action.micro_action_number}`;

                  list.push({
                    id: maId,
                    title: action.title,
                    description: action.description,
                    pathway: pathwayName,
                    checked: pinToDashIds.includes(maId),
                  });
                });
              }
            });
          });
        });
      });

      setPracticeList(list);
    }
  }, [getListMppData, chooseMyselfData]);

  const activePracticeList = practiceList.filter((item) => item.checked);
  const enrichedProgressList = enrichProgressWithPractice(
    progressList,
    practiceList,
  );

  const isLoading =
    isQuizResultLoading || isProfileLoading || isPersonalPathwayLoading;
  const isError = isQuizResultError || isPersonalPathwayError;

  return {
    resultData,
    topStrengthDetails,
    weakStrengthDetails,
    progressList,
    enrichedProgressList,
    practiceList,
    activePracticeList,
    randomMessage: randomMessage as string | undefined,
    profileData,
    teamRituals,
    activeFocusArea,
    currentMonthYear,
    isLoading,
    isError,
  };
}

export default useDashboardRecordData;
