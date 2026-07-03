"use client";

import images from "@/src/assets/images";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import { useRouter } from "next/navigation";

function HumanieserMoments() {
  const { user } = useAuthValue();
  const momentsList = [
    {
      title: "Weather Check",
      desc: "A simple way to sense how people are arriving - without asking for explanations or updates.",
      width: "160px",
      ppt: "/moments/weather.pptx",
      pdf: "/moments/weather.pdf",
    },
    {
      title: "What We’re Practising",
      desc: "A brief reminder of the behaviour or habit the team is currently exploring - so it doesn’t get lost in delivery.",
      width: "160px",
      ppt: "/moments/practicing.pptx",
      pdf: "/moments/practicing.pdf",
    },
    {
      title: "Common Trap to Watch For",
      desc: "A brief reminder that small misunderstandings often start with assumptions.",
      width: "160px",
      ppt: "/moments/traps.pptx",
      pdf: "/moments/traps.pdf",
    },
    {
      title: "Pause for Clarity",
      desc: "Share one anonymous reflection captured by the team - and let it speak for itself.",
      width: "160px",
      ppt: "/moments/clarity.pptx",
      pdf: "/moments/clarity.pdf",
    },
    {
      title: "Did You Know? ",
      desc: "A short insight about how the brain works and how it influences behaviour at work.",
      width: "160px",
      ppt: "/moments/know.pptx",
      pdf: "/moments/know.pdf",
    },
    {
      title: "From the Reflection Wall",
      desc: "An anonymous reflection captured from the team.",
      width: "160px",
      ppt: "/moments/reflection.pptx",
      pdf: "/moments/reflection.pdf",
    },
    {
      title: "Three Biases to Notice",
      desc: "A quick spotlight on thinking patterns that shape conversations and decisions.",
      width: "160px",
      ppt: "/moments/notice.pptx",
      pdf: "/moments/notice.pdf",
    },
    {
      title: "Join the Dots",
      desc: "A moment to step back and look beyond our immediate view and staying curious.",
      width: "160px",
      ppt: "/moments/dots.pptx",
      pdf: "/moments/dots.pdf",
    },
    {
      title: "What Could Go Wrong",
      desc: "A reminder to think beyond the plan and imagine what could get in the way.",
      width: "160px",
      ppt: "/moments/wrong.pptx",
      pdf: "/moments/wrong.pdf",
    },
  ];

  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-[#F3EEE7] px-10 py-10 z-10 font-serif overflow-x-hidden max-lg:px-6 max-sm:px-4 max-lg:py-6">
      {/* TOP LEFT SHAPE */}

      <div>
        <UserProfileHeader
          greetingColor="#0f4f58"
          nameColor="#0F4F58"
          userInfo={user}
        />
      </div>

      <Image
        src={images.homeRec}
        alt="left-bg"
        width={421}
        height={414}
        className="absolute top-0 left-0 -z-10 max-lg:w-[260px] max-lg:h-auto max-sm:w-[170px] max-[375px]:w-[120px]"
        priority
      />
      <Image
        src={images.profileNotification}
        alt="left-bg"
        width={630}
        height={630}
        className="absolute top-40 right-0 -z-10 max-lg:top-24 max-lg:w-[320px] max-lg:h-auto max-sm:top-16 max-sm:w-[190px] max-[375px]:top-24 max-[375px]:w-[130px] max-[375px]:-right-3"
        priority
      />
      {/* WELCOME TEXT */}
      <div className="relative z-10 mt-8 ml-[85px] max-lg:ml-0 max-lg:mt-6">
        <h3 className="text-[#0f4f58] text-[30px] font-bold mb-6 font-[RocaTwo] ml-12 max-lg:ml-0 max-lg:text-[26px] max-sm:text-[22px]">
          Hi Humaniser! Moments
        </h3>
        <div className="ml-20 max-lg:ml-0">
          <div className="text-[#0F4F58] text-[22px] leading-relaxed mb-6 font-bold max-lg:text-[18px] max-sm:text-[16px]">
            Short moments of attention - built into real meetings{" "}
          </div>
          <p className="text-[#0F4F58] text-[22px] leading-relaxed mb-6 max-lg:text-[18px] max-sm:text-[16px]">
            HH! Moments are short pauses you can use at the start or end of a
            meeting to bring attention to how people are working together.
          </p>

          <p className="text-[#0F4F58] text-[22px] leading-relaxed max-lg:text-[18px] max-sm:text-[16px]">
            They fit naturally into existing meeting rhythms (much like safety
            or ED&I moments) and usually take under five minutes.
          </p>
        </div>
        <div className="mt-[150px] space-y-6 max-lg:mt-16 max-sm:mt-12">
          {momentsList.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-8 max-lg:flex-col max-lg:items-stretch max-lg:gap-4"
            >
              {/* YELLOW BOX (ONLY TITLE + DESC) */}
              <div className="flex-1 bg-[#f8e1b8] rounded-2xl px-10 py-4 flex items-center max-lg:flex-col max-lg:items-start max-lg:px-6 max-lg:py-5 max-sm:px-4 max-sm:py-4">
                {/* TITLE */}
                <div className="shrink-0 w-[160px] max-lg:w-full max-lg:mb-3">
                  <h3 className="text-[#0F4F58] font-[RocaTwo] text-[23px] leading-snug font-bold max-lg:text-[20px] max-sm:text-[18px]">
                    {item.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div className="flex-1 px-10 max-lg:px-0 max-lg:w-full">
                  <p className="text-[#0F4F58] text-[19px] leading-relaxed font-[Roboto] max-lg:text-[16px] max-sm:text-[15px]">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE (SEPARATE DIV — NO BG) */}
              <div className="flex items-center gap-6 shrink-0 max-lg:justify-center max-lg:gap-8">
                <div className="flex items-center gap-2">
                  {/* PDF Download */}
                  <a href={item.pdf} download>
                    <Image
                      src={images.downloadIcon}
                      alt="download pdf"
                      width={42}
                      height={42}
                      className="cursor-pointer max-sm:w-[36px] max-sm:h-[36px]"
                    />
                  </a>
                  <span className="text-[#0F4F58] text-[19px] font-[Roboto] max-sm:text-[16px]">
                    pdf
                  </span>
                </div>
                <div className="mr-2 flex items-center gap-2 max-lg:mr-0">
                  {/* PPT Download */}
                  <a href={item.ppt} download>
                    <Image
                      src={images.downloadIcon}
                      alt="download ppt"
                      width={42}
                      height={42}
                      className="cursor-pointer max-sm:w-[36px] max-sm:h-[36px]"
                    />
                  </a>
                  <span className="text-[#0F4F58] text-[19px] font-[Roboto] max-sm:text-[16px]">
                    pptx
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-10 max-lg:justify-center">
          {/* Bottom Buttons */}
          <div className="flex flex-col gap-4 items-center max-sm:w-full">
            <CommonButtons
              label={
                user?.user_type === 3
                  ? `Return to Partner Hub`
                  : `Return to Champion Hub`
              }
              bgColor="#fbe1de"
              onClick={() =>
                router.push(
                  user?.user_type === 3 ? "/overseer-hub" : "/champion-hub",
                )
              }
            />

            <CommonButtons
              label="Go to Homepage"
              bgColor="#fbe1de"
              onClick={() => router.push("/home")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HumanieserMoments;
