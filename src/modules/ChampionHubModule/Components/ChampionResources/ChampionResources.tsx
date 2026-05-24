"use client";

import images from "@/src/assets/images";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./ChampionResources.module.css";
import ChampionResourceCards from "../ChampionResourceCards/ChampionResourceCards";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";

function ChampionResources() {
  const router = useRouter();
  const { user } = useAuthValue();
  return (
    <div className="relative bg-[#F5F0EB] min-h-screen ">
      {/* TOP LEFT SHAPE */}
      <Image
        src={images.privacyPolygon}
        alt="left shape"
        width={520}
        height={520}
        className="absolute left-0 top-0 z-0"
      />

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <UserProfileHeader
            greetingColor="#0f4f58"
            nameColor="#0F4F58"
            userInfo={user}
          />
        </div>

        <div>
          <div className="relative z-10 text-[#0F4F58] font-[RocaTwo] font-bold text-[40px] sm:text-[46px] md:text-[52px] lg:text-[60px]">
            Champion Hub
          </div>

          {/* WELCOME TEXT */}
          <div className="relative z-10 mt-6 max-w-[980px]">
            <h3 className="text-[#0f4f58] text-[30px] sm:text-[34px] md:text-[40px] font-bold font-[RocaTwo]">
              Champion Resources
            </h3>

            <div className="mt-5 space-y-4 text-[#0F4F58] text-[18px] sm:text-[20px] md:text-[24px] leading-relaxed">
              <p>
                Everything you need to lead with clarity and direction as a
                Champion.
              </p>
              <p>
                These tools help you guide your team’s rhythm, bring focus to
                your rituals, and maintain clarity, coordination and momentum in
                everyday work.
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6 lg:flex-row justify-between items-stretch mx-auto mt-16 max-w-full lg:max-w-[72%]">
          <div
            className={`${styles.card} bg-[#f5c882] w-full max-w-[325px] min-h-[240px] cursor-pointer transition-shadow duration-200 hover:shadow-lg`}
            onClick={() => router.push("/champion-resources/champion-guide")}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={images.trainingImg}
                alt="home icon"
                fill
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3>Champion Guide</h3>
            </div>
          </div>

<div
            className={`${styles.card} bg-[#f5c882] w-full max-w-[325px] min-h-[240px] cursor-pointer transition-shadow duration-200 hover:shadow-lg`}
            onClick={() => router.push("/champion-resources/champion-toolkit")}
          > 
            <div className={styles.imageWrapper}>
              <Image
                src={images.trainingImg}
                alt="green-icon"
                fill
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3>Champion Toolkit</h3>
            </div>
          </div>

          <div className={`${styles.card} bg-[#f5c882] w-full max-w-[325px] min-h-[240px]`}>
            <div className={styles.imageWrapper}>
              <Image
                src={images.focusImg}
                alt="green-icon"
                fill
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3>Focus Areas & Rituals</h3>
            </div>
          </div>
        </div>

        {/* <---------------------CHAMPION TRAINING--------------> */}

        {/* <div className="relative mt-20 px-4 sm:px-6 lg:px-0">
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

        </div> */}

        {/* ================= CHAMPION TOOLKIT ================= */}

        {/* <div className="relative mt-20 px-4 sm:px-6 lg:px-0">
          <Image
            src={images.toolkitImg}
            alt="toolkit"
            width={400}
            height={400}
            className="absolute right-10 top-0 z-0 hidden lg:block"
          />

          <div className="relative z-10 max-w-[1200px] mx-auto">
            <div className="font-bold text-[#0F4F58] text-[40px] sm:text-[46px] md:text-[52px] lg:text-[60px] font-[RocaTwo]">
              Champion Toolkit
            </div>
            <div className="mt-4 lg:ml-8">
              <h3 className="text-[26px] sm:text-[28px] md:text-[30px] font-semibold text-[#0F4F58] mb-4">
                Here’s where things get practical.
              </h3>
              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#0F4F58] leading-relaxed mb-6">
                Small-but-mighty tools to help you guide your team’s rhythm —
                embed rituals into everyday work, prompt useful check-ins, and
                strengthen coordination within and across teams.
              </p>
            </div>

            <div className="space-y-10 mt-14">
              <div className="mt-12 w-full max-w-[1200px]">
                <PolygonButton
                  width="100%"
                  height="130px"
                  bgColor="#86C9C9"
                  radius={16}
                  clipPath={`polygon(
      3% 10%,
      97% 0%,
      95% 100%,
      0% 100%
    )`}
                >
                  <div>
                    <h4 className="text-[24px] sm:text-[28px] md:text-[32px] font-[RocaTwo] text-[#0F4F58] font-bold">
                      HH! Moments
                    </h4>
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#0F4F58] max-w-[1000px]">
                      Short, powerful practices to spark humanity in any
                      meeting. No prep needed — just small moments that shift
                      how your team shows up.
                    </p>
                  </div>
                </PolygonButton>
              </div>

              <div className="space-y-8 mt-12 w-full max-w-[1200px]">
                <PolygonButton
                  width="100%"
                  height="130px"
                  bgColor="#cde3cc"
                  radius={16}
                  clipPath={`polygon(
      3% 10%,
      97% 0%,
      95% 100%,
      0% 100%
    )`}
                >
                  <div>
                    <h4 className="text-[24px] sm:text-[28px] md:text-[30px] font-[RocaTwo] text-[#0F4F58]">
                      Cross-Team Workshops
                    </h4>
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#0F4F58] max-w-[1000px]">
                      Guidance and tools to help teams share learning, surface
                      patterns, and shape how work works — across the
                      organisation.
                    </p>
                  </div>
                </PolygonButton>
              </div>

              <div className="space-y-8 mt-12 w-full max-w-[1200px]">
                <PolygonButton
                  width="100%"
                  height="130px"
                  bgColor="#f8e1b8"
                  radius={16}
                  clipPath={`polygon(
      3% 10%,
      97% 0%,
      100% 90%,
      0% 100%
    )`}
                >
                  <div>
                    <h4 className="text-[24px] sm:text-[28px] md:text-[30px] font-[RocaTwo] text-[#0F4F58]">
                      Ease the Pressure
                    </h4>
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#0F4F58] max-w-[1000px]">
                      Targeted ideas to ease common leadership pressures — from
                      urgency and bottlenecks to alignment and decision flow.
                    </p>
                  </div>
                </PolygonButton>
              </div>

              <div className="space-y-8 mt-12 w-full max-w-[1200px]">
                <PolygonButton
                  width="100%"
                  height="169px"
                  bgColor="#fbe1de"
                  radius={16}
                  clipPath={`polygon(
      0% 10%,
      97% 0%,
      100% 90%,
      0% 100%
    )`}
                >
                  <div>
                    <h4 className="text-[24px] sm:text-[28px] md:text-[30px] font-[RocaTwo] text-[#0F4F58]">
                      When things get tricky...
                    </h4>
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#0F4F58] max-w-[1000px]">
                      Gentle guidance for the moments that feel a little harder
                      — from low engagement to tough conversations and
                      everything in between. Because leading is not always
                      smooth, and that’s okay.
                    </p>
                  </div>
                </PolygonButton>
              </div>
            </div>
          </div>
        </div> */}

        <div className="relative px-4 sm:px-6 lg:px-0">
            <Image
              src={images.targetImg} // toolbox illustration
              alt="toolkit"
              width={200}
              height={200}
              className="absolute right-10 top-0 z-0"
            />
            <div className="relative z-10">
              <h2 className="text-[44px] font-[RocaTwo] text-[#0F4F58] mb-4">
                Focus Areas & Rituals
              </h2>
              <h3 className="text-[24px] font-semibold text-[#0F4F58] mb-6">
                Explore the foundations behind each team rituals.
              </h3>
              <p className="text-[22px] text-[#0F4F58] leading-relaxed mb-14">
                Here you’ll find clear explanations of every Focus Area and the
                full library of rituals, including what each one builds and the
                operational impact you can expect. Most Champions use this space
                as a reference alongside Team Focus, so ritual choices stay
                linked to real pressure and team input.
              </p>
              <div className="mt-[70px]">
                <div className="mt-[32px]">
                  <ChampionResourceCards
                    sectionTitle="Build Trust"
                    bgColor="#4ba6a6"
                    cardBgColor="#c2e2e2"
                    cards={[
                      {
                        title: "What’s the Purpose?",
                        description:
                          "Create clarity by naming the purpose of a conversation upfront, so everyone knows why they’re there and what matters.",
                        learnMoreColor: "#4ba6a6",

                        impact:
                          "Reduces wasted meeting time and follow-up clarification by preventing conversations that drift or never land.",
                      },
                      {
                        title: "What Happens Next",
                        description:
                          "Reduce confusion by clearly naming next steps, ownership, and timing — instead of assuming alignment at the end of discussions.",
                        learnMoreColor: "#4ba6a6",
                        impact:
                          "Cuts down chasing, reminders, and “I thought you were doing it” escalations.",
                      },
                    ]}
                  />
                </div>
                <div className="mt-[32px]">
                  <ChampionResourceCards
                    sectionTitle="Improve
Clarity"
                    bgColor="#f5c882"
                    cardBgColor="#f8e1b8"
                    cards={[
                      {
                        title: "What’s the Purpose?",
                        description:
                          "Create clarity by naming the purpose of a conversation upfront, so everyone knows why they’re there and what matters.",
                        learnMoreColor: "#f5c882",
                        impact:
                          "Reduces wasted meeting time and follow-up clarification by preventing conversations that drift or never land.",
                      },
                      {
                        title: "What Happens Next",
                        description:
                          "Reduce confusion by clearly naming next steps, ownership, and timing — instead of assuming alignment at the end of discussions.",
                        learnMoreColor: "#f5c882",
                        impact:
                          "Cuts down chasing, reminders, and “I thought you were doing it” escalations.",
                      },
                    ]}
                  />
                </div>
                <div className="mt-[32px] ">
                  <ChampionResourceCards
                    sectionTitle="Strengthen Collaboration"
                    bgColor="#acd5ab"
                    cardBgColor="#cde3cc"
                    cards={[
                      {
                        title: "What’s the Purpose?",
                        description:
                          "Create clarity by naming the purpose of a conversation upfront, so everyone knows why they’re there and what matters.",
                        learnMoreColor: "#acd5ab",
                        impact:
                          "Reduces wasted meeting time and follow-up clarification by preventing conversations that drift or never land.",
                      },
                      {
                        title: "What Happens Next",
                        description:
                          "Reduce confusion by clearly naming next steps, ownership, and timing — instead of assuming alignment at the end of discussions.",
                        learnMoreColor: "#acd5ab",
                        impact:
                          "Cuts down chasing, reminders, and “I thought you were doing it” escalations.",
                      },
                    ]}
                  />
                </div>
                <div className="mt-[32px]">
                  <ChampionResourceCards
                    sectionTitle="Foster Belonging"
                    bgColor="#f7c3be"
                    cardBgColor="#fbe1de"
                    cards={[
                      {
                        title: "What’s the Purpose?",
                        description:
                          "Create clarity by naming the purpose of a conversation upfront, so everyone knows why they’re there and what matters.",
                        learnMoreColor: "#f7c3be",
                        impact:
                          "Reduces wasted meeting time and follow-up clarification by preventing conversations that drift or never land.",
                      },
                      {
                        title: "What Happens Next",
                        description:
                          "Reduce confusion by clearly naming next steps, ownership, and timing — instead of assuming alignment at the end of discussions.",
                        learnMoreColor: "#f7c3be",
                        impact:
                          "Cuts down chasing, reminders, and “I thought you were doing it” escalations.",
                      },
                    ]}
                  />
                </div>
                <div className="mt-[32px] ">
                  <ChampionResourceCards
                    sectionTitle="Sustain Wellbeing"
                    bgColor="#4ba6a6"
                    cardBgColor="#c2e2e2"
                    cards={[
                      {
                        title: "What’s the Purpose?",
                        description:
                          "Create clarity by naming the purpose of a conversation upfront, so everyone knows why they’re there and what matters.",
                        learnMoreColor: "#4ba6a6",
                        impact:
                          "Reduces wasted meeting time and follow-up clarification by preventing conversations that drift or never land.",
                      },
                      {
                        title: "What Happens Next",
                        description:
                          "Reduce confusion by clearly naming next steps, ownership, and timing — instead of assuming alignment at the end of discussions.",
                        learnMoreColor: "#4ba6a6",
                        impact:
                          "Cuts down chasing, reminders, and “I thought you were doing it” escalations.",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end mt-10">
            {/* Bottom Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <CommonButtons
                label={`Return to Champion Hub`}
                bgColor="#cde3cc"
                onClick={() => router.push("/champion-hub")}
              />

              <CommonButtons
                label="Go to Homepage"
                bgColor="#cde3cc"
                onClick={() => router.push("/home")}
              />
            </div>
          </div>
       
      </div>
    </div>
  );
}

export default ChampionResources;
