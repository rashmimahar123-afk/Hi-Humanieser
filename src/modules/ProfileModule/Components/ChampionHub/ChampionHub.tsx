"use client";

import images from "@/src/assets/images";
import CustomDropdown from "@/src/components/CustomDropdown/CustomDropdown";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import { useRouter } from "next/navigation";

function ChampionHub() {
  const focusOptions = ["Build Trust", "Improve Clarity", "Reduce Friction"];
  const ritualOptions = ["Weekly Sync", "Retro", "Check-in", "Planning"];
  const weekOptions = ["1 Week", "2 Weeks", "4 Weeks", "8 Weeks"];

  const router = useRouter();
  return (
    <div className="relative min-h-screen bg-[#F3EEE7] px-10 py-10 z-10 font-serif">
      {/* TOP LEFT SHAPE */}

      <UserProfileHeader greetingColor="#0f4f58" nameColor="#0F4F58" />

      <Image
        src={images.homeRec}
        alt="left-bg"
        width={421}
        height={414}
        className="absolute top-0 left-0 -z-10"
        priority
      />
      <div className="relative z-10 ml-21 font-bold text-[#0F4F58] text-[45px] font-[RocaTwo]">
        Champion Hub
      </div>
      {/* RIGHT SIDE DROPDOWNS */}
      <div className="relative z-10 mt-10 flex justify-end">
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
      </div>

      {/* WELCOME TEXT */}
      <div className="relative z-10 mt-8">
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
          You’ll find insights, signals, and actionable options to help you make
          deliberate decisions — so small, consistent actions strengthen
          clarity, coordination, and execution over time.
        </p>
      </div>

      {/* CARDS SECTION */}
      <div className="relative z-10 mt-20 grid grid-cols-2 gap-10">
        <div
          className={`
    bg-[#FFF7F3] rounded-xl p-6 cursor-pointer
    transition-all duration-500 ease-in-out
   
  `}
          onClick={() => router.push("/team-focus")}
        >
          <h3 className="text-[#0F4F58] font-[RocaTwo-Bl] text-center mb-4 font-[400] text-[22px] font-bold">
            TEAM FOCUS
          </h3>

          {/* Shape container */}
          <div className="relative h-[182px]">
            {/* Shape Image */}
            <Image
              src={images.resourcePoly1}
              alt="shape"
              fill
              className="object-contain absolute -left-[24px] top-0"
            />

            {/* Text on top */}
            <p className="absolute inset-0 z-10 flex items-center justify-center text-center px-4 text-sm text-[#0F4F58] font-[Roboto] font-[400] text-[20px]">
              Notice where pressure is showing up and choose what the team works
              on next.
            </p>
          </div>
        </div>

        <div
          className={`
    bg-[#F8E1B8] rounded-xl p-6 cursor-pointer
    transition-all duration-500 ease-in-out
  
  `}
          onClick={() => router.push("/champion-notes")}
        >
          <h3 className="text-[#0F4F58] font-[RocaTwo-Bl] text-center mb-4 font-[400] text-[21px] font-bold">
            Champion Notes
          </h3>

          <div className="relative h-[182px]">
            <Image
              src={images.resourcePoly2}
              alt="shape"
              fill
              className="object-contain"
            />

            <p className="absolute inset-0 z-10 flex items-center justify-center text-center px-4 text-sm text-[#0F4F58] font-[Roboto] font-[400] text-[20px]">
              A simple timeline of past focus areas, rituals and reflections.
            </p>
          </div>
        </div>

        <div
          className={`
    bg-[#F8E1B8] rounded-xl p-6 cursor-pointer
    transition-all duration-500 ease-in-out
  ml-[100px]
  `}
        >
          <h3 className="text-[#0F4F58] font-[RocaTwo-Bl] text-center mb-4 font-[400] text-[21px] font-bold">
            Team Insights{" "}
          </h3>

          <div className="relative h-[182px]">
            <Image
              src={images.resourcePoly2}
              alt="shape"
              fill
              className="object-contain"
            />

            <p className="absolute inset-0 z-10 flex items-center justify-center text-center px-4 text-sm text-[#0F4F58] font-[Roboto] font-[400] text-[20px]">
              See the collective patterns emerging from your team’s individual
              journeys.{" "}
            </p>
          </div>
        </div>
        <div
          className={`
    bg-[#F8E1B8] rounded-xl p-6 cursor-pointer
    transition-all duration-500 ease-in-out
  mr-[100px]
  `}
        >
          <h3 className="text-[#0F4F58] font-[RocaTwo-Bl] text-center mb-4 font-[400] text-[21px] font-bold">
            Champion Resources{" "}
          </h3>

          <div className="relative h-[182px]">
            <Image
              src={images.resourcePoly2}
              alt="shape"
              fill
              className="object-contain"
            />

            <p className="absolute inset-0 z-10 flex items-center justify-center text-center px-4 text-sm text-[#0F4F58] font-[Roboto] font-[400] text-[20px]">
              Access tools, training and practical guides to support your role
              and team rhythm.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChampionHub;
