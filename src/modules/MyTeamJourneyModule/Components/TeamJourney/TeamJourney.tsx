import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import images from "@/src/assets/images";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import TeamJourneyPoll from "../TeamJourneyPoll/TeamJourneyPoll";
import styles from "./TeamJourney.module.css";

function TeamJourney() {
  const router = useRouter();
  const [activePathway, setActivePathway] = useState<
    "firstTeamJourney" | "secondTeamJourney" | null
  >(null);

  const [animateText, setAnimateText] = useState(false);

  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setEnter(true);
  }, []);

  const practiceRef = useRef<HTMLDivElement | null>(null);

  // const openPracticePerspective = () => {
  //   setActivePathway("firstTeamJourney");
  //   router.push("?step=1", { scroll: false });

  //   setTimeout(() => {
  //     practiceRef.current?.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }, 200);
  // };

  // const searchParams = useSearchParams();
  // const pathname = searchParams.get("step");

  // const ClosePracticePerspective = () => {
  //   if (pathname !== null) {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });

  //     setTimeout(() => {
  //       setActivePathway(null);
  //       router.push("/personal-pathway", { scroll: false });
  //     }, 200);
  //   }
  // };
  const ClosePracticePerspective = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      setActivePathway(null);
    }, 200);
  };

  return (
    <div
      className={`relative min-h-screen bg-[#4BA6A6] px-8 py-6 font-sans z-10 ${styles.page}
   ${styles.enterRight}
  ${enter ? styles.enterActive : ""} 
`}
    >
      <Image
        src={images.quizPolygon}
        alt="quiz-polygon"
        width={630}
        height={630}
        className="absolute top-0 right-0 -z-10 pointer-events-none"
      />

      {/* Header */}
      <UserProfileHeader greetingColor="#FFFFFF" nameColor="#0F4F58" />

      <SuccessMessage
        text="Great to see you again — ready to explore?"
        fontSize="text-[30px]"
        leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
        rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
        fontColor="#0F4F58"
        left="402px"
        top="125px"
        rightImgRight="390px"
        rightImgTop="122px"
        rotate="-35deg"
      />

      {/* Card */}
      <div className="mt-10 bg-[#F5F0EB] rounded-2xl shadow-lg max-w-[1200px] mx-auto p-10">
        <div className="max-w-[1135px]">
          <h2 className="text-[51px] font-[RocaTwo-Bold] text-[#0F4F58] font-bold flex justify-center">
            My Team Journey
          </h2>

          <p className="mt-4 text-[#0F4F58] font-[700] font-[Roboto] text-[24px]">
            Your team's new ritual is here!
          </p>

          <p className="mt-2 text-[#0F4F58] text-[20px] font-[Roboto] font-[400] ml-[24px]">
            This is what your Champion chose based on everyone’s input. You’ll
            be practising it together over the coming weeks — at a pace that
            works for your team.
          </p>

          {/* Pathway List */}
          <div className="mt-8 space-y-4">
            {/* Pathway 1 */}
            <div className="flex items-center justify-between bg-[#F5C882] rounded-xl p-5">
              <div className="bg-[#FBF4EF] rounded-[14px] px-6 py-5 max-w-[736px]">
                <p className="text-[25px] text-[#4BA6A6] mb-2 font-[RocaTwo] font-[400]">
                  Focus Area: Build Trust
                </p>

                <p className="text-[22px] leading-[1.6] text-[#737373] font-[Aptos] font-[400]">
                  Build Trust means creating shared ways of working where people
                  can rely on each other’s clarity, boundaries, follow-through,
                  and care — especially when it’s uncomfortable.
                </p>
              </div>

              {/* RIGHT BUTTON */}
              <div className="relative flex flex-col items-center mb-4 cursor-pointer">
                <p className="text-[15px] text-[#567F55] leading-tight text-center">
                  view details
                </p>

                <div
                  className="relative"
                  onClick={() =>
                    setActivePathway(
                      activePathway === "firstTeamJourney"
                        ? null
                        : "firstTeamJourney",
                    )
                  }
                >
                  <Image
                    src={images.pathwayArrow}
                    alt="down arrow"
                    width={60}
                    height={40}
                    className={`mt-2 transition-transform duration-300 ${
                      activePathway === "firstTeamJourney" ? "rotate-180" : ""
                    }`}
                  />

                  {/* ✅ Tick when dropdown open */}
                  {activePathway === "firstTeamJourney" && (
                    <Image
                      src={images.orangeTick}
                      alt="tick"
                      width={28}
                      height={28}
                      className="absolute top-4 right-3"
                    />
                  )}
                </div>
              </div>

              {/* view details */}

              {/* Explore Button Wrapper */}
              <div
                className="relative cursor-pointer"
                // onClick={() => {
                //   if (pathname !== null) {
                //     ClosePracticePerspective();
                //   } else {
                //     openPracticePerspective();
                //   }
                // }}
                onClick={() => router.push("/conversation")}
              >
                {/* Decorative Arrow stroke */}
                <Image
                  src={images.leftArrowImg}
                  alt="arrow-stroke"
                  width={45}
                  height={45}
                  className="absolute -top-6 -right-6 -rotate-[42deg]"
                />

                {/* Polygon Background */}
                <Image
                  src={images.teamPoly}
                  alt="Explore Focus Area"
                  width={140}
                  height={100}
                />

                {/* Text Centered */}
                <span
                  className="
        absolute inset-0
        flex items-center justify-center
        text-[#F5F0EB]
        font-[RocaTwo]
        font-bold
        text-[20px]
        text-center leading-tight
        px-2
      "
                >
                  Explore
                  <br />
                  Focus Area
                </span>

                {/* Tick when active */}
                {/* {pathname !== null && (
                  <Image
                    src={images.orangeTick}
                    alt="orange-tick"
                    width={40}
                    height={37}
                    className="absolute -top-2 -right-2"
                  />
                )} */}
              </div>
            </div>

            {activePathway === "firstTeamJourney" && (
              <div ref={practiceRef}>
                <TeamJourneyPoll
                  ClosePracticePerspective={ClosePracticePerspective}
                />
              </div>
            )}
            {/* Pathway 2 */}
            <div className="flex items-center justify-between bg-[#F5C882] rounded-xl p-5">
              <div className="bg-[#FBF4EF] rounded-[14px] px-6 py-5 max-w-[736px]">
                <p className="text-[25px] text-[#4BA6A6] mb-2 font-[RocaTwo] font-[400]">
                  Focus Area: Build Trust
                </p>

                <p className="text-[22px] leading-[1.6] text-[#737373] font-[Aptos] font-[400]">
                  Build Trust means creating shared ways of working where people
                  can rely on each other’s clarity, boundaries, follow-through,
                  and care — especially when it’s uncomfortable.
                </p>
              </div>

              {/* RIGHT BUTTON */}
              <div className="flex flex-col items-center mb-4 cursor-pointer">
                <p className="text-[15px] text-[#567F55] leading-tight text-center">
                  view details
                </p>

                <Image
                  src={images.pathwayArrow}
                  alt="down arrow"
                  width={60}
                  height={40}
                  className={`mt-2 transition-transform duration-300`}
                />
              </div>

              {/* view details */}

              {/* Explore Button Wrapper */}
              <div className="relative cursor-pointer">
                {/* Decorative Arrow stroke */}
                <Image
                  src={images.leftArrowImg}
                  alt="arrow-stroke"
                  width={45}
                  height={45}
                  className="absolute -top-6 -right-6 -rotate-[42deg]"
                />

                {/* Polygon Background */}
                <Image
                  src={images.teamPoly}
                  alt="Explore Focus Area"
                  width={140}
                  height={100}
                />

                {/* Text Centered */}
                <span
                  className="
        absolute inset-0
        flex items-center justify-center
        text-[#F5F0EB]
        font-[RocaTwo]
        font-bold
        text-[20px]
        text-center leading-tight
        px-2
      "
                >
                  Explore
                  <br />
                  Focus Area
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TeamJourney;
