"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import ReflectionWalls from "@/src/modules/MyDashboardModule/Components/ReflectionWalls/ReflectionWalls";
import React, { Suspense } from "react";

function ReflectionWallsPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <ReflectionWalls />
      </Suspense>
    </>
  );
}

export default withProtectedRoute(ReflectionWallsPage);
