"use client";
import HomePage from "@/src/modules/WelcomeModule/Components/HomePage/HomePage";
import React, { Suspense } from "react";

function Home() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <HomePage />
      </Suspense>
    </>
  );
}

export default Home;
