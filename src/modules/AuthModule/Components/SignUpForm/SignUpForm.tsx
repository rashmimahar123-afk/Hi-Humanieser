import React from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./SignUpForm.module.css";
import SignUpModal, { openSignupModal } from "../SignUpModal/SignUpModal";

function SignUpForm() {
  return (
    <>
      <div className="min-h-screen bg-[#FBE6BF]">
        <Image
          src={images.skyRec}
          alt="sky-rec"
          width={620}
          height={340}
          priority
          className="absolute top-52 right-0 z-0"
        />
        <div
          className="absolute top-77 right-21 z-0"
          style={{ fontFamily: "roboto" }}
        >
          <div className="flex items-center justify-center mb-6">
            <p className="text-[#567F55] text-[21px] leading-relaxed max-w-md text-center">
              You`ll have full access for 10 days to move at your own pace —
              discovering pathways, micro-actions, dashboards, and the rhythms
              that help teams work in healthier, more human ways.
            </p>
          </div>
          <h3 className="text-[28px] font-bold text-[#0F4F58] text-center">
            No credit card required — just curiosity.
          </h3>
        </div>
        <Image
          src={images.homeArrow}
          alt="home-arrow"
          width={70}
          height={70}
          className="absolute top-[400px] right-14 z-10 -rotate-54"
        />
        {/* HERO IMAGE SECTION */}
        <div className="relative w-full h-[380px]">
          {" "}
          <div className="relative w-[27%] h-full">
            <Image
              src={images.homeRec}
              alt="onboard-rec"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Overlay content */}
          <div className="absolute inset-0 py-4 flex justify-between">
            {/* Left */}
            <div>
              <h2
                className="text-[48px] text-[#0F4F58] font-bold"
                style={{ fontFamily: "RocaTwo-Bold", marginLeft: "76px" }}
              >
                Welcome To Hi Humaniser!
              </h2>
              <div className="relative">
                {/* TEXT (Always on top) */}
                <p
                  className="relative z-20 text-[#567F55] text-[24px] ml-[110px] font-[400]"
                  style={{ fontFamily: "RocaRwo-Bold" }}
                >
                  <span className="font-bold">
                    You’ve been invited to explore Hi Humaniser!™
                  </span>{" "}
                  — a digital experience
                  <br />
                  where people, performance and everyday work come back into
                  alignment. <br />
                  <br />
                  Step inside to see how Humanising Our Work shows up in
                  practice,
                  <br />
                  through thoughtful prompts, shared team spaces, and small
                  human
                  <br />
                  moments designed into everyday work.
                </p>

                {/* SKY SHAPE CARD */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[210px] pb-[10px] bg-[#FBE6BF]">
          {/* FORM CONTAINER */}
          <div className="w-[890px] bg-[#F5F0EB] rounded-2xl px-8 py-8 relative">
            {/* INPUT ROW */}
            <div className="space-y-6">
              {/* First Name */}
              <div className="flex items-center gap-8">
                <label
                  className="w-[160px] text-[#567F55] text-[20px]"
                  style={{ fontFamily: "Roboto" }}
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="
      w-[550px]
      h-[47px]
      bg-white
      rounded-full
      px-6
      text-[#567F55]
      outline-none
      border border-transparent
      focus:border-[#9BB89A]
    "
                />
              </div>

              {/* Last Name */}
              <div className="flex items-center gap-8">
                <label
                  className="w-[160px] text-[#567F55] text-[20px]"
                  style={{ fontFamily: "Roboto" }}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="
      w-[550px]
      h-[47px]
      bg-white
      rounded-full
      px-6
      text-[#567F55]
      outline-none
      border border-transparent
      focus:border-[#9BB89A]
    "
                />
              </div>

              {/* Company */}
              <div className="flex items-center gap-8">
                <label
                  className="w-[160px] text-[#567F55] text-[20px]"
                  style={{ fontFamily: "Roboto" }}
                >
                  Company Name
                </label>
                <input
                  type="text"
                  className="
      w-[550px]
      h-[47px]
      bg-white
      rounded-full
      px-6
      text-[#567F55]
      outline-none
      border border-transparent
      focus:border-[#9BB89A]
    "
                />
              </div>

              {/* Helper text */}
              <p
                className="text-center text-[#567F55] text-[17px] mt-6 ml-[23%]"
                style={{ fontFamily: "Roboto" }}
              >
                This helps us create a private, secure space for you and your
                organisation while you explore.
              </p>

              {/* Email */}
              <div className="flex items-center gap-8">
                <label
                  className="w-[160px] text-[#567F55] text-[20px]"
                  style={{ fontFamily: "Roboto" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  className="
      w-[550px]
      h-[47px]
      bg-white
      rounded-full
      px-6
      text-[#567F55]
      outline-none
      border border-transparent
      focus:border-[#9BB89A]
    "
                />
              </div>

              {/* Password */}
              <div className="flex items-center gap-8">
                <label
                  className="w-[160px] text-[#567F55] text-[20px]"
                  style={{ fontFamily: "Roboto" }}
                >
                  Password
                </label>
                <input
                  type="password"
                  className="
      w-[550px]
      h-[47px]
      bg-white
      rounded-full
      px-6
      text-[#567F55]
      outline-none
      border border-transparent
      focus:border-[#9BB89A]
    "
                />
              </div>

              {/* Confirm Password */}
              <div className="flex items-center gap-8">
                <label
                  className="w-[160px] text-[#567F55] text-[20px]"
                  style={{ fontFamily: "Roboto" }}
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="
      w-[550px]
      h-[47px]
      bg-white
      rounded-full
      px-6
      text-[#567F55]
      outline-none
      border border-transparent
      focus:border-[#9BB89A]
    "
                />
              </div>
            </div>

            {/* FOOTER */}
            <div className="flex justify-between items-end mt-12">
              {/* Privacy */}
              <div
                className="flex items-center gap-3 text-[#567F55] text-[17px]"
                style={{ fontFamily: "Roboto" }}
              >
                <Image
                  src={images.footerDb}
                  alt="footer-db"
                  width={24}
                  height={24}
                />

                <p>
                  Your data stays yours. Learn more in our{" "}
                  <span className="underline cursor-pointer">
                    Privacy Policy
                  </span>
                </p>
              </div>

              {/* START EXPLORING BUTTON */}
              <div className="relative">
                <div className="absolute -left-[80%] -top-[22%]">
                  <Image
                    src={images.arrowImg}
                    alt="arrow"
                    width={50}
                    height={50}
                    className={styles.arrowLeft}
                  />
                </div>

                <button
                  type="submit"
                  className="relative cursor-pointer"
                  onClick={openSignupModal}
                >
                  {/* Polygon background */}
                  <Image
                    src={images.resetPolygon}
                    alt="start-bg"
                    width={70}
                    height={90}
                    className="rotate-[-6deg]"
                  />

                  {/* Text */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center text-[#0F4F58] font-bold"
                    style={{ fontFamily: "RocaTwo" }}
                  >
                    <span className="text-[22px] leading-[1]">Start</span>
                    <span className="text-[22px] leading-[1] mt-1">
                      Exploring
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SignUpModal />;
    </>
  );
}

export default SignUpForm;
