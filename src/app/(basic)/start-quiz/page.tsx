"use client";

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

export default StartquizPage;
