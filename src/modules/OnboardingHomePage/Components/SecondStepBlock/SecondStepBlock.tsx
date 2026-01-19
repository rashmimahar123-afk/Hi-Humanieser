import React from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./SecondStepBlock.module.css";
import { useRouter } from "next/navigation";

function SecondStepBlock() {
  const router = useRouter();
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Step 2 - Choose Your Starting Point</h2>

      <p className={styles.subtitle}>
        Pick a Personal Pathway to practice and add your voice to your Team
        Journey. Your leader will choose a ritual based on your team’s input —
        so both journeys move forward together.
      </p>

      <div className={styles.cardRow}>
        {/* LEFT CARD */}
        <div className={styles.cardWrapper}>
          <Image
            src={images.leftArrowImg}
            alt="arrow"
            width={60}
            height={60}
            className={styles.arrowLeft}
          />

          {/* CARD */}
          <div
            className={styles.card}
            onClick={() => router.push("personal-pathway")}
          >
            <Image
              src={images.secondStepImg}
              alt="card shape"
              fill
              className={styles.cardBg}
            />

            {/* TEXT ON TOP */}
            <div className={styles.cardText}>
              My Personal
              <br />
              Pathways
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div
          className={styles.cardWrapper}
          onClick={() => router.push("my-team")}
        >
          <Image
            src={images.arrowImg}
            alt="arrow"
            width={40}
            height={40}
            className={styles.arrowRight}
          />

          <div className={styles.card}>
            <Image
              src={images.secondStepGreen}
              alt="card shape"
              fill
              className={styles.cardBg}
            />

            <div className={styles.cardText}>
              My Team
              <br />
              Journey
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SecondStepBlock;
