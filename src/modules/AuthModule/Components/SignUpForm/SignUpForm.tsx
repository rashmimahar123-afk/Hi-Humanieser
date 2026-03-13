"use client";

import React from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./SignUpForm.module.css";
import CustomDropdown from "@/src/components/CustomDropdown/CustomDropdown";
import SignUpModal, { openSignupModal } from "../SignUpModal/SignUpModal";

function SignUpForm() {
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
            <div className={styles.fieldsWrapper}>
              {/* First Name */}
              <div className={styles.fieldRow}>
                <label className={styles.fieldLabel}>First Name</label>
                <input type="text" className={styles.fieldInput} />
              </div>

              {/* Last Name */}
              <div className={styles.fieldRow}>
                <label className={styles.fieldLabel}>Last Name</label>
                <input type="text" className={styles.fieldInput} />
              </div>

              {/* Email */}
              <div className={styles.fieldRow}>
                <label className={styles.fieldLabel}>Email</label>
                <input type="email" className={styles.fieldInput} />
              </div>

              {/* Password */}
              <div className={styles.fieldRow}>
                <label className={styles.fieldLabel}>Password</label>
                <input type="password" className={styles.fieldInput} />
              </div>

              {/* Confirm Password */}
              <div className={styles.fieldRow}>
                <label className={styles.fieldLabel}>Confirm Password</label>
                <input type="password" className={styles.fieldInput} />
              </div>

              {/* Why we ask + optional fields */}
              <div className={styles.whySection}>
                <p className={styles.whyText}>
                  <strong>Why we ask for this</strong>
                  <br />
                  These details are optional. They help us understand patterns
                  and experiences across different groups, so we can design more
                  inclusive and human workplaces. This information is never used
                  to assess individuals.
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
                  <span className={styles.privacyLink}>Privacy Policy</span>
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
                  type="button"
                  className={styles.polygonBtn}
                  onClick={openSignupModal}
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
          </div>
        </div>
      </div>
      <SignUpModal />
    </>
  );
}

export default SignUpForm;
