"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import AccountSetting from "@/src/modules/ProfileModule/Components/AccountSetting/AccountSetting";
import ChampionHub from "@/src/modules/ProfileModule/Components/ChampionHub/ChampionHub";
import OverseerHub from "@/src/modules/ProfileModule/Components/OverseerHub/OverseerHub";
import Profile from "@/src/modules/ProfileModule/Components/Profile";
import ProfilePathway from "@/src/modules/ProfileModule/Components/ProfilePathway/ProfilePathway";
import React, { Suspense } from "react";

function OverseerHubPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <OverseerHub />
      </Suspense>
    </>
  );
}

export default withProtectedRoute(OverseerHubPage);
