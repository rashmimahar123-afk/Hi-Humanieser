"use client";
import MyDashboard from "@/src/modules/MyDashboardModule/Components/MyDashboard";
import React, { Suspense } from "react";

function MyDashboardPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <MyDashboard />
      </Suspense>
    </>
  );
}

export default MyDashboardPage;
