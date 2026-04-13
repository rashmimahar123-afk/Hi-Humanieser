import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import images from "@/src/assets/images";
import HoverOption from "./HoverOptions/HoverOptions";
import AddVoiceModal, { openVoiceModal } from "../AddVoiceModal/AddVoiceModal";
import { use, useEffect, useState } from "react";
import styles from "./MyTeamJourney.module.css";
import { useRouter } from "next/navigation";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";

function MyTeamJourney() {
  const [animateText, setAnimateText] = useState(false);

  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setEnter(true);
  }, []);

  const router = useRouter();
  const { user } = useAuthValue();
  return (
    <div
      className={`min-h-screen bg-[#4BA6A6] font-sans ${styles.page} ${
        enter ? styles.enterActive : styles.enter
      }`}
    >
      <Image
        src={images.myDashGreenPoly}
        alt="dash-green-rectangle"
        width={300}
        height={230}
        className="absolute top-0 left-0 z-0"
      />

      <Image
        src={images.myDashBluePoly}
        alt="dash-rectangle"
        width={530}
        height={530}
        className="absolute top-0 right-0 z-0"
      />
      <div className="relative z-20 px-10 py-8 ">
        <UserProfileHeader
          greetingColor="#0f4f58"
          nameColor="#0F4F58"
          userInfo={user}
        />
      </div>
      <div className="relative z-20  ">
        <SuccessMessage
          text="Great to see you again — ready to explore?"
          fontSize="text-[30px]"
          leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
          rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
          fontColor="#0F4F58"
          left="403px"
          top="-14px"
          rightImgRight="390px"
          rightImgBottom="-2px"
          rotate="-35deg"
        />
      </div>
      <div className="max-w-[1100px] mx-auto mt-10 bg-[#FBF4EF] rounded-[28px] px-16 py-14 mt-[110px]">
        {/* Heading */}
        <h1
          className="text-center text-[#244E52] text-[51px] font-bold mb-10"
          style={{ fontFamily: "RocaTwo" }}
        >
          My Team Journey
        </h1>

        {/* Sub heading */}
        <h2 className="text-[#4BA6A6] text-[33px] font-bold font-[RocaTwo]">
          Welcome to Your Team Journey
        </h2>

        {/* Description */}
        <p className="mt-4 text-[#0F4F58] text-[20px] max-w-[900px] leading-relaxed ml-[40px] font-[Roboto]">
          Great teams don’t leave culture to chance — they build it, one
          practice at a time. Here’s where your team shapes habits that fuel
          trust and performance.
        </p>

        {/* Take a quick poll */}
        <div className="flex items-center gap-6 mt-10 ml-[100px]">
          <div className="relative w-[168px] h-[90px]">
            <Image
              src={images.pollImg}
              alt="poll"
              fill
              className="object-contain"
            />
            <span className="absolute inset-0 flex flex-col items-center justify-center text-[#0F4F58] font-[RocaTwo] text-[29px] leading-tight text-center font-bold">
              Take a quick
              <br />
              Poll
            </span>
          </div>

          <p className="text-[#0F4F58] text-[19px] font-[Roboto]">
            Share what you think your team should focus on next
          </p>
        </div>

        {/* Yellow Poll Box */}
        <div className="relative mt-10 bg-[#F3D28E] rounded-[18px] px-12 pt-[20px] pb-[100px] max-w-[820px] ml-[100px]">
          {/* Target icon */}
          <Image
            src={images.pollArow}
            alt="target"
            width={90}
            height={90}
            className="absolute -top-6 -right-6"
          />

          <p className="text-[#0f4f58] text-[24px] max-w-[716px] mb-8 font-[Aptos] font-[400]">
            If your team could make real progress on a few things over the next
            few weeks, which would matter most to you?
          </p>

          <div className="grid grid-cols-2 gap-y-4 text-[#0F4F58] text-[19px] ml-[65px] font-[Roboto]">
            <HoverOption label="Build Trust" />
            <HoverOption label="Foster Belonging" />
            <HoverOption label="Improve Clarity" />
            <HoverOption label="Sustain Wellbeing" />
            <HoverOption label="Strengthen Collaboration" />
          </div>

          {/* Add my voice button */}
          <div
            className="absolute bottom-4 right-12 cursor-pointer"
            onClick={openVoiceModal}
          >
            <div className="relative">
              <Image
                src={images.voicePoly}
                alt="add voice"
                width={90}
                height={90}
              />
              <span className="absolute inset-0 flex items-center justify-center text-[#0F4F58] font-[RocaTwo-Bold] text-[24px] text-center font-[RocaTwo] font-bold">
                Add my
                <br />
                Voice
              </span>
              <Image
                src={images.leftArrowImg}
                alt="left-arrow"
                width={60}
                height={60}
                className="absolute -top-[52%] -right-[52%] -rotate-[38deg]"
              />
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-4 flex items-center justify-center gap-4">
          <p className="text-[#4BA6A6] text-[27px]  text-center font-[RocaTwo] font-bold">
            Your input helps shape what the team works on next
          </p>
        </div>
      </div>

      <AddVoiceModal />
    </div>
  );
}

export default MyTeamJourney;
