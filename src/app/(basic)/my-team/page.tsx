"use client";
import MyTeamJourney from "@/src/modules/MyTeamJourneyModule/Components/MyTeamJourney/MyTeamJourney";
import StartTeamJourney from "@/src/modules/MyTeamJourneyModule/Components/StartTeamJourney/StartTeamJourney";
import PersonalPathway from "@/src/modules/PersonalPathwayModule/Components/PersonalPathway";
import React, { Suspense } from "react";

function MyTeamJourneyPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <MyTeamJourney />
      </Suspense>
    </>
  );
}

export default MyTeamJourneyPage;
