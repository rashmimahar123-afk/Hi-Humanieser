"use client";
import OrganisationDiagnostic from "@/src/modules/OverseerHubModule/Components/OrganisationDiagnostic/OrganisationDiagnostic";
import React, { Suspense } from "react";

function OrganisationDiagnosticPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <OrganisationDiagnostic />
      </Suspense>
    </>
  );
}

export default OrganisationDiagnosticPage;
