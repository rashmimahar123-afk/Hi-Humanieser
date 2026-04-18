"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
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

export default withProtectedRoute(PressurePointRecordPage);
