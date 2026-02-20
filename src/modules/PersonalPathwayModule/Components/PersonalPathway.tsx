import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import images from "@/src/assets/images";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import PracticePerspective from "./PracticePerspective/PracticePerspective";
import styles from "./PersonalPathway.module.css";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";

function PersonalPathway() {
  const router = useRouter();
  const [activePathway, setActivePathway] = useState<
    "practice" | "wellbeing" | null
  >(null);

  const [animateText, setAnimateText] = useState(false);

  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setEnter(true);
  }, []);

  const practiceRef = useRef<HTMLDivElement | null>(null);

  const openPracticePerspective = () => {
    setActivePathway("practice");
    router.push("?step=1", { scroll: false });

    setTimeout(() => {
      practiceRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);
  };

  const searchParams = useSearchParams();
  const pathname = searchParams.get("step");

  const ClosePracticePerspective = () => {
    if (pathname !== null) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setTimeout(() => {
        setActivePathway(null);
        router.push("/personal-pathway", { scroll: false });
      }, 200);
    }
  };

  return (
    <div
      className={`relative min-h-screen bg-[#4BA6A6] px-8 py-6 font-sans z-10
  ${styles.page} ${enter ? styles.enterActive : styles.enter}`}
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
            My Personal Pathway
          </h2>

          <p className="mt-4 text-[#0F4F58] font-[700] font-[Roboto] text-[24px]">
            Your chosen pathways — ready when you are.
          </p>

          <p className="mt-2 text-[#0F4F58] text-[20px] font-[Roboto] font-[400] ml-[24px]">
            Every Pathway leads you through 3 milestones — learn it, choose your
            micro-actions, and start weaving the habit into your everyday.
          </p>

          {/* Pathway List */}
          <div className="mt-8 space-y-4">
            {/* Pathway 1 */}
            <div className="flex items-center justify-between bg-[#C2E2E2] rounded-xl p-5">
              <div className="flex items-center gap-4">
                <Image
                  src={images.pathEye}
                  alt="path-eye"
                  width={93}
                  height={83}
                />
                <h3 className="font-[700] font-[Canva Sans] text-[21px] text-[#3C4C59]">
                  Practice Perspective
                </h3>
              </div>

              <div className="grid grid-cols-[70px_70px_120px_80px] items-center gap-12">
                <button className="text-[15px] text-[#567F55] text-left leading-tight ml-[57px]">
                  view
                  <br />
                  details
                </button>
                <div
                  className="relative cursor-pointer"
                  onClick={() => {
                    if (pathname !== null) {
                      ClosePracticePerspective();
                    } else {
                      openPracticePerspective();
                    }
                  }}
                >
                  <Image
                    src={images.pathwayArrow}
                    alt="path-eye"
                    width={59}
                    height={37}
                  />

                  {pathname !== null && (
                    <Image
                      src={images.orangeTick}
                      alt="orange-tick"
                      width={40}
                      height={37}
                      className="mb-[20px] absolute -top-[8%] right-[3%]"
                    />
                  )}
                </div>
                <Image
                  src={images.pathwayTimer}
                  alt="path-eye"
                  width={102}
                  height={102}
                />{" "}
                <div
                  className="relative flex items-center justify-center cursor-pointer"
                  onClick={() => router.push("/pathway-card")}
                >
                  <Image
                    src={images.practicePoly}
                    alt="poly"
                    width={59}
                    height={80}
                  />
                  <span className="absolute text-[#0F4F58] font-[RocaTwo-Bold] text-[20px] font-bold text-center leading-tight">
                    Explore
                    <br />
                    Pathway
                  </span>
                </div>
              </div>
            </div>

            {activePathway === "practice" && (
              <div ref={practiceRef}>
                <PracticePerspective
                  ClosePracticePerspective={ClosePracticePerspective}
                />
              </div>
            )}
            {/* Pathway 2 */}
            <div className="flex items-center justify-between bg-[#F8E1B8] rounded-xl p-5">
              <div className="flex items-center gap-4">
                <Image
                  src={images.wellbeingImg}
                  alt="path-eye"
                  width={93}
                  height={83}
                />
                <h3 className="font-[700] font-[Canva Sans] text-[21px] text-[#3C4C59] max-w-[400px]">
                  Wellbeing is Performance Infraestructure
                </h3>
              </div>

              <div className="grid grid-cols-[70px_70px_120px_80px] items-center gap-12">
                <button className="text-[15px] text-[#567F55] text-left leading-tight ml-[57px]">
                  view details
                </button>
                <Image
                  src={images.wellBeingArrow}
                  alt="path-eye"
                  width={59}
                  height={37}
                  className="mb-[20px]"
                />
                <Image
                  src={images.pathwayTimer}
                  alt="path-eye"
                  width={102}
                  height={102}
                  className="-mb-[16px]"
                />{" "}
                <div className="relative">
                  <Image
                    src={images.wellBeingPoly}
                    alt="path-eye"
                    width={59}
                    height={80}
                  />{" "}
                  <button className="text-[#0F4F58] font-[RocaTwo-Bold] text-[20px] font-bold absolute top-[20px]">
                    Explore Pathway
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end mr-[85px]">
        <div className="mt-[60px] flex flex-col items-center gap-[14px] ">
          <CommonButtons
            label="See my Dashboard"
            bgColor="#ACD5AB"
            onClick={() => router.push("/choose-pathway")}
          />

          <CommonButtons
            label="Change my Pathway"
            bgColor="#B7E0B5"
            onClick={() => router.push("/change-pathway")}
          />
        </div>
      </div>
    </div>
  );
}
export default PersonalPathway;
