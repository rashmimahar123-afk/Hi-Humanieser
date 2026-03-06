"use client";

import images from "@/src/assets/images";
import ArrowSquare from "@/src/components/ArrowSquare/ArrowSquare";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import CustomDropdown from "@/src/components/CustomDropdown/CustomDropdown";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import { useRouter } from "next/navigation";

function TeamWorkshops() {
  const router = useRouter();
  return (
    <div className="relative min-h-screen bg-[#F3EEE7] px-10 py-10 z-10 font-serif">
      {/* TOP LEFT SHAPE */}

      <div>
        <UserProfileHeader greetingColor="#4ba6a6" nameColor="#0F4F58" />
      </div>

      <Image
        src={images.homeRec}
        alt="left-bg"
        width={421}
        height={414}
        className="absolute top-0 left-0 -z-10"
        priority
      />
      <Image
        src={images.profileNotification}
        alt="left-bg"
        width={630}
        height={630}
        className="absolute top-40 right-0 -z-10"
        priority
      />
      {/* WELCOME TEXT */}
      <div className="relative z-10 mt-8 ml-[85px]">
        <h3 className="text-[#0f4f58] text-[45px] font-bold font-[RocaTwo] font-[#0f4f58]">
          Cross-Team Workshops
        </h3>
        <div>
          <div className="text-[#0F4F58] text-[22px] leading-relaxed mb-2 font-bold font-[Roboto]">
            Turning shared practice into system learning.{" "}
          </div>
          <p className="text-[#0F4F58] text-[22px] leading-relaxed font-[Roboto]">
            Cross-Team Workshops are where teams meet to compare what they’ve
            been applying, surface what’s working (and what’s not), and shape
            the system they work within.
          </p>

          <p className="text-[#0F4F58] text-[22px] leading-relaxed">
            They create feedback loops that move learning beyond individual
            teams - and into how work actually flows across the organisation.
          </p>
        </div>
      </div>

      {/* WHY SECTION */}
      <div className="relative mt-10 ml-[85px] flex flex-col ">
        {/* HEADING */}
        <h2 className="text-[#0F4F58] text-[35px] font-[RocaTwo]  mb-2 font-bold">
          Why Cross-Team Workshops Matter
        </h2>

        <p className="text-[#0F4F58] text-[22px]  leading-relaxed mb-20 font-[Roboto] ml-4">
          Because improving how work feels (and how it performs) requires
          learning at the system level, not just within teams.
        </p>
        <div className="flex justify-center">
          <Image
            src={images.ConversationFirstImg}
            alt="system learning"
            className="absolute top-[180px] z-0 pointer-events-none"
            width={420}
            height={420}
          />
        </div>

        {/* CONTENT GRID */}
        <div className="relative z-10 grid grid-cols-2 gap-x-40 gap-y-20  w-full">
          {/* LEFT TOP */}
          <div className="flex gap-4">
            <div className="mt-[2px]">
              <ArrowSquare width={"32"} height={"24"} />
            </div>
            <div>
              <h4 className="text-[#0F4F58] font-semibold text-[22px] font-[Roboto]">
                They turn experience into insight
              </h4>
              <p className="text-[#0F4F58] text-[20px] leading-relaxed font-[Roboto]">
                Teams generate valuable learning through rituals and everyday
                practice. Cross-Team Workshops help make that learning visible,
                so it can be understood, shared, and built upon across teams.
              </p>
            </div>
          </div>

          {/* RIGHT TOP */}
          <div className="flex gap-4">
            <div className="mt-[2px]">
              <ArrowSquare width={"32"} height={"24"} />
            </div>
            <div>
              <h4 className="text-[#0F4F58] font-semibold text-[22px] font-[Roboto]">
                They create feedback loops
              </h4>
              <p className="text-[#0F4F58] text-[20px] leading-relaxed font-[Roboto]">
                Without regular cross-team reflection, organisations rely on
                assumptions. These workshops create feedback loops that surface
                what’s helping, what’s getting in the way, and what needs
                adjusting.
              </p>
            </div>
          </div>

          {/* LEFT BOTTOM */}
          <div className="flex gap-4">
            <div className="mt-[2px]">
              <ArrowSquare width={"32"} height={"24"} />
            </div>
            <div className="mt-[2px]">
              <h4 className="text-[#0F4F58] font-semibold text-[22px] font-[Roboto]">
                They support collaboration without forcing it
              </h4>
              <p className="text-[#0F4F58] text-[20px] leading-relaxed font-[Roboto]">
                When teams hear how others are experimenting and navigating
                challenges, trust and collaboration grow naturally. Not through
                mandates but through shared understanding.
              </p>
            </div>
          </div>

          {/* RIGHT BOTTOM */}
          <div className="flex gap-4">
            <div className="mt-[2px]">
              <ArrowSquare width={"32"} height={"24"} />
            </div>
            <div>
              <h4 className="text-[#0F4F58] font-semibold text-[22px] font-[Roboto]">
                They help shape the system, not just behaviours
              </h4>
              <p className="text-[#0F4F58] text-[20px] leading-relaxed font-[Roboto]">
                Patterns that appear across teams often point to system issues:
                structures, expectations, processes. Cross-Team Workshops help
                organisations decide what to strengthen, change, or redesign.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FINDING A HEALTHY RHYTHM SECTION */}
      <div className="relative mt-10 ml-20">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-[#0F4F58] text-[35px] font-[RocaTwo] mb-2 font-bold">
            Finding a Healthy Rhythm
          </h2>

          <div className="ml-4 font-[Roboto] text-[22px]  leading-relaxed text-[#0F4F58]">
            <p>
              Cross-Team Workshops work best when they’re regular, but not
              heavy.
            </p>

            <p>
              We recommend running a workshop{" "}
              <span className="font-bold">every 3-4 months,</span> enough time
              for teams to practise, experiment, and notice patterns, without
              losing momentum.
            </p>

            <p>
              Rather than one-off events, these workshops act as check-in
              points, a chance to step back from delivery, look across teams,
              and reflect on how work is actually unfolding.
            </p>
          </div>
        </div>

        {/* RIGHT PINK POLYGON */}
        <div className="flex justify-end">
          <PolygonButton
            width="480px"
            height="190px"
            bgColor="#fbe1de"
            radius={24}
            clipPath={`polygon(0% 0%, 94% 13%, 84% 80%, -4% 87%)`}
            childTop={8}
          >
            <div className="px-10 text-left text-[#0F4F58] text-[18px] leading-relaxed font-bold font-[Roboto]">
              90 minutes is enough to share experiences, surface patterns, and
              decide what to strengthen or adjust next.
            </div>
          </PolygonButton>
        </div>
      </div>

      {/* WHAT HAPPENS SECTION */}
      <div className="relative mt-10 ml-20">
        <div className="flex justify-between">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-[#0F4F58] text-[35px] font-[RocaTwo] mb-2 font-bold">
              What Happens in a Cross-Team Workshop?
            </h2>
            <div className="text-[#0F4F58] text-[20px] leading-relaxed ml-4 font-[Roboto]">
              <p>
                Cross-Team Workshops are simple, focused sessions designed to
                help teams learn from each other and reflect on how work is
                really playing out.
              </p>

              <p className=" mb-4">Teams come together to:</p>

              <ul className="list-disc pl-6  space-y-2 mb-6">
                <li>Share what they’ve been applying</li>
                <li>Reflect on what’s helping and what’s getting in the way</li>
                <li>Notice patterns across teams</li>
                <li>Agree what to strengthen or adjust next</li>
              </ul>

              <p className=" font-semibold">That’s it</p>
            </div>
          </div>

          {/* RIGHT GREEN POLYGON */}
          <div className="mt-45">
            {/* POLYGON WRAPPER */}
            <div className="relative w-[420px] h-[380px]">
              {/* POLYGON IMAGE */}
              <Image
                src={images.crossTeamPoly}
                alt="green-polygon"
                fill
                className="object-contain"
                priority
              />

              {/* CENTER TEXT */}
              <div className="absolute inset-0 flex items-center justify-center px-12 text-center font-[League Spartan] text-[#0F4F58] text-[19px] leading-relaxed font-semibold">
                <p>
                  You don’t need to solve everything in one session.
                  <br />
                  <br />
                  Progress builds through shared reflection over time.
                </p>
              </div>

              {/* LEFT ORANGE STROKES */}
              <Image
                src={images.arrowImg}
                alt="left-stroke"
                width={45}
                height={45}
                className="absolute left-[52px] top-[90px] rotate-[7deg]"
              />

              {/* RIGHT ORANGE STROKES */}
              <Image
                src={images.leftArrowImg}
                alt="right-stroke"
                width={55}
                height={55}
                className="absolute right-[64px] bottom-[70px] rotate-[25deg]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* READY TO USE WORKSHOP MATERIALS */}
      <div className="relative mt-10 ml-20">
        {/* HEADING */}
        <h2 className="text-[#0F4F58] text-[35px] font-[RocaTwo] mb-2 font-bold">
          Ready-to-use Workshop Materials
        </h2>

        {/* DESCRIPTION */}
        <div className=" text-[#0F4F58] text-[22px] leading-relaxed font-[Roboto] ml-4">
          <p>
            To make Cross-Team Workshops easy to run, we’ve created a{" "}
            <span className="font-semibold">ready-to-use workshop pack</span>{" "}
            you can adapt to your context.
          </p>

          <p>
            It includes a short facilitator guide with clear prompts, guidance
            on timing and flow, and a simple slide deck to support the
            conversation — all designed to help you hold thoughtful, practical
            sessions without adding unnecessary complexity.
          </p>
        </div>

        {/* DOWNLOAD BUTTONS */}
        {/* DOWNLOAD BUTTONS */}
        <div className="flex justify-end mt-10">
          <div className="flex flex-col gap-8 w-[780px]">
            {/* BUTTON 1 */}
            <div className="flex items-center justify-between">
              <button
                className="w-[620px] h-[78px] bg-[#f8e1b8] rounded-2xl 
                   flex items-center justify-center 
                   text-[#0F4F58] text-[24px] font-[RocaTwo] 
                   shadow-sm hover:opacity-90 transition"
              >
                Download the Cross-Team Workshop Pack
              </button>

              <div className="flex items-center gap-6">
                <Image
                  src={images.downloadIcon}
                  alt="download"
                  width={42}
                  height={42}
                />
                <span className="text-[#0F4F58] text-[22px]">ppt</span>
              </div>
            </div>

            {/* BUTTON 2 */}
            <div className="flex items-center justify-between">
              <button
                className="w-[620px] h-[78px] bg-[#f8e1b8] rounded-2xl 
                   flex items-center justify-center 
                   text-[#0F4F58] text-[24px] font-[RocaTwo] 
                   shadow-sm hover:opacity-90 transition"
              >
                View Facilitator Guidance
              </button>

              <div className="flex items-center gap-6">
                <Image
                  src={images.downloadIcon}
                  alt="download"
                  width={42}
                  height={42}
                />
                <span className="text-[#0F4F58] text-[22px]">pdf</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 relative">
        <SuccessMessage
          text="Humanising work doesn’t happen in isolation.
It happens when teams learn — together."
          fontSize="text-[22px]"
          leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
          rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
          fontColor="#0F4F58"
          left="410px"
          bottom="27px"
          rightImgRight="400px"
          rightImgBottom="26px"
          rotate="-35deg"
          maxWidth="460px"
        />
      </div>

      <div className="flex justify-end mt-10">
        {/* Bottom Buttons */}
        <div className="flex flex-col gap-4 items-center">
          <CommonButtons
            label={`Return to Champion Hub`}
            bgColor="#fbe1de"
            onClick={() => router.push("/dashboard")}
          />

          <CommonButtons
            label="Go to Homepage"
            bgColor="#fbe1de"
            onClick={() => router.push("/dashboard")}
          />
        </div>
      </div>
    </div>
  );
}

export default TeamWorkshops;
