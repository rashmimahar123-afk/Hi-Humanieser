import { useRouter } from "next/navigation";
import DashboardRecordContent from "../DashboardRecordContent/DashboardRecordContent";
import useDashboardRecordData from "../../Hooks/useDashboardRecordData";

function AllDashboardData() {
  const router = useRouter();
  const {
    resultData,
    topStrengthDetails,
    weakStrengthDetails,
    enrichedProgressList,
    activePracticeList,
    teamRituals,
    activeFocusArea,
    randomMessage,
    profileData,
    currentMonthYear,
  } = useDashboardRecordData();

  return (
    <DashboardRecordContent
      firstName={profileData?.first_name}
      currentMonthYear={currentMonthYear}
      resultData={resultData}
      topStrengthDetails={topStrengthDetails}
      weakStrengthDetails={weakStrengthDetails}
      enrichedProgressList={enrichedProgressList}
      activePracticeList={activePracticeList}
      teamRituals={teamRituals}
      activeFocusArea={activeFocusArea}
      randomMessage={randomMessage}
      onHeaderClick={() => router.push("/home")}
      onRetakeQuiz={() => router.push("/start-quiz")}
      onLearnMore={(title) => console.log("Learn more:", title)}
    />
  );
}
export default AllDashboardData;
