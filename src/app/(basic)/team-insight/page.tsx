"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import TeamFocus from "@/src/modules/ChampionHubModule/Components/TeamFocus/TeamFocus";
import TeamInsight from "@/src/modules/ChampionHubModule/Components/TeamInsight/TeamInsight";
import AccountSetting from "@/src/modules/ProfileModule/Components/AccountSetting/AccountSetting";
import ChampionHub from "@/src/modules/ProfileModule/Components/ChampionHub/ChampionHub";
import Profile from "@/src/modules/ProfileModule/Components/Profile";
import ProfilePathway from "@/src/modules/ProfileModule/Components/ProfilePathway/ProfilePathway";
import React, { Suspense } from "react";

function TeamInsightPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <TeamInsight />
      </Suspense>
    </>
  );
}

export default withProtectedRoute(TeamInsightPage);
