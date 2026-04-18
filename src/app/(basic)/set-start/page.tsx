"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import React, { Suspense } from "react";
const SetStartPage = React.lazy(
  () =>
    import("@/src/modules/StartModule/Components/SetStartPage/SetStartPage"),
);

function SetStart() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <SetStartPage />
      </Suspense>
    </>
  );
}

export default withProtectedRoute(SetStart);
