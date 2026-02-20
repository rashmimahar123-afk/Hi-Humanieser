"use client";
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

export default ChampionHubPage;
