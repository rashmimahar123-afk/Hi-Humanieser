"use client";
import DashboardPage from "@/src/modules/WelcomeModule/Components/DashboardPage/DashboardPage";
import React, { Suspense } from "react";

function Dashboard() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <DashboardPage />
      </Suspense>
    </>
  );
}

export default Dashboard;
