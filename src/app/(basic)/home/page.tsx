"use client";
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

export default HomePage;
