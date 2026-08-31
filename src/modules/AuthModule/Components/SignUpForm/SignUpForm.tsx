"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./SignUpForm.module.css";
import CustomDropdown from "@/src/components/CustomDropdown/CustomDropdown";
import SignUpModal, { openSignupModal } from "../SignUpModal/SignUpModal";
import { useRouter, useSearchParams } from "next/navigation";
import { getPasswordValidationRules } from "@/src/lib/Helpers";
import { passwordMessage } from "@/src/lib/ErrorMessages";
import { useUserOnboardingMutation } from "../../Hooks/useUserOnboardingMutation";
import { USER_ONBOARDING_REQUEST_TYPES } from "../../Types/RequestTypes";
import { useForm } from "react-hook-form";
import Link from "next/link";
import SnackbarHandler from "@/src/lib/SnackbarHandler";

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{
    password: string;
    confirmPassword: string;
    gender: string;
    birthYear: string;
  }>();
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const { mutate: userOnboarding, isPending } = useUserOnboardingMutation();
  const router = useRouter();
  useEffect(() => {
    const firstName = searchParams.get("firstname") || "";
    const lastName = searchParams.get("lastname") || "";
    const email = searchParams.get("email") || "";

    setFormData({
      firstName: firstName.replace(/^"|"$/g, ""),
      lastName: lastName.replace(/^"|"$/g, ""),
      email,
    });
  }, [searchParams]);

  const onSubmit = (data: {
    password: string;
    confirmPassword: string;
    gender: string;
    birthYear: string;
  }) => {
    const token = searchParams.get("token") || "";

    const payload: USER_ONBOARDING_REQUEST_TYPES = {
      email: formData.email,
      verification_token: token,
      new_password: data.password,
      ...(data.gender && {
        gender: data.gender,
      }),
      ...(data.birthYear && {
        birth_year: Number(data.birthYear),
      }),
    };

    userOnboarding(payload, {
      onSuccess: (res) => {
        // openSignupModal();
        SnackbarHandler.successToast(res.message);
        router.push("/login");
      },
      onError: (err) => {
        SnackbarHandler.errorToast(err.message);
      },
    });
  };
  return (
    <>
      <div className={styles.page}>
        {/* Decorative polygon — absolute top-right */}
        <Image
          src={images.greenBluePolygon}
          alt="register-rectangle"
          width={630}
          height={830}
          className={styles.bgPolygon}
        />

        {/* ════════ HERO SECTION ════════ */}
        <div className={styles.heroSection}>
          <div className={styles.heroOverlay}>
            <div>
              <h2 className={styles.heroHeading}>Welcome To Hi Humaniser!</h2>
              <div className={styles.heroSubtitle}>
                <p className={styles.heroSubtitleText}>
                  We&apos;re thrilled to have you here. This is where
                  connection, care and performance come together.
                  <br />
                  Tell us a little about you to get started.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ════════ FORM SECTION ════════ */}
        <div className={styles.formSection}>
          <div className={styles.formCard}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.fieldsWrapper}>
                {/* First Name */}
                <div className={styles.fieldRow}>
                  <label className={styles.fieldLabel}>First Name</label>
                  <input
                    type="text"
                    className={styles.fieldInput}
                    value={formData.firstName}
                    readOnly
                  />
                </div>

                {/* Last Name */}
                <div className={styles.fieldRow}>
                  <label className={styles.fieldLabel}>Last Name</label>
                  <input
                    type="text"
                    className={styles.fieldInput}
                    value={formData.lastName}
                    readOnly
                  />
                </div>

                {/* Email */}
                <div className={styles.fieldRow}>
                  <label className={styles.fieldLabel}>Email</label>
                  <input
                    type="email"
                    className={styles.fieldInput}
                    value={formData.email}
                    readOnly
                  />
                </div>

                {/* Password */}
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
                        {...register("confirmPassword", {
                          required: "Confirm password is required",
                          validate: (value) =>
                            value === watch("password") ||
                            "Passwords do not match",
                        })}
                        className={`${styles.fieldInput} ${
                          errors.confirmPassword ? styles.fieldInputError : ""
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        className={styles.eyeBtn}
                      >
                        <Image
                          src={
                            showConfirmPassword
                              ? images.eyeOpen
                              : images.eyeClose
                          }
                          alt="toggle confirm password"
                          width={24}
                          height={24}
                        />
                      </button>
                    </div>
                  </div>
                  {errors.confirmPassword && (
                    <span className={styles.errorText}>
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>

                {/* Why we ask + optional fields */}
                <div className={styles.whySection}>
                  <p className={styles.whyText}>
                    <strong>Why we ask for this</strong>
                    <br />
                    These details are optional. They help us understand patterns
                    and experiences across different groups, so we can design
                    more inclusive and human workplaces. This information is
                    never used to assess individuals.
                  </p>

                  <div className={styles.dropdownWrapper}>
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

                  {/* Birth Year */}
                  <div className={styles.birthYearRow}>
                    <label className={styles.fieldLabel}>
                      Birth Year (optional)
                    </label>
                    <input type="text" className={styles.fieldInput} />
                  </div>
                </div>
              </div>

              {/* end fieldsWrapper */}

              {/* ── Footer ── */}
              <div className={styles.formFooter}>
                {/* Privacy */}
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
                      style={{ textDecoration: "underline", color: "inherit" }}
                    >
                      Privacy Policy
                    </Link>
                  </p>
                </div>

                {/* Get Started button */}
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
                      <span>Get</span>
                      <span>Started</span>
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

export default SignUpForm;
