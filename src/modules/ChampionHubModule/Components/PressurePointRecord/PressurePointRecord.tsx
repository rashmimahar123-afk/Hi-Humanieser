"use client";

import images from "@/src/assets/images";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ProgressPill from "../ProgressPill/ProgressPill";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import { useRef, useState } from "react";
import PreviousCycle from "../PreviousCycle/PreviousCycle";
import NeedMoreTimeModal, {
  openNeedMoreTimeModal,
} from "../NeedMoreTimeModal/NeedMoreTimeModal";
import YesExtendTimeModal from "../YesExtendTimeModal/YesExtendTimeModal";
import FinishEarlyModal, {
  openFinishEarlyModal,
} from "../FinishEarlyModal/FinishEarlyModal";
import YesCompleteRitualModal from "../YesCompleteRitualModal/YesCompleteRitualModal";

function PressurePointRecord() {
  const teamMembers = [
    { name: "Matthew Richardson", image: images.userProfile },
    { name: "Daniella James-Daniels", image: images.userProfile },
    { name: "Bibil Baby Paramatthatil", image: images.userProfile },
    { name: "Lorenzo DiCaprio", image: images.userProfile },
    { name: "George Brown", image: images.userProfile },

    { name: "Maria Palacios", image: images.maria },
    { name: "Daniella James-Daniels", image: images.userProfile },
    { name: "Bibil Baby Paramatthatil", image: images.userProfile },
    { name: "Lorenzo DiCaprio", image: images.userProfile },

    { name: "Matthew Richardson", image: images.userProfile },
    { name: "Daniella James-Daniels", image: images.userProfile },
    { name: "Bibil Baby Paramatthatil", image: images.userProfile },
    { name: "Lorenzo DiCaprio", image: images.userProfile },
    { name: "George Brown", image: images.userProfile },

    { name: "Maria Palacios", image: images.maria },
    { name: "Daniella James-Daniels", image: images.userProfile },
    { name: "Bibil Baby Paramatthatil", image: images.userProfile },
    { name: "Lorenzo DiCaprio", image: images.userProfile },
    { name: "Maria Palacios", image: images.maria },
    { name: "Daniella James-Daniels", image: images.userProfile },
    { name: "Bibil Baby Paramatthatil", image: images.userProfile },
    { name: "Lorenzo DiCaprio", image: images.userProfile },
    { name: "Daniella James-Daniels", image: images.userProfile },
    { name: "Bibil Baby Paramatthatil", image: images.userProfile },
    { name: "Lorenzo DiCaprio", image: images.userProfile },
    { name: "Lorenzo DiCaprio", image: images.userProfile },
    { name: "Daniella James-Daniels", image: images.userProfile },
    { name: "Bibil Baby Paramatthatil", image: images.userProfile },
  ];

  const chunkByPattern = (arr: any, pattern = [8, 6]) => {
    const chunks = [];
    let i = 0;
    let p = 0;

    while (i < arr.length) {
      chunks.push(arr.slice(i, i + pattern[p]));
      i += pattern[p];
      p = (p + 1) % pattern.length;
    }

    return chunks;
  };

  const rows = chunkByPattern(teamMembers);

  const router = useRouter();

  const [openPreviousPoll, setOpenPreviousPoll] = useState(false);
  const [selectedPreviousPoll, setSelectedPreviousPoll] = useState<
    string | null
  >(null);

  const previousPollOptions = ["Jan 2025", "Feb 2025", "March 2025"];

  const handleSelectPreviousPoll = (item: string) => {
    setSelectedPreviousPoll(item);
    setOpenPreviousPoll(false);
  };

  const [openPreviousRitual, setOpenPreviousRitual] = useState(false);
  const [selectedPreviousRitual, setSelectedPreviousRitual] = useState<
    string | null
  >(null);

  const previousRitualOptions = [
    "What's the Purpose",
    "Quarterly Reflection",
    "Team Reset Ritual",
  ];

  const handleSelectPreviousRitual = (item: string) => {
    setSelectedPreviousRitual(item);
    setOpenPreviousRitual(false);
  };

  return (
    <>
      <div className="relative min-h-screen bg-[#F3EEE7] px-10 py-10 z-10 font-serif">
        {/* TOP LEFT SHAPE */}

        <div>
          <UserProfileHeader greetingColor="#0f4f58" nameColor="#0F4F58" />
        </div>

        <Image
          src={images.homeRec}
          alt="left-bg"
          width={421}
          height={414}
          className="absolute top-0 left-0 -z-10"
          priority
        />
        <div className="relative z-10 ml-21 font-bold text-[#0F4F58] text-[45px] font-[RocaTwo]">
          Champion Hub
        </div>

        {/* WELCOME TEXT */}
        <div className="relative z-10 mt-8 ml-[85px]">
          <h3 className="text-[#0f4f58] text-[30px] font-bold mb-6 font-[RocaTwo] ml-12">
            Team Focus
          </h3>

          <p className="text-[#0F4F58] text-[22px] leading-relaxed mb-6">
            As a Champion, you play a key role in how work actually happens in
            your team. This hub gives you a clear view of what’s going on — and
            practical ways to guide focus, reduce friction, and keep progress
            moving.
          </p>

          <p className="text-[#0F4F58] text-[22px] leading-relaxed">
            You’ll find insights, signals, and actionable options to help you
            make deliberate decisions — so small, consistent actions strengthen
            clarity, coordination, and execution over time.
          </p>
        </div>

        {/* TEAM HEADER BAR */}
        <div className="bg-[#E6D2B1] p-6 mt-10">
          <div className=" px-10 flex items-center justify-end gap-10  mx-auto">
            <h2 className="text-[38px] font-[RocaTwo] text-[#0F4F58]">Team</h2>

            <div className="bg-[#F3EEE7] px-6 py-3 rounded-xl text-[#5E7F6F] text-[18px] font-[Roboto]">
              Systems Engineering - UK (allow 45 characters)
            </div>
          </div>

          <div className="relative z-20 mt-8 space-y-14 mb-[130px]">
            <div>
              <h3 className="text-[30px] font-[RocaTwo] font-bold text-[#0F4F58]">
                Hi Humaniser! Members
              </h3>
              <div className="text-[#0f4f58] text-[18px] font-[Roboto] mt-2 ml-2">
                A quick view of who you’re guiding through this shared practice.
              </div>
            </div>
            {rows.map((row, rowIndex) => {
              const cols = row.length; // 8 or 6 dynamically

              return (
                <div
                  key={rowIndex}
                  className={`grid justify-center gap-y-14 gap-x-14`}
                  style={{
                    gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                  }}
                >
                  {row.map((member: any, index: number) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="h-[88px] w-[88px] rounded-full overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={88}
                          height={88}
                          className="object-cover"
                        />
                      </div>

                      <p className="mt-4 text-[16px] font-[Roboto] text-[#0F4F58] leading-5 max-w-[140px]">
                        {member.name}
                      </p>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative bg-[#E6D2B1] p-10 mt-10 rounded-xl overflow-hidden">
          {/* Background Image */}
          <Image
            src={images.pressureImg}
            alt="left-bg"
            width={380}
            height={380}
            className="absolute top-0 left-0 opacity-90"
            priority
          />

          {/* Content Wrapper */}
          <div className="relative z-10">
            {/* Tilted Card Effect */}
            <div className="relative z-10 ">
              <h2 className="text-[#0F4F58] text-[32px] font-bold font-[RocaTwo]">
                Pressure point recorded.
              </h2>

              <p className="text-[#0F4F58] font-bold mb-6 text-[20px] font-[Roboto]">
                This has been saved in your Champion Notes so you can revisit it
                at any time.
              </p>

              <p className="text-[#0F4F58] leading-relaxed mb-6 text-[20px] font-[Roboto]">
                Before choosing a focus area and team ritual, the next step is
                to hear directly from your team. Start a short team poll to
                understand what would help them make the most progress right
                now.
              </p>

              <p className="text-[#0F4F58] text-[20px] font-[Roboto]">
                This input will sit alongside your chosen pressure point when
                you decide what to focus on together.
              </p>
            </div>
            <div className="flex items-start gap-4 mt-12">
              <div>
                <Image
                  src={images.screwImg}
                  alt="info"
                  width={25}
                  className="inline-block mr-2"
                />
              </div>

              <p className="text-[#0F4F58] text-[17px] font-[Roboto] leading-relaxed">
                The poll is one simple question and takes less than 10 seconds
                to answer.
                <br />
                To keep momentum, the poll will be sent automatically in a few
                days if no action is taken.
              </p>
            </div>
            {/* Bottom Section */}
            <div className="flex justify-end mt-4">
              <PolygonButton
                width="106px"
                height="107px"
                bgColor="#acd5ab"
                radius={14}
                clipPath={`polygon(
        0% 30%,
        92% 0%,
        100% 87%,
        3% calc(100% - 15px)
      )`}
              >
                <span className="text-[#0F4F58] text-[26px] font-[RocaTwo] font-bold leading-tight text-center">
                  Start Team Poll
                </span>
              </PolygonButton>
            </div>
          </div>
        </div>

        <div className="relative bg-[#E6D2B1] p-10 mt-10 rounded-xl overflow-hidden">
          {/* Background Image */}

          {/* Main Content */}
          <div className="max-w-3xl">
            <h1 className="text-[#0f4f58] text-[32px] font-bold font-[RocaTwo]">
              Team Poll Results
            </h1>

            <p className="text-[#0F4F58] text-[20px] leading-relaxed mb-6 font-[Roboto] ml-8">
              Your team is currently answering the Focus Poll. These early
              results are still taking shape — you’ll get a clearer picture as
              more people respond.
            </p>

            <p className="text-[#0F4F58] font-bold text-[20px] fonbt-[Roboto] mb-6 ml-8">
              So far: 4 of 12 members have responded (33%)
            </p>
          </div>

          {/* Right Side Hourglass */}
          <div className="absolute right-24 top-10">
            <Image
              src={images.signupTimer}
              alt="hourglass"
              width={120}
              height={120}
            />
          </div>
          <div className="absolute left-0 top-0 ">
            <Image
              src={images.dottedCurve}
              alt="pattern"
              width={500}
              height={270}
            />
          </div>
          <div className="flex justify-end ">
            <div className="mt-[60px] flex flex-col items-center gap-[14px] ">
              <CommonButtons
                label="Return to 
Champion Hub"
                bgColor="#cde3cc"
                onClick={() => router.push("/personal-pathway")}
              />
              <CommonButtons
                label="Go to Homepage"
                bgColor="#cde3cc"
                onClick={() => router.push("/personal-pathway")}
              />
            </div>
          </div>
        </div>

        <div className="relative bg-[#E6D2B1] p-10 mt-10 rounded-xl overflow-hidden">
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
          {/* Header Section */}
          <div>
            <h1 className="text-[#0F4F58] text-[32px] font-bold font-[RocaTwo]">
              Team Poll Results
            </h1>

            <p className="text-[#0F4F58] text-[20px] mb-6 leading-relaxed font-[Roboto] ml-8">
              Your team has shared where focused improvement would help them
              most right now.
            </p>

            <p className="text-[#0F4F58] text-[20px] leading-relaxed font-[Roboto] ml-8">
              These results don’t replace the pressure you’re managing — they
              help translate it into a clear, shared focus the team can work on
              together.
            </p>
          </div>

          {/* Two Column Section */}
          <div className="grid grid-cols-2 gap-16 mt-16 ml-8">
            {/* LEFT COLUMN */}
            <div>
              <h3 className="text-[#0F4F58] text-[20px] font-bold text-center mb-6 font-[Roboto]">
                What the team says would most support progress right now
              </h3>

              <div className="bg-[#EBCDB6] rounded-2xl p-8 space-y-6">
                <ProgressPill label="Built Trust" percent={70} />
                <ProgressPill label="Improve Clarity" percent={60} />
                <ProgressPill label="Strengthen Collaboration" percent={65} />
                <ProgressPill label="Foster Belonging" percent={45} />
                <ProgressPill label="Sustain Wellbeing" percent={25} />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div>
              <h3 className="text-[#0F4F58] text-[20px] font-bold text-center mb-6 font-[Roboto]">
                How this helps your leadership
              </h3>

              <div className="bg-[#EBCDB6] rounded-2xl p-8 space-y-8 text-[#0F4F58] text-[18px] leading-relaxed font-[Roboto]">
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

        <div className="mt-8">
          <h1 className="text-[#0F4F58] text-[32px] font-bold mb-2 font-[RocaTwo]">
            Choosing the focus for this cycle
          </h1>

          <p className="text-[#0F4F58] text-lg leading-relaxed ml-8">
            Based on the pressure you’re managing and what your team says would
            help most, the focus areas below are the strongest candidates right
            now.
          </p>
          <div
            className=" flex justify-center mt-[20px]"
            onClick={() => router.push("/continue-pressure")}
          >
            <div className="grid grid-cols-2 gap-10">
              {/* Focus Cards Section */}
              <div>
                <PolygonButton
                  height="129px"
                  bgColor="#f8e1b8"
                  clipPath={`polygon(
    0% 29px,
    100% 7%,
    87% 89%,
    20% calc(100% - 13px)
  )`}
                >
                  <div className="h-full flex items-center justify-center text-center">
                    <span className="text-[#0F4F58] text-[29px] font-[RocaTwo] font-bold leading-[28px]">
                      Build Trust{" "}
                    </span>
                  </div>
                </PolygonButton>
              </div>
              {/* -------slant Right Btn-------- */}
              <div>
                <PolygonButton
                  height="129px"
                  bgColor="#86c9c9"
                  radius={14}
                  topTilt={18}
                  slantSide="right"
                  clipPath={`polygon(17% 17px, 77% 11%, 100% 81%, 0% calc(100% - 15px))`}
                >
                  <div className="h-full flex items-center justify-center text-center">
                    <span
                      className="
      text-[#0F4F58]
      text-[29px]
      font-[RocaTwo]
      font-bold
      leading-[28px]
      text-center
      whitespace-normal
    "
                    >
                      Strengthen Collaboration{" "}
                    </span>
                  </div>
                </PolygonButton>
              </div>
            </div>
          </div>
          {/* Middle Text Section */}
          <div className=" mb-16 mt-4 ml-8">
            <p className="text-[#0F4F58] text-[20px] font-semibold mb-6">
              Selecting a focus area gives the team a shared direction.
            </p>

            <p className="text-[#0F4F58] text-[20px] leading-relaxed">
              In the next step, you can choose up to two team rituals — from the
              same focus area or from different ones — depending on what will
              help most.
            </p>
          </div>
          <div className="relative">
            <SuccessMessage
              text="Data informs the decision. Leadership makes the call.
"
              fontSize="text-[23px]"
              leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
              rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
              fontColor="#0F4F58"
              left="375px"
              bottom="-1px"
              rightImgRight="375px"
              rotate="-35deg"
              rightImgBottom="-1px"
            />
          </div>

          {/* Bottom Decorative + Footer */}
          <div className="flex items-start gap-6 mt-10 relative">
            {/* Hanging Dots Graphic */}
            <Image
              src={images.pollResultImg}
              alt="poll-img"
              width={100}
              height={100}
              className="absolute top-0 left-0 -z-10"
              priority
            />

            <p className="text-[#0F4F58] text-[18px] font-[Roboto]  leading-relaxed ml-[125px] mt-4">
              To keep your team’s rhythm flowing, we’ll automatically select a
              Team Ritual from the top-voted Focus Area if the ritual hasn’t
              been chosen after a few days.
            </p>
          </div>
        </div>

        <div className="mt-10 relative">
          {/* Section Title */}
          <h2 className="text-[32px] font-[RocaTwo] text-[#0F4F58] mt-6 font-bold">
            Active Focus & Engagement
          </h2>

          <div className="absolute left-0 top-0 ">
            <Image
              src={images.dottedCurve}
              alt="pattern"
              width={500}
              height={270}
            />
          </div>

          {/* Outer Beige Container */}
          <div className="bg-[#E3CFA8] rounded-[24px] p-10 mt-5">
            {/* Description Text */}
            <div>
              <p className="text-[22px] leading-[34px] text-[#0F4F58] font-[Roboto] font-medium">
                This is your team’s current improvement cycle. Track what’s
                live, how participation is evolving, and where attention may be
                needed.
              </p>

              <p className="text-[22px] leading-[34px] text-[#0F4F58] font-[Roboto]">
                Sustained performance doesn’t come from pressure — it comes from
                steady rhythm.
              </p>
            </div>
            {/* Two Column Layout */}
            <div className="grid grid-cols-2 gap-12  mt-4">
              {/* CARD */}
              {[1, 2].map((_, index) => (
                <div key={index} className="bg-[#cde3cc] rounded-[20px] p-10 ">
                  {/* TOP INFO SECTION */}
                  <div className="space-y-6">
                    {/* Focus Area */}
                    <div className="flex items-center justify-between">
                      <span className="text-[20px] font-[RocaTwo] text-[#0F4F58]">
                        Focus Area
                      </span>
                      <div className="bg-[#EDEBE7] rounded-full px-6 py-2 text-[#567F55] text-[18px] font-[Roboto]">
                        {index === 0 ? "Improve Clarity" : "Build Trust"}
                      </div>
                    </div>

                    {/* Active Team Ritual */}
                    <div className="flex items-center justify-between">
                      <span className="text-[20px] font-[RocaTwo] text-[#0F4F58] leading-tight">
                        Active Team <br /> Ritual
                      </span>
                      <div className="bg-[#EDEBE7] rounded-full px-6 py-2 text-[#567F55] text-[18px] font-[Roboto]">
                        {index === 0
                          ? "What Happens Next"
                          : "Say It in One Line"}
                      </div>
                    </div>

                    {/* Time Remaining */}
                    <div className="flex items-center justify-between">
                      <span className="text-[20px] font-[RocaTwo] text-[#0F4F58] leading-tight">
                        Time remaining <br /> in this cycle
                      </span>
                      <div className="bg-[#EDEBE7] rounded-full px-6 py-2 text-[#567F55] text-[18px] font-[Roboto]">
                        [5 Weeks]
                      </div>
                    </div>
                  </div>

                  {/* Engagement Section */}
                  <div className="mt-12">
                    <h3 className="text-[28px] font-[RocaTwo] text-[#0F4F58] mb-8">
                      Engagement so far:
                    </h3>

                    <ul className="space-y-6 text-[18px] text-[#0F4F58] font-[Roboto]">
                      <li className="flex items-start gap-4">
                        <Image
                          src={images.engagementImg}
                          alt="arrow"
                          width={22}
                          height={22}
                          className="mt-1"
                        />
                        <span>Awareness: 92% have viewed the ritual</span>
                      </li>

                      <li className="flex items-start gap-4">
                        <Image
                          src={images.engagementImg}
                          alt="arrow"
                          width={22}
                          height={22}
                          className="mt-1"
                        />
                        <span>
                          Participation: 67% have contributed at least one team
                          reflection
                        </span>
                      </li>

                      <li className="flex items-start gap-4">
                        <Image
                          src={images.engagementImg}
                          alt="arrow"
                          width={22}
                          height={22}
                          className="mt-1"
                        />
                        <span>
                          Momentum: 41% have contributed more than once
                        </span>
                      </li>

                      <li className="flex items-start gap-4">
                        <Image
                          src={images.engagementImg}
                          alt="arrow"
                          width={22}
                          height={22}
                          className="mt-1"
                        />
                        <span>
                          Sharing: 14 reflections shared on Reflection Wall
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative mt-10">
              <SuccessMessage
                text="These insights help you see where people are connecting, and where a gentle invitation might open the next step.
"
                fontSize="text-[23px]"
                leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
                rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
                fontColor="#0F4F58"
                left="230px"
                bottom="32px"
                rightImgRight="220px"
                rotate="-34deg"
                rightImgBottom="24px"
                maxWidth="800px"
              />
            </div>
          </div>
        </div>
        <div className="ml-20">
          <div className="flex items-center justify-between  mt-10">
            {/* LEFT SECTION */}
            <div className="flex items-center gap-10 ">
              <div className="cursor-pointer" onClick={openNeedMoreTimeModal}>
                {/* Polygon */}
                <PolygonButton
                  width="106px"
                  height="107px"
                  bgColor="#86c9c9"
                  radius={14}
                  clipPath={`polygon(
    15% 11%,
    81% 0%,
    100% 87%,
    3% calc(100% - 15px)
  )`}
                >
                  <span className="text-[#0F4F58] text-[20px] font-[RocaTwo] font-bold leading-tight text-center">
                    Need a bit <br />
                    <span className="whitespace-nowrap">more time? </span>
                  </span>
                </PolygonButton>
              </div>

              {/* Middle Text */}
              <p className="text-[#0F4F58] text-[22px] font-[Roboto]">
                Extend this cycle for up to 2 more weeks.
              </p>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="flex items-center justify-between">
            {/* LEFT SECTION */}
            <div className="flex items-center gap-10">
              <div
                className="cursor-pointer"
                onClick={() => openFinishEarlyModal()}
              >
                {/* Polygon */}
                <PolygonButton
                  width="106px"
                  height="107px"
                  bgColor="#acd5ab"
                  radius={14}
                  clipPath={`polygon(
    15% 11%,
    81% 0%,
    100% 87%,
    3% calc(100% - 15px)
  )`}
                >
                  <span className="text-[#0F4F58] text-[20px] font-[RocaTwo] font-bold leading-tight text-center">
                    Finished
                    <br />
                    <span className="whitespace-nowrap">early?</span>
                  </span>
                </PolygonButton>
              </div>

              {/* Middle Text */}
              <p className="text-[#0F4F58] text-[22px] font-[Roboto]">
                Mark these rituals as completed and start a new cycle.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end ">
          <div className="mt-[60px] flex flex-col items-center gap-[14px] ">
            <CommonButtons
              label="Return to 
Champion Hub"
              bgColor="#cde3cc"
              onClick={() => router.push("/personal-pathway")}
            />
            <CommonButtons
              label="Go to
Champion Notes"
              bgColor="#cde3cc"
              onClick={() => router.push("/personal-pathway")}
            />
          </div>
        </div>

        <div className="relative mt-8">
          <h1 className="text-4xl font-semibold text-[#144f4f] font-serif">
            Previous Cycles
          </h1>
          <p className="mt-4 text-[#2b5c5c] max-w-2xl text-lg">
            Your team’s previous cycles live here — including poll results and
            completed rituals. Use this as a quick reference when deciding what
            to focus on next.
          </p>

          {/* Decorative Clock */}
          <div className="absolute right-0  top-16 ">
            <Image
              src={images.timerImg}
              alt="pattern"
              width={100}
              height={170}
            />
          </div>
        </div>

        {/* ===== DROPDOWN 1 ===== */}
        <div className="bg-[#b9cbb7] rounded-2xl p-8 flex justify-between items-center mt-6">
          <h3
            onClick={() => setOpenPreviousPoll(!openPreviousPoll)}
            className="text-[#0f4f58] text-[28px] font-bold font-[RocaTwo] cursor-pointer"
          >
            Previous Cycles
          </h3>

          {/* Dropdown */}
          <div className="relative w-[257px]">
            <div
              onClick={() => setOpenPreviousPoll(!openPreviousPoll)}
              className="h-[52px] bg-white rounded-full px-6 flex items-center justify-between cursor-pointer"
            >
              <span
                className="truncate text-[17px] font-[Roboto]"
                style={{
                  color: selectedPreviousPoll ? "#567f55" : "#9CA3AF",
                }}
              >
                {selectedPreviousPoll || "[Date: Month - Year]"}
              </span>

              <Image
                src={images.dropdownImg}
                alt="arrow"
                width={18}
                height={18}
                className={`transition-transform duration-300 ${
                  openPreviousPoll ? "rotate-180" : ""
                }`}
              />
            </div>

            {openPreviousPoll && (
              <div className="absolute z-20 mt-2 w-full bg-white rounded-xl shadow-lg overflow-hidden">
                {previousPollOptions.map((item) => (
                  <div
                    key={item}
                    onClick={() => handleSelectPreviousPoll(item)}
                    className="px-6 py-3 text-[#0F4F58] cursor-pointer hover:bg-[#F5F0EB]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ===== EXPANDED RESULT UI ===== */}
        {selectedPreviousPoll && (
          <div className="bg-[#b9cbb7] rounded-2xl p-10 space-y- mt-4">
            <PreviousCycle />
          </div>
        )}

        <div className="mt-10 flex justify-end items-center  ">
          <div className="flex flex-col gap-4">
            <div>
              <CommonButtons
                label="Return to 
Champion Hub"
                bgColor="#FBE1DE"
                onClick={() => router.push("/dashboard")}
              />
            </div>
            <div>
              {" "}
              <CommonButtons
                label="Go to Homepage "
                bgColor="#FBE1DE"
                onClick={() => router.push("/dashboard")}
              />
            </div>
          </div>
        </div>
      </div>
      <NeedMoreTimeModal />
      <YesExtendTimeModal />
      <FinishEarlyModal />
      <YesCompleteRitualModal />
    </>
  );
}

export default PressurePointRecord;
