"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import ChoosePathwayPage from "@/src/modules/ChoosePathwayModule/Components/ChoosePathwayPage/ChoosePathwayPage";
import ChangeMyPathway from "@/src/modules/PersonalPathwayModule/Components/ChangeMyPathway/ChangeMyPathway";
import BehindScene from "@/src/modules/ResourceInspiration/Components/BehindScene/BehindScene";
import FromIdeas from "@/src/modules/ResourceInspiration/Components/FromIdeas/FromIdeas";
import React, { Suspense } from "react";

function BehindScenePage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <FromIdeas />
      </Suspense>
    </>
  );
}

export default withProtectedRoute(BehindScenePage);
