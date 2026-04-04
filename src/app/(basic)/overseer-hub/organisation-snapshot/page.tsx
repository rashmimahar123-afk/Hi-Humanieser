"use client";
import OrganizationSnapshot from "@/src/modules/OverseerHubModule/Components/OrganizationSnapshot/OrganizationSnapshot";
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
