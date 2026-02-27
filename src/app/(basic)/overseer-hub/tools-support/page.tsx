"use client";

import ToolsSupport from "@/src/modules/OverseerHubModule/ToolsSupport/ToolsSupport";
import React, { Suspense } from "react";

function ToolsSupportPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ToolsSupport />
    </Suspense>
  );
}

export default ToolsSupportPage;
