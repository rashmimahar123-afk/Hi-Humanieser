"use client";

import ChangePassword from "@/src/modules/AuthModule/Components/ChangePassword/ChangePassword";
import RegisterForm from "@/src/modules/AuthModule/Components/RegisterForm/RegisterForm";
import ResetPassword from "@/src/modules/AuthModule/Components/ResetPassword/ResetPassword";
import React, { Suspense } from "react";

function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPassword />
    </Suspense>
  );
}

export default ResetPasswordPage;
