import React from "react";
import Image from "next/image";
import images from "@/src/assets/images";

import styles from "./FirstStepBlock.module.css";
import { useRouter } from "next/navigation";

function FirstStepBlock() {
  const router = useRouter();
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Step 1 - Find Your Way Around</h2>

      <p className={styles.subtitle}>
        Explore the five spaces in Hi Humaniser! Each one has a role in helping
        you grow and connect.
      </p>

      <div className={styles.grid}>
        <div
          className={`${styles.card} ${styles.blue}`}
          onClick={() => router.push("/personal-pathway")}
        >
          {/* Image layer */}
          <div className={styles.imageWrapper}>
            <Image
              src={images.firstStepImg}
              alt="home icon"
              fill
              className={styles.cardImage}
            />
          </div>

          {/* Text on top of image */}
          <div className={styles.cardContent}>
            <h3 className="font-bold">My Personal Pathways</h3>
            <p>
              Choose one or two pathways to focus on at a time. Each pathway
              offers micro-actions, prompts, and reflections that help you grow
              skills, shape habits, and connect performance with people in
              everyday work.
            </p>
          </div>
        </div>

        <div
          className={`${styles.card} ${styles.green}`}
          onClick={() => router.push("/team-journey")}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={images.firstStepGreen}
              alt="green-icon"
              fill
              className={styles.cardImage}
            />
          </div>
          <div className={styles.cardContent}>
            <h3>My Team Journey</h3>
            <p>
              Add your voice through quick polls, then join team rituals chosen
              by your champion. These shared practices run for a period of time,
              helping your team build trust, clarity, and stronger performance
              together.
            </p>
          </div>
        </div>

        <div
          className={`${styles.card} ${styles.pink}`}
          onClick={() => router.push("/my-dashboard")}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={images.firstStepPink}
              alt="green-icon"
              fill
              className={styles.cardImage}
            />
          </div>
          <div className={styles.cardContent}>
            <h3>My Dashboard</h3>
            <p>
              Your progress, all in one place. Track completed milestones, see
              your active micro-actions, and notice patterns in your
              reflections. You can also download a summary of your journey —
              ready to bring into your performance review or appraisal.
            </p>
          </div>
        </div>
        <div className={styles.centerRow}>
          <div className={`${styles.card} ${styles.pink}`}>
            <div className={styles.imageWrapper}>
              <Image
                src={images.firstStepPink}
                alt="green-icon"
                fill
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3>Reflection Walls</h3>
              <p>
                A shared space to capture your team’s reflections. Pin your
                thoughts anonymously, see what others notice, and give a quick
                “like” when something resonates. Over time, these walls grow
                into a living record of your team’s journey.
              </p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.blue}`}>
            <div className={styles.imageWrapper}>
              <Image
                src={images.firstStepImg}
                alt="home icon"
                fill
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3>Resources & Inspiration</h3>
              <p>
                Here’s where everything comes together: the principles,
                pathways, and tools that bring Hi Humaniser! to life. You’ll
                find curated insights and practical guidance designed to help
                you pause, reflect, and reconnect with what matters.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerWrapper}>
        {/* Left arrow (UPPER) */}
        <div className={styles.footerArrowIcon}>
          <Image src={images.arrowImg} alt="arrow" width={40} height={40} />
        </div>

        {/* Text */}
        <p className={styles.footer}>
          Every Pathway and Team Ritual in Hi Humaniser! is
          <br />
          grounded in behavioural science — and you’ll find short, clear
          explanations behind each one so you always know
          <br />
          why it works.
        </p>

        {/* Right arrow */}
        <div className={styles.footerLeftArrowIcon}>
          <Image src={images.leftArrowImg} alt="arrow" width={60} height={60} />
        </div>
      </div>
    </section>
  );
}
export default FirstStepBlock;
