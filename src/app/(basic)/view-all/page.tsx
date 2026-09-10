"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import AllDashboardData from "@/src/modules/MyDashboardModule/Components/AllDashboardData/AllDashboardData";
import React, { Suspense } from "react";

function AllDashboardDataPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <AllDashboardData />
      </Suspense>
    </>
  );
}

export default withProtectedRoute(AllDashboardDataPage);
