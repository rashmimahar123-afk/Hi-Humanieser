"use client";
import TeamJourney from "@/src/modules/MyTeamJourneyModule/Components/TeamJourney/TeamJourney";
import React, { Suspense } from "react";

function TeamJourneyPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <TeamJourney />
      </Suspense>
    </>
  );
}

export default TeamJourneyPage;
