"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
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

export default withProtectedRoute(TeamJourneyPage);
