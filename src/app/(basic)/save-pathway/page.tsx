"use client";
import SavePathway from "@/src/modules/PersonalPathwayModule/Components/SavePathway/SavePathway";
import React, { Suspense } from "react";

function SavePathwayPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <SavePathway />
      </Suspense>
    </>
  );
}

export default SavePathwayPage;
