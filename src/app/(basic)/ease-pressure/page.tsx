"use client";
import EasePressure from "@/src/modules/ChampionHubModule/Components/EasePressure/EasePressure";
import React, { Suspense } from "react";

function EasePressurePage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <EasePressure />
      </Suspense>
    </>
  );
}

export default EasePressurePage;
