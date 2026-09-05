"use client";

import AuthContainer from "@/src/modules/AuthModule/Components/AuthContainer/Authcontainer";
import RegisterForm from "@/src/modules/AuthModule/Components/RegisterForm/RegisterForm";
import React, { Suspense } from "react";

function LoginPage() {
  return (
    <>
      <Suspense fallback={null}>
        <AuthContainer />
      </Suspense>
    </>
  );
}

export default LoginPage;
