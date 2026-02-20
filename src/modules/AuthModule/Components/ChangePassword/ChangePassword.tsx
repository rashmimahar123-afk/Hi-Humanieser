/* eslint-disable @typescript-eslint/no-explicit-any */
import images from "@/src/assets/images";
import Image from "next/image";
import { useForm } from "react-hook-form";
import {
  getEmailValidationRules,
  getPasswordValidationRules,
} from "@/src/lib/Helpers";
import { emailMessage, passwordMessage } from "@/src/lib/ErrorMessages";
import { useState } from "react";
import Link from "next/link";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";

function ChangePassword() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showRepeat, setShowRepeat] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    console.log("Change Password Data:", data);
  };

  const handleChangePasswordSubmit = handleSubmit((values: any) => {
    console.log("Forgot Password Email:", values.email);
    // Add your forgot password API call here
    // Example:
    // forgotPasswordMutation.mutate({ email: values.email });
  });

  return (
    <div className="h-screen bg-[#e8e4df]   ">
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
          {/* Logo */}
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
          {/* Heading */}
          <div className="absolute" style={{ left: "679px", top: "89px" }}>
            <h1
              className="font-bold inline-block text-[#0F4F58]"
              style={{
                fontSize: "84.8px",
                fontFamily: "RocaTwo-Bold",
              }}
            >
              Hi Humaniser!
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
      <main>
        <div className="px-16 pt-28">
          <h1
            className="text-[44px] font-[400px] text-[#0F4F58] font-bold"
            style={{ fontFamily: "Roca-Two" }}
          >
            Change your password
          </h1>
        </div>

        {/* Center Card */}
        <div className="ml-[230px] mt-10">
          <div className="relative w-[800px] bg-white rounded-xl p-10">
            <p
              className="text-center text-[#0F4F58]  mb-8"
              style={{ fontFamily: "Aptos", fontSize: "25px" }}
            >
              Enter the email address you used for Hi Humaniser, and we’ll send
              you a secure link to reset your password
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-12 mt-12"
            >
              {/* Email Row */}
              <div className="flex items-center gap-10">
                <label className="w-[220px] text-[24px] text-gray-600 font-[Aptos]">
                  Email Address
                </label>
                <input
                  type="email"
                  value="prefilled@email.com"
                  readOnly
                  className="flex-1 bg-[#f8e1b8] rounded-xl px-6 py-4 text-[22px] outline-none"
                />
              </div>

              {/* Current Password */}
              <div className="flex items-center gap-10">
                <label className="w-[220px] text-[24px] text-gray-600 font-[Aptos]">
                  Current password
                </label>
                <input
                  type={showCurrent ? "text" : "password"}
                  {...register("currentPassword", { required: "Required" })}
                  className="flex-1 bg-[#f8e1b8] rounded-xl px-6 py-4 text-[22px] outline-none"
                />
              </div>

              {/* New Password */}
              <div className="flex items-center gap-10">
                <label className="w-[220px] text-[24px] text-gray-600 font-[Aptos] leading-tight">
                  Add your new password
                </label>
                <input
                  type={showNew ? "text" : "password"}
                  {...register("newPassword", { required: "Required" })}
                  className="flex-1 bg-[#f8e1b8] rounded-xl px-6 py-4 text-[22px] outline-none"
                />
              </div>

              {/* Repeat Password */}
              <div className="flex items-center gap-10">
                <label className="w-[220px] text-[24px] text-gray-600 font-[Aptos] leading-tight">
                  repeat your new password
                </label>
                <input
                  type={showRepeat ? "text" : "password"}
                  {...register("repeatPassword", {
                    required: "Required",
                    validate: (value) =>
                      value === watch("newPassword") ||
                      "Passwords do not match",
                  })}
                  className="flex-1 bg-[#f8e1b8] rounded-xl px-6 py-4 text-[22px] outline-none"
                />
              </div>

              {/* Button */}
              <div className="flex justify-end ">
                <PolygonButton
                  width="106px"
                  height="75px"
                  bgColor="#86c9c9"
                  radius={14}
                  clipPath={`polygon(
    15% 11%,
    81% 0%,
    100% 87%,
    3% calc(100% - 15px)
  )`}
                  childTop={11}
                >
                  <span className="text-[#0F4F58] text-[22px] font-[RocaTwo] font-bold leading-tight text-center">
                    Send Reset
                    <br />
                    <span className="whitespace-nowrap">Link</span>
                  </span>
                </PolygonButton>
              </div>
            </form>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="flex-shrink-0">
        <div className="flex items-center gap-2 mt-6 p-6">
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

export default ChangePassword;
