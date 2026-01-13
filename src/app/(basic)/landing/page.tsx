"use client";
import React, { Suspense } from "react";
const LandingPage = React.lazy(
  () => import("@/src/modules/WelcomeModule/Components/LandingPage/LandingPage")
);

function WelcomePage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <LandingPage />
      </Suspense>
    </>
  );
}

export default LandingPage;
