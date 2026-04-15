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
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import LogoutModal from "../LogoutModal/LogoutModal";

export default function StartHere() {
  const [enter, setEnter] = useState(false);
  const { user } = useAuthValue();

  useEffect(() => {
    setEnter(true);
  }, []);

  const router = useRouter();

  return (
    <>
      <main
        className={`relative min-h-screen bg-[#FBE6BF] overflow-hidden ${styles.page} ${styles.enterRight} ${enter ? styles.enterActive : ""}`}
      >
        {/* Background Shape */}
        <Image
          src={images.homeRec}
          alt="left-bg"
          width={421}
          height={414}
          className="absolute top-0 left-0 z-0 w-[160px] sm:w-[240px] lg:w-[421px] h-auto"
          priority
        />

        {/* Header */}
        <div className="relative z-20 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <UserProfileHeader
            greetingColor="#567F55"
            nameColor="#0F4F58"
            userInfo={user}
          />
        </div>

        {/* ── HERO SECTION ── */}
        <section className="relative z-10">
          {/* ── Mobile + Tablet (< lg = < 1024px) ── */}
          {/* ── Mobile + Tablet (< lg = < 1024px) ── */}
          <div className="lg:hidden relative z-20 px-4 sm:px-6 min-h-[340px] sm:min-h-[400px] md:min-h-[440px]">
            {/* Blue polygon - positioned behind the text */}
            <div className="absolute right-0 z-0" style={{ top: "-20px" }}>
              <Image
                src={images.skyRec}
                alt="polygon"
                width={500}
                height={450}
                className="w-[70vw] sm:w-[60vw] md:w-[50vw] h-auto"
                style={{
                  minHeight: "440px",
                  objectFit: "contain",
                  position: "relative",
                  right: "-10px",
                }}
              />
            </div>

            {/* LEFT: hero text */}
            <div className="relative z-20">
              <h1
                className="font-bold text-[#0F4F58] leading-tight
                 text-[18px] sm:text-[24px] md:text-[32px]"
                style={{ fontFamily: "RocaTwo-Bold" }}
              >
                Welcome To Hi Humaniser!
              </h1>
              <p
                className="mt-2 font-bold text-[#567F55] leading-snug
                 text-[11px] sm:text-[14px] md:text-[18px]"
                style={{ fontFamily: "RocaTwo-Bold" }}
              >
                We're so glad you're here — part of a growing community
                rethinking how work feels and performs.
              </p>
            </div>

            {/* RIGHT: belief card - ENLARGED TEXT FOR TABLET ONLY */}
            <div
              className={`absolute top-40 right-2 z-30 w-[55%] 
             sm:top-28 md:top-36
             sm:w-[50%] md:w-[45%] ${styles.tabletTextIncrease}`}
            >
              <h3
                className="font-bold text-[#0F4F58] leading-snug mb-1 sm:mb-2
               text-[11px] sm:text-[14px] md:text-[18px]"
                style={{ fontFamily: "RocaTwo-Bold" }}
              >
                Hi Humaniser! is built on a simple belief:
              </h3>
              <p
                className="text-[#567F55] leading-relaxed
               text-[10px] sm:text-[12px] md:text-[15px]"
              >
                Work feels better — and delivers better — when we centre people,
                liberty and connection. This is your space to bring that to
                life, step by step.
              </p>
            </div>
          </div>

          {/* ── Desktop (lg+ = 1024px+): original absolute layout ── */}
          <div className="hidden lg:block relative min-h-[500px] px-0">
            <div className="relative z-20 ml-[76px] max-w-[1131px]">
              <h1
                className="text-[48px] font-bold text-[#0F4F58]"
                style={{ fontFamily: "RocaTwo-Bold" }}
              >
                Welcome To Hi Humaniser!
              </h1>
              <p
                className="mt-1 text-[31px] text-[#567F55] font-bold "
                style={{ fontFamily: "RocaTwo-Bold" }}
              >
                We're so glad you're here — part of a growing community
                rethinking how work feels and performs.
              </p>
            </div>

            {/* Blue polygon background wrapper - desktop */}
            <div className="absolute top-[180px] right-0 z-0">
              <Image
                src={images.skyRec}
                alt="polygon"
                width={620}
                height={340}
                className="w-auto h-auto"
              />
            </div>

            {/* Belief card - desktop */}
            <div className="absolute top-[250px] right-24 z-30 max-w-[466px]">
              <h3
                className="text-[24px] font-bold text-[#0F4F58] mb-4"
                style={{ fontFamily: "RocaTwo-Bold" }}
              >
                Hi Humaniser! is built on a simple belief:
              </h3>
              <p className="text-[21px] -ml-9 text-[#567F55] leading-relaxed">
                Work feels better — and delivers better — when we centre people,
                liberty and connection. This is your space to bring that to
                life, step by step.
              </p>
              <Image
                src={images.homeArrow}
                alt="arrow"
                width={90}
                height={90}
                className="absolute -right-14 top-4"
              />
            </div>
          </div>
        </section>

        {/* INTRO TEXT */}
        <section className="relative z-10 text-center px-4 sm:px-8 mt-8 sm:mt-12 lg:mt-28">
          <p
            className="font-bold text-[#567F55]  mx-auto
                       text-[14px] sm:text-[18px] md:text-[22px] lg:text-[30px]"
            style={{ fontFamily: "RocaTwo-Bl" }}
          >
            Here, you'll explore new ways of working through pathways, team
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
            text="Small, consistent steps matter more than big leaps. Check in often, notice what shifts and let your reflections guide you."
            fontSize="text-[18px] sm:text-[22px] md:text-[30px]"
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
        </div>
      </main>
      <LogoutModal />
    </>
  );
}
