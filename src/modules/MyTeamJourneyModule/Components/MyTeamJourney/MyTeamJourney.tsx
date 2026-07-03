import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import images from "@/src/assets/images";
import HoverOption from "./HoverOptions/HoverOptions";
import AddVoiceModal, { openVoiceModal } from "../AddVoiceModal/AddVoiceModal";
import { useEffect, useState } from "react";
import styles from "./MyTeamJourney.module.css";
import { useRouter } from "next/navigation";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import LogoutModal from "@/src/modules/WelcomeModule/Components/LogoutModal/LogoutModal";
import { useSubmitPollResponseMutation } from "../../Hooks/useSubmitPollResponseMutation";
import SnackbarHandler from "@/src/lib/SnackbarHandler";

type FocusLabel =
  | "Build Trust"
  | "Improve Clarity"
  | "Strengthen Collaboration"
  | "Foster Belonging"
  | "Sustain Wellbeing"
  | "Shape the System";

function MyTeamJourney() {
  const [animateText, setAnimateText] = useState(false);
  const [enter, setEnter] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<FocusLabel[]>([]);
  useEffect(() => {
    setEnter(true);
  }, []);

  const router = useRouter();
  const { user } = useAuthValue();

  const handleOptionClick = (label: any) => {
    setSelectedOptions((prev: any) => {
      if (prev.includes(label)) {
        return prev.filter((item: any) => item !== label);
      }
      if (prev.length >= 2) return prev;
      return [...prev, label];
    });
  };

  const { mutate: submitPoll, isPending } = useSubmitPollResponseMutation();

  const handleSubmitVoice = () => {
    if (selectedOptions.length === 0) {
      SnackbarHandler.errorToast("Please select at least one option");
      return;
    }

    submitPoll(
      { options: selectedOptions },
      {
        onSuccess: (res) => {
          openVoiceModal(); // ✅ open success modal
        },
        onError: (error: any) => {
          const message =
            error?.response?.data?.detail ||
            error?.response?.data?.message ||
            "Something went wrong";

          SnackbarHandler.errorToast(message);
        },
      },
    );
  };
  return (
    <div
      className={`relative min-h-screen w-full overflow-x-hidden bg-[#4BA6A6] font-sans ${styles.page} ${
        enter ? styles.enterActive : styles.enter
      }`}
    >
      {/* Background decorative polygons — overflow:hidden on parent clips them cleanly */}
      <Image
        src={images.myDashGreenPoly}
        alt="dash-green-rectangle"
        width={300}
        height={230}
        className="absolute top-0 left-0 z-0 w-[100px] sm:w-[160px] md:w-[220px] lg:w-[300px] h-auto pointer-events-none"
      />
      <Image
        src={images.myDashBluePoly}
        alt="dash-rectangle"
        width={530}
        height={530}
        className="absolute top-0 right-0 z-0 w-[160px] sm:w-[260px] md:w-[380px] lg:w-[530px] h-auto pointer-events-none"
      />

      {/* Header — full width, centred content */}
      <div className="relative z-20 w-full px-4 sm:px-8 md:px-12 lg:px-16 py-5 sm:py-8">
        <UserProfileHeader
          greetingColor="#0f4f58"
          nameColor="#0F4F58"
          userInfo={user}
        />
      </div>

      {/* Success message — centred, visible from sm up */}
      <div className="relative z-20 w-full flex justify-center hidden sm:flex">
        <SuccessMessage
          text="Great to see you again — ready to explore?"
          fontSize="text-[16px] sm:text-[20px] md:text-[26px] lg:text-[30px]"
          leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
          rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
          fontColor="#0F4F58"
          left="auto"
          top="-14px"
          rightImgRight="auto"
          rightImgBottom="-2px"
          rotate="-35deg"
        />
      </div>

      {/* Centring wrapper — provides safe horizontal padding on all screen sizes */}
      <div className="relative z-10 w-full px-3 sm:px-6 md:px-10 mt-6 sm:mt-10 md:mt-[110px] mb-10">
        {/* Main card */}
        <div className="w-full max-w-[1100px] mx-auto bg-[#FBF4EF] rounded-[16px] sm:rounded-[22px] md:rounded-[28px] px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-10 md:py-14">
          {/* Page heading */}
          <h1
            className="text-center text-[#244E52] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[51px] font-bold mb-6 sm:mb-10"
            style={{ fontFamily: "RocaTwo" }}
          >
            My Team Journey
          </h1>

          {/* Sub heading */}
          <h2 className="text-[#4BA6A6] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[33px] font-bold font-[RocaTwo]">
            Welcome to Your Team Journey
          </h2>

          {/* Description */}
          <p className="mt-3 sm:mt-4 text-[#0F4F58] text-[15px] sm:text-[17px] md:text-[19px] lg:text-[20px] max-w-[900px] leading-relaxed ml-0 sm:ml-[20px] md:ml-[40px] font-[Roboto]">
            Great teams don't leave culture to chance — they build it, one
            practice at a time. Here's where your team shapes habits that fuel
            trust and performance.
          </p>

          {/* Take a quick poll row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-6 sm:mt-10 ml-0 sm:ml-[40px] md:ml-[100px]">
            <div className="relative w-[120px] h-[64px] sm:w-[145px] sm:h-[78px] md:w-[168px] md:h-[90px] shrink-0">
              <Image
                src={images.pollImg}
                alt="poll"
                fill
                className="object-contain"
              />
              <span className="absolute inset-0 flex flex-col items-center justify-center text-[#0F4F58] font-[RocaTwo] text-[18px] sm:text-[22px] md:text-[26px] lg:text-[29px] leading-tight text-center font-bold">
                Take a quick
                <br />
                Poll
              </span>
            </div>

            <p className="text-[#0F4F58] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[19px] font-[Roboto]">
              Share what you think your team should focus on next
            </p>
          </div>

          {/* Yellow Poll Box */}
          <div className="relative mt-6 sm:mt-10 bg-[#F3D28E] rounded-[14px] sm:rounded-[18px] px-4 sm:px-8 md:px-12 pt-[18px] sm:pt-[20px] pb-[90px] sm:pb-[100px] max-w-[820px] ml-0 sm:ml-[40px] md:ml-[100px]">
            {/* Target icon — repositioned for mobile */}
            <Image
              src={images.pollArow}
              alt="target"
              width={90}
              height={90}
              className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 w-[40px] sm:w-[55px] md:w-[75px] lg:w-[90px] h-auto"
            />

            <p className="text-[#0f4f58] text-[15px] sm:text-[18px] md:text-[21px] lg:text-[24px] max-w-[716px] mb-6 sm:mb-8 font-[Aptos] font-[400]">
              If your team could make real progress on a few things over the
              next few weeks, which would matter most to you? (please choose 2)
            </p>

            {/* Poll options grid — 1 col on mobile, 2 on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 text-[#0F4F58] text-[15px] sm:text-[17px] md:text-[19px] ml-0 sm:ml-[30px] md:ml-[65px] font-[Roboto]">
              <HoverOption
                label="Build Trust"
                isSelected={selectedOptions.includes("Build Trust")}
                onClick={handleOptionClick}
              />
              <HoverOption
                label="Foster Belonging"
                isSelected={selectedOptions.includes("Foster Belonging")}
                onClick={handleOptionClick}
              />
              <HoverOption
                label="Improve Clarity"
                isSelected={selectedOptions.includes("Improve Clarity")}
                onClick={handleOptionClick}
              />
              <HoverOption
                label="Sustain Wellbeing"
                isSelected={selectedOptions.includes("Sustain Wellbeing")}
                onClick={handleOptionClick}
              />
              <HoverOption
                label="Strengthen Collaboration"
                isSelected={selectedOptions.includes(
                  "Strengthen Collaboration",
                )}
                onClick={handleOptionClick}
              />
            </div>

            {/* Add my voice button */}
            <div
              className="absolute bottom-4 right-4 sm:right-12 cursor-pointer"
              onClick={!isPending ? handleSubmitVoice : undefined}
            >
              <div className="relative">
                <Image
                  src={images.voicePoly}
                  alt="add voice"
                  width={90}
                  height={90}
                  className="w-[64px] sm:w-[78px] md:w-[90px] h-auto"
                />
                <span className="absolute inset-0 flex items-center justify-center text-[#0F4F58] font-[RocaTwo-Bold] text-[16px] sm:text-[20px] md:text-[24px] text-center font-[RocaTwo] font-bold">
                  Add My
                  <br />
                  Voice
                </span>
                <Image
                  src={images.leftArrowImg}
                  alt="left-arrow"
                  width={60}
                  height={60}
                  className="absolute -top-[52%] -right-[52%] -rotate-[38deg] w-[40px] sm:w-[50px] md:w-[60px] h-auto sm:block"
                />
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div className="mt-4 flex items-center justify-center gap-4 px-2">
            <p className="text-[#4BA6A6] text-[18px] sm:text-[22px] md:text-[25px] lg:text-[27px] text-center font-[RocaTwo] font-bold">
              Your input helps shape what the team works on next
            </p>
          </div>
        </div>
        {/* end main card */}
      </div>
      {/* end centring wrapper */}

      <AddVoiceModal />
      <LogoutModal />
    </div>
  );
}

export default MyTeamJourney;
