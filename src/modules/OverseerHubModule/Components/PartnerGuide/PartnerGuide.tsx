"use client";

import images from "@/src/assets/images";
import Image from "next/image";
import styles from "./PartnerGuide.module.css";
import { useRouter } from "next/navigation";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { downloadPdf } from "@/src/lib/Helpers";

function PartnerGuide() {
  const router = useRouter();
  const { user } = useAuthValue();

  return (
    <>
      <div className="relative min-h-screen bg-[#F3EEE7] px-10 py-10 z-10 font-serif">
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
        {/* <---------------------Overseer Guide--------------> */}

        <div className=" relative mt-10">
          <Image
            src={images.championTrainImg}
            alt="overseer-guide-bg"
            width={332}
            height={554}
            className="absolute top-0 right-0 z-0"
          />
          <div className="relative z-10 mt-10font-bold text-[#0F4F58] text-[45px] font-[RocaTwo] font-bold">
            Partner Guide
          </div>

          {/* WELCOME TEXT */}
          <div className="relative z-10 mt-4 ">
            <p className="text-[#0F4F58] text-[22px] leading-relaxed mb-6 ">
              An overview of your role and the operating structure behind Hi
              Humaniser.
            </p>
            <p className="text-[#0F4F58] text-[22px] leading-relaxed mb-6">
              Includes a concise summary of responsibilities, key signals to
              monitor, and how to support Champions at system level. Review this
              first to ensure clarity before exploring the wider hub.
            </p>

            <div className={`${styles.trainingCardRow}`}>
              {/* LEFT CARD */}
              <div className={`${styles.trainingCardWrapper} `}>
                <div
                  className={`${styles.polyContainer} cursor-pointer`}
                  onClick={() =>
                    downloadPdf(
                      "/partnerGuide/partnerGuide.pdf",
                      "partnerGuide.pdf",
                    )
                  }
                >
                  <Image
                    src={images.trainingPoly}
                    alt="training-poly"
                    width={113}
                    height={151}
                    className={styles.trainingImage}
                  />

                  <h3 className={styles.polyTitle}>Partner Guide</h3>
                </div>

                <p className={styles.trainingSubtitle}>
                  Your step-by-step introduction
                </p>
              </div>

              {/* RIGHT CARD */}
              <div className={styles.trainingCardWrapper}>
                <div
                  className={`${styles.polyContainer} cursor-pointer`}
                  onClick={() =>
                    downloadPdf(
                      "/partnerRole/partnerRole.pdf",
                      "partnerRole.pdf",
                    )
                  }
                >
                  <Image
                    src={images.rolePoly}
                    alt="role-poly"
                    width={140}
                    height={151}
                    className={styles.trainingImage}
                  />

                  <h3 className={styles.polyTitle}>Partner Role</h3>
                </div>

                <p className={styles.trainingSubtitle}>
                  Your role in one simple page
                </p>
              </div>
            </div>
          </div>

          {/* SKY SHAPE CARD */}
        </div>
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
    </>
  );
}
export default PartnerGuide;
