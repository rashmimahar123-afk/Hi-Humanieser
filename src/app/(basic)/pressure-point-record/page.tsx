"use client";
import PressurePointRecord from "@/src/modules/ChampionHubModule/Components/PressurePointRecord/PressurePointRecord";
import React, { Suspense } from "react";

function PressurePointRecordPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <PressurePointRecord />
      </Suspense>
    </>
  );
}

export default PressurePointRecordPage;
