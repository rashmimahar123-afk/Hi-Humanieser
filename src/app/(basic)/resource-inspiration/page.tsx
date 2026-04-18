"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import ResourceInspiration from "@/src/modules/ResourceInspiration/Components/ResourceInspiration";
import React, { Suspense } from "react";

function ResourceInspirationPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <ResourceInspiration />
      </Suspense>
    </>
  );
}

export default withProtectedRoute(ResourceInspirationPage);
