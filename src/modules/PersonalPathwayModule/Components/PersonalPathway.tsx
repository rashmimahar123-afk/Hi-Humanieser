import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import images from "@/src/assets/images";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import PracticePerspective from "./PracticePerspective/PracticePerspective";
import styles from "./PersonalPathway.module.css";

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
      className={`min-h-screen bg-[#4BA6A6] p-6 font-sans ${styles.page} ${
        enter ? styles.enterActive : styles.enter
      }`}
    >
      {/* Header */}
      <UserProfileHeader />
      <div className="flex items-center justify-center ">
        {/* Left decoration */}
        <Image
          src={images.arrowImg}
          alt="Left decoration"
          width={40}
          height={40}
          className="shrink-0"
        />

        {/* Banner text */}
        <h2
          className="text-[#0F4F58] text-center font-bold text-[30px] leading-snug -mr-[10px]"
          style={{ fontFamily: "League Spartan" }}
        >
          Great to see you again — ready to explore?
        </h2>

        {/* Right decoration */}
        <Image
          src={images.leftArrowImg}
          alt="Right decoration"
          width={60}
          height={60}
          className="shrink-0"
        />
      </div>

      {/* Card */}
      <div className="mt-10 bg-[#F5F0EB] rounded-2xl shadow-lg max-w-[1054px] mx-auto p-8">
        <div className="max-w-[987px]">
          <h2 className="text-[51px] font-[RocaTwo-Bold] text-[#0F4F58] font-bold flex justify-center">
            My Personal Pathway
          </h2>

          <p className="mt-4 text-[#0F4F58] font-[700] font-[Roboto] text-[20px]">
            Your chosen pathways — ready when you are. CURRENT JOURNEY{" "}
          </p>

          <p className="mt-2 text-[#0F4F58] text-[20px] font-[Roboto] font-[400] ml-[20px]">
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
                <h3 className="font-[700] font-[Canva Sans] text-[19px] text-[#3C4C59]">
                  Practice Perspective
                </h3>
              </div>

              <div className="flex items-center gap-6">
                <button className="text-[15px] text-[#567F55] w-[51px] ">
                  view details
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
                    className="mb-[20px]"
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
                  className="-mb-[16px]"
                />{" "}
                <div className="relative">
                  <Image
                    src={images.practicePoly}
                    alt="path-eye"
                    width={59}
                    height={80}
                  />{" "}
                  <button className="text-[#0F4F58] font-[RocaTwo-Bold] text-[18px] font-bold absolute top-[20px]">
                    Explore Pathway
                  </button>
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
                <h3 className="font-[700] font-[Canva Sans] text-[19px] text-[#3C4C59]">
                  Wellbeing is Performance Infraestructure
                </h3>
              </div>

              <div className="flex items-center gap-6">
                <button className="text-[15px] text-[#567F55] w-[51px] ">
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
                  <button className="text-[#0F4F58] font-[RocaTwo-Bold] text-[18px] font-bold absolute top-[20px]">
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
