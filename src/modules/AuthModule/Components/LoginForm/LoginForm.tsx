"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import images from "@/src/assets/images";
import Image from "next/image";
import useLoginMutation from "../../Hooks/useLoginMutation";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  getEmailValidationRules,
  getPasswordValidationRules,
} from "@/src/lib/Helpers";
import { emailMessage, passwordMessage } from "@/src/lib/ErrorMessages";
import { useEffect, useState } from "react";
import Link from "next/link";

interface LoginFormProps {
  onForgotPassword: () => void;
}

function LoginForm({ onForgotPassword }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const loginMutation = useLoginMutation();

  // Perform login logic here
  const handleLoginFrom = handleSubmit((values: any) => {
    console.log("Form Values:", values);

    loginMutation.mutate(
      {
        email_address: values.email, // ✅ FIXED
        password: values.password,
      },
      {
        onSuccess: (res: any) => {
          // Axios response
          // res.status → HTTP status
          if (res.status === 200 || res.status === 201) {
            // Remember Me logic (UI concern, backend se unrelated)
            // if (rememberMe) {
            //   localStorage.setItem("rememberedEmail", values.email);
            //   localStorage.setItem("rememberMe", "true");
            // } else {
            //   localStorage.removeItem("rememberedEmail");
            //   localStorage.removeItem("rememberMe");
            // }

            // ✅ Cookie already stored by browser
            router.push("/dashboard");
          }
        },
        onError: (error: any) => {
          console.error("Login error:", error);
        },
      },
    );
  });

  return (
    <div className="h-screen bg-[#e8e4df] flex flex-col overflow-hidden">
      <Image
        src={images.loginRectangle}
        alt="login-rectangle"
        width={630}
        height={630}
        className="absolute top-0 right-0 z-0"
      />
      {/* Header */}
      <header className="relative px-8 pt-8 flex-shrink-0">
        <div className="flex items-start">
          {/* Logo - Group 5: 307×90 at (63px, 33px) */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <Image
                src={images.humaniserLogo}
                alt="Humanising Our Workplaces Logo"
                width={80}
                className="object-contain"
                priority
              />
              <div
                style={{
                  fontSize: "28px",
                  fontFamily: "Aptos, sans-serif",
                  fontWeight: "bold",
                  lineHeight: "1",
                }}
              >
                <span className="block">Humanising our</span>
                <span className="block -mt-[2px]">Workplaces</span>
              </div>
            </div>
            <div
              style={{
                fontFamily: "Aptos, sans-serif",
                fontWeight: 400,
                marginLeft: "18px",
              }}
            >
              People & Performance Thriving Together
            </div>
          </div>
          {/* Heading - positioned at 577px from left */}
          <div className="absolute" style={{ left: "679px", top: "89px" }}>
            {/* Hi Humaniser! - 467×99 */}
            <h1
              className="font-bold inline-block text-[#0F4F58]"
              style={{
                fontSize: "84.8px",
                fontFamily: "RocaTwo-Bold",
              }}
            >
              Hi Humaniser!
              {/* TM - 33×30 at offset position */}
              <span
                className="font-bold align-top"
                style={{
                  fontSize: "32px",
                  lineHeight: "92px",
                  letterSpacing: "0%",

                  fontFamily: "RocaTwo-Bold, serif",
                }}
              >
                ™
              </span>
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main
        className="flex-1 flex items-start justify-center overflow-auto"
        style={{ paddingTop: "145px", paddingBottom: "20px" }}
      >
        <div className="w-full max-w-2xl">
          {/* Login Box */}
          <div>
            <div
              style={{
                width: "573px",
                height: "56px",
                backgroundColor: "#8BBE8A",
                borderRadius: "12px",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "32px",
              }}
            >
              <p
                style={{
                  fontFamily: "Aptos, sans-serif",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#000000",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                Please login to access to Hi Humaniser! Portal
              </p>
            </div>

            {/* Email Input */}
            <form className="w-full" onSubmit={handleLoginFrom}>
              <div className="mb-3 ml-[43px]">
                <div
                  className={`flex items-center gap-3 bg-white rounded-lg px-4 py-3 border ${
                    errors?.email ? "border-red-500" : "border-gray-200"
                  } w-[494px] box-border`}
                >
                  <Image
                    src={images.email}
                    alt="email-icon"
                    width={30}
                    height={16}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    {...register(
                      "email",
                      getEmailValidationRules(
                        emailMessage?.requiredMessage,
                        emailMessage.invalidMessage,
                      ),
                    )}
                    className="flex-1 bg-transparent outline-none border-none text-[21px] font-normal leading-relaxed text-black p-0"
                    style={{
                      fontFamily: "Aptos, sans-serif",
                    }}
                  />
                </div>
                {errors?.email && (
                  <span className="block text-red-500 text-sm mt-1.5 ml-1">
                    {errors.email?.message}
                  </span>
                )}
              </div>

              {/* Password Input */}
              <div className="mb-3 ml-[43px]">
                <div
                  className={`flex items-center gap-3 bg-white rounded-lg px-4 py-3 border ${
                    errors?.password ? "border-red-500" : "border-gray-200"
                  } w-[494px] box-border`}
                >
                  <Image
                    src={images.lock}
                    alt="lock-icon"
                    width={30}
                    height={16}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...register(
                      "password",
                      getPasswordValidationRules(
                        passwordMessage.password_required,
                        passwordMessage.password_message,
                      ),
                    )}
                    className="flex-1 bg-transparent outline-none border-none text-[21px] font-normal leading-relaxed text-black p-0 placeholder:text-gray-400"
                    style={{
                      fontFamily: "Aptos, sans-serif",
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="flex-shrink-0 focus:outline-none cursor-pointer"
                  >
                    <Image
                      src={showPassword ? images.eyeOpen : images.eyeClose}
                      alt={showPassword ? "Hide password" : "Show password"}
                      width={24}
                      height={24}
                      className="opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </button>
                </div>
                {errors?.password && (
                  <div className="text-red-500 text-sm mt-1.5 ml-1 w-[494px] leading-[1.3]">
                    {errors.password?.message}
                  </div>
                )}
              </div>

              {/* Remember Me and Forgot Password */}
              <div className="flex items-center justify-between mb-10 ml-[43px]">
                <label className="flex items-center gap-[11px] cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      // checked={rememberMe}
                      // onChange={(e) => setRememberMe(e.target.checked)}
                      className="peer sr-only"
                    />
                    <div className="w-10 h-7 bg-white border-2 border-gray-300 rounded-lg peer-checked:bg-blue-500 peer-checked:border-blue-500 transition-colors"></div>
                    <svg
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-[#E6A757] text-lg font-bold leading-none tracking-normal">
                    Remember Me
                  </span>
                </label>
                <button
                  type="button"
                  onClick={onForgotPassword}
                  className="text-[#E6A757] text-lg font-bold leading-none tracking-normal mr-[135px] hover:underline transition-all cursor-pointer"
                >
                  Forgot Password
                </button>
              </div>

              {/* Login Button */}
              <button
                className="bg-[#8BBE8A] hover:bg-[#7aad79] transition-colors underline disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  width: "573px",
                  borderRadius: "12px",
                  padding: "10px",
                  fontFamily: "Aptos, sans-serif",
                  fontWeight: 700,
                  fontSize: "32px",
                  letterSpacing: "0%",
                  color: "#000000",
                  textDecoration: "underline",
                  textDecorationStyle: "solid",
                  cursor: "pointer",
                }}
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex-shrink-0">
        <div className="relative flex justify-center">
          {/* Background Image */}
          <Image
            src={images.landRectangle}
            alt="Footer Rectangle"
            className="max-h-28 object-cover"
          />

          {/* Text Overlay - Centered with proper line breaks */}
          <div className="absolute inset-0 left-[13%] top-[12%]">
            <p
              className="font-bold"
              style={{
                fontFamily: "RocaTwo-Bold, serif",
                fontSize: "18px",
                color: "#0F4F58",
              }}
            >
              New here? Hi Humaniser!™ is part of Humanising Our Workplaces, a
              movement bringing humanity back into performance.
              <br />
              Discover more at{" "}
              <Link
                href="https://humanisingourworkplaces.com"
                target="_blank"
                className="underline hover:text-[#0F4F58] transition-colors"
              >
                HumanisingOurWorkplaces.com
              </Link>{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2 p-6">
          <Image src={images.footerDb} alt="footer-db" width={24} height={24} />
          <span
            style={{
              fontFamily: "Aptos, sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#567F55",
            }}
          >
            Your data stays yours. Learn more in our{" "}
            <Link
              href="/privacy-policy"
              target="_blank"
              className="underline hover:text-[#567F55] transition-colors"
            >
              Privacy Policy
            </Link>{" "}
          </span>
        </div>
      </footer>
    </div>
  );
}

export default LoginForm;
