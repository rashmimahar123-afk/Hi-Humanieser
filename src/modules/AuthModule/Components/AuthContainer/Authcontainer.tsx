import { useState } from "react";

import LoginForm from "../LoginForm/LoginForm";
import ForgotPassword from "../ForgotPassword/ForgotPassword";

function AuthContainer() {
  const [showForgotPassword, setShowForgotPassword] = useState<boolean>(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Login Form - Slides Left when Forgot Password is shown */}
      <div
        className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
          showForgotPassword ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <LoginForm onForgotPassword={() => setShowForgotPassword(true)} />
      </div>

      {/* Forgot Password Form - Slides in from Right */}
      <div
        className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
          showForgotPassword ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ForgotPassword onBack={() => setShowForgotPassword(false)} />
      </div>
    </div>
  );
}

export default AuthContainer;
