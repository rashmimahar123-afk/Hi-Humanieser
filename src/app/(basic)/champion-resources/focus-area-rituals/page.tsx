"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import ChampionToolkit from "@/src/modules/ChampionHubModule/Components/ChampionToolkit/ChampionToolkit";
import FocusAreaRituals from "@/src/modules/ChampionHubModule/Components/FocusAreaRituals/FocusAreaRituals";
import React, { Suspense } from "react";

function FocusAreaRitualsPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <FocusAreaRituals />
      </Suspense>
    </>
  );
}

export default withProtectedRoute(FocusAreaRitualsPage);
