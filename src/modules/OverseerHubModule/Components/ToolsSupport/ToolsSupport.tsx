"use client";

import images from "@/src/assets/images";
import CustomDropdown from "@/src/components/CustomDropdown/CustomDropdown";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./ToolsSupport.module.css";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import { motion } from "framer-motion";
import PartnerGuide from "../PartnerGuide/PartnerGuide";
import PartnerToolkit from "../PartnerToolkit/PartnerToolkit";
import LogoutModal from "@/src/modules/WelcomeModule/Components/LogoutModal/LogoutModal";
import { useEffect, useState } from "react";

function ToolsSupport() {
  const { user } = useAuthValue();
  const router = useRouter();
  const searchParams = useSearchParams();

  const type = searchParams.get("type");

  if (type === "partner-guide") {
    return <PartnerGuide />;
  }

  if (type === "partner-toolkit") {
    return <PartnerToolkit />;
  }

  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setEnter(true);
  }, []);

  return (
    <>
      <div
        className={`relative min-h-screen bg-[#F3EEE7] px-10 py-10 z-10 font-serif page ${enter ? "enterActive" : "enter"}`}
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
        <div className="relative z-10 ml-21 font-bold text-[#0F4F58] text-[45px] font-[RocaTwo]">
          Partner Hub
        </div>

        {/* WELCOME TEXT */}
        <div className="relative z-10 mt-8">
          <h3 className="text-[#0f4f58] text-[30px] font-bold mb-4 font-[RocaTwo]">
            Partner Tools & Support{" "}
          </h3>
          <div className="ml-12">
            <p className="text-[#0F4F58] text-[22px] leading-relaxed">
              Practical guidance for your role — and support to help Champions
              lead their teams effectively.
            </p>
          </div>
        </div>

        <div className="mt-10 ">
          <div
            className={`flex gap-10 items-center mx-auto mt-10 justify-center`}
          >
            <div
              className={`${styles.card} bg-[#f8e1b8] cursor-pointer`}
              onClick={() =>
                router.push("/overseer-hub/tools-support?type=partner-guide")
              }
            >
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
                <h3>Partner Guide</h3>
              </div>
            </div>

            <div
              className={`${styles.card} bg-[#f8e1b8] cursor-pointer`}
              onClick={() =>
                router.push("/overseer-hub/tools-support?type=partner-toolkit")
              }
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={images.overseerToolPoly}
                  alt="green-icon"
                  fill
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>Partner Toolkit</h3>
              </div>
            </div>
          </div>
        </div>
        {/* CARDS SECTION */}

        <div className="flex justify-end mt-10">
          {/* Bottom Buttons */}
          <div className="flex flex-col gap-4 items-center">
            <CommonButtons
              label={`Return to Partner Hub`}
              bgColor="#cde3cc"
              onClick={() => router.push("/overseer-hub")}
            />

            <CommonButtons
              label="Go to Homepage"
              bgColor="#cde3cc"
              onClick={() => router.push("/home")}
            />
          </div>
        </div>
      </div>
      <LogoutModal />
    </>
  );
}

export default ToolsSupport;
