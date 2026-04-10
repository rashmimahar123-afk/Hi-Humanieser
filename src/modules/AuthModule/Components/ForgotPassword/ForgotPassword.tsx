/* eslint-disable @typescript-eslint/no-explicit-any */
import images from "@/src/assets/images";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { getEmailValidationRules } from "@/src/lib/Helpers";
import { emailMessage } from "@/src/lib/ErrorMessages";
import Link from "next/link";
import { useForgotPasswordMutation } from "../../Hooks/useForgotPasswordMutation";

interface ForgotPasswordFormProps {
  onBack: () => void;
}

function ForgotPassword({ onBack }: ForgotPasswordFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const forgotPasswordMutation = useForgotPasswordMutation();

  const handleForgotPasswordSubmit = handleSubmit((values: any) => {
    console.log("Forgot Password Email:", values.email);
    forgotPasswordMutation.mutate(
      {
        email: values.email,
      },
      {
        onSuccess: () => {
          reset({ email: "" });
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
                Human Habits. Clear Decision. Reliable Execution.
              </div>
            </div>
          </Link>
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
            Forgot your password
          </h1>
          <p
            className="text-[#0F4F58] mt-2 "
            style={{
              fontFamily: "Roboto",
              fontSize: "24px",
              lineHeight: "10px",
            }}
          >
            No worries — we’ve got you covered.
          </p>
        </div>

        {/* Center Card */}
        <div className="ml-[230px] mt-20">
          <div className="relative w-[800px] bg-white rounded-xl p-10">
            <p
              className="text-center text-[#0F4F58]  mb-8"
              style={{ fontFamily: "Aptos", fontSize: "25px" }}
            >
              Enter the email address you used for Hi Humaniser, and we’ll send
              you a secure link to reset your password
            </p>

            <form onSubmit={handleForgotPasswordSubmit}>
              {" "}
              {/* Email Input */}
              <div
                className={`flex items-center gap-3 bg-[#F3E6D2] rounded-lg px-4 py-4 border ${
                  errors.email ? "border-red-500" : "border-transparent"
                }`}
              >
                <Image src={images.email} alt="email" width={32} height={32} />
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register(
                    "email",
                    getEmailValidationRules(
                      emailMessage.requiredMessage,
                      emailMessage.invalidMessage,
                    ),
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
                  type="button"
                  onClick={onBack}
                  className="
    h-[44px]
    px-8
    rounded-[12px]
    bg-[#E9B97A]
    flex
    items-center
    justify-center
    cursor-pointer
  
    transition
    mt-[50px]
  "
                >
                  <span
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#737373",
                      lineHeight: "100%",
                    }}
                  >
                    Back to sign up
                  </span>
                </button>

                <button
                  type="submit"
                  className="relative cursor-pointer"
                  disabled={forgotPasswordMutation.isPending}
                >
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
                    <span className="text-[22px] leading-none whitespace-nowrap">
                      {forgotPasswordMutation.isPending
                        ? "Sending..."
                        : "Send Reset"}
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

export default ForgotPassword;
