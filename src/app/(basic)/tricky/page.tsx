"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import TeamWorkshops from "@/src/modules/ChampionHubModule/Components/TeamWorkshops/TeamWorkshops";
import ThingsTricky from "@/src/modules/ChampionHubModule/Components/ThingsTricky/ThingsTricky";
import AccountSetting from "@/src/modules/ProfileModule/Components/AccountSetting/AccountSetting";
import Profile from "@/src/modules/ProfileModule/Components/Profile";
import TeamSetting from "@/src/modules/ProfileModule/Components/TeamSetting/TeamSetting";
import React, { Suspense } from "react";

function TrickyPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <ThingsTricky />
      </Suspense>
    </>
  );
}

export default withProtectedRoute(TrickyPage);
