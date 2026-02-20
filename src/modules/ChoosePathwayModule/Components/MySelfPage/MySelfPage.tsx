/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./MySelfPage.module.css";
import { useRouter } from "next/navigation";
import MySelfCard from "./MySelfCard/MySelfCard";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";

function MySelfPage() {
  const [animateText, setAnimateText] = useState(false);
  const [enter, setEnter] = useState(false);
  const [selectedPathways, setSelectedPathways] = useState<number[]>([]);

  const isPathwaySelected = selectedPathways.length > 0;

  useEffect(() => {
    setEnter(true);
  }, []);

  const router = useRouter();

  const togglePathway = (id: number) => {
    setSelectedPathways((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }

      return [...prev, id]; // no limit now
    });
  };

  return (
    <div
      className={`bg-[#4BA6A6] min-h-screen ${styles.page} ${
        enter ? styles.enterActive : styles.enter
      }`}
    >
      <Image
        src={images.mySelfRec}
        alt="register-rectangle"
        width={830}
        height={830}
        className="absolute top-0 left-0 z-0"
      />
      <div className="flex">
        {" "}
        {/* Overlay content */}
        <div className="absolute inset-0 px-8 py-6 flex justify-between">
          {/* Left */}
          <div>
            <div
              className="text-[#0f4f58]"
              style={{ fontFamily: "Aptos", fontSize: "22px" }}
            >
              Hi Humaniser! <span className="align-super text-[0.7em]">™</span>
            </div>

            <h1
              className={`mt-4 text-[56px] text-[#0F4F58] font-bold leading-[40%]`}
              style={{ fontFamily: "RocaTwo-Bold" }}
            >
              Hi Maria!
            </h1>
            <div className="ml-[30px] mt-[60px]">
              <h2
                className=" text-[42px] text-[#567F55] font-bold"
                style={{ fontFamily: "RocaTwo-Bold" }}
              >
                Choose the Pathway that feels right for you
              </h2>

              <p
                className="text-[22px] text-[#0f4f58] ml-[20px]  "
                style={{ fontFamily: "Aptos" }}
              >
                Each Pathway is built around one of Hi Humaniser’s Principles —
                think of it as your practical guide to bringing that idea to
                life through small, real actions.
              </p>
              <div className="mt-[100px] px-[40px]">
                <p
                  className="text-[22px] text-[#0f4f58] "
                  style={{ fontFamily: "Aptos" }}
                >
                  Select up to two Pathways to start with. We’ll guide you step
                  by step — through behaviours, micro-actions, reflections, and
                  small shifts that grow over time.
                </p>
              </div>
            </div>
          </div>

          {/* Right profile */}
          <div className="flex items-start gap-3">
            <div
              className="text-right text-[#0F4F58] font-semibold mt-[28px] "
              style={{ fontFamily: "Aptos" }}
            >
              Maria
              <br />
              Palacios
            </div>
            <div className="relative w-[120px] h-[120px]">
              {/* Green shape */}
              <Image
                src={images.greenRec}
                alt="Decorative Rectangle"
                fill
                className="object-contain"
              />

              {/* Circular profile image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[80px] h-[80px] rounded-full overflow-hidden bg-white">
                  <Image
                    src={images.userProfile}
                    alt="Profile Picture"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-[76px] pt-[400px]">
        <div className="mt-[70px]">
          <div>
            <div className="mt-[32px] px-[40px]">
              <MySelfCard
                sectionTitle="The Mindset We Bring"
                bgColor="#9FD3D1"
                cards={[
                  {
                    title: "Own Your Impact",
                    description:
                      "Transform your messages into clear direction that people can actually act on.",
                    learnMoreColor: "#7EC9C6",
                    onLearnMore: () => router.push("/pathway-card"),
                    selected: selectedPathways.includes(1),
                    onSelect: () => togglePathway(1),
                  },
                  {
                    title: "Be Real, Not Right",
                    description:
                      "Use honesty to build trust, unlock collaboration, and strengthen performance — even when certainty is missing.",
                    learnMoreColor: "#7EC9C6",
                    onLearnMore: () => router.push("/pathway-card"),
                    selected: selectedPathways.includes(2),
                    onSelect: () => togglePathway(2),
                  },
                ]}
              />
            </div>
            <div className="mt-[32px] px-[40px]">
              <MySelfCard
                sectionTitle="The Way We Connect"
                bgColor="#8BBE8A"
                cards={[
                  {
                    title: "Make it Safe",
                    description:
                      "Create everyday safety as the root of high performance, so people speak up, share ideas, and contribute fully.",
                    learnMoreColor: "#8BBE8A",
                    onLearnMore: () => router.push("/pathway-card"),
                    selected: selectedPathways.includes(3),
                    onSelect: () => togglePathway(3),
                  },
                  {
                    title: "Be Real, Not Right",
                    description:
                      "Transform your messages into clear direction that people can actually act on.",
                    learnMoreColor: "#8BBE8A",
                    onLearnMore: () => router.push("/pathway-card"),
                    selected: selectedPathways.includes(4),
                    onSelect: () => togglePathway(4),
                  },
                ]}
              />
            </div>
            <div className="mt-[32px] px-[40px]">
              <MySelfCard
                sectionTitle="The Culture We Shape"
                bgColor="#F8E1B8"
                cards={[
                  {
                    title: "Culture by Design",
                    description:
                      "Move from inherited habits to intentional culture that supports clarity, accountability, and performance.",
                    learnMoreColor: "#F8E1B8",
                    onLearnMore: () => router.push("/pathway-card"),
                    selected: selectedPathways.includes(5),
                    onSelect: () => togglePathway(5),
                  },
                  {
                    title: "Wellbeing is Performance Infrastructure",
                    description:
                      "Learn how energy, recovery, and care directly strengthen performance.",
                    learnMoreColor: "#F8E1B8",
                    onLearnMore: () => router.push("/pathway-card"),
                    selected: selectedPathways.includes(6),
                    onSelect: () => togglePathway(6),
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mr-[85px]">
        <div className="mt-[60px] flex flex-col items-center gap-[14px] ">
          <CommonButtons
            label="Return to My Personal Pathway"
            bgColor={isPathwaySelected ? "#ACD5AB" : "#E5E5E5"}
            disabled={!isPathwaySelected}
            onClick={() => router.push("/personal-pathway")}
          />
        </div>
      </div>
    </div>
  );
}

export default MySelfPage;
