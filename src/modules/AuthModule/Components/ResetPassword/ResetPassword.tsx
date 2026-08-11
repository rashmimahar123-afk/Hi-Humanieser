"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import images from "@/src/assets/images";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import { useSearchParams } from "next/navigation";
import { useResetPasswordMutation } from "../../Hooks/useResetPasswordMutation";
import { getPasswordValidationRules } from "@/src/lib/Helpers";
import { passwordMessage } from "@/src/lib/ErrorMessages";

function ResetPassword() {
  const [showNew, setShowNew] = useState(false);
  const [showRepeat, setShowRepeat] = useState(false);

  const searchParams = useSearchParams();

  const email = searchParams.get("email") || "";
  const token = searchParams.get("token") || "";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const { mutate: resetPasswordMutation, isPending } =
    useResetPasswordMutation();

  const onSubmit = (data: any) => {
    resetPasswordMutation({
      email: email || data.email,
      token: token || "",
      new_password: data.newPassword,
    });
  };

  return (
    <div className="min-h-screen bg-[#e8e4df] flex flex-col">
      <Image
        src={images.loginRectangle}
        alt="login-rectangle"
        width={630}
        height={630}
        className="absolute top-0 right-0 z-0 w-[180px] sm:w-[360px] md:w-[500px] lg:w-[630px] h-auto"
      />

      {/* Header */}
      <header className="relative z-10 px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 flex-shrink-0">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          {/* Logo */}
          <Link href="https://humanisingourworkplaces.com" target="_blank">
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
                    fontFamily: "Aptos, sans-serif",
                    fontWeight: "bold",
                    lineHeight: "1",
                  }}
                  className="text-xl sm:text-2xl lg:text-[28px]"
                >
                  <span className="block">Humanising our</span>
                  <span className="block -mt-[2px]">Workplaces</span>
                </div>
              </div>
              <p
                style={{ fontFamily: "Aptos, sans-serif", fontWeight: 400 }}
                className="ml-[18px] text-sm sm:text-base mt-1"
              >
                Human Habits. Clear Decision. Reliable Execution.
              </p>
            </div>
          </Link>
          {/* Hi Humaniser heading */}
          <div className="sm:text-right">
            <h1
              className="font-bold mt-0 sm:mt-6 lg:mt-[89px] text-[#0F4F58] leading-none"
              style={{
                fontFamily: "RocaTwo-Bold",
                fontSize: "clamp(32px, 6vw, 84.8px)",
              }}
            >
              Hi Humaniser!
              <span
                className="font-bold align-top"
                style={{
                  fontFamily: "RocaTwo-Bold, serif",
                  fontSize: "clamp(14px, 2vw, 32px)",
                  lineHeight: "clamp(40px, 7vw, 92px)",
                }}
              >
                ™
              </span>
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 px-4 sm:px-6 lg:px-16 pt-6 sm:pt-10 lg:pt-28 pb-4">
        <h1
          className="text-2xl sm:text-3xl lg:text-[44px] font-bold text-[#0F4F58]"
          style={{ fontFamily: "Roca-Two" }}
        >
          Reset your password{" "}
        </h1>

        {/* Center Card */}
        <div className="w-full lg:ml-[230px] mt-6 lg:mt-10">
          <div className="relative w-full lg:w-[800px] bg-white rounded-xl p-5 sm:p-8 lg:p-10">
            <p
              className="text-center text-[#0F4F58] mb-6 lg:mb-8"
              style={{
                fontFamily: "Aptos",
                fontSize: "clamp(15px, 3vw, 25px)",
              }}
            >
              Enter the email address you used for Hi Humaniser, and we'll send
              you a secure link to reset your password
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 lg:space-y-16 mt-6 lg:mt-12"
            >
              {/* Email Row */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 lg:gap-10">
                <label className="w-full sm:w-[180px] lg:w-[220px] text-base lg:text-[24px] text-gray-600 font-[Aptos] flex-shrink-0">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue={email}
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className="w-full sm:flex-1 bg-[#f8e1b8] rounded-xl px-4 lg:px-6 py-3 lg:py-4 text-base lg:text-[22px] outline-none"
                />
              </div>
              <div className="flex flex-col gap-8">
                {/* New Password */}
                <div className="flex flex-col gap-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 lg:gap-10 ">
                    <label className="w-full sm:w-[180px] lg:w-[220px] text-base lg:text-[24px] text-gray-600 font-[Aptos] leading-tight flex-shrink-0">
                      Add your new password
                    </label>
                    <div className="relative w-full sm:flex-1">
                      <input
                        type={showNew ? "text" : "password"}
                        {...register(
                          "newPassword",
                          getPasswordValidationRules(
                            passwordMessage.password_required,
                            passwordMessage.password_message,
                          ),
                        )}
                        className="w-full bg-[#f8e1b8] rounded-xl px-4 lg:px-6 py-3 lg:py-4 pr-12 lg:pr-14 text-base lg:text-[22px] outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNew((v) => !v)}
                        aria-label={showNew ? "Hide password" : "Show password"}
                        style={{
                          position: "absolute",
                          right: "14px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          outline: "none",
                          cursor: "pointer",
                          background: "none",
                          border: "none",
                          padding: 0,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          src={showNew ? images.eyeOpen : images.eyeClose}
                          alt={showNew ? "Hide password" : "Show password"}
                          width={24}
                          height={24}
                          style={{ opacity: 0.6 }}
                        />
                      </button>
                    </div>
                  </div>
                  {errors.newPassword && (
                    <p className="sm:ml-[220px] lg:ml-[260px] text-red-500 text-sm lg:text-base font-[Aptos]">
                      {errors.newPassword.message as string}
                    </p>
                  )}
                </div>

                {/* Repeat Password */}
                <div className="flex flex-col gap-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 lg:gap-10">
                    <label className="w-full sm:w-[180px] lg:w-[220px] text-base lg:text-[24px] text-gray-600 font-[Aptos] leading-tight flex-shrink-0">
                      Repeat your new password
                    </label>
                    <div className="relative w-full sm:flex-1">
                      <input
                        type={showRepeat ? "text" : "password"}
                        {...register("repeatPassword", {
                          required: "Required",
                          validate: (value) =>
                            value === watch("newPassword") ||
                            "Passwords do not match",
                        })}
                        className="w-full bg-[#f8e1b8] rounded-xl px-4 lg:px-6 py-3 lg:py-4 pr-12 lg:pr-14 text-base lg:text-[22px] outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setShowRepeat((v) => !v)}
                        aria-label={
                          showRepeat ? "Hide password" : "Show password"
                        }
                        style={{
                          position: "absolute",
                          right: "14px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          outline: "none",
                          cursor: "pointer",
                          background: "none",
                          border: "none",
                          padding: 0,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          src={showRepeat ? images.eyeOpen : images.eyeClose}
                          alt={showRepeat ? "Hide password" : "Show password"}
                          width={24}
                          height={24}
                          style={{ opacity: 0.6 }}
                        />
                      </button>
                    </div>
                  </div>
                  {errors.repeatPassword && (
                    <p className="sm:ml-[220px] lg:ml-[260px] text-red-500 text-sm lg:text-base font-[Aptos]">
                      {errors.repeatPassword.message as string}
                    </p>
                  )}
                </div>
              </div>
              {/* Button */}
              <div
                className="flex justify-end cursor-pointer"
                onClick={handleSubmit(onSubmit)}
              >
                <PolygonButton
                  width="106px"
                  height="75px"
                  bgColor="#86c9c9"
                  radius={14}
                  clipPath={`polygon(15% 11%, 81% 0%, 100% 87%, 3% calc(100% - 15px))`}
                  childTop={11}
                >
                  <span className="text-[#0F4F58] text-[22px] font-[RocaTwo] font-bold leading-[100%] text-center">
                    Reset
                    <br />
                    <span className="whitespace-nowrap">Password</span>
                  </span>
                </PolygonButton>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 flex-shrink-0">
        <div className="flex items-center gap-2 mt-4 lg:mt-6 p-4 lg:p-6">
          <Image
            src={images.footerDb}
            alt="footer-db"
            width={24}
            height={24}
            className="flex-shrink-0"
          />
          <span
            style={{
              fontFamily: "Aptos, sans-serif",
              fontWeight: 400,
              color: "#567F55",
              fontSize: "clamp(13px, 2vw, 20px)",
            }}
          >
            Your data stays yours. Learn more in our{" "}
            <Link
              href="/privacy-policy"
              target="_blank"
              className="underline hover:text-[#567F55] transition-colors"
            >
              Privacy Policy
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default ResetPassword;
