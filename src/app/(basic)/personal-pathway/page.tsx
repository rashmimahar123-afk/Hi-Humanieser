"use client";
import { MilestoneDataProvider } from "@/src/context/MilestoneDataContextProvider";
import PersonalPathway from "@/src/modules/PersonalPathwayModule/Components/PersonalPathway";
import React, { Suspense } from "react";

function PersonalPathwayPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <MilestoneDataProvider>
          <PersonalPathway />
        </MilestoneDataProvider>
      </Suspense>
    </>
  );
}

export default PersonalPathwayPage;
