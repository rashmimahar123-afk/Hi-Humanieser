import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./HoldTeamJourney.module.css";
import { useEffect, useState } from "react";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import LogoutModal from "@/src/modules/WelcomeModule/Components/LogoutModal/LogoutModal";
import { GET_MTJ_POLL_RESPONSE } from "@/src/modules/ChampionHubModule/Types/ResponseTypes";
import { MY_PROFILE_RESPONSE } from "@/src/modules/ProfileModule/Types/ResponseTypes";

type HOLD_TEAM_JOURNEY_PROPS = {
  pollData?: GET_MTJ_POLL_RESPONSE;
  profileData?: MY_PROFILE_RESPONSE;
};

function HoldTeamJourney(props: HOLD_TEAM_JOURNEY_PROPS) {
  const { pollData, profileData } = props;
  const [enter, setEnter] = useState(false);
  const { user } = useAuthValue();
  useEffect(() => {
    setEnter(true);
  }, []);
  return (
    <>
      <div
        className={`min-h-screen bg-[#4BA6A6] relative font-sans ${styles.page}
   ${styles.enterRight}
  ${enter ? styles.enterActive : ""}`}
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
            profileData={profileData}
          />
        </div>
        <div className="relative z-20  ">
          <SuccessMessage
            text="Great to see you again — ready to explore?"
            fontSize="text-[30px]"
            leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
            rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
            fontColor="#0F4F58"
            left="402px"
            bottom="4px"
            rightImgRight="390px"
            rightImgBottom="2px"
            rotate="-35deg"
          />
        </div>
        <div className="max-w-[1100px] mx-auto mt-[80px] bg-[#FBF4EF] rounded-[28px] px-12 py-10 relative ">
          {/* Heading */}
          <h1
            className="text-center text-[#244E52] text-[51px] font-bold mb-8 font-[RocaTwo]"
            style={{ fontFamily: "RocaTwo" }}
          >
            My Team Journey
          </h1>

          {/* Sub heading */}
          <p className="text-[#4ba6a6] text-[31px] font-[700] font-[RocaTwo]">
            {` Hold Tight ${profileData?.first_name || ""}, - your champion is gathering everyone’s input.`}
          </p>

          {/* Description */}
          <p className="mt-6 text-[#0F4F58] text-[22px] leading-relaxed font-[Roboto] ml-[40px]">
            Once the team’s voices are in, your champion will choose the next
            ritual. It will appear here, ready for your team to try together.
          </p>

          {/* Yellow CTA Box */}
          <div className="mt-12 bg-[#f5c882] rounded-[18px] px-12 py-4 max-w-[799px] ml-[55px] gap-6">
            {/* Left text */}
            <div>
              <p className="text-[#0f4f58] text-[22px] whitespace-nowrap font-[Aptos]">
                In the meantime, you can
              </p>
            </div>
            {/* Center CTA */}

            {/* Image-based button */}
            <div className="flex justify-center mr-[86px]">
              <button className="relative ">
                {/* Arrow strokes */}
                <Image
                  src={images.pathwayArrowRight}
                  alt="arrow"
                  width={42}
                  height={42}
                  className="absolute -top-[34px] -right-[32px]"
                />
                {/* Background Image */}
                <Image
                  src={images.teamPoly}
                  alt="Return Home"
                  width={106}
                  height={80}
                  className="object-contain"
                />

                {/* Text on top */}
                <span
                  className="
        absolute
        inset-0
        flex
        items-center
        justify-center
       text-[#F5F0EB]
       font-bold
        font-[RocaTwo]
        text-[25px]
        leading-tight
        text-center
        z-10
      "
                >
                  Return to <br /> Home
                </span>
              </button>
            </div>

            {/* Right text */}
            <div className="flex justify-end -mr-[46px]">
              <p className="text-[#0f4f58] text-[22px] max-w-[360px] font-[Aptos]">
                to explore other parts of Hi Humaniser! while your team’s ritual
                is being set.
              </p>
            </div>
          </div>

          {/* Bottom note */}
          <div className="mt-6 flex  gap-4 justify-end">
            <p className="text-[#0f4f58] text-[20px] font-[Aptos] max-w-[520px] font-[Roboto] font-[700]">
              {` So far: ${pollData?.team_members_left_to_respond} of 
              ${pollData?.team_member_count} members have responded 
              (
              
              ${pollData?.team_response_percentage}%)`}
            </p>
          </div>
        </div>
      </div>
      <LogoutModal />
    </>
  );
}
export default HoldTeamJourney;
