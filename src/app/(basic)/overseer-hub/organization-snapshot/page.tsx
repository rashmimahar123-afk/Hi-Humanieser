"use client";
import OrganizationSnapshot from "@/src/modules/OverseerHubModule/OrganizationSnapshot/OrganizationSnapshot";
import AccountSetting from "@/src/modules/ProfileModule/Components/AccountSetting/AccountSetting";
import ChampionHub from "@/src/modules/ProfileModule/Components/ChampionHub/ChampionHub";
import Profile from "@/src/modules/ProfileModule/Components/Profile";
import ProfilePathway from "@/src/modules/ProfileModule/Components/ProfilePathway/ProfilePathway";
import React, { Suspense } from "react";

function OrganizationSnapshotPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <OrganizationSnapshot />
      </Suspense>
    </>
  );
}

export default OrganizationSnapshotPage;
