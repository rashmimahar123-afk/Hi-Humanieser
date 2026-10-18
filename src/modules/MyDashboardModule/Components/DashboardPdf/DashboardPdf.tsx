import DashboardRecordContent from "../DashboardRecordContent/DashboardRecordContent";
import useDashboardRecordData from "../../Hooks/useDashboardRecordData";

function DashboardPdf() {
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
      fullName={`${profileData?.first_name ?? ""} ${profileData?.last_name ?? ""}`.trim()}
      currentMonthYear={currentMonthYear}
      resultData={resultData}
      topStrengthDetails={topStrengthDetails}
      weakStrengthDetails={weakStrengthDetails}
      enrichedProgressList={enrichedProgressList}
      activePracticeList={activePracticeList}
      teamRituals={teamRituals}
      activeFocusArea={activeFocusArea}
      randomMessage={randomMessage}
    />
  );
}
export default DashboardPdf;
