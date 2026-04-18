"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import ChoosePathwayPage from "@/src/modules/ChoosePathwayModule/Components/ChoosePathwayPage/ChoosePathwayPage";
import Amplifier from "@/src/modules/PersonalPathwayModule/Components/Amplifier/Amplifier";
import ChangeMyPathway from "@/src/modules/PersonalPathwayModule/Components/ChangeMyPathway/ChangeMyPathway";
import React, { Suspense } from "react";

function PathwayCardPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <Amplifier />
      </Suspense>
    </>
  );
}

export default withProtectedRoute(PathwayCardPage);
