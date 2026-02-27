"use client";
import ChoosePathwayPage from "@/src/modules/ChoosePathwayModule/Components/ChoosePathwayPage/ChoosePathwayPage";
import ChangeMyPathway from "@/src/modules/PersonalPathwayModule/Components/ChangeMyPathway/ChangeMyPathway";
import HelpFeedback from "@/src/modules/ProfileModule/Components/HelpFeedback/HelpFeedback";
import BehindScene from "@/src/modules/ResourceInspiration/Components/BehindScene/BehindScene";
import FromIdeas from "@/src/modules/ResourceInspiration/Components/FromIdeas/FromIdeas";
import React, { Suspense } from "react";

function HelpFeedbackPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <HelpFeedback />
      </Suspense>
    </>
  );
}

export default HelpFeedbackPage;
