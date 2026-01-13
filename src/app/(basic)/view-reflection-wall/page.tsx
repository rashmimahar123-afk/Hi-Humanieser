"use client";
import ViewAllReflectionWall from "@/src/modules/MyDashboardModule/Components/ViewAllReflectionWall/ViewAllReflectionWall";
import React, { Suspense } from "react";

function ViewReflectionWallPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <ViewAllReflectionWall />
      </Suspense>
    </>
  );
}

export default ViewReflectionWallPage;
