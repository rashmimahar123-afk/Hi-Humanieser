"use client";
import StartTeamJourney from "@/src/modules/MyTeamJourneyModule/Components/StartTeamJourney/StartTeamJourney";
import PersonalPathway from "@/src/modules/PersonalPathwayModule/Components/PersonalPathway";
import React, { Suspense } from "react";

function StartTeamJourneyPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <StartTeamJourney />
      </Suspense>
    </>
  );
}

export default StartTeamJourneyPage;
