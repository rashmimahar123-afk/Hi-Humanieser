"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import AccountSetting from "@/src/modules/ProfileModule/Components/AccountSetting/AccountSetting";
import OrganisationSetting from "@/src/modules/ProfileModule/Components/OrganisationSetting/OrganisationSetting";
import React, { Suspense } from "react";

function OrganisationSettingPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <OrganisationSetting />
      </Suspense>
    </>
  );
}

export default withProtectedRoute(OrganisationSettingPage);
