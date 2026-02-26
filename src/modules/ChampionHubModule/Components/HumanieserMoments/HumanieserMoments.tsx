"use client";

import images from "@/src/assets/images";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import CustomDropdown from "@/src/components/CustomDropdown/CustomDropdown";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import { useRouter } from "next/navigation";

function HumanieserMoments() {
  const momentsList = [
    {
      title: "Weather Check",
      desc: "A simple way to sense how people are arriving — without asking for explanations or updates.",
    },
    {
      title: "What We’re Practising",
      desc: "A brief reminder of the behaviour or habit the team is currently exploring — so it doesn’t get lost in delivery.",
    },
    {
      title: "Common Trap to Watch For",
      desc: "A quick spotlight on a common pattern that can quietly undermine good intentions — especially under pressure.",
    },
    {
      title: "A Reflection from the Wall",
      desc: "Share one anonymous reflection captured by the team — and let it speak for itself.",
    },
    {
      title: "What’s Helping Us Right Now?",
      desc: "A pause to notice what’s already working — so it doesn’t get sacrificed under pressure.",
    },
    {
      title: "Why pausing helps performance",
      desc: "Share one anonymous reflection from the team.",
    },
    {
      title: "A Bias to Watch For",
      desc: "A quick spotlight on a common pattern that can quietly undermine good intentions — especially under pressure.",
    },
    {
      title: "A Systems Reminder",
      desc: "Share one anonymous reflection captured by the team — and let it speak for itself.",
    },
    {
      title: "What Research Shows",
      desc: "A pause to notice what’s already working — so it doesn’t get sacrificed under pressure.",
    },
    {
      title: "Did You Know?",
      desc: "The brain at work",
    },
    {
      title: "HH! Moment 11",
      desc: "A pause to notice what’s already working — so it doesn’t get sacrificed under pressure.",
    },
    {
      title: "HH! Moment 12",
      desc: "Share one anonymous reflection from the team.",
    },
  ];
  const router = useRouter();
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
        <h3 className="text-[#0f4f58] text-[30px] font-bold mb-6 font-[RocaTwo] ml-12">
          Hi Humaniser! Moments
        </h3>
        <div className="ml-20">
          <div className="text-[#0F4F58] text-[22px] leading-relaxed mb-6 font-bold">
            Short moments of attention — built into real meetings{" "}
          </div>
          <p className="text-[#0F4F58] text-[22px] leading-relaxed mb-6">
            HH! Moments are short pauses you can use at the start or end of a
            meeting to bring attention to how people are working together.
          </p>

          <p className="text-[#0F4F58] text-[22px] leading-relaxed">
            They fit naturally into existing meeting rhythms — much like safety
            or ED&I moments — and usually take under five minutes.
          </p>
        </div>
        <div className="mt-14 space-y-6">
          {momentsList.map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              {/* YELLOW BOX (ONLY TITLE + DESC) */}
              <div className="flex-1 bg-[#E6D0A8] rounded-2xl px-10 py-7 flex items-center">
                {/* TITLE */}
                <div className="w-[260px] shrink-0">
                  <h3 className="text-[#0F4F58] font-[RocaTwo] text-[25px] leading-snug font-bold">
                    {item.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div className="flex-1 px-10">
                  <p className="text-[#0F4F58] text-[19px] leading-relaxed font-[Roboto]">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE (SEPARATE DIV — NO BG) */}
              <div className="flex items-center gap-6 shrink-0">
                {/* Download Icon */}
                <div className="w-10 h-10 rounded-md border border-[#E7A6A6] flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#E7A6A6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3v12" />
                    <path d="M7 10l5 5 5-5" />
                    <path d="M5 21h14" />
                  </svg>
                </div>

                {/* Plain Text Links */}
                <div className="flex items-center gap-6 text-[#0F4F58] text-[15px] font-[19px] font-[Roboto]">
                  <button className="hover:underline">pdf</button>
                  <button className="hover:underline">pttx</button>
                </div>
              </div>
            </div>
          ))}
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
    </div>
  );
}

export default HumanieserMoments;
