"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import ChampionGuide from "@/src/modules/ChampionHubModule/Components/ChampionGuide/ChampionGuide";
import React, { Suspense } from "react";

function ChampionGuidePage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <ChampionGuide />
      </Suspense>
    </>
  );
}

export default withProtectedRoute(ChampionGuidePage);
