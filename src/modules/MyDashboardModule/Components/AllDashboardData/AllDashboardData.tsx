import { useRouter, useSearchParams } from "next/navigation";
import DashboardRecordContent from "../DashboardRecordContent/DashboardRecordContent";
import useDashboardRecordData from "../../Hooks/useDashboardRecordData";
import FillUpFormModal from "@/src/modules/PersonalPathwayModule/Components/FillUpFormModal/FillUpFormModal";

function AllDashboardData() {
  const router = useRouter();
  // Edit buttons only when opened via "Edit My Pathway Reflections"
  const isEditMode = useSearchParams().get("edit") === "true";
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
    <>
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
        editable={isEditMode}
      />
      <FillUpFormModal />
    </>
  );
}
export default AllDashboardData;
