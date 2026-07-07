"use client";

import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import StartQuizPage from "@/src/modules/ChoosePathwayModule/Components/StartQuizPage/StartQuizPage";
import useMyProfileQuery from "@/src/modules/ProfileModule/Hooks/useMyProfileQuery";
import React, { Suspense } from "react";

function StartquizPage() {
  const { data: myProfileDaa, isLoading: myProfileLoading } =
    useMyProfileQuery();
  const profileData = myProfileDaa?.data;
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <StartQuizPage profileData={profileData} />
      </Suspense>
    </>
  );
}

export default withProtectedRoute(StartquizPage);
