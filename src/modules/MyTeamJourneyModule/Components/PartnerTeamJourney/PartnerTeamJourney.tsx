import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./PartnerTeamJourney.module.css";
import { useEffect, useState } from "react";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import LogoutModal from "@/src/modules/WelcomeModule/Components/LogoutModal/LogoutModal";
import { useRouter } from "next/navigation";
import { useGetMppMessagesQuery } from "@/src/modules/WelcomeModule/Hooks/useGetMppMessagesQuery";

function PartnerTeamJourney() {
  const [enter, setEnter] = useState(false);
  const router = useRouter();
  const { user } = useAuthValue();
  useEffect(() => {
    setEnter(true);
  }, []);
  const { data: randomMessage, isLoading } = useGetMppMessagesQuery();
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
          />
        </div>
        <div className="relative z-20  ">
          <SuccessMessage
            text={randomMessage || ""}
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
          <p className="text-[#0F4F58] text-[30px] font-[400] font-[RocaTwo]">
            This space is designed for team members to experience the focus
            areas, rituals and reflections chosen for their team.
          </p>

          {/* Description */}
          <p className="mt-6 text-[#0F4F58] text-[22px] leading-relaxed font-[Roboto] ml-[40px]">
            As an Partner, you don’t take part in the journey directly. Your
            role is to observe patterns across teams and understand how work is
            evolving.
          </p>

          {/* Yellow CTA Box */}
          <div className="mt-12 bg-[#f5c882] rounded-[18px] px-12 py-4 max-w-[830px] ml-[100px] gap-6">
            {/* Left text */}
            <div>
              <p className="text-[#0f4f58] text-[22px] whitespace-nowrap font-[Aptos]">
                Head to
              </p>
            </div>
            {/* Center CTA */}

            {/* Image-based button */}
            <div className="flex ml-[100px]">
              <div className="mr-[86px]">
                <button
                  className="relative "
                  onClick={() => router.push("/overseer-hub")}
                >
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
                    Partner Hub
                  </span>
                </button>
              </div>
              <div>
                <p className="text-[#0f4f58] text-[22px] max-w-[400px] font-[Aptos]">
                  To explore team insights, engagement trends and progress
                  across your organisation
                </p>
              </div>
            </div>
            {/* Right text */}
          </div>

          {/* Bottom note */}
          <div className="mt-14 flex  gap-4 justify-end">
            <Image
              src={images.milestoneBulb}
              alt="milestone-bulb"
              width={60}
              height={60}
            />
            <p className="text-[#0f4f58] text-[20px] font-[Aptos] max-w-[520px] font-[Roboto]">
              Team rituals are designed to work within and across teams, even
              when not everyone is using Hi Humaniser!
            </p>
          </div>
        </div>
      </div>
      <LogoutModal />
    </>
  );
}
export default PartnerTeamJourney;
