import React from "react";
import Image from "next/image";
import images from "@/src/assets/images";

import styles from "./FirstStepBlock.module.css";
import { useRouter } from "next/navigation";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";

function FirstStepBlock() {
  const router = useRouter();
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Step 1 - Find Your Way Around</h2>

      <p className={styles.subtitle}>
        Explore the five spaces in Hi Humaniser! Each one has a role in helping
        you grow and connect.
      </p>

      {/* Single grid for all 5 cards */}
      <div className={styles.grid}>
        {/* Card 1 */}
        <div
          className={`${styles.card} ${styles.blue}`}
          onClick={() => router.push("/personal-pathway")}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={images.firstStepImg}
              alt="home icon"
              fill
              className={styles.cardImage}
            />
          </div>
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

        {/* Card 2 */}
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

        {/* Card 3 */}
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
              reflections. You can also download a summary of your journey,
              ready to bring into your performance review or appraisal.
            </p>
          </div>
        </div>

        {/* Card 4 - Reflection Walls */}
        <div
          className={`${styles.card} ${styles.pink}`}
          onClick={() => router.push("/reflection-walls")}
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
            <h3>Reflection Walls</h3>
            <p>
              A shared space to capture your team's reflections. Pin your
              thoughts anonymously, see what others notice, and give a quick
              "like" when something resonates. Over time, these walls grow into
              a living record of your team's journey.
            </p>
          </div>
        </div>

        {/* Card 5 - Resources & Inspiration */}
        <div
          className={`${styles.card} ${styles.blue}`}
          onClick={() => router.push("/resource-inspiration")}
        >
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
              Here's where everything comes together: the principles, pathways,
              and tools that bring Hi Humaniser! to life. You'll find curated
              insights and practical guidance designed to help you pause,
              reflect, and reconnect with what matters.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.footerWrapper}>
        {/* Desktop Success Message - visible only on desktop */}
        <div className={`mt-10 relative ${styles.desktopOnly}`}>
          <SuccessMessage
            text="Every Pathway and Team Ritual in Hi Humaniser! is grounded in behavioural science — and you'll find short, clear explanations behind each one so you always know why it works."
            fontSize="text-[22px]"
            leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
            rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
            fontColor="#567f55"
            left="274px"
            bottom="-1px"
            rightImgRight="267px"
            rightImgBottom="-5px"
            rotate="-35deg"
            maxWidth="800px"
          />
        </div>

        {/* Mobile/Tablet layout - visible only on tablet and mobile */}
        <div className={styles.mobileFooter}>
          <div className={styles.topArrows}>
            <div className={styles.mobileLeftArrow}>
              <Image src={images.arrowImg} alt="arrow" width={55} height={55} />
            </div>
            <div className={styles.mobileRightArrow}>
              <Image
                src={images.leftArrowImg}
                alt="arrow"
                width={55}
                height={55}
              />
            </div>
          </div>
          <p className={styles.mobileFooterText}>
            Every Pathway and Team Ritual in Hi Humaniser! is grounded in
            behavioural science — and you'll find short, clear explanations
            behind each one so you always know why it works.
          </p>
        </div>
      </div>
    </section>
  );
}
export default FirstStepBlock;
