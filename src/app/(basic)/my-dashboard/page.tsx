"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
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

export default withProtectedRoute(MyDashboardPage);


