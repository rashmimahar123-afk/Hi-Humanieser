import Image from "next/image";
import images from "@/src/assets/images";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter } from "next/navigation";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import { useEffect, useState } from "react";
import styles from "./BehindScene.module.css";

function BehindScene() {
  const column1Data = [
    { num: "01", title: "Own Your Impact", icon: images.icon1 },
    { num: "02", title: "Stay Curious", icon: images.icon2 },
    { num: "03", title: "Be Real, Not Right", icon: images.icon3 },
    { num: "04", title: "Practice Perspective", icon: images.icon4 },
  ];

  const column2Data = [
    { num: "05", title: "Recognise the Person", icon: images.icon5 },
    { num: "06", title: "Make it Safe", icon: images.icon6 },
    { num: "07", title: "Speak with Clarity", icon: images.icon7 },
    { num: "08", title: "Listen to Understand", icon: images.icon8 },
  ];

  const column3Data = [
    { num: "09", title: "Culture by Design", icon: images.icon9 },
    { num: "10", title: "Build Care & Belonging In", icon: images.icon10 },
    {
      num: "11",
      title: "Wellbeing is Performance Infrastructure",
      icon: images.icon11,
    },
    { num: "12", title: "Make it Sustainable", icon: images.icon12 },
  ];

  const router = useRouter();
  const [animateText, setAnimateText] = useState(false);
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setEnter(true);
  }, []);
  return (
    <div
      className={`min-h-screen bg-[#F5F0EB] p-6 font-sans ${styles.page} ${
        enter ? styles.enterActive : styles.enter
      }`}
    >
      <Image
        src={images.behindSceneImg}
        alt="shape"
        width={1500}
        className="absolute top-0 right-0 z-0"
      />
      <div className="relative z-10 px-8 py-6">
        <UserProfileHeader greetingColor="#0F4F58" nameColor="#0F4F58" />
        <div className="max-w-[900px] mx-auto text-center mt-20">
          <h1 className="text-[#0F4F58] text-[45px] font-[RocaTwo] leading-tight mb-10 font-bold">
            Behind The Scenes Of
            <br />
            Hi Humaniser!
          </h1>

          <p className="text-[#0F4F58] text-[26px] leading-relaxed mb-8 font-bold font-[RocaTwo]">
            Hi Humaniser! is built around one simple truth: work feels better —
            and delivers better — when we centre people, clarity, and
            connection.
          </p>

          <p className="text-[#0F4F58] text-[26px] leading-relaxed mb-8 font-bold font-[RocaTwo]">
            Every part of Hi Humaniser! works like a living system. The Pillars
            define what we stand for. The Principles turn those ideas into ways
            of working. And the Pathways and Team Rituals bring it all to life —
            through small, consistent actions that shape how people think,
            connect, and perform.
          </p>

          <p className="text-[#0F4F58] text-[26px] leading-relaxed font-bold font-[RocaTwo]">
            It’s a framework designed to make human habits visible — and
            performance sustainable.
          </p>
        </div>

        {/* Heart & Structure Section */}
        <div className="mt-32 px-8 max-w-[1200px] mx-auto ">
          {/* Heading */}
          <h2 className="text-[40px] font-[RocaTwo] mb-6 text-[#4BA6A6] font-bold">
            The Heart And Structure Of Hi Humaniser!
          </h2>
          <div className="ml-[28px]">
            {/* Intro Text */}
            <p className="text-[22px] max-w-[780px] leading-relaxed mb-4 text-[#0F4F58] font-[400] font-[Roboto]">
              At the foundation of Hi Humaniser! are three pillars — The Mindset
              We Bring, The Way We Connect, and The Culture We Shape.
            </p>

            <p className="text-[22px] max-w-[780px] leading-relaxed mb-16 text-[#0F4F58] font-[400] font-[Roboto]">
              Together, they hold 12 guiding principles that show what
              human-centred performance looks like in action — from owning our
              impact to making work sustainable.
            </p>
          </div>

          {/* Tilted Highlight Box */}
          <div className="relative max-w-[760px] mx-auto mb-24">
            {/* Image container */}
            <div className="relative transform -rotate-2">
              <Image
                src={images.screenPolygon}
                alt="shape"
                className="w-full h-auto"
              />

              {/* Text OVER image */}
              <p
                className="
        absolute inset-0
        flex items-center justify-center
        px-12
        text-center
        text-[23px]
        leading-relaxed
        font-bold
        font-[RocaTwo]
        text-[#0F4F58]
      "
              >
                These pillars and principles give every team a shared language
                for how we think, communicate, and build trust — turning good
                intentions into everyday habits that make work feel better and
                deliver stronger results.
              </p>
            </div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Pillar 1 */}
            <div className="bg-[#86C9C9] rounded-[18px] w-[312px] h-[270px] mx-auto relative overflow-hidden">
              {/* Polygon Shape (Behind) */}
              <div className="absolute left-0 top-0 h-full w-[221px] z-0">
                <Image
                  src={images.scenePolygon1}
                  alt="polygon"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text (Above Shape & shifted up) */}
              <div className="relative z-10 h-full flex items-start pt-[52px] pl-[42px]">
                <h3 className="text-[#0F4F58] font-[RocaTwo-Bold] font-bold text-[36px] leading-[44px] text-left">
                  THE MINDSET
                  <br />
                  WE
                  <br />
                  BRING
                </h3>
              </div>
            </div>

            {/* Pillar 2 */}

            <div className="bg-[#B9D9B1] rounded-[18px] w-[312px] h-[270px] mx-auto relative overflow-hidden">
              {/* Polygon Shape (Behind) */}
              <div className="absolute left-0 top-0 h-full w-[221px] z-0">
                <Image
                  src={images.scenePolygon1}
                  alt="polygon"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text (Above Shape & shifted up) */}
              <div className="relative z-10 h-full flex items-start pt-[52px] pl-[42px]">
                <h3 className="text-[#0F4F58] font-[RocaTwo-Bold] font-bold text-[36px] leading-[44px] text-left">
                  THE
                  <br />
                  WAY
                  <br />
                  WE
                  <br />
                  CONNECT
                </h3>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#F5C882] rounded-[18px] w-[312px] h-[270px] mx-auto relative overflow-hidden">
              {/* Polygon Shape (Behind) */}
              <div className="absolute left-0 top-0 h-full w-[221px] z-0">
                <Image
                  src={images.scenePolygon1}
                  alt="polygon"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text (Above Shape & shifted up) */}
              <div className="relative z-10 h-full flex items-start pt-[52px] pl-[42px]">
                <h3 className="text-[#0F4F58] font-[RocaTwo-Bold] font-bold text-[36px] leading-[44px] text-left">
                  THE
                  <br />
                  CULTURE
                  <br />
                  WE
                  <br />
                  SHAPE
                </h3>
              </div>
            </div>
          </div>

          {/* Principles Section */}
          <div className="mt-14">
            <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16 text-[#0F4F58]">
              {/* Column 1 */}
              <div className="space-y-12">
                {column1Data.map(({ num, title, icon }) => (
                  <div key={num} className="flex items-center gap-4">
                    {/* Icon */}
                    <div className="w-8 h-8 flex-shrink-0">
                      <Image
                        src={icon}
                        alt={title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Number + Text */}
                    <div className="flex items-center gap-3">
                      {/* Number */}
                      <span className="w-[32px] text-[22px] font-bold leading-none">
                        {num}
                      </span>

                      {/* Title */}
                      <p className="text-[18px] leading-[20px] max-w-[180px] font-normal font-[Roboto]">
                        {title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-12">
                {column2Data.map(({ num, title, icon }) => (
                  <div key={num} className="flex items-center gap-4">
                    {/* Icon */}
                    <div className="w-8 h-8 flex-shrink-0">
                      <Image
                        src={icon}
                        alt={title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Number + Text */}
                    <div className="flex items-center gap-3">
                      {/* Number */}
                      <span className="w-[32px] text-[22px] font-bold leading-none">
                        {num}
                      </span>

                      {/* Title */}
                      <p className="text-[18px] leading-[20px] max-w-[180px] font-normal font-[Roboto]">
                        {title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Column 3 */}
              <div className="space-y-12">
                {column3Data.map(({ num, title, icon }) => (
                  <div key={num} className="flex items-center gap-4">
                    {/* Icon */}
                    <div className="w-8 h-8 flex-shrink-0">
                      <Image
                        src={icon}
                        alt={title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Number + Text */}
                    <div className="flex items-center gap-3">
                      {/* Number */}
                      <span className="w-[32px] text-[22px] font-bold leading-none">
                        {num}
                      </span>

                      {/* Title */}
                      <p className="text-[18px] leading-[20px] max-w-[180px] font-normal font-[Roboto]">
                        {title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-14 items-center gap-6">
            <div className="text-[16px] leading-relaxed max-w-[500px] text-[#0F4F58] font-[400] font-[Aptos]">
              Download the Hi Humaniser! Framework — a one-page view of the
              pillars and principles that shape how we think, connect and
              perform together.
            </div>
            <div>
              <Image src={images.downloadImg} alt="download" />
            </div>
          </div>
        </div>

        <div className="max-w-[1100px] mt-14 mx-auto">
          {/* Heading */}
          <h2 className="text-[#4BA6A6] text-[40px] font-[RocaTwo] font-bold mb-6">
            Designed To Work As A System
          </h2>
          <div className="ml-[28px]">
            {/* Description */}
            <p className="text-[#0F4F58] text-[23px] leading-relaxed max-w-[760px] mb-8 font-[Roboto] font-[400]">
              These pillars and principles give teams a shared language for how
              they think, communicate, and build trust — turning good intentions
              into everyday behaviours.
            </p>

            {/* Bullet points */}
            <div className="text-[#0F4F58] text-[23px] font-[Roboto] mb-8 font-[400]">
              <p className="mb-2">HH! is designed to work:</p>
              <ul className="list-disc ml-[38px] space-y-1 ">
                <li>within teams</li>
                <li>across teams</li>
                <li>and even alongside teams who aren’t using the platform</li>
              </ul>
            </div>

            {/* Bottom text */}
            <p className="text-[#0F4F58] text-[23px] leading-relaxed max-w-[760px] mb-12 font-[Roboto] font-[400  ]">
              You don’t need perfect adoption for impact.
              <br />
              When a few people start working differently, the system begins to
              shift.
            </p>
          </div>
          {/* CTA Button */}
          <div className="flex justify-end">
            <CommonButtons
              label="Explore Pathways &
Team Rituals"
              bgColor="#4BA6A6"
              onClick={() => router.push("/")}
            />
          </div>
        </div>
        <div className="max-w-[1100px] mt-14 mx-auto">
          {/* Heading */}
          <h2 className="text-[#4BA6A6] text-[40px] font-[RocaTwo] font-bold mb-6">
            An Evidence-Led Framework
          </h2>
          <div className="ml-[28px]">
            {/* Description */}
            <p className="text-[#0F4F58] text-[23px] leading-relaxed max-w-[760px] mb-8 font-[Roboto] font-[400]">
              Hi Humaniser! is underpinned by a strong evidence base.
            </p>

            {/* Bullet points */}
            <div className="text-[#0F4F58] text-[23px] font-[Roboto] mb-8 font-[400]">
              <p className="mb-2">
                Every element of the framework — from guiding principles and
                behaviours to practical tools and shared practices — has been
                shaped through four complementary lenses:
              </p>
              <ul className="list-disc ml-[38px] space-y-1 ">
                <li>The brain — neuroscience</li>
                <li>The person — psychology and human behaviour</li>
                <li>
                  The workplace — organisational behaviour and team dynamics
                </li>
                <li>The wider system — social and cultural science</li>
              </ul>
            </div>

            {/* Bottom text */}
            <p className="text-[#0F4F58] text-[23px] leading-relaxed max-w-[760px] mb-12 font-[Roboto] font-[400  ]">
              Together, these lenses form the intellectual backbone of Hi
              Humaniser! — ensuring the framework is robust enough to support
              meaningful, human-centred performance in complex, real-world
              systems.
            </p>
          </div>
          {/* CTA Button */}
          <div className="flex justify-end">
            <CommonButtons
              label="Explore the
Research Room"
              bgColor="#4BA6A6"
              onClick={() => router.push("/")}
            />
          </div>
        </div>
        <div className="mt-14 mx-auto">
          <SuccessMessage
            text="You’ve seen what shapes Hi Humaniser!
 Now go experience it in motion."
            fontSize="text-[23px]"
            leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
            rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
          />
        </div>
        <div className="flex justify-start ">
          <div className="mt-14 flex">
            <div className="max-w-[350px] text-[#0F4F58] font-[Aptos] text-[17px]">
              Feeling inspired? Invite someone to explore Hi Humaniser!™
            </div>
            <div className="ml-[26px]">
              <PolygonButton
                width="85px"
                height="95px"
                bgColor="#F7C3BE"
                radius={14}
                topTilt={18}
                slantSide="right"
                bottomTilt={14}
              >
                <div className="h-full flex items-center justify-center text-center">
                  <span className="text-[#0F4F58] text-[18px] font-[RocaTwo] font-bold leading-[32px]">
                    Invite a Humaniser
                  </span>
                </div>
              </PolygonButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BehindScene;
