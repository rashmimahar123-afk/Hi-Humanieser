"use client";
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

export default ReflectionWallsPage;
