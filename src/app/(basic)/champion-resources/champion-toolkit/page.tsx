"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import ChampionToolkit from "@/src/modules/ChampionHubModule/Components/ChampionToolkit/ChampionToolkit";
import React, { Suspense } from "react";

function ChampionToolkitPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <ChampionToolkit />
      </Suspense>
    </>
  );
}

export default withProtectedRoute(ChampionToolkitPage);
