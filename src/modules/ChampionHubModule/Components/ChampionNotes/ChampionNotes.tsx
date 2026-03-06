"use client";

import images from "@/src/assets/images";
import CustomDropdown from "@/src/components/CustomDropdown/CustomDropdown";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ChampionNotesSecondSection from "../ChampionNotesSecondSection/ChampionNotesSecondSection";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import MyNotes from "../MyNotes/MyNotes";
import ProfilePathwayCard from "@/src/modules/ProfileModule/Components/ProfilePathwayCard/ProfilePathwayCard";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";

function ChampionNotes() {
  const [openCurrent, setOpenCurrent] = useState(false);
  const [openPrevious, setOpenPrevious] = useState(false);

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

  const router = useRouter();
  return (
    <div className=" min-h-screen bg-[#F5F0EB] ">
      {/* TOP LEFT SHAPE */}
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
        <UserProfileHeader greetingColor="#0f4f58" nameColor="#0F4F58" />
      </div>
      <div className="px-8">
        <div className="relative z-10 ml-21 font-bold text-[#0F4F58] text-[45px] font-[RocaTwo]">
          Champion Hub
        </div>

        {/* WELCOME TEXT */}
        <div className="relative z-10 mt-8">
          <h3 className="text-[#0f4f58] text-[30px] font-bold  font-[RocaTwo] ml-12">
            Champion Notes{" "}
          </h3>

          <div className="ml-20">
            <div className="text-[#0F4F58] text-[22px] leading-relaxed mb-6 font-bold">
              Keep track of what you’re noticing and learning as the cycle
              unfolds.
            </div>

            <p className="text-[#0F4F58] text-[22px] leading-relaxed">
              These notes help you capture signals, decisions and reflections —
              so progress stays visible and future choices become easier.
            </p>
          </div>
        </div>
        <div className="mt-18">
          <h2 className="text-[32px] font-[RocaTwo] text-[#0F4F58] mt-6 font-bold">
            Active Focus & Engagement
          </h2>

          {/* ================= MAIN CARD ================= */}
          <div className="bg-[#f8e1b8] rounded-3xl px-16 py-14 mt-2">
            <div className="grid grid-cols-2 gap-x-28 gap-y-10">
              {/* ===== LEFT COLUMN ===== */}
              <div className="space-y-10">
                {/* Pressure Point */}
                <Field label="Pressure Point" value="Everything feels urgent" />

                {/* Focus Area */}
                <Field label="Focus Area" value="Build Trust" />

                {/* Team Ritual */}
                <Field label="Team Ritual" value="Say it in One Line" />
              </div>

              {/* ===== RIGHT COLUMN ===== */}
              <div className="space-y-10">
                {/* Started On */}
                <Field label="Started on" value="Date PP was chosen" />

                {/* Time Remaining */}
                <Field label="Time Remaining" value="5 Weeks" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <ChampionNotesSecondSection />
        </div>

        <div className="mt-10 relative">
          <SuccessMessage
            text="Shared habits inside one team often raise clarity and coordination across others."
            fontSize="text-[22px]"
            leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
            rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
            fontColor="#0F4F58"
            left="274px"
            bottom="-1px"
            rightImgRight="267px"
            rightImgBottom="-5px"
            rotate="-35deg"
          />
        </div>
        <div className="mt-10 ">
          <h2 className="text-[33px] text-[#0F4F58] font-[RocaTwo] font-bold">
            My Notes
          </h2>

          <p className="text-[22px] text-[#0F4F58] font-[Roboto] ml-2">
            Capture anything worth remembering for later.
          </p>

          {/* ================= TWO CARDS ================= */}
          <div className="grid grid-cols-2 gap-14 mt-6">
            <MyNotes />
            <MyNotes />
          </div>
        </div>

        <div className="relative z-10  mt-20">
          {/* Heading */}
          <h1 className="text-[33px] leading-[1.1] font-[RocaTwo] text-[#0F4F58] font-bold">
            What Good Looks Like
          </h1>

          {/* Subheading */}
          <h2 className="text-[24px] font-[Roboto] font-bold text-[#0F4F58] mt-4 ml-4">
            Urgency becomes something you manage — not something that manages
            you:
          </h2>

          {/* Bullet Points */}
          <ul className="list-disc pl-8  text-[24px] font-[Roboto] text-[#0F4F58] mt-4 ml-8">
            <li>
              Not everything lands on your desk at once — teams handle more
              decisions without waiting.
            </li>
            <li>
              Meetings end with clearer priorities instead of new last-minute
              requests.
            </li>
            <li>You have regular moments to think ahead, not only react.</li>
          </ul>
        </div>

        <div className=" mt-20 relative z-10 ">
          <div className="absolute right-0 top-0 ">
            <Image
              src={images.dottedCurve}
              alt="pattern"
              width={500}
              height={270}
            />
          </div>
          <h2 className="text-[#0F4F58] text-[33px] font-[RocaTwo] font-bold mt-[20px] ">
            Small Moves That Help
          </h2>

          <p className="text-[#0F4F58] text-[24px]  mt-4 ml-4 font-[Roboto]">
            If you want to ease the pressure a little faster, here are three
            small moves you can try.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-[120px] mt-8">
          {/* Card 1 */}
          <ProfilePathwayCard
            title="Ease the Pressure"
            description="Try one small structural shift to reduce friction this week."
            shapeImg={images.profileQuiz}
            width="44px"
          />

          {/* Card 2 */}
          <ProfilePathwayCard
            title="Cross-Team Workshops"
            description="Share patterns, surface issues early, and borrow what works elsewhere."
            shapeImg={images.profilePathway}
          />

          {/* Card 3 */}
          <ProfilePathwayCard
            title="HH! Moments"
            description="Start meetings with a 3-minute reset to improve focus and flow."
            shapeImg={images.profileChange}
          />
        </div>

        {/* Bottom Button */}
        <div className="mt-[60px] flex justify-end items-center  ">
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
    </div>
  );
}

export default ChampionNotes;

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <h4 className="text-[25px] text-[#0F4F58] font-bold font-[RocaTwo] w-[260px]">
        {label}
      </h4>

      <div className="w-[420px] h-[64px] bg-[#ffffff] rounded-full px-8 flex items-center text-[#567F55] text-[22px] font-[Roboto]">
        {value}
      </div>
    </div>
  );
}
