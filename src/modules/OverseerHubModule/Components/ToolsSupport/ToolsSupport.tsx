"use client";

import images from "@/src/assets/images";
import CustomDropdown from "@/src/components/CustomDropdown/CustomDropdown";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./ToolsSupport.module.css";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import { motion } from "framer-motion";

function ToolsSupport() {
  const focusOptions = ["Build Trust", "Improve Clarity", "Reduce Friction"];
  const ritualOptions = ["Weekly Sync", "Retro", "Check-in", "Planning"];
  const weekOptions = ["1 Week", "2 Weeks", "4 Weeks", "8 Weeks"];

  const router = useRouter();
  const { user } = useAuthValue();

   const cards = [
    {
      title: "HH! Moments",
      description:
        "Short prompts to bring clarity and Humaniser habits into everyday meetings. Simple to use. No preparation required.",
      bgColor: "#86c9c9",
      height: "130px",
      path: "/moments",
    },
    {
      title: "Cross-Team Workshops",
      description:
        "Guidance and tools to help teams share learning, surface patterns, and shape how work works — across the organisation.",
      bgColor: "#cde3cc",
      height: "130px",
      path: "/team-workshops",
    },
    {
      title: "Leading Under Pressure",
      description:
        "Understand common pressure patterns and make small structural moves that protect execution without overloading teams.",
      bgColor: "#fbe1de",
      height: "130px",
      path: "/pressure-point-record",
    },
    {
      title: "When things get tricky...",
      description:
        "Practical guidance for moments when momentum dips, engagement drops, or challenges start to surface.",
      bgColor: "#f8e1b8",
      height: "169px",
      path: "/tricky",
    },
  ];
  return (
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

      <div className="mt-10 ">
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
              <h3>Partner Guide</h3>
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
              <h3>Partner Toolkit</h3>
            </div>
          </div>
        </div>
      </div>
      {/* CARDS SECTION */}

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

                <h3 className={styles.polyTitle}>Partner Guide</h3>
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

      {/* ================= Overseer Toolkit ================= */}

      <div className="relative mt-10">
        {/* Right Background Illustration */}
        <Image
          src={images.toolkitImg} // toolbox illustration
          alt="toolkit"
          width={400}
          height={400}
          className="absolute right-10 top-0"
        />

        <div className="relative z-10 ">
          <h2 className="text-[44px] font-[RocaTwo] text-[#0F4F58] mb-4 font-bold">
            Partner Toolkit
          </h2>
          <h3 className="text-[24px] font-semibold text-[#0F4F58] mb-6">
            Practical resources to support alignment across teams and strengthen
            execution when needed.
          </h3>
          <p className="text-[22px] text-[#0F4F58] leading-relaxed mb-14">
            Use these when you want to reinforce shared habits, connect teams,
            or address emerging challenges.
          </p>

          {/* TOOLKIT CARDS */}
          <div className="space-y-10 mt-14">
          {cards.map((card, index) => (
        <motion.div
          key={index}
          whileHover={{
            scale: 1.03,
            rotate: -1,
            y: -8,
          }}
          whileTap={{
            scale: 0.97,
            rotate: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 15,
          }}
          className="cursor-pointer"
          onClick={() => router.push(card.path)}
        >
          <PolygonButton
            width="1200px"
            height={card.height}
            bgColor={card.bgColor}
            radius={16}
            clipPath={`polygon(
              0% 7%, 99% 0%, 99% 94%, 6% 100%
            )`}
          >
            <div>
              <h4 className="text-[30px] font-[RocaTwo] text-[#0F4F58] flex justify-end font-bold">
                {card.title}
              </h4>

              <p className="text-[20px] text-[#0F4F58] max-w-[1000px]">
                {card.description}
              </p>
            </div>
          </PolygonButton>
        </motion.div>
      ))}
   
          </div>
        </div>
        {/* <div className="relative ">
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
              as a reference alongside Team Focus, so ritual choices stay linked
              to real pressure and team input.
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
        </div> */}
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
    </div>
  );
}

export default ToolsSupport;
