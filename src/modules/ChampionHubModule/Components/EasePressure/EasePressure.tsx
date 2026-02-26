"use client";

import images from "@/src/assets/images";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import { useRouter } from "next/navigation";
import EasePressureList from "../EasePressureList/EasePressureList";

function EasePressure() {
  const router = useRouter();
  return (
    <div className="relative min-h-screen bg-[#F3EEE7] px-10 py-10 z-10 font-serif">
      {/* TOP LEFT SHAPE */}

      <div>
        <UserProfileHeader greetingColor="#4ba6a6" nameColor="#0F4F58" />
      </div>

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
        alt="left-bg"
        width={630}
        height={630}
        className="absolute top-40 right-0 -z-10"
        priority
      />
      {/* WELCOME TEXT */}
      <div className="relative z-10 mt-8 ml-[85px]">
        <h3 className="text-[#0f4f58] text-[45px] font-bold font-[RocaTwo] font-[#0f4f58]">
          Ease the Pressure
        </h3>
        <div className="text-[#0F4F58] text-[22px] leading-relaxed font-[Roboto]">
          <div className="mb-2">
            Leadership pressure rarely shows up as one big issue — it tends to
            appear as urgency that never stops, teams moving without full
            alignment, problems surfacing too late, decisions depending too
            heavily on one person, or simply a sense that work feels heavier
            than it should.
          </div>
          <div>
            This space offers small structural ideas to ease those pressures —
            practical shifts that reduce friction, clarify ownership, and help
            work flow more steadily without adding more to your plate.
          </div>
        </div>
      </div>
      <EasePressureList />
    </div>
  );
}

export default EasePressure;
