"use client";

import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import PreviewQuestions from "@/src/modules/OverseerHubModule/Components/PreviewQuestions/PreviewQuestions";
import ToolsSupport from "@/src/modules/OverseerHubModule/Components/ToolsSupport/ToolsSupport";
import React, { Suspense } from "react";

function PreviewQuestionsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PreviewQuestions />
    </Suspense>
  );
}

export default withProtectedRoute(PreviewQuestionsPage);
