"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import AccountSetting from "@/src/modules/ProfileModule/Components/AccountSetting/AccountSetting";
import Profile from "@/src/modules/ProfileModule/Components/Profile";
import TeamSetting from "@/src/modules/ProfileModule/Components/TeamSetting/TeamSetting";
import React, { Suspense } from "react";

function TeamSettingPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <TeamSetting />
      </Suspense>
    </>
  );
}

export default withProtectedRoute(TeamSettingPage);
