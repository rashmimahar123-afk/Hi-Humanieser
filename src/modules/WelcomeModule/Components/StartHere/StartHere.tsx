import React, { useEffect, useState } from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import PathwayComponent from "@/src/modules/OnboardingHomePage/Components/PathwayComponent/PathwayComponent";
import FirstStepBlock from "@/src/modules/OnboardingHomePage/Components/FirstStepBlock/FirstStepBlock";
import SecondStepBlock from "@/src/modules/OnboardingHomePage/Components/SecondStepBlock/SecondStepBlock";
import ThirdStepBlock from "@/src/modules/OnboardingHomePage/Components/ThirdStepBlock/ThirdStepBlock";
import PathwaySecondComponent from "@/src/modules/OnboardingHomePage/Components/PathwaySecondComponent/PathwaySecondComponent";
import PathwayThirdComponent from "@/src/modules/OnboardingHomePage/Components/PathwayThirdComponent/PathwayThirdComponent";
import styles from "./StartHere.module.css";
import { useRouter } from "next/navigation";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";

export default function StartHere() {
  const [animateText, setAnimateText] = useState(false);

  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setEnter(true);
  }, []);

  const router = useRouter();

  return (
    <main
      className={`relative min-h-screen bg-[#FBE6BF] overflow-hidden ${styles.page}
 ${styles.enterRight}
  ${enter ? styles.enterActive : ""}`}
    >
      {/* Background Shapes */}
      <Image
        src={images.homeRec}
        alt="left-bg"
        width={421}
        height={414}
        className="absolute top-0 left-0 z-0"
        priority
      />

      {/* Header */}

      <div className="relative z-10 px-8 py-6">
        <UserProfileHeader greetingColor="#567F55" nameColor="#0F4F58" />
      </div>

      {/* HERO SECTION */}
      {/* HERO SECTION */}
      <section className="relative z-10 min-h-[320px]">
        {/* Blue polygon */}
        <Image
          src={images.skyRec}
          alt="polygon"
          width={620}
          height={340}
          className="absolute top-10 right-0 z-0"
        />

        {/* Left text (OVER polygon also) */}
        <div className="relative z-20 ml-[76px] max-w-[1131px]">
          <h1
            className="text-[48px] font-bold text-[#0F4F58]"
            style={{ fontFamily: "RocaTwo-Bold" }}
          >
            Welcome To Hi Humaniser!
          </h1>

          <p
            className="mt-1 text-[31px] text-[#567F55] font-bold"
            style={{ fontFamily: "RocaTwo-Bold" }}
          >
            We’re so glad you’re here — part of a growing community rethinking
            how work feels and performs.
          </p>
        </div>

        {/* Belief Card on polygon */}
        <div className="absolute top-40 right-24 z-30 max-w-[466px]">
          <h3 className="text-[24px] font-bold text-[#0F4F58] mb-4">
            Hi Humaniser! is built on a simple belief:
          </h3>

          <p className="text-[21px] -ml-9 text-[#567F55] leading-relaxed">
            Work feels better — and delivers better — when we centre people,
            clarity and connection. This is your space to bring that to life,
            step by step.
          </p>

          <Image
            src={images.homeArrow}
            alt="arrow"
            width={90}
            height={90}
            className="absolute -right-14 top-4"
          />
        </div>
      </section>

      {/* INTRO TEXT */}
      <section className="relative z-10 mt-32 text-center px-8">
        <p
          className="text-[30px] font-bold text-[#567F55]"
          style={{ fontFamily: "RocaTwo-Bl" }}
        >
          Here, you’ll explore new ways of working through pathways, team
          rituals and reflections. These first steps will help you feel ready,
          supported and set up to begin.
        </p>
      </section>

      {/* PATHWAYS */}
      <PathwayComponent />
      <FirstStepBlock />

      <PathwaySecondComponent />
      <SecondStepBlock />

      <PathwayThirdComponent />
      <ThirdStepBlock />

      {/* FOOTER BANNER */}
      <div className={`relative flex justify-center ${styles.footerFrame}`}>
        <SuccessMessage
          text=" Small, consistent steps matter more than big leaps. Check in often,
          notice what shifts and let your reflections guide you.
"
          fontSize="text-[30px]"
          leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
          rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
          fontColor="#0F4F58"
          left="295px"
          bottom="50px"
          rightImgRight="285px"
          rotate="-35deg"
          rightImgBottom="45px"
          maxWidth="800px"
        />
        {/* <Image src={images.arrowImg} alt="" width={40} height={40} />
        <p className="mx-6 text-[#0F4F58] font-bold text-center">
          Small, consistent steps matter more than big leaps. Check in often,
          notice what shifts and let your reflections guide you.
        </p>
        <Image src={images.rightArrow} alt="" width={40} height={40} /> */}
      </div>
    </main>
  );
}
