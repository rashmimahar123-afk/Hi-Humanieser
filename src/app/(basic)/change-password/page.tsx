"use client";

import withProtectedRoute from "@/src/components/HOCs/withProtectedRoute";
import ChangePassword from "@/src/modules/AuthModule/Components/ChangePassword/ChangePassword";
import RegisterForm from "@/src/modules/AuthModule/Components/RegisterForm/RegisterForm";
import React from "react";

function ChangePasswordPage() {
  return (
    <>
      <ChangePassword />
    </>
  );
}

export default withProtectedRoute(ChangePasswordPage);
