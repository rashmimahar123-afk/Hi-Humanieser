"use client";
import HumanieserMoments from "@/src/modules/ChampionHubModule/Components/HumanieserMoments/HumanieserMoments";
import AccountSetting from "@/src/modules/ProfileModule/Components/AccountSetting/AccountSetting";
import ChampionHub from "@/src/modules/ProfileModule/Components/ChampionHub/ChampionHub";
import Profile from "@/src/modules/ProfileModule/Components/Profile";
import ProfilePathway from "@/src/modules/ProfileModule/Components/ProfilePathway/ProfilePathway";
import React, { Suspense } from "react";

function MomentsPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <HumanieserMoments />
      </Suspense>
    </>
  );
}

export default MomentsPage;
