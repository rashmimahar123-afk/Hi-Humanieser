import React from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./SignUpForm.module.css";
import CustomDropdown from "@/src/components/CustomDropdown/CustomDropdown";
import SignUpModal, { openSignupModal } from "../SignUpModal/SignUpModal";

function SignUpForm() {
  const genderOptions = [
    "Male",
    "Female",
    "Non-binary",
    "Prefer not to say",
    "Self-describe",
  ];

  return (
    <>
      <div className="min-h-screen bg-[#FBE6BF]">
        <Image
          src={images.greenBluePolygon}
          alt="register-rectangle"
          width={630}
          height={630}
          className="absolute top-0 right-0 z-0"
        />
        {/* HERO IMAGE SECTION */}
        <div>
          <div className="relative w-full h-[330px]">
            {/* Overlay content */}
            <div className="absolute inset-0 py-4 px-8 flex justify-between">
              {/* Left */}
              <div>
                <h2
                  className="text-[48px] text-[#0F4F58] font-bold"
                  style={{ fontFamily: "RocaTwo-Bold" }}
                >
                  Welcome To Hi Humaniser!
                </h2>
                <div className="relative mt-[20px]">
                  {/* TEXT (Always on top) */}
                  <p
                    className="relative z-20 text-[#567F55] text-[30px] ml-[45px]  font-[400]"
                    style={{ fontFamily: "RocaTwo-Bold" }}
                  >
                    We’re thrilled to have you here. This is where connection,
                    care and performance come together.
                    <br />
                    Tell us a little about you to get started.
                  </p>

                  {/* SKY SHAPE CARD */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-[#FBE6BF]">
          {/* FORM CONTAINER */}
          <div className="w-[1200px] bg-[#F5F0EB] rounded-2xl px-8 py-8 relative">
            {/* INPUT ROW */}
            <div className="space-y-6">
              {/* First Name */}
              <div className="flex items-center gap-8">
                <label
                  className="w-[200px] text-[#567F55] text-[22px]"
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
                  className="w-[200px] text-[#567F55] text-[22px]"
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

              {/* Helper text */}

              {/* Email */}
              <div className="flex items-center gap-8">
                <label
                  className="w-[200px] text-[#567F55] text-[22px]"
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
                  className="w-[200px] text-[#567F55] text-[22px]"
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
                  className="w-[200px] text-[#567F55] text-[22px]"
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
              <div className="mt-[80px]">
                <div>
                  <p
                    className=" text-[#567F55] text-[20px]"
                    style={{ fontFamily: "Roboto" }}
                  >
                    <span className="font-bold">Why we ask for this</span>
                    <br />
                    These details are optional. They help us understand patterns
                    and experiences across different groups, so we can design
                    more inclusive and human workplaces. This information is
                    never used to assess individuals.
                  </p>
                </div>
                <div className="mt-8">
                  <CustomDropdown
                    label="Gender (optional)"
                    options={[
                      "Male",
                      "Female",
                      "Non-binary",
                      "Prefer not to say",
                      "Self-describe",
                    ]}
                    placeholder="Male / Female / Non-binary / Prefer not to say / Self-describe"
                    textColor="#567F55"
                    placeholderColor="#9BB89A"
                  />
                </div>
                {/* Confirm Password */}
                <div className="flex items-center gap-8 mt-6">
                  <label
                    className="w-[200px] text-[#567F55] text-[22px]"
                    style={{ fontFamily: "Roboto" }}
                  >
                    Birth Year (optional){" "}
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
                    <span className="text-[22px] leading-[1]">Get</span>
                    <span className="text-[22px] leading-[1] mt-1">
                      Started
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SignUpModal />
    </>
  );
}

export default SignUpForm;
