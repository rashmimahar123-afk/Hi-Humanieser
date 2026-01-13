/* eslint-disable @typescript-eslint/no-explicit-any */
import images from "@/src/assets/images";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { getEmailValidationRules } from "@/src/lib/Helpers";
import { emailMessage } from "@/src/lib/ErrorMessages";

interface ForgotPasswordFormProps {
  onBack: () => void;
}

function ForgotPassword({ onBack }: ForgotPasswordFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const handleForgotPasswordSubmit = handleSubmit((values: any) => {
    console.log("Forgot Password Email:", values.email);
    // Add your forgot password API call here
    // Example:
    // forgotPasswordMutation.mutate({ email: values.email });
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
              Hi Humaniser!{" "}
              <span
                className="font-bold align-top"
                style={{
                  fontSize: "20.8px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  marginLeft: "6px",
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
            className="text-[44px] font-[400px] text-[#0F4F58]"
            style={{ fontFamily: "Roca-Two" }}
          >
            Reset your password
          </h1>
          <p
            className="text-[#0F4F58] mt-2 "
            style={{ fontFamily: "Roboto", fontSize: "20px" }}
          >
            Forgot your password? No worries — we’ve got you covered.
          </p>
        </div>

        {/* Center Card */}
        <div className="flex justify-center mt-20">
          <div className="relative w-[520px] bg-white rounded-xl p-8">
            <p
              className="text-center text-[#0F4F58]  mb-8"
              style={{ fontFamily: "Aptos", fontSize: "21px" }}
            >
              Enter the email address you used for Hi Humaniser,
              <br />
              and we’ll send you a secure link to reset your password
            </p>

            <form>
              {/* Email Input */}
              <div
                className={`flex items-center gap-3 bg-[#F3E6D2] rounded-lg px-4 py-3 border ${
                  errors.email ? "border-red-500" : "border-transparent"
                }`}
              >
                <Image src={images.email} alt="email" width={22} height={22} />
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register(
                    "email",
                    getEmailValidationRules(
                      emailMessage.requiredMessage,
                      emailMessage.invalidMessage
                    )
                  )}
                  className="w-full bg-transparent outline-none text-lg"
                />
              </div>

              {errors.email && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.email.message}
                </p>
              )}

              {/* Actions */}
              <div className="flex justify-between mt-6 relative">
                {/* <button
                  type="button"
                  onClick={onBack}
                  className="flex-1 rounded-xl bg-[#D9D9D9] py-3 font-bold text-lg"
                >
                  Back to login
                </button> */}
                <button
                  type="submit"
                  className="relative cursor-pointer "
                  onClick={onBack}
                >
                  {/* Polygon */}

                  {/* Text */}
                  <div style={{ fontFamily: "RocaTwo" }}>
                    <span className="text-[22px] leading-none whitespace-nowrap ">
                      Back To Login
                    </span>
                  </div>
                </button>
                <button type="submit" className="relative cursor-pointer ">
                  {/* Polygon */}
                  <Image
                    src={images.resetPolygon}
                    alt="reset-polygon"
                    width={80}
                    className="object-contain rotate-[-6deg]"
                  />

                  {/* Text */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center text-[#0F4F58] font-bold top-[20%] right-[15%]"
                    style={{ fontFamily: "RocaTwo" }}
                  >
                    <span className="text-[22px] leading-none whitespace-nowrap ">
                      Send Reset
                    </span>
                    <span className="text-[22px] leading-none mt-1">Link</span>
                  </div>
                </button>
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
            <a href="#" className="text-[#567F55] underline">
              Privacy Policy
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default ForgotPassword;
