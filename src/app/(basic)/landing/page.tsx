"use client";
import LandingPage from "@/src/modules/WelcomeModule/Components/LandingPage/LandingPage";
import React, { Suspense } from "react";

function WelcomePage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <LandingPage />
      </Suspense>
    </>
  );
}

export default WelcomePage;
