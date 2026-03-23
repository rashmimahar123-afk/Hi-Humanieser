"use client";

import React, { useState } from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./RegisterForm.module.css";
import SignUpModal, { openSignupModal } from "../SignUpModal/SignUpModal";
import Link from "next/link";
import { useRegistrationMutation } from "../../Hooks/useRegistrationMutation";
import { useForm } from "react-hook-form";
import {
  getEmailValidationRules,
  getPasswordValidationRules,
} from "@/src/lib/Helpers";
import { emailMessage, passwordMessage } from "@/src/lib/ErrorMessages";
import { REGISTER_ORGANISATION_REQUEST_TYPE } from "../../Types/RequestTypes";
import { REGISTER_ORGANISATION_RESPONSE_TYPE } from "../../Types/ResponseTypes";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { mutate: registerUser, isPending } = useRegistrationMutation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      first_name: "",
      last_name: "",
      company_name: "",
      email_address: "",
      password: "",
      confirm_password: "",
    },
  });

  const passwordValue = watch("password");

  const onSubmit = (data: REGISTER_ORGANISATION_REQUEST_TYPE) => {
    registerUser(
      {
        first_name: data.first_name,
        last_name: data.last_name,
        company_name: data.company_name,
        email_address: data.email_address,
        password: data.password,
      },
      {
        onSuccess: (res: REGISTER_ORGANISATION_RESPONSE_TYPE) => {
          reset();
          openSignupModal();
        },
      },
    );
  };

  return (
    <>
      <div className={styles.page}>
        {/* ── HERO IMAGE SECTION ─────────────────────────
            Original: relative w-full h-[380px]
            homeRec image is relative (not absolute),
            overlay is absolute inset-0
        ──────────────────────────────────────────────── */}
        <div className={styles.heroSection}>
          {/* homeRec — original is just <div className="relative"><Image .../></div> */}
          <div className={styles.heroImageWrap}>
            <Image
              src={images.homeRec}
              alt="onboard-rec"
              width={540}
              height={640}
              className={styles.heroImage}
            />
          </div>

          {/* Overlay — absolute inset-0, flex justify-between px-8 py-4 */}
          <div className={styles.heroOverlay}>
            <div className={styles.heroLeft}>
              <h2 className={styles.heroHeading}>Welcome To Hi Humaniser!</h2>
              <div className={styles.heroSubtitle}>
                <p className={styles.heroSubtitleText}>
                  <span className={styles.heroSubtitleBold}>
                    You&apos;ve been invited to explore Hi Humaniser!™
                  </span>{" "}
                  — a digital experience where people, performance and everyday
                  work come back into alignment.
                </p>
                {/* Second paragraph — visible desktop, hidden mobile */}
                <p
                  className={`${styles.heroSubtitleText} ${styles.heroSubtitleSecond}`}
                >
                  Step inside to see how Humanising Our Work shows up in
                  practice, through thoughtful prompts, shared team spaces, and
                  small human moments designed into everyday work.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── SKY REC SECTION ────────────────────────────
            Original: relative w-full
            skyRec image: absolute top-65 right-0 z-0 (w=620 h=340)
            text: absolute top-[95px] right-[60px] z-0
            arrow: absolute top-[190px] right-9 z-10 -rotate-54
            — desktop only, hidden on mobile
        ──────────────────────────────────────────────── */}
        <div className={styles.skySection}>
          <Image
            src={images.skyRec}
            alt="sky-rec"
            width={620}
            height={340}
            priority
            className={styles.skyImage}
          />
          <div className={styles.skyTextOverlay}>
            <div className={styles.skyTextInner}>
              <p className={styles.skyBodyText}>
                You&apos;ll have full access for 10 days to move at your own
                pace. Discover pathways, micro-actions, dashboards, and the
                rhythms that help teams work in healthier, more human ways.
              </p>
            </div>
            <h3 className={styles.skyTitle}>
              No credit card required — just curiosity.
            </h3>
          </div>
          <Image
            src={images.homeArrow}
            alt="home-arrow"
            width={70}
            height={70}
            className={styles.homeArrow}
          />
        </div>

        {/* ── SKY REC — mobile only ──────────────────── */}
        <div className={styles.skyBlockMobile}>
          <Image
            src={images.skyRec}
            alt="sky-rec"
            fill
            style={{ objectFit: "cover", borderRadius: 12 }}
          />
          <div className={styles.skyBlockMobileInner}>
            <p className={styles.skyBodyTextMobile}>
              You&apos;ll have full access for 10 days to move at your own pace.
              Discover pathways, micro-actions, dashboards, and the rhythms that
              help teams work in healthier, more human ways.
            </p>
            <h3 className={styles.skyTitleMobile}>
              No credit card required — just curiosity.
            </h3>
          </div>
        </div>

        {/* ── FORM SECTION ───────────────────────────────
            Original: flex justify-center mt-[400px] pb-[10px]
        ──────────────────────────────────────────────── */}
        <div className={styles.formSection}>
          <div className={styles.formCard}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.fieldsWrapper}>
                {/* First Name */}
                <div>
                  <div className={styles.fieldRow}>
                    <label className={styles.fieldLabel}>First Name</label>
                    <input
                      type="text"
                      {...register("first_name", {
                        required: "First name is required",
                      })}
                      className={`${styles.fieldInput} ${errors.first_name ? styles.fieldInputError : ""}`}
                    />
                  </div>
                  {errors.first_name && (
                    <p className={styles.errorText}>
                      {errors.first_name.message}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <div className={styles.fieldRow}>
                    <label className={styles.fieldLabel}>Last Name</label>
                    <input
                      type="text"
                      {...register("last_name", {
                        required: "Last name is required",
                      })}
                      className={`${styles.fieldInput} ${errors.last_name ? styles.fieldInputError : ""}`}
                    />
                  </div>
                  {errors.last_name && (
                    <p className={styles.errorText}>
                      {errors.last_name.message}
                    </p>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <div className={styles.fieldRow}>
                    <label className={styles.fieldLabel}>Company Name</label>
                    <input
                      type="text"
                      {...register("company_name", {
                        required: "Company name is required",
                      })}
                      className={`${styles.fieldInput} ${errors.company_name ? styles.fieldInputError : ""}`}
                    />
                  </div>
                  {errors.company_name && (
                    <p className={styles.errorText}>
                      {errors.company_name.message}
                    </p>
                  )}
                </div>

                {/* Helper text — original: py-6 text-[20px] ml-[20%] */}
                <div className={styles.helperText}>
                  This helps us create a private, secure space for you and your
                  organisation while you explore.
                </div>

                {/* Email */}
                <div>
                  <div className={styles.fieldRow}>
                    <label className={styles.fieldLabel}>Email</label>
                    <input
                      type="email"
                      {...register(
                        "email_address",
                        getEmailValidationRules(
                          emailMessage.requiredMessage,
                          emailMessage.invalidMessage,
                        ),
                      )}
                      className={`${styles.fieldInput} ${errors.email_address ? styles.fieldInputError : ""}`}
                    />
                  </div>
                  {errors.email_address && (
                    <p className={styles.errorText}>
                      {errors.email_address.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <div className={styles.fieldRow}>
                    <label className={styles.fieldLabel}>Password</label>
                    <div className={styles.passwordWrapper}>
                      <input
                        type={showPassword ? "text" : "password"}
                        {...register(
                          "password",
                          getPasswordValidationRules(
                            passwordMessage.password_required,
                            passwordMessage.password_message,
                          ),
                        )}
                        className={`${styles.fieldInput} ${errors.password ? styles.fieldInputError : ""}`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className={styles.eyeBtn}
                      >
                        <Image
                          src={showPassword ? images.eyeOpen : images.eyeClose}
                          alt="toggle password"
                          width={24}
                          height={24}
                        />
                      </button>
                    </div>
                  </div>
                  {errors.password && (
                    <p className={styles.errorText}>
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <div className={styles.fieldRow}>
                    <label className={styles.fieldLabel}>
                      Confirm Password
                    </label>
                    <div className={styles.passwordWrapper}>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        {...register("confirm_password", {
                          required: "Confirm password is required",
                          validate: (value) =>
                            value === passwordValue || "Passwords do not match",
                        })}
                        className={`${styles.fieldInput} ${errors.confirm_password ? styles.fieldInputError : ""}`}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className={styles.eyeBtn}
                      >
                        <Image
                          src={
                            showConfirmPassword
                              ? images.eyeOpen
                              : images.eyeClose
                          }
                          alt="toggle password"
                          width={24}
                          height={24}
                        />
                      </button>
                    </div>
                  </div>
                  {errors.confirm_password && (
                    <p className={styles.errorText}>
                      {errors.confirm_password.message}
                    </p>
                  )}
                </div>
              </div>
              {/* end fieldsWrapper */}

              {/* FOOTER — original: flex justify-between items-end mt-12 */}
              <div className={styles.formFooter}>
                <div className={styles.privacyRow}>
                  <Image
                    src={images.footerDb}
                    alt="footer-db"
                    width={24}
                    height={24}
                    style={{ flexShrink: 0 }}
                  />
                  <p>
                    Your data stays yours. Learn more in our{" "}
                    <Link
                      href="/privacy-policy"
                      target="_blank"
                      className={styles.privacyLink}
                    >
                      Privacy Policy
                    </Link>
                  </p>
                </div>

                <div className={styles.polygonWrapper}>
                  <div className={styles.arrowLeft}>
                    <Image
                      src={images.arrowImg}
                      alt="arrow"
                      width={50}
                      height={50}
                    />
                  </div>
                  <button
                    type="submit"
                    className={styles.polygonBtn}
                    disabled={isPending}
                  >
                    <Image
                      src={images.resetPolygon}
                      alt="start-bg"
                      width={70}
                      height={90}
                      className={styles.polygonBtnImg}
                    />
                    <div className={styles.polygonBtnText}>
                      <span>Start</span>
                      <span>Exploring</span>
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <SignUpModal />
    </>
  );
}

export default RegisterForm;
