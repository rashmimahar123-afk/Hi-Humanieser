/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./ShowResultPage.module.css";
import { useRouter } from "next/navigation";
import ResultPathwayCard from "./ResultPatwayCard/ResultPathwayCard";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";

function ShowResultPage() {
  const [animateText, setAnimateText] = useState(false);
  const [enter] = useState(true);
  const router = useRouter();
  const pathways = [
    {
      id: 1,
      title: "Own Your Impact",
      description:
        "Transform your messages into clear direction that people can actually act on.",
    },
    {
      id: 2,
      title: "Build Everyday Safety",
      description:
        "Even with good intent, people don’t always speak up — this pathway helps you create small signals of safety in daily moments.",
    },
    {
      id: 3,
      title: "Fuel Performance with Wellbeing",
      description:
        "When workloads rise, wellbeing often drops — this pathway helps you see how balance fuels stronger performance.",
    },
  ];

  const [selectedPathways, setSelectedPathways] = useState<number[]>([]);
  const isPathwaySelected = selectedPathways.length > 0;

  const togglePathway = (id: any) => {
    setSelectedPathways((prev: any) =>
      prev.includes(id)
        ? prev.filter((p: any) => p !== id)
        : prev.length < 2
          ? [...prev, id]
          : prev,
    );
  };

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
          width={830}
          height={830}
          className="absolute top-0 right-0 z-0"
        />
      </div>

      <div className="flex">
        {" "}
        {/* Overlay content */}
        <div className="px-8 py-6 flex justify-between">
          {/* Left */}
          <div>
            <div
              className="text-[#567F55]"
              style={{ fontFamily: "Aptos", fontSize: "22px" }}
            >
              Hi Humaniser! <span className="align-super text-[0.7em]">™</span>
            </div>

            <h1
              className="mt-4 text-[56px] text-[#0F4F58] font-bold leading-[40%]"
              style={{ fontFamily: "RocaTwo-Bold" }}
            >
              Hi Maria!
            </h1>
          </div>
        </div>
      </div>
      <div className="ml-[76px] mt-[40px]">
        <div>
          <div>
            <h2
              className=" text-[42px] text-[#567F55] font-bold"
              style={{ fontFamily: "RocaTwo-Bold" }}
            >
              Great stuff! Your results are in.{" "}
            </h2>
            <div>
              {/* TEXT (Always on top) */}
              <div className="relative z-20 text-[#567F55 mt-[20px]  ml-[43px] font-[400]">
                <h3
                  className="text-[#737373] text-[26px]"
                  style={{ fontFamily: "RocaRwo-Bold" }}
                >
                  Your Strenghts
                </h3>
                <p
                  className="text-[22px] text-[#737373] ml-[20px] "
                  style={{ fontFamily: "Aptos" }}
                >
                  Maria, your results show clear strengths in:
                </p>
                <div className=" mt-2 ml-[65px]">
                  <div className="relative " style={{ fontFamily: "Aptos" }}>
                    {/* Highlighted text */}
                    <span className="relative z-10 px-2 py-1 rounded text-[#737373] text-[20px]">
                      <span className="font-[700]">Stay Curious — </span>you
                      naturally look beyond the obvious
                    </span>

                    {/* Callout square */}
                    <div className="absolute -left-8 top-1/2 -translate-y-1/2 z-20">
                      <div className="relative bg-[#4BA6A6] w-[18px] h-[14px] rounded-[4px] flex items-center justify-center">
                        {/* Arrow */}
                        <div
                          className="absolute right-[-6px] w-0 h-0 
"
                        />
                        <Image src={images.smallArrow} alt="small-arrow" />
                      </div>
                    </div>
                  </div>
                  <div className="relative " style={{ fontFamily: "Aptos" }}>
                    {/* Highlighted text */}
                    <span className="relative z-10 px-2 py-1 rounded text-[#737373] text-[20px]">
                      <span className="font-[700]"> Make it Safe — </span>
                      people around you feel they can share ideas because of the
                      space you create.
                    </span>

                    {/* Callout square */}
                    <div className="absolute -left-8 top-1/2 -translate-y-1/2 z-20">
                      <div className="relative bg-[#4BA6A6] w-[18px] h-[14px] rounded-[4px] flex items-center justify-center">
                        {/* Arrow */}
                        <div
                          className="absolute right-[-6px] w-0 h-0 
"
                        />
                        <Image src={images.smallArrow} alt="small-arrow" />
                      </div>
                    </div>
                  </div>
                  <div className="relative " style={{ fontFamily: "Aptos" }}>
                    {/* Highlighted text */}
                    <span className="relative z-10 px-2 py-1 rounded text-[#737373] text-[20px]">
                      <span className="font-[700]">
                        {" "}
                        Build Care & Belonging In —{" "}
                      </span>
                      you put effort into making others feel part of something
                      bigger.
                    </span>

                    {/* Callout square */}
                    <div className="absolute -left-8 top-1/2 -translate-y-1/2 z-20">
                      <div className="relative bg-[#4BA6A6] w-[18px] h-[14px] rounded-[4px] flex items-center justify-center">
                        {/* Arrow */}
                        <div
                          className="absolute right-[-6px] w-0 h-0 
"
                        />
                        <Image src={images.smallArrow} alt="small-arrow" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-20 flex justify-center mt-[40px] mr-[295px]">
                <p
                  className="
      w-[945px]
      text-center
      text-[22px]
      leading-[100%]
      text-[#737373]
      font-[700]
    
    "
                  style={{ fontFamily: "RocaTwo-BI" }}
                >
                  These are qualities worth celebrating. They’re not just traits
                  you have — they’re the foundations you can keep building on as
                  you grow in your Pathway.
                </p>
              </div>
              {/* SKY SHAPE CARD */}
            </div>

            <div>
              {/* TEXT (Always on top) */}
              <div className="relative z-20 text-[#567F55]  ml-[43px] font-[400] mt-[60px]">
                <h3
                  className="text-[#737373] text-[26px]"
                  style={{ fontFamily: "RocaRwo-Bold" }}
                >
                  Your Pillars Scores
                </h3>
                <p
                  className="text-[22px] text-[#737373] ml-[20px] w-[900px] "
                  style={{ fontFamily: "Aptos" }}
                >
                  Here’s how you scored across the 3 pillars — showing where
                  your strengths shine, and where there’s room to grow:
                </p>
                {/* PILLARS GRID */}
                <div className="mt-[40px]">
                  <div className="grid grid-cols-3 gap-[60px] text-center ">
                    {/* Pillar 1 */}
                    <div className="flex flex-col items-center">
                      <h4
                        className="text-[#4BA6A6] text-[22px] leading-[100%] font-[700]"
                        style={{ fontFamily: "RocaTwo-BI" }}
                      >
                        The Mindset We Bring
                      </h4>

                      <p
                        className="mt-2 text-[#737373] text-[20px] w-[300px]"
                        style={{ fontFamily: "Aptos" }}
                      >
                        How you show up — your habits, openness, and
                        self-awareness.
                      </p>

                      <div className="mt-6">
                        <Image
                          src={images.clockOne}
                          alt="mindset-gauge"
                          width={220}
                          height={120}
                        />
                      </div>
                    </div>

                    {/* Pillar 2 */}
                    <div className="flex flex-col items-center">
                      <h4
                        className="text-[#4BA6A6] text-[22px] leading-[100%] font-[700]"
                        style={{ fontFamily: "RocaTwo-BI" }}
                      >
                        The Way We Connect
                      </h4>

                      <p
                        className="mt-2 text-[#737373] text-[20px] w-[300px]"
                        style={{ fontFamily: "Aptos" }}
                      >
                        How you communicate, listen, and build trust with
                        others.
                      </p>

                      <div className="mt-6">
                        <Image
                          src={images.clockTwo}
                          alt="connect-gauge"
                          width={220}
                          height={120}
                        />
                      </div>
                    </div>

                    {/* Pillar 3 */}
                    <div className="flex flex-col items-center">
                      <h4
                        className="text-[#4BA6A6] text-[22px] leading-[100%] font-[700]"
                        style={{ fontFamily: "RocaTwo-BI" }}
                      >
                        The Culture We Shape
                      </h4>

                      <p
                        className="mt-2 text-[#737373] text-[20px] w-[300px]"
                        style={{ fontFamily: "Aptos" }}
                      >
                        How your actions influence the team environment and
                        wellbeing.
                      </p>

                      <div className="mt-6">
                        <Image
                          src={images.clockThree}
                          alt="culture-gauge"
                          width={220}
                          height={120}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SKY SHAPE CARD */}
            </div>
            <div className={`relative flex justify-center  text-center`}>
              {/* Left decoration */}
              <Image src={images.arrowImg} alt="Arrow Right" />

              {/* Banner text */}
              <div
                className="text-[#0F4F58] text-center w-[591px] text-[22px] font-bold mt-[23px]"
                style={{
                  fontFamily: "League Spartan",
                  lineHeight: "120%",
                }}
              >
                You’re living many of these principles already. Your next step
                is amplifying them — becoming a role model for others and
                helping shape culture at scale.
              </div>
              {/* Right decoration */}

              <Image src={images.rightArrow} alt="Arrow Right" />
            </div>
            <div>
              {/* TEXT (Always on top) */}
              <div className="relative z-20 text-[#567F55]  ml-[43px] font-[400] mt-[60px]">
                <h3
                  className="text-[#737373] text-[26px]"
                  style={{ fontFamily: "RocaRwo-Bold" }}
                >
                  Your 3 Recommended Pathways
                </h3>
                <p
                  className="text-[22px] text-[#737373] ml-[20px] w-[900px] "
                  style={{ fontFamily: "Aptos" }}
                >
                  Here are a few Pathways that could be a powerful place to
                  start.
                  <br />
                  <br />
                  Choose up to 2 to work on. Each Pathway takes you through 3
                  milestones — understand the habit, choose your micro-actions,
                  and build it into your everyday.{" "}
                </p>
                <div className="mt-[40px]">
                  <div className="grid grid-cols-3 gap-[40px]">
                    {pathways.map((item) => (
                      <ResultPathwayCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        selected={selectedPathways.includes(item?.id)}
                        onSelect={() => togglePathway(item.id)}
                        onLearnMore={() => router.push(`/pathway-card`)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* SKY SHAPE CARD */}
            </div>
            {/* CTA BUTTONS */}
          </div>
        </div>
        <div className="flex justify-end mr-[85px]">
          <div className="mt-[60px] flex flex-col items-center gap-[14px] ">
            <CommonButtons
              label="Return to My Personal Pathway"
              bgColor={isPathwaySelected ? "#ACD5AB" : "#E5E5E5"}
              disabled={!isPathwaySelected}
              onClick={() => router.push("/choose-pathway")}
            />

            <CommonButtons
              label="Choose my Own Pathway"
              bgColor={isPathwaySelected ? "#ACD5AB" : "#E5E5E5"}
              disabled={!isPathwaySelected}
              onClick={() => router.push("/choose-myself")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowResultPage;
