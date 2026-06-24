"use client";

import images from "@/src/assets/images";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ProgressPill from "../../../ChampionHubModule/Components/ProgressPill/ProgressPill";
import { createPatternRows } from "@/src/lib/Helpers";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import PreviewQuestionsModal, {
  openPreviewQuestionsModal,
} from "../PreviewQuestionModal/PreviewQuestionModal";
import RunSurveyModal, {
  openRunSurveyModal,
} from "../RunSurveyModal/RunSurveyModal";
import PreviewContentModal from "../PreviewContentModal/PreviewContentModal";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";

function OrganisationDiagnostic() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const router = useRouter();
  const { user } = useAuthValue();
  const data = [
    { name: "Own Your Impact", value: 32 },
    { name: "Stay Curious", value: 21 },
    { name: "Be Real, Not Right", value: 18 },
    { name: "Recognise the Person", value: 11 },
    { name: "Make it Safe", value: 9 },
    { name: "Wellbeing is Infrastructure", value: 7 },
  ];

  const reflectionTexts = [
    "I’ve started pausing before reacting in meetings, just to understand what others might be trying to say. It’s surprising how much smoother conversations feel when I do that. People seem more open, and I feel less defensive. It’s such a small change, but it’s helping me focus on the bigger picture instead of winning the moment — and honestly, it’s making collaboration feel lighter and more human",
    "I’ve started pausing before reacting in meetings, just to understand what others might be trying to say. It’s surprising how much smoother conversations feel when I do that. People seem more open, and I feel less defensive. It’s such a small change, but it’s helping me focus on the bigger picture instead of winning the moment — and honestly, it’s making collaboration feel lighter and more human",
    "I’ve started pausing before reacting in meetings, just to understand what others might be trying to say. It’s surprising how much smoother conversations feel when I do that. People seem more open, and I feel less defensive. It’s such a small change, but it’s helping me focus on the bigger picture instead of winning the moment — and honestly, it’s making collaboration feel lighter and more human",

    "I’ve started pausing before reacting in meetings, just to understand what others might be trying to say. It’s surprising how much smoother conversations feel when I do that. People seem more open, and I feel less defensive. It’s such a small change, but it’s helping me focus on the bigger picture instead of winning the moment — and honestly, it’s making collaboration feel lighter and more human",
    "I’ve started pausing before reacting in meetings, just to understand what others might be trying to say. It’s surprising how much smoother conversations feel when I do that. People seem more open, and I feel less defensive. It’s such a small change, but it’s helping me focus on the bigger picture instead of winning the moment — and honestly, it’s making collaboration feel lighter and more human",
  ];

  const reflections = Array.from({ length: 5 }).map((_, i) => ({
    id: i + 1,
    text: reflectionTexts[i % reflectionTexts.length],
    rotate: i % 2 === 0 ? "-rotate-2" : "rotate-1",
    imageKey: images[`reflectionWall${(i % 5) + 1}` as keyof typeof images],
  }));

  const rows = createPatternRows(reflections, [3, 2]);

  const comparisonData = [
    { label: "Clarity", percent: 20, change: 8 },
    { label: "Alignment", percent: 40, change: -3 },
    { label: "Load", percent: 54, change: 6 },
    { label: "Safety", percent: 31, change: 0 },
    { label: "Ownership", percent: 62, change: 4 },
  ];
  const getArrow = (change: number) => {
    if (change > 0) return { symbol: "↑", color: "text-green-600" };
    if (change < 0) return { symbol: "↓", color: "text-red-600" };
    return { symbol: "↔", color: "text-[#E6A85C]" };
  };
  return (
    <>
      <div className="relative min-h-screen bg-[#F3EEE7] px-10 py-10 z-10 font-serif">
        {/* TOP LEFT SHAPE */}
        <Image
          src={images.notificationPolygon}
          alt="dash-green-rectangle"
          width={330}
          height={330}
          className="absolute top-0 left-0 z-0 pointer-events-none"
        />

        <Image
          src={images.profileNotification}
          alt="dash-rectangle"
          width={630}
          height={630}
          className="absolute top-44 right-0 z-0"
        />

        <div className="relative z-20 ">
          <UserProfileHeader
            greetingColor="#567F55"
            nameColor="#0F4F58"
            userInfo={user}
          />
        </div>
        <div className="relative z-10 ml-21 font-bold text-[#0F4F58] text-[45px] font-[RocaTwo] ml-[80px]">
          Partner Hub
        </div>
        {/* WELCOME TEXT */}
        <div className="relative z-10 mt-16">
          <h3 className="text-[#0f4f58] text-[30px] font-bold mb-4 font-[RocaTwo]">
            Organisation Diagnostic{" "}
          </h3>
          <div className="ml-12">
            <p className="text-[#0F4F58] text-[22px] leading-relaxed font-bold">
              Understand how work is really experienced across your
              organisation, from clarity to ownership.
            </p>
            <p className="text-[#0F4F58] text-[22px] leading-relaxed mt-10">
              A simple, repeatable survey that helps you see where the system is
              supporting performance and where it’s getting in the way.
            </p>
          </div>
        </div>

        <div className="mt-[150px] flex items-start gap-16 relative z-20">
          {/* LEFT: Polygon Button */}
          <div className=" flex flex-col items-center">
            <div
              onClick={() => openRunSurveyModal()}
              className="cursor-pointer"
            >
              <PolygonButton
                width="120px"
                height="100px"
                bgColor="#f8e1b8"
                radius={14}
                clipPath={`polygon(15% 20%, 81% 2%, 99% 76%, 5% calc(100% - 11px))`}
                childTop={11}
                decorationImg={{
                  src: images.arrowImg,
                  width: 48,
                  height: 48,
                }}
                decorationPosition={{
                  className: "-left-[25px] -top-[25px]",
                }}
              >
                <span className="text-[#0F4F58] text-[22px] font-[RocaTwo] font-bold leading-tight text-center">
                  Run Organisation Survey{" "}
                </span>
              </PolygonButton>
            </div>
            {/* Preview Questions */}
            <div>
              <button
                className="mt-4 text-[#4ba6a6]  text-[16px] font-[Roboto]"
                onClick={openPreviewQuestionsModal}
              >
                Preview Questions
              </button>
            </div>
          </div>

          {/* RIGHT: Description */}
          <div className="max-w-[1050px]">
            <p className="text-[#0F4F58] text-[20px] leading-relaxed font-[Roboto]">
              Start this survey to understand how work is really experienced
              across your organisation. Results are shown as five simple
              metrics, helping you see where things are working and where
              support may be needed.
            </p>

            <p className="text-[#0F4F58] text-[20px] mt-11 font-[Roboto]">
              It’s 10 short questions, takes less than 2 minutes, and responses
              are anonymous.
            </p>
          </div>
        </div>
        <div className="mt-[150px]">
          {/* Heading */}
          <h2 className="text-[#0F4F58] text-[32px] font-[RocaTwo] mb-6 font-bold">
            Survey Status
          </h2>
          <div className="flex flex-col justify-start relative">
            <PolygonButton
              width="480px"
              height="190px"
              bgColor="#fbe1de"
              radius={24}
              clipPath={`polygon(0% 0%, 94% 13%, 84% 80%, -4% 87%)`}
              childTop={8}
            ></PolygonButton>
            <div className="flex flex-col items-start absolute top-0 left-0 px-10 py-6 gap-2">
              <div>
                <p className="text-[20px] font-[Roboto] text-[#0f4f58]">
                  <span className="font-bold">Sent:</span> Today, 10:32
                </p>
              </div>
              <div>
                <p className="text-[20px] font-[Roboto] mt-2 text-[#0f4f58]">
                  <span className="font-bold">Responses:</span> 0 out of x (or X
                  as they come in)
                </p>
              </div>
              <div>
                <p className="text-[20px] font-[Roboto] mt-2 text-[#0f4f58]">
                  <span className="font-bold">Participation:</span> 0%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Poll Result */}
        <div className="mt-20">
          {/* Header Section */}
          <div>
            <h1 className="text-[#0F4F58] text-[32px] font-bold font-[RocaTwo]">
              Organisation Diagnostic
            </h1>
          </div>
          <div className="relative mt-6 rounded-xl overflow-hidden">
            {/* <div className="absolute top-8 right-10 text-right text-[#0F4F58] text-sm leading-tight">
          <p>State 4 – Poll reached threshold</p>
          <p>(≥ 50% responses, Champion can act)</p>
        </div> */}

            <div className="absolute left-0 top-0 ">
              <Image
                src={images.dottedCurve}
                alt="pattern"
                width={500}
                height={270}
              />
            </div>

            {/* Two Column Section */}
            <div className="grid grid-cols-2 gap-16 mt-2 ml-8">
              {/* LEFT COLUMN */}
              <div className="max-w-[575px]">
                <h3 className="text-[#0F4F58] text-[20px] font-bold text-center mb-6 font-[Roboto]">
                  How work is currently experienced{" "}
                </h3>

                <div className="bg-[#b9cbb7] rounded-2xl p-8 space-y-4">
                  <ProgressPill label="Clarity" percent={70} />
                  <ProgressPill label="Alignment" percent={60} />
                  <ProgressPill label="Load" percent={65} />
                  <ProgressPill label="Safety" percent={45} />
                  <ProgressPill label="Ownership" percent={25} />
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="max-w-[575px]">
                <h3 className="text-[#0F4F58] text-[20px] font-bold text-center mb-6 font-[Roboto]">
                  What this means for your organisation{" "}
                </h3>

                <div className="bg-[#b9cbb7] rounded-2xl p-8 space-y-4 text-[#0F4F58] text-[18px] leading-relaxed font-[Roboto] ">
                  <p>
                    Earlier issue-raising, better judgement in decisions, and
                    fewer surprises later.
                  </p>

                  <p>
                    Clear priorities, faster decision-making, and less rework
                    across the team.
                  </p>

                  <p>
                    Better coordination across teams, reducing silos, friction,
                    and delays in delivery.
                  </p>

                  <p>
                    Stronger ownership, more discretionary effort, and better
                    retention of key people.
                  </p>

                  <p>
                    More sustainable pace, fewer energy crashes, and steadier
                    delivery over time.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Participation */}
            <div className="mt-6 ml-4">
              <p className="text-[#0F4F58] text-[20px] font-bold font-[RocaTwo]">
                Participation: 8 of 12 team members responded (67%)
              </p>
            </div>
          </div>

          <div className="mt-10 flex justify-end items-center gap-4">
            <Image
              src={images.email}
              alt="email-icon"
              width={30}
              height={16}
              style={{ flexShrink: 0 }}
            />
            <div>Send a quick reminder</div>
          </div>
        </div>
        <div className="mt-16 flex items-start gap-16 relative z-20">
          {/* LEFT: Polygon Button */}
          <div className=" flex flex-col items-center">
            <PolygonButton
              width="120px"
              height="100px"
              bgColor="#f8e1b8"
              radius={14}
              clipPath={`polygon(15% 20%, 81% 2%, 99% 76%, 5% calc(100% - 11px))`}
              childTop={11}
              decorationImg={{
                src: images.arrowImg,
                width: 48,
                height: 48,
              }}
              decorationPosition={{
                className: "-left-[25px] -top-[25px]",
              }}
            >
              <span className="text-[#0F4F58] text-[22px] font-[RocaTwo] font-bold leading-tight text-center">
                Run Survey Again
              </span>
            </PolygonButton>
            <button
              className="mt-4 text-[#4ba6a6] text-[16px] font-[Roboto]"
              onClick={openPreviewQuestionsModal}
            >
              Preview Questions
            </button>
          </div>

          {/* RIGHT: Description */}
          <div>
            <p className="text-[#0F4F58] text-[20px] leading-relaxed font-[Roboto]">
              Run this survey again to track how things are evolving over time.
            </p>

            <p className="text-[#0F4F58] text-[20px]  font-[Roboto] leading-[100%]">
              Most organisations run this every 4–6 months, once changes have
              had time to take effect.
            </p>
          </div>
        </div>

        <div className="mt-10 flex  items-center gap-4">
          <Image
            src={images.baseLineImg}
            alt="email-icon"
            width={30}
            height={16}
            style={{ flexShrink: 0 }}
          />
          <div>
            <span className="font-bold">Start a new baseline. </span>Choose this
            if you want to reset and measure from a new starting point.
          </div>
        </div>

        <div className="flex justify-end mt-10">
          {/* Bottom Buttons */}
          <div className="flex flex-col gap-4 items-center">
            <CommonButtons
              label={`Return to 
Partner Hub`}
              bgColor="#fbe1de"
              onClick={() => router.push("/partner-hub")}
            />

            <CommonButtons
              label="Back to Homepage"
              bgColor="#fbe1de"
              onClick={() => router.push("/home")}
            />
          </div>
        </div>

        <div className="mt-10">
          {/* Header Section */}
          <div>
            <h1 className="text-[#0F4F58] text-[32px] font-bold font-[RocaTwo]">
              Organisation Diagnostic
            </h1>
          </div>
          <div className="relative mt-6 rounded-xl overflow-hidden">
            {/* <div className="absolute top-8 right-10 text-right text-[#0F4F58] text-sm leading-tight">
          <p>State 4 – Poll reached threshold</p>
          <p>(≥ 50% responses, Champion can act)</p>
        </div> */}

            <div className="absolute left-0 top-0 ">
              <Image
                src={images.dottedCurve}
                alt="pattern"
                width={500}
                height={270}
              />
            </div>

            {/* Two Column Section */}
            <div className="grid grid-cols-2 gap-16 mt-2 ml-8">
              {/* LEFT COLUMN */}
              <div className="max-w-[575px]">
                <h3 className="text-[#0F4F58] text-[20px] font-bold text-center mb-6 font-[Roboto]">
                  How work is currently experienced{" "}
                </h3>

                <div className="bg-[#b9cbb7] rounded-2xl p-8 space-y-1">
                  {/* Comparison Header */}
                  <div className="flex justify-end pr-6 text-[#0F4F58] text-[14px] font-[Roboto]">
                    <div className="text-center leading-tight">
                      Comparison <br /> Data
                    </div>
                  </div>

                  {comparisonData.map((item, index) => {
                    const arrow = getArrow(item.change);

                    return (
                      <div
                        key={index}
                        className="grid grid-cols-[1fr_50px_50px] items-center gap-4"
                      >
                        {/* Progress Pill (UNCHANGED) */}
                        <ProgressPill
                          label={item.label}
                          percent={item.percent}
                        />

                        {/* Arrow */}
                        <div className="flex justify-center">
                          <span className={`text-[26px] ${arrow.color}`}>
                            {arrow.symbol}
                          </span>
                        </div>

                        {/* % Change */}
                        <div className="text-[#0F4F58] text-[16px] font-[Roboto]">
                          {item.change}%
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="max-w-[575px]">
                <h3 className="text-[#0F4F58] text-[20px] font-bold text-center mb-6 font-[Roboto]">
                  What this means for your organisation{" "}
                </h3>

                <div className="bg-[#b9cbb7] rounded-2xl p-10 space-y-6 text-[#0F4F58] text-[18px] leading-relaxed font-[Roboto] ">
                  <p>
                    People have a clear sense of what good looks like and how
                    their work connects
                  </p>

                  <p>
                    People have a clear sense of what good looks like and how
                    their work connects
                  </p>

                  <p>
                    People have the time and space needed to do their work well
                  </p>

                  <p>
                    People raise concerns and see them handled constructively
                  </p>

                  <p>
                    People take initiative and are able to make decisions within
                    their role
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Participation */}
            <div className="mt-6 ml-4">
              <p className="text-[#0F4F58] text-[20px] font-bold font-[RocaTwo]">
                Participation: 8 of 12 team members responded (67%)
              </p>
            </div>
          </div>

          <div className="mt-10 flex justify-end items-center gap-4">
            <Image
              src={images.email}
              alt="email-icon"
              width={30}
              height={16}
              style={{ flexShrink: 0 }}
            />
            <div>Send a quick reminder</div>
          </div>
        </div>
        <div className="mt-16 flex items-start gap-16 relative z-20">
          {/* LEFT: Polygon Button */}
          <div className=" flex flex-col items-center">
            <PolygonButton
              width="120px"
              height="100px"
              bgColor="#f8e1b8"
              radius={14}
              clipPath={`polygon(15% 20%, 81% 2%, 99% 76%, 5% calc(100% - 11px))`}
              childTop={11}
              decorationImg={{
                src: images.arrowImg,
                width: 48,
                height: 48,
              }}
              decorationPosition={{
                className: "-left-[25px] -top-[25px]",
              }}
            >
              <span className="text-[#0F4F58] text-[22px] font-[RocaTwo] font-bold leading-tight text-center">
                Run Survey Again
              </span>
            </PolygonButton>
            <button
              className="mt-4 text-[#4ba6a6]  text-[16px] font-[Roboto]"
              onClick={openPreviewQuestionsModal}
            >
              Preview Questions
            </button>
          </div>

          {/* RIGHT: Description */}
          <div>
            <p className="text-[#0F4F58] text-[20px] leading-relaxed font-[Roboto]">
              Run this survey again to track how things are evolving over time.
            </p>

            <p className="text-[#0F4F58] text-[20px]  font-[Roboto] leading-[100%]">
              Most organisations run this every 4–6 months, once changes have
              had time to take effect.
            </p>
          </div>
        </div>

        <div className="mt-10 flex  items-center gap-4">
          <Image
            src={images.baseLineImg}
            alt="email-icon"
            width={30}
            height={16}
            style={{ flexShrink: 0 }}
          />
          <div>
            <span className="font-bold">Start a new baseline. </span>Choose this
            if you want to reset and measure from a new starting point.
          </div>
        </div>

        <div className="flex justify-end mt-10">
          {/* Bottom Buttons */}
          <div className="flex flex-col gap-4 items-center">
            <CommonButtons
              label={`Return to 
Partner Hub`}
              bgColor="#fbe1de"
              onClick={() => router.push("/overseer-hub")}
            />

            <CommonButtons
              label="Back to Homepage"
              bgColor="#fbe1de"
              onClick={() => router.push("/home")}
            />
          </div>
        </div>
        <PreviewQuestionsModal />
        <RunSurveyModal />
        <PreviewContentModal />
      </div>
    </>
  );
}

export default OrganisationDiagnostic;
