"use client";

import images from "@/src/assets/images";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./ChampionGuide.module.css";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";

function ChampionGuide() {
  const router = useRouter();
  const { user } = useAuthValue();

  return (
    <div className={`${styles.wrapper} relative bg-[#F5F0EB] min-h-screen`}>
      <Image
        src={images.privacyPolygon}
        alt="background shape"
        width={520}
        height={520}
        className="absolute left-0 top-0 z-0"
      />

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="py-6">
          <UserProfileHeader
            greetingColor="#0f4f58"
            nameColor="#0F4F58"
            userInfo={user}
          />
        </div>

        <div className="relative mt-20 px-4 sm:px-6 lg:px-0">
          <Image
            src={images.championTrainImg}
            alt="champion-training-bg"
            width={332}
            height={554}
            className="absolute top-0 right-0 z-0 hidden md:block"
          />
          <div className="relative z-10 max-w-[1060px]">
            <div className="font-bold text-[#0F4F58] text-[40px] sm:text-[46px] md:text-[52px] lg:text-[60px] font-[RocaTwo]">
              Champion Guide
            </div>

            {/* WELCOME TEXT */}
            <div className="relative z-10 mt-4">
              <h3 className="text-[#0f4f58] text-[28px] sm:text-[32px] md:text-[40px] font-bold mb-4 font-[RocaTwo]">
                Welcome Champion — let’s get you off to a good start.
              </h3>

              <p className="text-[#0F4F58] text-[18px] sm:text-[20px] md:text-[24px] leading-relaxed mb-4">
                Inside, you’ll find the essentials that make everything easier: a
                short training to get you oriented and a one-page guide to keep
                within reach.
              </p>
              <p className="text-[#0F4F58] text-[18px] sm:text-[20px] md:text-[24px] leading-relaxed mb-4">
                Nothing heavy. Nothing corporate. Just the fundamentals to help
                you lead with clarity and consistency.
              </p>

              <div className={styles.trainingCardRow}>
                {/* LEFT CARD */}
                <div
                  className={styles.trainingCardWrapper}
                  onClick={() => router.push("/start-quiz")}
                >
                  <div className={styles.polyContainer}>
                    <Image
                      src={images.trainingPoly}
                      alt="training-poly"
                      width={113}
                      height={151}
                      className={styles.trainingImage}
                    />

                    <h3 className={styles.polyTitle}>Champion Training</h3>
                  </div>

                  <p className={styles.trainingSubtitle}>
                    Your step-by-step introduction
                  </p>
                </div>

                {/* RIGHT CARD */}
                <div
                  className={styles.trainingCardWrapper}
                  onClick={() => router.push("/choose-myself")}
                >
                  <div className={styles.polyContainer}>
                    <Image
                      src={images.rolePoly}
                      alt="role-poly"
                      width={140}
                      height={151}
                      className={styles.trainingImage}
                    />

                    <h3 className={styles.polyTitle}>Champion Role</h3>
                  </div>

                  <p className={styles.trainingSubtitle}>
                    Your role in one simple page
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SKY SHAPE CARD */}
        </div>

        <div className={`${styles.backButtonRow} mt-10 flex flex-col sm:flex-row gap-4`}>
          <CommonButtons
            label="Back to Champion Resources"
            bgColor="#cde3cc"
            onClick={() => router.push("/champion-resources")}
          />
          <CommonButtons
            label="Start Champion Training"
            bgColor="#86C9C9"
            onClick={() => router.push("/start-quiz")}
          />
        </div>
      </div>
    </div>
  );
}

export default ChampionGuide;
