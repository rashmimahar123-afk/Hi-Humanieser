"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import SavePathway from "@/src/modules/PersonalPathwayModule/Components/SavePathway/SavePathway";
import SpreadRipple from "@/src/modules/ProfileModule/Components/SpreadRipple/SpreadRipple";
import React, { Suspense } from "react";

function SpreadRipplePage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <SpreadRipple />
      </Suspense>
    </>
  );
}

export default withProtectedRoute(SpreadRipplePage);
