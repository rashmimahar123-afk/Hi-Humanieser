"use client";
import EditMembers from "@/src/modules/TeamSettingModule/Components/EditMembers/EditMembers";
import EditTeam from "@/src/modules/TeamSettingModule/Components/EditTeam/EditTeam";
import React, { Suspense } from "react";

function EditTeamPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <EditMembers />
      </Suspense>
    </>
  );
}

export default EditTeamPage;
