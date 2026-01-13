"use client";
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

export default MySelf;
