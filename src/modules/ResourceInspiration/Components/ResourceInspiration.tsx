/* eslint-disable @typescript-eslint/no-explicit-any */
import UserProfileHeader from "../../UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import images from "@/src/assets/images";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./ResourceInspiration.module.css";
import { useGetMppMessagesQuery } from "../../WelcomeModule/Hooks/useGetMppMessagesQuery";
import useAuthValue from "../../AuthModule/Hooks/useAuthValue";

function ResourceInspiration() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const router = useRouter();
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setEnter(true);
  }, []);

  const { data: randomMessage, isLoading } = useGetMppMessagesQuery();
  const { user } = useAuthValue();

  return (
    <div
      className={`relative min-h-screen bg-[#6FAFB0] font-sans overflow-x-hidden ${styles.page}
        ${styles.enterRight}
        ${enter ? styles.enterActive : ""}`}
    >
      {/* ── DESKTOP background shapes (lg+) ── */}
      <Image
        src={images.resourcePolygon1}
        alt="shape"
        className="absolute top-0 right-0 z-0 hidden lg:block"
      />
      <Image
        src={images.resourceArrow}
        alt="shape"
        className="absolute top-0 right-0 z-0 hidden lg:block"
      />
      <Image
        src={images.resourcePolygon2}
        alt="shape"
        className="absolute top-[180px] left-0 z-0 hidden lg:block"
        width={630}
      />

      {/* ── TABLET background shapes (sm–lg) ── */}
      <Image
        src={images.resourcePolygon1}
        alt="shape"
        width={320}
        height={320}
        className="absolute top-0 right-0 z-0 hidden sm:block lg:hidden opacity-90"
      />
      <Image
        src={images.resourceArrow}
        alt="shape"
        width={200}
        height={200}
        className="absolute top-0 right-0 z-0 hidden sm:block lg:hidden opacity-90"
      />
      <Image
        src={images.resourcePolygon2}
        alt="shape"
        width={380}
        height={380}
        className="absolute top-[160px] left-0 z-0 hidden sm:block lg:hidden opacity-90"
      />

      {/* ── MOBILE background shapes (< sm) ── */}
      <Image
        src={images.resourcePolygon1}
        alt="shape"
        width={180}
        height={180}
        className="absolute top-0 right-0 z-0 block sm:hidden opacity-80"
      />
      <Image
        src={images.resourceArrow}
        alt="shape"
        width={120}
        height={120}
        className="absolute top-0 right-0 z-0 block sm:hidden opacity-80"
      />
      <Image
        src={images.resourcePolygon2}
        alt="shape"
        width={220}
        height={220}
        className="absolute top-[110px] left-0 z-0 block sm:hidden opacity-80"
      />

      {/* ── CONTENT ── */}
      <div className="relative z-10 px-4 sm:px-8 md:px-10 lg:px-8 py-6">
        <UserProfileHeader
          greetingColor="#F5F0EB"
          nameColor="#0F4F58"
          userInfo={user}
        />

        {/* Title */}
        <h1 className="text-center text-[24px] sm:text-[34px] md:text-[40px] lg:text-[45px] font-bold text-[#0F4F58] font-[RocaTwo-Bold] mt-4">
          Resources & Inspiration
        </h1>

        {/* Intro paragraph */}
        <div className="mt-8 lg:mt-12">
          <p className="text-[#0F4F58] text-[15px] sm:text-[20px] md:text-[22px] lg:text-[26px] leading-relaxed font-[RocaTwo-Bold] font-bold max-w-[90%] sm:max-w-[80%] lg:max-w-none">
            This space brings together all the learning, tools, and ideas that
            make Hi Humaniser! come alive.
            <br className="hidden lg:block" />
            <br className="hidden lg:block" />
            <span className="block mt-3 lg:mt-0">
              Explore the pillars, principles, and pathways — or spend a moment
              with Huma when you need space to pause and think.
            </span>
          </p>
        </div>

        {/* Subtitle */}
        <div className="flex justify-center text-[#FFFFFF] text-[14px] sm:text-[20px] md:text-[24px] lg:text-[33px] mt-8 sm:mt-10 lg:mt-[84px] text-center leading-snug px-2 sm:px-6 lg:px-0">
          Explore the pillars and principles behind HH!, discover how they show
          up in everyday work, or dive into the research that proves
          human-centred practices drive real performance.
        </div>

        {/* Dark Container */}
        <div className="mt-8 sm:mt-10 lg:mt-[65px] bg-[#0F4F58] rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {/* Card 1 */}
            <div
              onClick={() => {
                setActiveCard(activeCard === 1 ? null : 1);
                router.push("behind-scene");
              }}
              className={`
                bg-[#FFF7F3] rounded-xl p-4 sm:p-5 lg:p-6 cursor-pointer
                transition-all duration-500 ease-in-out
                ${
                  activeCard === 1
                    ? "scale-105 lg:scale-110 -translate-y-3 lg:-translate-y-6 shadow-2xl z-20"
                    : activeCard
                      ? "opacity-40"
                      : ""
                }
              `}
            >
              <h3 className="text-[#0F4F58] text-center mb-3 lg:mb-4 font-[400] text-[15px] sm:text-[17px] md:text-[19px] lg:text-[22px] font-bold">
                Behind the Scenes of
                <br />
                Hi Humaniser!
              </h3>
              <div className="relative h-[150px] sm:h-[160px] md:h-[175px] lg:h-[182px]">
                <Image
                  src={images.resourcePoly1}
                  alt="shape"
                  fill
                  className="object-contain absolute -left-[24px] top-0"
                />
                <p className="absolute inset-0 z-10 flex items-center justify-center text-center px-3 text-[#0F4F58] font-[Roboto] font-[400] text-[12px] sm:text-[13px] md:text-[15px] lg:text-[20px]">
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
                bg-[#F8E1B8] rounded-xl p-4 sm:p-5 lg:p-6 cursor-pointer
                transition-all duration-500 ease-in-out
                ${
                  activeCard === 2
                    ? "scale-105 lg:scale-110 -translate-y-3 lg:-translate-y-6 shadow-2xl z-20"
                    : activeCard
                      ? "opacity-40"
                      : ""
                }
              `}
            >
              <h3 className="text-[#0F4F58] text-center mb-3 lg:mb-4 font-[400] text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px] font-bold">
                From Ideas To Everyday
              </h3>
              <div className="relative h-[150px] sm:h-[160px] md:h-[175px] lg:h-[182px]">
                <Image
                  src={images.resourcePoly2}
                  alt="shape"
                  fill
                  className="object-contain"
                />
                <p className="absolute inset-0 z-10 flex items-center justify-center text-center px-3 text-[#0F4F58] font-[Roboto] font-[400] text-[12px] sm:text-[13px] md:text-[15px] lg:text-[20px]">
                  Explore pathways and team rituals that turn principles into
                  living practice — growing people, strengthening teams, and
                  making performance more human.
                </p>
              </div>
            </div>

            {/* Card 3 — spans full width on sm 2-col to center it */}
            <div
              onClick={() => {
                setActiveCard(activeCard === 3 ? null : 3);
                router.push("/research-room");
              }}
              className={`
                bg-[#F5C882] rounded-xl p-4 sm:p-5 lg:p-6 cursor-pointer
                transition-all duration-500 ease-in-out
                sm:col-span-2 lg:col-span-1
                ${
                  activeCard === 3
                    ? "scale-105 lg:scale-110 -translate-y-3 lg:-translate-y-6 shadow-2xl z-20"
                    : activeCard
                      ? "opacity-40"
                      : ""
                }
              `}
            >
              <h3 className="text-[#0F4F58] text-center mb-3 lg:mb-4 font-[400] text-[15px] sm:text-[17px] md:text-[19px] lg:text-[22px] font-bold">
                The Research Room
              </h3>
              <div className="relative h-[150px] sm:h-[160px] md:h-[175px] lg:h-[182px]">
                <Image
                  src={images.resourcePoly3}
                  alt="shape"
                  fill
                  className="object-contain"
                />
                <p className="absolute inset-0 z-10 flex items-center justify-center text-center px-3 text-[#0F4F58] font-[Roboto] font-[400] text-[12px] sm:text-[13px] md:text-[15px] lg:text-[20px]">
                  Here's a list of research and recommended books if you want to
                  take curiosity one step head!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer SuccessMessage */}
        <div className="mt-10 lg:mt-[80px]">
          <SuccessMessage
            text={randomMessage || ""}
            fontSize="text-[13px] sm:text-[17px] lg:text-[21px]"
            leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
            rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
            bottom="3px"
            rightImgBottom="3px"
            rotate="-35deg"
            fontColor="#0F4F58"
            maxWidth="600px"
          />
        </div>
      </div>

      {/* Footer polygon — desktop only */}
      <div className="relative pb-12 sm:pb-20 lg:pb-36">
        <Image
          src={images.footerPolygon}
          alt="footer-shape"
          width={400}
          height={250}
          className="absolute bottom-4 -left-5 z-0 hidden lg:block"
        />
      </div>
    </div>
  );
}

export default ResourceInspiration;
