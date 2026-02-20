"use client";
import ChoosePathwayPage from "@/src/modules/ChoosePathwayModule/Components/ChoosePathwayPage/ChoosePathwayPage";
import Amplifier from "@/src/modules/PersonalPathwayModule/Components/Amplifier/Amplifier";
import ChangeMyPathway from "@/src/modules/PersonalPathwayModule/Components/ChangeMyPathway/ChangeMyPathway";
import Conversation from "@/src/modules/PersonalPathwayModule/Components/Conversation/Conversation";
import React, { Suspense } from "react";

function ConversationPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <Conversation />
      </Suspense>
    </>
  );
}

export default ConversationPage;
