"use client";

import SignUpForm from "@/src/modules/AuthModule/Components/SignUpForm/SignUpForm";
import React, { Suspense } from "react";

function SignUpPage() {
  return (
    <>
        <Suspense fallback={null}>

      <SignUpForm />
      </Suspense>
    </>
  );
}

export default SignUpPage;
