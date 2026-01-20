import React from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./RegisterForm.module.css";
import SignUpModal, { openSignupModal } from "../SignUpModal/SignUpModal";
import Link from "next/link";

function RegisterForm() {
  return (
    <>
      <div className="min-h-screen bg-[#FBE6BF]">
        <Image
          src={images.skyRec}
          alt="sky-rec"
          width={620}
          height={340}
          priority
          className="absolute top-65 right-0 z-0"
        />
        <div
          className="absolute top-85 right-21 z-0"
          style={{ fontFamily: "roboto" }}
        >
          <div className="flex items-center justify-center mb-6">
            <p className="text-[#567F55] text-[23px] leading-relaxed max-w-[500px] text-center">
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
          className="absolute top-[450px] right-9 z-10 -rotate-54"
        />
        {/* HERO IMAGE SECTION */}
        <div className="relative w-full h-[380px]">
          {" "}
          <div className="relative ">
            <Image
              src={images.homeRec}
              alt="onboard-rec"
              width={540}
              height={640}
            />
          </div>
          {/* Overlay content */}
          <div className="absolute inset-0 py-4 flex justify-between px-8">
            {/* Left */}
            <div>
              <h2
                className="text-[48px] text-[#0F4F58] font-bold"
                style={{ fontFamily: "RocaTwo-Bold" }}
              >
                Welcome To Hi Humaniser!
              </h2>
              <div className="relative ml-[52px] mt-[20px]">
                {/* TEXT (Always on top) */}
                <p
                  className="
    relative z-20
    text-[#567F55]
    text-[27px]
    leading-[1.6]
    max-w-[1250px]
  "
                  style={{ fontFamily: "RocaTwo" }}
                >
                  <span className="font-bold">
                    You’ve been invited to explore Hi Humaniser!™
                  </span>{" "}
                  — a digital experience where people, performance and everyday
                  work come back into alignment.
                  <br />
                  <br />
                  Step inside to see how Humanising Our Work shows up in
                  practice, through thoughtful prompts, shared team spaces, and
                  small human moments designed into everyday work.
                </p>

                {/* SKY SHAPE CARD */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[280px] pb-[10px] bg-[#FBE6BF]">
          {/* FORM CONTAINER */}
          <div className="w-[1200px] bg-[#F5F0EB] rounded-2xl px-8 py-8 relative">
            {/* INPUT ROW */}
            <div className="space-y-6">
              {/* First Name */}
              <div className="flex items-center gap-8">
                <label
                  className="w-[180px] text-[#567F55] text-[22px]"
                  style={{ fontFamily: "Roboto" }}
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="
      w-[900px]
      h-[55px]
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
                  className="w-[180px] text-[#567F55] text-[22px]"
                  style={{ fontFamily: "Roboto" }}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="
      w-[900px]
      h-[55px]
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
                  className="w-[180px] text-[#567F55] text-[22px]"
                  style={{ fontFamily: "Roboto" }}
                >
                  Company Name
                </label>
                <input
                  type="text"
                  className="
      w-[900px]
      h-[55px]
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
              <div
                className="py-6 text-[#567F55] text-[20px] ml-[20%]"
                style={{ fontFamily: "Roboto" }}
              >
                This helps us create a private, secure space for you and your
                organisation while you explore.
              </div>

              {/* Email */}
              <div className="flex items-center gap-8">
                <label
                  className="w-[180px] text-[#567F55] text-[22px]"
                  style={{ fontFamily: "Roboto" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  className="
      w-[900px]
      h-[55px]
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
                  className="w-[180px] text-[#567F55] text-[22px]"
                  style={{ fontFamily: "Roboto" }}
                >
                  Password
                </label>
                <input
                  type="password"
                  className="
      w-[900px]
      h-[55px]
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
                  className="w-[180px] text-[#567F55] text-[22px]"
                  style={{ fontFamily: "Roboto" }}
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="
      w-[900px]
      h-[55px]
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
                className="flex items-center gap-3 text-[#567F55] text-[20px]"
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
                  <Link
                    href="/privacy-policy"
                    target="_blank"
                    className="underline cursor-pointer"
                  >
                    Privacy Policy
                  </Link>
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

export default RegisterForm;
