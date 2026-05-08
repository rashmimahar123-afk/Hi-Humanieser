"use client";

import images from "@/src/assets/images";
import CustomDropdown from "@/src/components/CustomDropdown/CustomDropdown";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import LogoutModal from "@/src/modules/WelcomeModule/Components/LogoutModal/LogoutModal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function ChampionHub() {
  const router = useRouter();
  const { user } = useAuthValue();
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setEnter(true);
  }, []);
  return (
    <>
      <div
        className={`relative min-h-screen bg-[#F5F0EB] px-10 py-10 z-10 font-serif page ${
          enter ? "enterActive" : "enter"
        }`}
      >
        {/* TOP LEFT SHAPE */}

        <UserProfileHeader
          greetingColor="#0f4f58"
          nameColor="#0F4F58"
          userInfo={user}
        />

        <Image
          src={images.homeRec}
          alt="left-bg"
          width={421}
          height={414}
          className="absolute top-0 left-0 -z-10"
          priority
        />

        <Image
          src={images.profileNotification}
          alt="dash-rectangle"
          width={630}
          height={630}
          className="absolute top-44 right-0 z-0"
        />
        <div className="relative z-10 ml-21 font-bold text-[#0F4F58] text-[45px] font-[RocaTwo]">
          Champion Hub
        </div>
        {/* RIGHT SIDE DROPDOWNS */}
        {/* <div className="relative z-10 mt-10 flex justify-end">
        <div className="space-y-4 w-[520px]">
          <CustomDropdown
            label="Current Focus"
            options={focusOptions}
            value="Build Trust"
          />

          <CustomDropdown
            label="Current Team Rituals"
            options={ritualOptions}
            placeholder="Select Ritual"
          />

          <CustomDropdown
            label="Weeks Remaining"
            options={weekOptions}
            value="8 Weeks"
          />
        </div>
      </div> */}

        {/* WELCOME TEXT */}
        <div className="relative z-10 mt-10">
          <h3 className="text-[#0f4f58] text-[30px] font-bold mb-6 font-[RocaTwo] ml-12">
            Welcome Champion.
          </h3>

          <p className="text-[#0F4F58] text-[22px] leading-relaxed mb-6">
            As a Champion, you play a key role in how work actually happens in
            your team. This hub gives you a clear view of what’s going on — and
            practical ways to guide focus, reduce friction, and keep progress
            moving.
          </p>

          <p className="text-[#0F4F58] text-[22px] leading-relaxed">
            You’ll find insights, signals, and actionable options to help you
            make deliberate decisions — so small, consistent actions strengthen
            clarity, coordination, and execution over time.
          </p>
        </div>

        {/* CARDS SECTION */}
        <div className="relative z-10 mt-20 grid grid-cols-2 gap-x-20 gap-y-14  mx-auto max-w-[1000px]">
          {/* TEAM FOCUS */}
          <div
            className="relative bg-[#CFE8E6] rounded-xl p-4 cursor-pointer"
            onClick={() => router.push("/team-focus")}
          >
            {/* Heading */}
            <h3 className="relative z-20 text-[#0F4F58] font-[RocaTwo] text-center text-[24px] font-bold">
              TEAM FOCUS
            </h3>

            <div className="relative">
              {/* Shape */}
              <Image
                src={images.hubPolyOne}
                alt="shape"
                width={450}
                height={45}
                className="object-contain absolute right-1 -top-5 rotate-2 z-0"
              />

              {/* Text */}
              <p className="relative z-10 text-center text-[#0F4F58] text-[20px]">
                Notice where pressure is showing up and choose what the team
                works on next.
              </p>
            </div>
          </div>

          {/* CHAMPION NOTES */}

          <div
            className="relative bg-[#CDE3CC] rounded-xl p-6 cursor-pointer"
            onClick={() => router.push("/champion-notes")}
          >
            {/* Heading */}
            <h3 className="relative z-20 text-[#0F4F58] font-[RocaTwo] text-center text-[24px] font-bold ">
              Champion Notes{" "}
            </h3>

            <div className="relative ">
              {/* Shape */}
              <Image
                src={images.hubPolyTwo}
                alt="shape"
                width={450}
                height={45}
                className="object-contain absolute right-1 -top-5 rotate-2 z-0"
              />

              {/* Text */}
              <p className="relative z-10 text-center text-[#0F4F58] text-[20px] ">
                A simple timeline of past focus areas, rituals and reflections.
              </p>
            </div>
          </div>

          {/* TEAM INSIGHTS */}
          <div className="relative bg-[#F8E1B8] rounded-xl p-4 ml-16 cursor-pointer">
            <h3 className="relative z-20 text-[#0F4F58] font-[RocaTwo] text-center text-[24px] font-bold ">
              Team Insights
            </h3>

            <div className="relative ">
              <Image
                src={images.hubPolyThree}
                alt="shape"
                width={450}
                height={45}
                className="object-contain absolute right-1 -top-5 rotate-2 z-0"
              />

              <p className="relative z-10 text-center text-[#0F4F58] text-[20px] ">
                See the collective patterns emerging from your team’s individual
                journeys.
              </p>
            </div>
          </div>

          {/* CHAMPION RESOURCES */}
          <div
            className="relative bg-[#FBE1DE] rounded-xl p-4 mr-16 cursor-pointer"
            onClick={() => router.push("champion-resources")}
          >
            <h3 className="relative z-20 text-[#0F4F58] font-[RocaTwo] text-center text-[24px] font-bold ">
              Champion Resources
            </h3>

            <div className="relative">
              <Image
                src={images.hubPolyFour}
                alt="shape"
                width={450}
                height={45}
                className="object-contain absolute right-1 -top-5 rotate-2 z-0"
              />

              <p className="relative z-10 text-center text-[#0F4F58] text-[20px] ">
                Access tools, training and practical guides to support your role
                and team rhythm.
              </p>
            </div>
          </div>
        </div>
      </div>
      <LogoutModal />
    </>
  );
}

export default ChampionHub;
