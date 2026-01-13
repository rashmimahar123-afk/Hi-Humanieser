"use client";
import PrivacyPolicy from "@/src/modules/PrivacyPolicyModule/Components/PrivacyPolicy";
import React, { Suspense } from "react";

function PrivacyPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <PrivacyPolicy />
      </Suspense>
    </>
  );
}

export default PrivacyPage;
