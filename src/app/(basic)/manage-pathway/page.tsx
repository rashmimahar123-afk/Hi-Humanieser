"use client";
import ChoosePathwayPage from "@/src/modules/ChoosePathwayModule/Components/ChoosePathwayPage/ChoosePathwayPage";
import ChangeMyPathway from "@/src/modules/PersonalPathwayModule/Components/ChangeMyPathway/ChangeMyPathway";
import React, { Suspense } from "react";

function ChangeMyPathwayPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <ChangeMyPathway />
      </Suspense>
    </>
  );
}

export default ChangeMyPathwayPage;
