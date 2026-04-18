"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
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

export default withProtectedRoute(ChoosePathway);
