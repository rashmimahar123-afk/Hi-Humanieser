"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import ReflectionWalls from "@/src/modules/MyDashboardModule/Components/ReflectionWalls/ReflectionWalls";
import ResearchRoom from "@/src/modules/ResourceInspiration/Components/ResearchRoom/ResearchRoom";
import React, { Suspense } from "react";

function ResearchRoomPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <ResearchRoom />
      </Suspense>
    </>
  );
}

//  export default withProtectedRoute(ResearchRoomPage);

export default (ResearchRoomPage);