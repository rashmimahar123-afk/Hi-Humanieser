"use client";

import images from "@/src/assets/images";
import CustomDropdown from "@/src/components/CustomDropdown/CustomDropdown";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./OverseerHub.module.css";

function OverseerHub() {
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
        Overseer Hub
      </div>

      {/* WELCOME TEXT */}
      <div className="relative z-10 mt-8">
        <h3 className="text-[#0f4f58] text-[30px] font-bold mb-4 font-[RocaTwo]">
          Welcome Overseer.{" "}
        </h3>
        <div className="ml-12">
          <p className="text-[#0F4F58] text-[22px] leading-relaxed mb-6 font-bold ">
            You hold the wider view. This is where teams, Champions and the
            Humaniser rhythm connect at system level.
          </p>

          <p className="text-[#0F4F58] text-[22px] leading-relaxed">
            This hub gives you visibility across the system, so you can maintain
            alignment, support your Champions, and keep performance steady under
            pressure.
          </p>
        </div>
      </div>

      <div className="mt-10 ">
        <div className="font-bold font-[RocaTwo] text-[27px] text-[#0f4f58]">
          Your Organisation at a glance — and how to support it effectively.
        </div>
        <div className="font-[Roboto] text-[23px]  text-[#0f4f58] ml-4">
          Access clear visibility across teams and practical support in one
          place.
        </div>

        <div
          className={`flex gap-10 items-center mx-auto mt-10 justify-center`}
        >
          <div className={`${styles.card} bg-[#f8e1b8]`}>
            {/* Image layer */}
            <div className={styles.imageWrapper}>
              <Image
                src={images.orgSnapPoly}
                alt="home icon"
                fill
                className={styles.cardImage}
              />
            </div>

            {/* Text on top of image */}
            <div className={styles.cardContent}>
              <h3> Organisation Snapshot</h3>
            </div>
          </div>

          <div className={`${styles.card} bg-[#f8e1b8]`}>
            <div className={styles.imageWrapper}>
              <Image
                src={images.overseerToolPoly}
                alt="green-icon"
                fill
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3>Overseer Tools & Support</h3>
            </div>
          </div>
        </div>
      </div>
      {/* CARDS SECTION */}
    </div>
  );
}

export default OverseerHub;
