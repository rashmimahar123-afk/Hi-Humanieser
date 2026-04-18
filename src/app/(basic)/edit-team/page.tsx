"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import EditTeam from "@/src/modules/TeamSettingModule/Components/EditTeam/EditTeam";
import React, { Suspense } from "react";

function EditTeamPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <EditTeam />
      </Suspense>
    </>
  );
}

export default withProtectedRoute(EditTeamPage);
