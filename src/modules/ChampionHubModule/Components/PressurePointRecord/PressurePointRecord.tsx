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
import PressurePointProgress from "../PressurePointProgress/PressurePointProgress";

function PressurePointRecord() {
  const focusOptions = ["Build Trust", "Improve Clarity", "Reduce Friction"];
  const ritualOptions = ["Weekly Sync", "Retro", "Check-in", "Planning"];
  const weekOptions = ["1 Week", "2 Weeks", "4 Weeks", "8 Weeks"];
  const members = [
    { name: "Matthew Richardson", img: "/m1.jpg" },
    { name: "Daniella James-Daniels", img: "/m2.jpg" },
    { name: "Bibil Baby Paramathatil", img: "/m3.jpg" },
    { name: "Lorenzo DiCaprio", img: "/m4.jpg" },
    { name: "George Brown", img: "/m5.jpg" },
  ];

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

  const [open, setOpen] = useState(false);
  const [openActiveRitual, setOpenActiveRitual] = useState(false);

  const [selected, setSelected] = useState("");
  const [selectedActiveRitual, setSelectedActiveRitual] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (item: string) => {
    setSelected(item);

    setOpen(false);
  };

  const handleSelectActiveRitual = (item: string) => {
    setSelectedActiveRitual(item);

    setOpenActiveRitual(false);
  };

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
          You’ll find insights, signals, and actionable options to help you make
          deliberate decisions — so small, consistent actions strengthen
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
              Before choosing a focus area and team ritual, the next step is to
              hear directly from your team. Start a short team poll to
              understand what would help them make the most progress right now.
            </p>

            <p className="text-[#0F4F58] text-[20px] font-[Roboto]">
              This input will sit alongside your chosen pressure point when you
              decide what to focus on together.
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
              The poll is one simple question and takes less than 10 seconds to
              answer.
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
            Your team is currently answering the Focus Poll. These early results
            are still taking shape — you’ll get a clearer picture as more people
            respond.
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
            Your team has shared where focused improvement would help them most
            right now.
          </p>

          <p className="text-[#0F4F58] text-[20px] leading-relaxed font-[Roboto] ml-8">
            These results don’t replace the pressure you’re managing — they help
            translate it into a clear, shared focus the team can work on
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
                Earlier issue-raising, better judgement in decisions, and fewer
                surprises later.
              </p>

              <p>
                Clear priorities, faster decision-making, and less rework across
                the team.
              </p>

              <p>
                Better coordination across teams, reducing silos, friction, and
                delays in delivery.
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
        <div className=" flex justify-center mt-[20px]">
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
            same focus area or from different ones — depending on what will help
            most.
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
            Team Ritual from the top-voted Focus Area if the ritual hasn’t been
            chosen after a few days.
          </p>
        </div>
      </div>

      <div className="relative bg-[#E6D2B1] p-10 mt-10 rounded-xl overflow-hidden">
        <div className="absolute left-0  top-11 ">
          <Image
            src={images.dottedCurve}
            alt="pattern"
            width={600}
            height={270}
          />
        </div>
        <div className="text-right flex items-center justify-end gap-6">
          <h3 className="text-[#0f4f58] text-[28px] font-bold font-[RocaTwo]">
            Current Focus
          </h3>
          <div className="grid grid-cols-[257px_1fr] items-center gap-6">
            {/* Dropdown */}
            <div className="relative">
              <div
                onClick={() => setOpen(!open)}
                className="
          h-[52px]
          bg-[#ffffff]
          rounded-full
          px-6
          flex
          items-center
          justify-between
          cursor-pointer
        "
              >
                <span
                  className="truncate text-[17px] font-[Roboto]"
                  style={{
                    color: selected ? "#567f55" : "#0000",
                  }}
                >
                  {selected || "Select Focus Area"}
                </span>

                <Image
                  src={images.dropdownImg}
                  alt="arrow"
                  width={18}
                  height={18}
                  className={`transition-transform ${open ? "rotate-180" : ""}`}
                />
              </div>

              {open && (
                <div className="absolute z-20 mt-2 w-full bg-white rounded-xl shadow-lg overflow-hidden">
                  {ritualOptions.map((item) => (
                    <div
                      key={item}
                      onClick={() => handleSelect(item)}
                      className="px-6 py-3 text-[#0F4F58] cursor-pointer hover:bg-[#F5F0EB]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>{" "}
        </div>
        <div className="text-right flex items-center justify-start gap-6 mt-4">
          <h3 className="text-[#0f4f58] text-[28px] font-bold font-[RocaTwo]">
            Active Team Ritual
          </h3>
          <div className="grid grid-cols-[257px_1fr] items-center gap-6">
            {/* Dropdown */}
            <div className="relative">
              <div
                onClick={() => setOpenActiveRitual(!openActiveRitual)}
                className="
          h-[52px]
          bg-[#ffffff]
          rounded-full
          px-6
          flex
          items-center
          justify-between
          cursor-pointer
        "
              >
                <span
                  className="truncate text-[17px] font-[Roboto]"
                  style={{
                    color: selectedActiveRitual ? "#567f55" : "#0000",
                  }}
                >
                  {selectedActiveRitual || "Select Focus Area"}
                </span>

                <Image
                  src={images.dropdownImg}
                  alt="arrow"
                  width={18}
                  height={18}
                  className={`transition-transform ${openActiveRitual ? "rotate-180" : ""}`}
                />
              </div>

              {openActiveRitual && (
                <div className="absolute z-20 mt-2 w-full bg-white rounded-xl shadow-lg overflow-hidden">
                  {ritualOptions.map((item) => (
                    <div
                      key={item}
                      onClick={() => handleSelectActiveRitual(item)}
                      className="px-6 py-3 text-[#0F4F58] cursor-pointer hover:bg-[#F5F0EB]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>{" "}
        </div>

        {/* ENGAGEMENT CARD */}
        <div className="bg-[#C2E2E259] rounded-[18px] p-6 mt-6 ml-2">
          <div className="flex items-center justify-end gap-4">
            <span className="text-[#0f4f58] text-[19px] font-bold font-[RocaTwo]">
              Time remaining in this cycle
            </span>
            <div className="bg-[#EDEBE7] rounded-full px-4 py-2 text-[#567f55] text-[18px] font-[Roboto]">
              [5 Weeks]
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-[#0f4f58] text-[27px] font-bold font-[RocaTwo]">
              Engagement so far:
            </h3>
          </div>
          <ul className="space-y-5 text-[#0f4f58] text-[18px] ml-22 font-[Roboto]">
            <li>
              <div className="flex items-center gap-2">
                {" "}
                <Image
                  src={images.engagementImg}
                  alt="arrow"
                  width={18}
                  height={18}
                />
                Awareness: 92% have viewed the ritual
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                {" "}
                <Image
                  src={images.engagementImg}
                  alt="arrow"
                  width={18}
                  height={18}
                />
                Participation: 67% have contributed at least one team reflection
              </div>
            </li>
            <li>
              {" "}
              <div className="flex items-center gap-2">
                {" "}
                <Image
                  src={images.engagementImg}
                  alt="arrow"
                  width={18}
                  height={18}
                />{" "}
                Momentum: 41% have contributed more than once
              </div>
            </li>
            <li>
              {" "}
              <div className="flex items-center gap-2">
                {" "}
                <Image
                  src={images.engagementImg}
                  alt="arrow"
                  width={18}
                  height={18}
                />{" "}
                Sharing: 14 new shared reflections this week
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <SuccessMessage
            text=" These insights help you see where people are connecting, and where a
            gentle invitation might open the next step.
"
            fontSize="text-[23px]"
            leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
            rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
            fontColor="#0F4F58"
            left="337px"
            bottom="253px"
            rightImgRight="330px"
            rotate="-35deg"
            rightImgBottom="253px"
          />
        </div>
        {/* ACTION SECTION */}
        <div className="space-y-2">
          {/* Need More Time */}
          <div className="flex items-center gap-6">
            <PolygonButton
              width="106px"
              height="85px"
              bgColor="#86c9c9"
              radius={14}
              clipPath={`polygon(
        0% 30%,
        92% 0%,
        100% 87%,
        3% calc(100% - 15px)
      )`}
            >
              <span className="text-[#0f4f58] text-[22px] font-[RocaTwo] font-bold leading-tight text-center">
                Need a bit more time?
              </span>
            </PolygonButton>
            <p className="text-[#0f4f58] text-[18px] font-[Roboto] leading-relaxed">
              Extend this ritual for up to 2 more weeks.
            </p>
          </div>

          {/* Finished Early */}
          <div className="flex items-start gap-6">
            <div className="flex items-center gap-6">
              <PolygonButton
                width="106px"
                height="85px"
                bgColor="#acd5ab"
                radius={14}
                clipPath={`polygon(
        0% 30%,
        92% 0%,
        100% 87%,
        3% calc(100% - 15px)
      )`}
              >
                <span className="text-[#0f4f58] text-[22px] font-[RocaTwo] font-bold leading-tight text-center">
                  Finished early?
                </span>
              </PolygonButton>
              <p className="text-[#0f4f58] text-[18px] font-[Roboto] leading-relaxed">
                Mark this ritual as completed and choose your next one.
              </p>
            </div>
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
          completed rituals. Use this as a quick reference when deciding what to
          focus on next.
        </p>

        {/* Decorative Clock */}
        <div className="absolute right-0  top-16 ">
          <Image src={images.timerImg} alt="pattern" width={100} height={170} />
        </div>
      </div>

      {/* ===== DROPDOWN 1 ===== */}
      <div className="bg-[#b9cbb7] rounded-2xl p-8 flex justify-between items-center mt-6">
        <h3
          onClick={() => setOpenPreviousPoll(!openPreviousPoll)}
          className="text-[#0f4f58] text-[28px] font-bold font-[RocaTwo] cursor-pointer"
        >
          Previous Poll Results
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
          <p className="text-[#737373] text-[23px] font-[Aptos] ml-20 mb-6">
            If we could make real progress on a few things as a team over the
            next few months, which 3 would you choose?
          </p>

          {/* Progress Grid */}
          <div className="grid grid-cols-2 gap-6 ml-20">
            <PressurePointProgress label="Built Trust" percent={70} />
            <PressurePointProgress label="Foster Belonging" percent={60} />
            <PressurePointProgress label="Improve Clarity" percent={65} />
            <PressurePointProgress label="Sustain Wellbeing" percent={25} />
            <PressurePointProgress
              label="Strengthen Collaboration"
              percent={50}
            />
          </div>

          <div className="text-right text-[#0F4F58] font-semibold font-[Roboto]">
            Participation: 8 of 12 members responded (67%)
          </div>
        </div>
      )}

      {/* ===== DROPDOWN 2 ===== */}
      <div className="bg-[#b9cbb7] rounded-2xl p-8 flex justify-between items-center mt-6">
        <h3 className="text-[#0f4f58] text-[28px] font-bold font-[RocaTwo]">
          Previous Team Rituals
        </h3>

        {/* Dropdown */}
        <div className="relative w-[257px]">
          <div
            onClick={() => setOpenPreviousRitual(!openPreviousRitual)}
            className="h-[52px] bg-white rounded-full px-6 flex items-center justify-between cursor-pointer"
          >
            <span
              className="truncate text-[17px] font-[Roboto]"
              style={{
                color: selectedPreviousRitual ? "#567f55" : "#9CA3AF",
              }}
            >
              {selectedPreviousRitual || "Select Focus Area"}
            </span>

            <Image
              src={images.dropdownImg}
              alt="arrow"
              width={18}
              height={18}
              className={`transition-transform duration-300 ${
                openPreviousRitual ? "rotate-180" : ""
              }`}
            />
          </div>

          {openPreviousRitual && (
            <div className="absolute z-20 mt-2 w-full bg-white rounded-xl shadow-lg overflow-hidden">
              {previousRitualOptions.map((item) => (
                <div
                  key={item}
                  onClick={() => handleSelectPreviousRitual(item)}
                  className="px-6 py-3 text-[#0F4F58] cursor-pointer hover:bg-[#F5F0EB]"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ===== EXPANDED RITUAL DETAILS SECTION ===== */}
      {selectedPreviousRitual && (
        <div className="bg-[#B9CBB7] rounded-2xl px-16 py-14 mt-6">
          {/* 2 COLUMN FORM LAYOUT */}
          <div className="grid grid-cols-2 gap-x-24 gap-y-10">
            {/* LEFT COLUMN */}
            <div className="space-y-10">
              {/* Team Ritual Name */}
              <div className="flex items-center justify-between">
                <label className="text-[#0F4F58] text-[22px] font-[RocaTwo] font-bold">
                  Team Rituals Name
                </label>

                <div className="w-[360px] h-[56px] bg-[#ECECEC] rounded-full px-6 flex items-center text-[#567F55] text-[20px]">
                  {selectedPreviousRitual}
                </div>
              </div>

              {/* Focus Area */}
              <div className="flex items-center justify-between">
                <label className="text-[#0F4F58] text-[22px] font-[RocaTwo] font-bold">
                  Focus Area
                </label>

                <div className="w-[360px] h-[56px] bg-[#ECECEC] rounded-full px-6 flex items-center text-[#567F55] text-[20px]">
                  [Focus Area]
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-10">
              {/* Start Date */}
              <div className="flex items-center justify-between">
                <label className="text-[#0F4F58] text-[22px] font-[RocaTwo] font-bold">
                  Start Date
                </label>

                <div className="w-[360px] h-[56px] bg-[#ECECEC] rounded-full" />
              </div>

              {/* End Date */}
              <div className="flex items-center justify-between">
                <label className="text-[#0F4F58] text-[22px] font-[RocaTwo] font-bold">
                  End Date
                </label>

                <div className="w-[360px] h-[56px] bg-[#ECECEC] rounded-full" />
              </div>
            </div>
          </div>

          {/* ================= PARTICIPATION SUMMARY ================= */}
          <div className="mt-16 ml-20">
            <h4 className="text-[#0F4F58] text-[28px] font-bold font-[RocaTwo] mb-8">
              Participation Summary
            </h4>

            <ul className="space-y-5 text-[#0f4f58] text-[18px] ml-20 font-[Roboto]">
              <li>
                <div className="flex items-center gap-2">
                  {" "}
                  <Image
                    src={images.engagementImg}
                    alt="arrow"
                    width={18}
                    height={18}
                  />
                  Awareness: 92% have viewed the ritual
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  {" "}
                  <Image
                    src={images.engagementImg}
                    alt="arrow"
                    width={18}
                    height={18}
                  />
                  Participation: 67% have contributed at least one team
                  reflection
                </div>
              </li>
              <li>
                {" "}
                <div className="flex items-center gap-2">
                  {" "}
                  <Image
                    src={images.engagementImg}
                    alt="arrow"
                    width={18}
                    height={18}
                  />{" "}
                  Consistency: 41% have contributed more than once
                </div>
              </li>
              <li>
                {" "}
                <div className="flex items-center gap-2">
                  {" "}
                  <Image
                    src={images.engagementImg}
                    alt="arrow"
                    width={18}
                    height={18}
                  />{" "}
                  Momentum: 14 reflections in total
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default PressurePointRecord;
