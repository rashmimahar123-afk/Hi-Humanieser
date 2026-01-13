"use client";
import TeamJourneyPoll from "@/src/modules/MyTeamJourneyModule/Components/TeamJourneyPoll/TeamJourneyPoll";
import React, { Suspense } from "react";

function TeamJourneyPollPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <TeamJourneyPoll />
      </Suspense>
    </>
  );
}

export default TeamJourneyPollPage;
