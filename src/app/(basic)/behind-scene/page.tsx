"use client";
import BehindScene from "@/src/modules/ResourceInspiration/Components/BehindScene/BehindScene";
import React, { Suspense } from "react";

function BehindScenePage() {
  return (
    <Suspense fallback={"Loading..."}>
      <BehindScene />
    </Suspense>
  );
}

export default withProtectedRoute(BehindScenePage);
// export default BehindScenePage;
