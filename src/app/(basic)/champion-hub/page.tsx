"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import useGetMtjPollQuery from "@/src/modules/ChampionHubModule/Hooks/useGetMtjPollQuery";
import AccountSetting from "@/src/modules/ProfileModule/Components/AccountSetting/AccountSetting";
import ChampionHub from "@/src/modules/ProfileModule/Components/ChampionHub/ChampionHub";
import Profile from "@/src/modules/ProfileModule/Components/Profile";
import ProfilePathway from "@/src/modules/ProfileModule/Components/ProfilePathway/ProfilePathway";
import React, { Suspense } from "react";

function ChampionHubPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <ChampionHub />
      </Suspense>
    </>
  );
}

export default withProtectedRoute(ChampionHubPage);
