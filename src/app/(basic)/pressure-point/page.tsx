"use client";
import PressurePoint from "@/src/modules/ChampionHubModule/Components/PressurePoint/PressurePoint";
import PersonalPathway from "@/src/modules/PersonalPathwayModule/Components/PersonalPathway";
import React, { Suspense } from "react";

function PressurePointPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <PressurePoint />
      </Suspense>
    </>
  );
}

export default PressurePointPage;
