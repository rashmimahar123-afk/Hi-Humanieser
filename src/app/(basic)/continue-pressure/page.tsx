"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import ContinuePressure from "@/src/modules/ChampionHubModule/Components/ContinuePressure/ContinuePressure";
import AccountSetting from "@/src/modules/ProfileModule/Components/AccountSetting/AccountSetting";
import ChampionHub from "@/src/modules/ProfileModule/Components/ChampionHub/ChampionHub";
import Profile from "@/src/modules/ProfileModule/Components/Profile";
import ProfilePathway from "@/src/modules/ProfileModule/Components/ProfilePathway/ProfilePathway";
import React, { Suspense } from "react";

function ContinuePressurePage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <ContinuePressure />
      </Suspense>
    </>
  );
}

export default withProtectedRoute(ContinuePressurePage);
