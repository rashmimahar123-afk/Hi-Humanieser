"use client";

import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import StartQuizPage from "@/src/modules/ChoosePathwayModule/Components/StartQuizPage/StartQuizPage";
import React, { Suspense } from "react";

function StartquizPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <StartQuizPage />
      </Suspense>
    </>
  );
}

export default withProtectedRoute(StartquizPage);
