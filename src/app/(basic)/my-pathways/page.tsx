"use client";
import AccountSetting from "@/src/modules/ProfileModule/Components/AccountSetting/AccountSetting";
import Profile from "@/src/modules/ProfileModule/Components/Profile";
import ProfilePathway from "@/src/modules/ProfileModule/Components/ProfilePathway/ProfilePathway";
import React, { Suspense } from "react";

function MyPathwayPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <ProfilePathway />
      </Suspense>
    </>
  );
}

export default MyPathwayPage;
