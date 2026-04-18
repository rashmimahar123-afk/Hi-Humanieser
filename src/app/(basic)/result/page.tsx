"use client";

import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import ShowResultPage from "@/src/modules/ChoosePathwayModule/Components/ShowResultPage/ShowResultPage";
import React from "react";

function ResultPage() {
  return (
    <>
      <ShowResultPage />
    </>
  );
}

export default withProtectedRoute(ResultPage);
