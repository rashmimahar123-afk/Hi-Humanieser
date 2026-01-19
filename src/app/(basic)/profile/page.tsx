"use client";
import Profile from "@/src/modules/ProfileModule/Components/Profile";
import React, { Suspense } from "react";

function ProfilePage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <Profile />
      </Suspense>
    </>
  );
}

export default ProfilePage;
