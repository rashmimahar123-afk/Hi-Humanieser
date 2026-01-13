"use client";
import ChoosePathwayPage from "@/src/modules/ChoosePathwayModule/Components/ChoosePathwayPage/ChoosePathwayPage";
import React, { Suspense } from "react";

function ChoosePathway() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <ChoosePathwayPage />
      </Suspense>
    </>
  );
}

export default ChoosePathway;
