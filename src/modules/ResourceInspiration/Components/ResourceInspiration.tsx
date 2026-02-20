/* eslint-disable @typescript-eslint/no-explicit-any */
import UserProfileHeader from "../../UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import images from "@/src/assets/images";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./ResourceInspiration.module.css";

function ResourceInspiration() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const router = useRouter();
  const [enter, setEnter] = useState(false);

  return (
    <div className={`relative min-h-screen bg-[#6FAFB0] font-sans`}>
      {/* Background Shapes */}
      <Image
        src={images.resourcePolygon1}
        alt="shape"
        className="absolute top-0 right-0 z-0"
      />

      <Image
        src={images.resourceArrow}
        alt="shape"
        className="absolute top-10 right-0 z-0"
      />

      <Image
        src={images.resourcePolygon2}
        alt="shape"
        className="absolute top-50 left-0 z-0"
        width={630}
      />

      {/* Content */}
      <div className="relative z-10 px-8 py-6">
        <UserProfileHeader greetingColor="#F5F0EB" nameColor="#0F4F58" />{" "}
        <h1 className="text-center text-[45px] font-bold text-[#0F4F58] font-[RocaTwo-Bold] mt-4">
          Resources & Inspiration
        </h1>
        {/* Top Section */}
        <div className="mt-12 flex flex-col lg:flex-row gap-10 items-start">
          {/* Left White Box */}
          <p className="text-[#0F4F58] text-[26px] leading-relaxed font-[RocaTwo-Bold] font-bold">
            This space brings together all the learning, tools,
            <br />
            and ideas that make Hi Humaniser! come alive.
            <br />
            <br />
            Explore the pillars, principles, and pathways —
            <br />
            or spend a moment with Huma when you need
            <br />
            space to pause and think.
          </p>
        </div>
        <div className="flex justify-center text-[#FFFFFF] text-[33px] mt-[84px]">
          Explore the pillars and principles behind HH!, discover how they show
          up in everyday work, or dive into the research that proves
          human-centred practices drive real performance.
        </div>
        {/* Dark Container */}
        <div className="mt-[65px] bg-[#0F4F58] rounded-3xl p-10 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div
              onClick={() => {
                setActiveCard(activeCard === 1 ? null : 1);
                router.push("behind-scene");
              }}
              className={`
    bg-[#FFF7F3] rounded-xl p-6 cursor-pointer
    transition-all duration-500 ease-in-out
    ${
      activeCard === 1
        ? "scale-110 -translate-y-6 shadow-2xl z-20"
        : activeCard
          ? "opacity-40"
          : ""
    }
  `}
            >
              <h3 className="text-[#0F4F58] font-[RocaTwo-Bl] text-center mb-4 font-[400] text-[22px] font-bold">
                Behind the Scenes of
                <br />
                Hi Humaniser!
              </h3>

              {/* Shape container */}
              <div className="relative h-[182px]">
                {/* Shape Image */}
                <Image
                  src={images.resourcePoly1}
                  alt="shape"
                  fill
                  className="object-contain absolute -left-[24px] top-0"
                />

                {/* Text on top */}
                <p className="absolute inset-0 z-10 flex items-center justify-center text-center px-4 text-sm text-[#0F4F58] font-[Roboto] font-[400] text-[20px]">
                  The three pillars and twelve principles behind Hi Humaniser!
                  The foundation for how people, performance and purpose
                  connect.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              onClick={() => {
                setActiveCard(activeCard === 2 ? null : 2);
                router.push("/from-ideas");
              }}
              className={`
    bg-[#F8E1B8] rounded-xl p-6 cursor-pointer
    transition-all duration-500 ease-in-out
    ${
      activeCard === 2
        ? "scale-110 -translate-y-6 shadow-2xl z-20"
        : activeCard
          ? "opacity-40"
          : ""
    }
  `}
            >
              <h3 className="text-[#0F4F58] font-[RocaTwo-Bl] text-center mb-4 font-[400] text-[21px] font-bold">
                From Ideas To Everyday
              </h3>

              <div className="relative h-[182px]">
                <Image
                  src={images.resourcePoly2}
                  alt="shape"
                  fill
                  className="object-contain"
                />

                <p className="absolute inset-0 z-10 flex items-center justify-center text-center px-4 text-sm text-[#0F4F58] font-[Roboto] font-[400] text-[20px]">
                  Explore pathways and team rituals that turn principles into
                  living practice — growing people, strengthening teams, and
                  making performance more human.
                </p>
              </div>
            </div>

            {/* Card 3 */}

            <div
              onClick={() => {
                setActiveCard(activeCard === 3 ? null : 3);
                router.push("/research-room");
              }}
              className={`
    bg-[#F5C882] rounded-xl p-6 cursor-pointer
    transition-all duration-500 ease-in-out
    ${
      activeCard === 3
        ? "scale-110 -translate-y-6 shadow-2xl z-20"
        : activeCard
          ? "opacity-40"
          : ""
    }
  `}
            >
              <h3 className="text-[#0F4F58] font-[RocaTwo-Bl] text-center mb-4 font-[400] text-[22px] font-bold">
                The Research Room
              </h3>

              <div className="relative h-[182px]">
                <Image
                  src={images.resourcePoly3}
                  alt="shape"
                  fill
                  className="object-contain"
                />

                <p className="absolute inset-0 z-10 flex items-center justify-center text-center px-4 text-sm text-[#0F4F58] font-[Roboto] font-[400] text-[20px]">
                  Here’s a list of research and recommended books if you want to
                  take curiosity one step head!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Section */}
        <div className="mt-12">
          <SuccessMessage
            text="Learning is not a one-time thing — it’s a practice.
Keep exploring, keep reflecting, and keep humanising the way you work."
            fontSize="text-[21px]"
            leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
            rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
            left="380px"
            bottom="52px"
            rightImgBottom="42px"
            rightImgRight="368px"
            rotate="-35deg"
            fontColor="#0F4F58"
          />
        </div>
      </div>

      <div className="relative  pb-36">
        {/* Footer Polygon Image */}
        <Image
          src={images.footerPolygon}
          alt="footer-shape"
          width={400}
          height={250}
          className="absolute bottom-4 -left-5 z-0"
        />
      </div>
    </div>
  );
}

export default ResourceInspiration;
