"use client";
import ChampionResources from "@/src/modules/ChampionHubModule/Components/ChampionResources/ChampionResources";
import React, { Suspense } from "react";

function ChampionResourcesPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <ChampionResources />
      </Suspense>
    </>
  );
}

export default ChampionResourcesPage;
