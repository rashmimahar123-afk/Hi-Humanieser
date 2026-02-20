"use client";
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

export default EditTeamPage;
