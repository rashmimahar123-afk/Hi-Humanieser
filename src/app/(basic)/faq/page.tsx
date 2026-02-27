"use client";
import Faq from "@/src/modules/FAQModule/Components/Faq";
import React, { Suspense } from "react";

function FaqPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <Faq />
      </Suspense>
    </>
  );
}

export default FaqPage;
