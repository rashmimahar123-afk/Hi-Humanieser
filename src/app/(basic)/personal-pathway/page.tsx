"use client";
import PersonalPathway from "@/src/modules/PersonalPathwayModule/Components/PersonalPathway";
import React, { Suspense } from "react";

function PersonalPathwayPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <PersonalPathway />
      </Suspense>
    </>
  );
}

export default PersonalPathwayPage;
