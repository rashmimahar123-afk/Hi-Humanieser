"use client";
import { MilestoneDataProvider } from "@/src/context/MilestoneDataContextProvider";
import AllPlans from "@/src/modules/AllPlans/Components/AllPlans";
import PersonalPathway from "@/src/modules/PersonalPathwayModule/Components/PersonalPathway";
import React, { Suspense } from "react";

function PlansPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <AllPlans />
      </Suspense>
    </>
  );
}

export default PlansPage;
