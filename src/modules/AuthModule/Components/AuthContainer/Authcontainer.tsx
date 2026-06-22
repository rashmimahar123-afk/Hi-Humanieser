import { useState } from "react";

import ForgotPassword from "../ForgotPassword/ForgotPassword";
import LoginForm from "../LoginForm/LoginForm";

function AuthContainer() {
  const [showForgotPassword, setShowForgotPassword] = useState<boolean>(false);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden overflow-y-auto">
      {/* Login Form - Slides Left when Forgot Password is shown */}
      <div
        className={`absolute left-0 right-0 top-0 min-h-full w-full transition-transform duration-500 ease-in-out ${
          showForgotPassword ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <LoginForm onForgotPassword={() => setShowForgotPassword(true)} />
      </div>

      {/* Forgot Password Form - Slides in from Right */}
      <div
        className={`absolute left-0 right-0 top-0 min-h-full w-full transition-transform duration-500 ease-in-out ${
          showForgotPassword ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ForgotPassword onBack={() => setShowForgotPassword(false)} />
      </div>
    </div>
  );
}

export default AuthContainer;
