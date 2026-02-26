"use client";
import TeamWorkshops from "@/src/modules/ChampionHubModule/Components/TeamWorkshops/TeamWorkshops";
import AccountSetting from "@/src/modules/ProfileModule/Components/AccountSetting/AccountSetting";
import Profile from "@/src/modules/ProfileModule/Components/Profile";
import TeamSetting from "@/src/modules/ProfileModule/Components/TeamSetting/TeamSetting";
import React, { Suspense } from "react";

function TeamWorkshopsPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <TeamWorkshops />
      </Suspense>
    </>
  );
}

export default TeamWorkshopsPage;
