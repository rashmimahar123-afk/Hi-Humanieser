"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import MySelfPage from "@/src/modules/ChoosePathwayModule/Components/MySelfPage/MySelfPage";
import React, { Suspense } from "react";

function MySelf() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <MySelfPage />
      </Suspense>
    </>
  );
}

export default withProtectedRoute(MySelf);
