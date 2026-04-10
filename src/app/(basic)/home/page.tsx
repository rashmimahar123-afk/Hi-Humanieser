"use client";
import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import Home from "@/src/modules/WelcomeModule/Components/Home/Home";
import React, { Suspense } from "react";

function HomePage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <Home />
      </Suspense>
    </>
  );
}

export default withProtectedRoute(HomePage);
