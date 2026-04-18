"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import AccountSetting from "@/src/modules/ProfileModule/Components/AccountSetting/AccountSetting";
import Profile from "@/src/modules/ProfileModule/Components/Profile";
import React, { Suspense } from "react";

function AccountSettingPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <AccountSetting />
      </Suspense>
    </>
  );
}

export default withProtectedRoute(AccountSettingPage);
