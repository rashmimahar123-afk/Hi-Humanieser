"use client";
import DashboardPdf from "@/src/modules/MyDashboardModule/Components/DashboardPdf/DashboardPdf";
import React, { Suspense } from "react";

function DashboardPdfPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <DashboardPdf />
      </Suspense>
    </>
  );
}

export default DashboardPdfPage;
