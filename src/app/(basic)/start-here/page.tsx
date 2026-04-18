"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import StartHere from "@/src/modules/WelcomeModule/Components/StartHere/StartHere";
import HomePage from "@/src/modules/WelcomeModule/Components/StartHere/StartHere";
import React, { Suspense } from "react";

function StartHerePage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <StartHere />
      </Suspense>
    </>
  );
}

export default withProtectedRoute(StartHerePage);
