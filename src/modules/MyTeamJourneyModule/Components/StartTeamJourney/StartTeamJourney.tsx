import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./StartTeamJourney.module.css";

function StartTeamJourney() {
  return (
    <>
      <div className="min-h-screen bg-[#4BA6A6] p-6 font-sans">
        <UserProfileHeader />
        <SuccessMessage
          text="Great to see you again — ready to explore?"
          fontSize="text-[21px]"
          leftImg={{
            src: images.arrowImg,
            width: 40,
            height: 40,
          }}
          rightImg={{
            src: images.leftArrowImg,
            width: 60,
            height: 60,
          }}
        />
        <div className="max-w-[1100px] mx-auto mt-10 bg-[#FBF4EF] rounded-[28px] px-16 py-14 relative">
          {/* Heading */}
          <h1
            className="text-center text-[#244E52] text-[51px] font-bold mb-8 font-[RocaTwo]"
            style={{ fontFamily: "RocaTwo" }}
          >
            My Team Journey
          </h1>

          {/* Sub heading */}
          <p className="text-[#0F4F58] text-[30px] font-[400] max-w-[900px] font-[RocaTwo]">
            Hold Tight Maria, your champion is setting up a team poll to gather
            everyone’s input.
          </p>

          {/* Description */}
          <p className="mt-6 text-[#0F4F58] text-[21px] max-w-[900px] leading-relaxed font-[Roboto] ml-[40px]">
            Once the team’s voices are in, your leader will choose the next
            ritual. It will appear here, ready for your team to try together
            over the next 4 weeks.
          </p>

          {/* Yellow CTA Box */}
          <div className="mt-12 bg-[#F3D28E] rounded-[18px] px-12 py-4 max-w-[799px] ml-[55px] gap-6">
            {/* Left text */}
            <div>
              <p className="text-[#737373] text-[21px] whitespace-nowrap font-[Aptos]">
                In the meantime, you can
              </p>
            </div>
            {/* Center CTA */}

            {/* Image-based button */}
            <div className="flex justify-center">
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
            <div className="flex justify-end">
              <p className="text-[#737373] text-[21px] max-w-[341px] font-[Aptos]">
                to explore other parts of Hi Humaniser! while your team’s ritual
                is being set.
              </p>
            </div>
          </div>

          {/* Bottom note */}
          <div className="mt-14 flex items-center gap-4 justify-end">
            <Image
              src={images.milestoneBulb}
              alt="milestone-bulb"
              width={60}
              height={60}
            />
            <p className="text-[#0F4F58] text-[17px] font-[Aptos] max-w-[520px] text-center">
              Team rituals are designed to work within and across teams, even
              when not everyone is using Hi Humaniser!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default StartTeamJourney;
