"use client";
import TeamFocus from "@/src/modules/ChampionHubModule/Components/TeamFocus/TeamFocus";
import AccountSetting from "@/src/modules/ProfileModule/Components/AccountSetting/AccountSetting";
import ChampionHub from "@/src/modules/ProfileModule/Components/ChampionHub/ChampionHub";
import Profile from "@/src/modules/ProfileModule/Components/Profile";
import ProfilePathway from "@/src/modules/ProfileModule/Components/ProfilePathway/ProfilePathway";
import React, { Suspense } from "react";

function TeamFocusPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <TeamFocus />
      </Suspense>
    </>
  );
}

export default TeamFocusPage;
