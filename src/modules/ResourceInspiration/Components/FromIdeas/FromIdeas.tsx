/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./FromIdeas.module.css";
import { useRouter } from "next/navigation";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import FromIdeasPathwayCard from "../FromIdeasPathwayCards/FromIdeasPathwayCards";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";

function FromIdeas() {
  const [animateText, setAnimateText] = useState(false);
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setEnter(true);
  }, []);

  const router = useRouter();

  return (
    <div
      className={`bg-[#F5F0EB] min-h-screen ${styles.page} ${
        enter ? styles.enterActive : styles.enter
      }`}
    >
      <div className="relative">
        <Image
          src={images.quizPolygon}
          alt="login-rectangle"
          width={630}
          height={630}
          className="absolute top-0 right-0 z-0"
        />
      </div>
      <div className="px-8 py-6">
        <UserProfileHeader greetingColor="#0F4F58" nameColor="#0F4F58" />
      </div>

      <div className="relative text-center z-10">
        <h2
          className="text-[56px] text-[#0F4F58] font-bold"
          style={{ fontFamily: "RocaTwo" }}
        >
          From Ideas To Everyday
        </h2>

        <p className="mt-2 text-[26px] text-[#0F4F58] font-[400] font-[RocaTwo]">
          This Is Where Hi Humaniser! Moves From Understanding To Doing
        </p>
      </div>
      <div className="px-8 py-6">
        <div className="relative mt-[40px] ">
          {/* Polygon Background */}
          <Image
            src={images.ideaPolygon}
            alt="polygon"
            width={516}
            className={`-top-[71px] left-[60px] `}
          />

          {/* Text ON TOP of Polygon */}
          <div className="absolute inset-0 flex items-center px-[64px] max-w-[500px]">
            <p
              className="text-[22px] text-[#0F4F58] leading-[140%]"
              style={{ fontFamily: "Aptos" }}
            >
              Pathways and Team Rituals help turn human-centred principles into
              everyday behaviours — through small actions, shared moments and
              consistent practice.
            </p>
          </div>
        </div>

        <div className="mt-14 mx-auto">
          {/* Heading */}
          <h2 className="text-[#4BA6A6] text-[40px] font-[RocaTwo] font-bold mb-6">
            Pathways — Building Personal Practice
          </h2>
          <div className="ml-[28px]">
            {/* Description */}
            <p className="text-[#0F4F58] text-[23px] leading-relaxed  mb-8 font-[Roboto] font-[400]">
              Pathways support individuals to grow human habits that make
              performance sustainable.
            </p>

            {/* Bullet points */}
            <div className="text-[#0F4F58] text-[23px] font-[Roboto] mb-8 font-[400]">
              <p className="mb-2">Each Pathway offers:</p>
              <ul className="list-disc ml-[38px] space-y-1 ">
                <li>A clear focus</li>
                <li>Moments for reflection</li>
                <li>
                  Practical actions you can apply in real meetings,
                  conversations, and decisions
                </li>
              </ul>
            </div>

            {/* Bottom text */}
            <p className="text-[#0F4F58] text-[23px] leading-relaxed  mb-12 font-[Roboto] font-[400  ]">
              The aim is not change all at once — it’s steady practice that
              compounds over time.
            </p>
          </div>

          <div className="mt-[70px]">
            <div>
              <div className="mt-[32px] px-[40px]">
                <FromIdeasPathwayCard
                  sectionTitle="The Mindset We Bring"
                  bgColor="#9FD3D1"
                  cards={[
                    {
                      title: "Own Your Impact",
                      description:
                        "Transform your messages into clear direction that people can actually act on.",
                      learnMoreColor: "#7EC9C6",
                    },
                    {
                      title: "Be Real, Not Right",
                      description:
                        "Use honesty to build trust, unlock collaboration, and strengthen performance — even when certainty is missing.",
                      learnMoreColor: "#7EC9C6",
                    },
                  ]}
                />
              </div>
              <div className="mt-[32px] px-[40px]">
                <FromIdeasPathwayCard
                  sectionTitle="The Way We Connect"
                  bgColor="#8BBE8A"
                  cards={[
                    {
                      title: "Make it Safe",
                      description:
                        "Create everyday safety as the root of high performance, so people speak up, share ideas, and contribute fully.",
                      learnMoreColor: "#8BBE8A",
                    },
                    {
                      title: "Be Real, Not Right",
                      description:
                        "Transform your messages into clear direction that people can actually act on.",
                      learnMoreColor: "#8BBE8A",
                    },
                  ]}
                />
              </div>
              <div className="mt-[32px] px-[40px]">
                <FromIdeasPathwayCard
                  sectionTitle="The Culture We Shape"
                  bgColor="#F5C882"
                  cards={[
                    {
                      title: "Culture by Design",
                      description:
                        "Move from inherited habits to intentional culture that supports clarity, accountability, and performance.",
                      learnMoreColor: "#F5C882",
                    },
                    {
                      title: "Wellbeing is Performance Infrastructure",
                      description:
                        "Learn how energy, recovery, and care directly strengthen performance.",
                      learnMoreColor: "#F5C882",
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <div className=" mt-14 mx-auto">
            {/* Heading */}
            <h2 className="text-[#4BA6A6] text-[40px] font-[RocaTwo] font-bold mb-6">
              Team Rituals — Practising Together
            </h2>
            <div className="ml-[28px]">
              {/* Description */}
              <p className="text-[#0F4F58] text-[23px] leading-relaxed font-[Roboto] font-[400]">
                Some shifts can’t happen alone.
              </p>

              {/* Bottom text */}
              <p className="text-[#0F4F58] text-[23px] leading-relaxed font-[Roboto] font-[400  ]">
                Team Rituals help groups strengthen trust, clarity and
                collaboration through small, shared practices woven into
                everyday work.
              </p>
              <p className="text-[#0F4F58] text-[23px] leading-relaxed font-[Roboto] font-[400  ]">
                Rituals sit within Focus Areas — themes your team chooses to
                develop — each linked back to the Hi Humaniser! pillars and
                principles.
              </p>
            </div>
          </div>

          <div className="mt-[70px]">
            <div>
              <div className="mt-[32px] px-[40px]">
                <FromIdeasPathwayCard
                  sectionTitle="The Mindset We Bring"
                  bgColor="#9FD3D1"
                  cards={[
                    {
                      title: "Own Your Impact",
                      description:
                        "Transform your messages into clear direction that people can actually act on.",
                      learnMoreColor: "#7EC9C6",
                    },
                    {
                      title: "Be Real, Not Right",
                      description:
                        "Use honesty to build trust, unlock collaboration, and strengthen performance — even when certainty is missing.",
                      learnMoreColor: "#7EC9C6",
                    },
                  ]}
                />
              </div>
              <div className="mt-[32px] px-[40px]">
                <FromIdeasPathwayCard
                  sectionTitle="The Way We Connect"
                  bgColor="#8BBE8A"
                  cards={[
                    {
                      title: "Make it Safe",
                      description:
                        "Create everyday safety as the root of high performance, so people speak up, share ideas, and contribute fully.",
                      learnMoreColor: "#8BBE8A",
                    },
                    {
                      title: "Be Real, Not Right",
                      description:
                        "Transform your messages into clear direction that people can actually act on.",
                      learnMoreColor: "#8BBE8A",
                    },
                  ]}
                />
              </div>
              <div className="mt-[32px] px-[40px]">
                <FromIdeasPathwayCard
                  sectionTitle="The Culture We Shape"
                  bgColor="#F5C882"
                  cards={[
                    {
                      title: "Culture by Design",
                      description:
                        "Move from inherited habits to intentional culture that supports clarity, accountability, and performance.",
                      learnMoreColor: "#F5C882",
                    },
                    {
                      title: "Wellbeing is Performance Infrastructure",
                      description:
                        "Learn how energy, recovery, and care directly strengthen performance.",
                      learnMoreColor: "#F5C882",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-col gap-10 mt-[70px]">
          <Image
            src={images.ritualArrow}
            alt="dotted path"
            className="absolute bottom-[800px] right-[120px] w-[625px] opacity-80 pointer-events-none"
          />

          {/* Magnifier */}
          <Image
            src={images.ritualLens}
            alt="magnifier"
            className="absolute bottom-[281px] right-[120px] w-[360px] opacity-70 pointer-events-none"
          />

          {/* ===== CONTENT ===== */}
          <div className="relative z-10 ">
            {/* Heading */}
            <h2
              className="text-[42px] text-[#0F4F58] mb-6"
              style={{ fontFamily: "RocaTwo-Bold" }}
            >
              Team Rituals – What to expect
            </h2>

            <p className="text-[20px] text-[#0F4F58] mb-10">
              Most teams move through a simple rhythm:
            </p>

            {/* List */}
            <div className="space-y-8 text-[20px] text-[#0F4F58] leading-[150%]">
              <div>
                <p className="font-semibold">Try it</p>
                <p>
                  Experience one ritual in everyday work — meetings,
                  conversations, decisions — without changing everything at
                  once.
                </p>
              </div>

              <div>
                <p className="font-semibold">Keep it alive</p>
                <p>
                  Use short HH! Moments to pause, reflect, and notice how it’s
                  landing.
                </p>
              </div>

              <div>
                <p className="font-semibold">Decide what stays</p>
                <p>
                  Over time, teams reflect on what’s genuinely helping.
                  <br />
                  Some rituals fade. Others become habits. Some reveal bigger
                  system shifts.
                </p>
              </div>
            </div>

            {/* Highlight Line */}
            <p className="mt-10 text-[20px] text-[#4FB3AE] font-semibold">
              Small steps. Shared moments. Real change.
            </p>

            {/* SECOND SECTION */}
            <h3
              className="mt-[120px] mb-6 text-[42px] text-[#0F4F58]"
              style={{ fontFamily: "RocaTwo-Bold" }}
            >
              Making Progress Visible
            </h3>

            <div className="space-y-6 text-[20px] text-[#0F4F58] leading-[150%]">
              <p>
                As you complete Pathways, try micro-actions, and take part in
                Team Rituals, your practice is captured automatically in your
                Dashboard. Over time, this creates a living record of how you’ve
                shown up — what you’ve tried, reflected on, and shaped with
                others.
              </p>

              <p>
                It means when it comes to PDRs, annual reviews, or development
                conversations, you’re not starting from scratch or relying on
                memory.
              </p>

              <p>
                The story of your contribution is already there — grounded in
                real moments, not last-minute summaries.
              </p>
            </div>
          </div>

          {/* ===== BOTTOM ACTIONS ===== */}
          <div className="flex justify-between mt-14">
            <div className=" flex">
              <div className="max-w-[305px] text-[#0F4F58] font-[Aptos] text-[17px]">
                Enjoying Hi Humaniser!™ ? Share it with someone who’d love it
                too.
              </div>
              <div className="relative">
                <PolygonButton
                  width="85px"
                  height="95px"
                  bgColor="#F7C3BE"
                  radius={14}
                  topTilt={18}
                  slantSide="right"
                  bottomTilt={14}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none -top-[38px]">
                  <span
                    className="
        text-[#0F4F58]
        text-[18px]
        font-bold
        leading-[120%]
        text-center
        whitespace-normal
      "
                    style={{ fontFamily: "RocaTwo-Bold" }}
                  >
                    Share Hi <br /> Humaniser!
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <CommonButtons
                label="Go to Dashboard"
                bgColor="#4BA6A6"
                onClick={() => router.push("/")}
              />
              <CommonButtons
                label="Explore
Reflection Walls"
                bgColor="#4BA6A6"
                onClick={() => router.push("/reflection-walls")}
              />
            </div>
          </div>
        </div>

        <div className="mt-14 mx-auto">
          <SuccessMessage
            text="Connection builds culture. Performance follows."
            fontSize="text-[23px]"
            leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
            rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
            left="438px"
            bottom="24px"
            rightImgBottom="16px"
            rightImgRight="426px"
            rotate="-35deg"
            fontColor="#0F4F58"
          />
        </div>
      </div>
    </div>
  );
}

export default FromIdeas;
