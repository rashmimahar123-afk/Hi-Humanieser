"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import AccountSetting from "@/src/modules/ProfileModule/Components/AccountSetting/AccountSetting";
import Profile from "@/src/modules/ProfileModule/Components/Profile";
import ProfileNotification from "@/src/modules/ProfileModule/Components/ProfileNotification/ProfileNotification";
import ProfilePathway from "@/src/modules/ProfileModule/Components/ProfilePathway/ProfilePathway";
import React, { Suspense } from "react";

function NotificationPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <ProfileNotification />
      </Suspense>
    </>
  );
}

export default withProtectedRoute(NotificationPage);
