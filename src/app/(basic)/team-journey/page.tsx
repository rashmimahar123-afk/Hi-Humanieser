"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import TeamJourney from "@/src/modules/MyTeamJourneyModule/Components/TeamJourney/TeamJourney";
import useGetMtjListQuery from "@/src/modules/MyTeamJourneyModule/Hooks/useGetMtjListQuery";
import React, { Suspense } from "react";

function TeamJourneyPage() {
  const { data: mtjListData } = useGetMtjListQuery();

  const rituals = mtjListData?.data?.team_rituals || [];
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <TeamJourney rituals={rituals} />
      </Suspense>
    </>
  );
}

export default withProtectedRoute(TeamJourneyPage);
