import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import images from "@/src/assets/images";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import PracticePerspective from "./PracticePerspective/PracticePerspective";
import styles from "./PersonalPathway.module.css";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import usePersonalPathwayQuery from "../Hooks/usePersonalPathwayQuery";
import useChooseMyselfQuery from "../../ChoosePathwayModule/Hooks/useChooseMyselfQuery";
import { useGetMppMessagesQuery } from "../../WelcomeModule/Hooks/useGetMppMessagesQuery";
import { getPathwayProgress } from "@/src/lib/Helpers";
import useAuthValue from "../../AuthModule/Hooks/useAuthValue";
import LogoutModal from "../../WelcomeModule/Components/LogoutModal/LogoutModal";

type ActivePathwayType = {
  pathwayNumber: string;
  uuid: string;
  data: any;
};

function PersonalPathway() {
  const router = useRouter();
  const { user } = useAuthValue();

  const [enter, setEnter] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    setEnter(true);
  }, []);

  const practiceRef = useRef<HTMLDivElement | null>(null);

  const openPracticePerspective = (index: number, currentMilestone: number) => {
    setActiveIndex(index);

    router.push(`?step=${currentMilestone}`, {
      scroll: false,
    });

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
        setActiveIndex(null);
        router.push("/personal-pathway", { scroll: false });
      }, 200);
    }
  };

  const { data, isLoading, isError, refetch } = usePersonalPathwayQuery();
  const pathwayData = data?.data?.pathways;
  const activePathways = pathwayData?.filter((item) => item.active);

  const formattedActivePathways: ActivePathwayType[] = activePathways
    ?.map((item) => {
      const pathwayKey = Object.keys(item).find(
        (key) => !["created", "uuid", "active"].includes(key),
      );

      if (!pathwayKey) return null;

      return {
        pathwayNumber: pathwayKey,
        uuid: item.uuid,
        data: item[pathwayKey as keyof typeof item],
      };
    })
    .filter(Boolean) as ActivePathwayType[];

  const { data: chooseMyselfData } = useChooseMyselfQuery();

  const getPathwayDetails = (principleNumber: number | string) => {
    const pillars = chooseMyselfData?.data?.[1]?.pillars || [];

    for (const pillar of pillars) {
      const found = pillar?.principles?.find(
        (p: any) => p.principle_number === Number(principleNumber),
      );

      if (found) {
        return {
          pathway_title: found.pathway_title,
          pillar_number: pillar.pillar_number,
          principle: found,
        };
      }
    }

    return {
      pathway_title: `Pathway ${principleNumber}`,
      pillar_number: null,
      principle: null,
    };
  };

  const { data: randomMessage } = useGetMppMessagesQuery();

  return (
    <>
      <div
        className={`relative min-h-screen bg-[#4BA6A6] px-4 sm:px-6 lg:px-8 py-6 font-sans z-10
          ${styles.page}
          ${styles.enterRight}
          ${enter ? styles.enterActive : ""}`}
      >
        <Image
          src={images.quizPolygon}
          alt="quiz-polygon"
          width={630}
          height={630}
          className="absolute top-0 right-0 -z-10 pointer-events-none w-[200px] sm:w-[350px] lg:w-[630px]"
        />

        {/* Header */}
        <UserProfileHeader
          greetingColor="#FFFFFF"
          nameColor="#0F4F58"
          userInfo={user}
        />

        <SuccessMessage
          text={randomMessage || ""}
          fontSize="text-[18px] sm:text-[24px] lg:text-[30px]"
          leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
          rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
          fontColor="#0F4F58"
          bottom="8px"
          rightImgBottom="8px"
          rotate="-35deg"
        />

        {/* Card */}
        <div className="mt-6 sm:mt-10 bg-[#F5F0EB] rounded-2xl shadow-lg max-w-[1200px] mx-auto p-4 sm:p-6 lg:p-10">
          <div className="max-w-[1135px]">
            <h2 className="text-[28px] sm:text-[38px] lg:text-[51px] font-[RocaTwo-Bold] text-[#0F4F58] font-bold flex justify-center text-center">
              My Personal Pathway
            </h2>

            <p className="mt-4 text-[#0F4F58] font-[700] font-[Roboto] text-[16px] sm:text-[20px] lg:text-[24px]">
              Your chosen pathways — ready when you are.
            </p>

            <p className="mt-2 text-[#0F4F58] text-[14px] sm:text-[17px] lg:text-[20px] font-[Roboto] font-[400] ml-0 sm:ml-[24px]">
              Every Pathway leads you through 3 milestones — learn it, choose
              your micro-actions, and start weaving the habit into your
              everyday.
            </p>

            <div className="mt-6 sm:mt-8 space-y-4">
              {formattedActivePathways?.map((item, index) => {
                const details = getPathwayDetails(item.pathwayNumber);
                const progressData = getPathwayProgress(item.data);
                const currentMilestone =
                  progressData.steps >= 3 ? 3 : progressData.steps + 1;
                return (
                  <div key={item.uuid}>
                    {/* ── DESKTOP (1024px+): original full single-row layout ── */}
                    <div
                      className={`hidden lg:flex items-center justify-between rounded-xl p-5 ${index % 2 === 1 ? "bg-[#F8E1B8]" : "bg-[#C2E2E2]"}`}
                    >
                      <div className="flex items-center gap-4">
                        {index % 2 === 1 ? (
                          <Image
                            src={images.wellbeingImg}
                            alt="path-eye"
                            width={93}
                            height={83}
                          />
                        ) : (
                          <Image
                            src={images.pathEye}
                            alt="path-eye"
                            width={93}
                            height={83}
                          />
                        )}
                        <h3 className="font-[700] text-[21px] text-[#3C4C59]">
                          {details?.pathway_title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-16">
                        <div className="flex flex-col items-center min-w-[90px]">
                          <button className="text-[15px] text-[#567F55] whitespace-nowrap">
                            view details
                          </button>
                          <div
                            className="relative cursor-pointer mt-2"
                            onClick={() =>
                              pathname !== null
                                ? ClosePracticePerspective()
                                : openPracticePerspective(
                                    index,
                                    currentMilestone,
                                  )
                            }
                          >
                            <Image
                              src={
                                index % 2 === 1
                                  ? images.wellBeingArrow
                                  : images.pathwayArrow
                              }
                              alt="arrow"
                              width={59}
                              height={37}
                            />
                            {activeIndex === index && (
                              <Image
                                src={images.orangeTick}
                                alt="tick"
                                width={40}
                                height={37}
                                className="absolute -top-[8%] right-[3%]"
                              />
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col items-center min-w-[120px] -mt-[20px]">
                          <p className="text-[#567F55] text-[15px] whitespace-nowrap">
                            {progressData.percentage}% completed
                          </p>
                          <div className="flex items-center gap-3 mt-2">
                            {[0, 1, 2].map((i) => (
                              <div
                                key={i}
                                className={`w-4 h-4 rounded-full border-2 ${i < progressData.steps ? "bg-[#4BA6A6] border-[#4BA6A6]" : "border-[#4BA6A6]"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <div
                          className="cursor-pointer relative"
                          // onClick={() =>
                          //   router.push(
                          //     `/pathway-card?pillar=${details?.pillar_number}&principle=${item?.pathwayNumber}`,
                          //   )
                          // }
                          onClick={() =>
                            window.open(
                              `/pathway-card?pillar=${details?.pillar_number}&principle=${item?.pathwayNumber}`,
                              "_blank",
                              "noopener,noreferrer",
                            )
                          }
                        >
                          {index % 2 === 1 ? (
                            <Image
                              src={images.wellBeingPoly}
                              alt="path-eye"
                              width={59}
                              height={80}
                            />
                          ) : (
                            <Image
                              src={images.practicePoly}
                              alt="poly"
                              width={59}
                              height={80}
                            />
                          )}
                          <button className="text-[#0F4F58] font-[RocaTwo-Bold] text-[20px] font-bold absolute top-[20px] left-0 right-0 text-center">
                            Explore Pathway
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* ── TABLET (640–1023px): scaled single-row layout ── */}
                    <div
                      className={`hidden sm:flex lg:hidden items-center justify-between rounded-xl px-4 py-4 ${index % 2 === 1 ? "bg-[#F8E1B8]" : "bg-[#C2E2E2]"}`}
                    >
                      {/* Left: icon + title */}
                      <div className="flex items-center gap-3 max-w-[45%]">
                        {index % 2 === 1 ? (
                          <Image
                            src={images.wellbeingImg}
                            alt="path-eye"
                            width={93}
                            height={83}
                            className="w-[62px] h-auto shrink-0"
                          />
                        ) : (
                          <Image
                            src={images.pathEye}
                            alt="path-eye"
                            width={93}
                            height={83}
                            className="w-[62px] h-auto shrink-0"
                          />
                        )}
                        <h3 className="font-[700] text-[16px] text-[#3C4C59] leading-snug">
                          {details?.pathway_title}
                        </h3>
                      </div>
                      {/* Right: controls */}
                      <div className="flex items-center gap-6">
                        {/* View Details + Arrow */}
                        <div className="flex flex-col items-center">
                          <button className="text-[13px] text-[#567F55] whitespace-nowrap">
                            view details
                          </button>
                          <div
                            className="relative cursor-pointer mt-1"
                            onClick={() =>
                              pathname !== null
                                ? ClosePracticePerspective()
                                : openPracticePerspective(
                                    index,
                                    currentMilestone,
                                  )
                            }
                          >
                            <Image
                              src={
                                index % 2 === 1
                                  ? images.wellBeingArrow
                                  : images.pathwayArrow
                              }
                              alt="arrow"
                              width={59}
                              height={37}
                              className="w-[48px] h-auto"
                            />
                            {activeIndex === index && (
                              <Image
                                src={images.orangeTick}
                                alt="tick"
                                width={40}
                                height={37}
                                className="absolute -top-[8%] right-[3%] w-[30px] h-auto"
                              />
                            )}
                          </div>
                        </div>
                        {/* Progress */}
                        <div className="flex flex-col items-center -mt-[14px]">
                          <p className="text-[#567F55] text-[13px] whitespace-nowrap">
                            {progressData.percentage}% completed
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            {[0, 1, 2].map((i) => (
                              <div
                                key={i}
                                className={`w-[13px] h-[13px] rounded-full border-2 ${i < progressData.steps ? "bg-[#4BA6A6] border-[#4BA6A6]" : "border-[#4BA6A6]"}`}
                              />
                            ))}
                          </div>
                        </div>
                        {/* Explore Pathway */}
                        <div
                          className="cursor-pointer relative shrink-0"
                          onClick={() =>
                            router.push(
                              `/pathway-card?pillar=${details?.pillar_number}&principle=${item?.pathwayNumber}`,
                            )
                          }
                        >
                          {index % 2 === 1 ? (
                            <Image
                              src={images.wellBeingPoly}
                              alt="path-eye"
                              width={59}
                              height={80}
                              className="w-[50px] h-auto"
                            />
                          ) : (
                            <Image
                              src={images.practicePoly}
                              alt="poly"
                              width={59}
                              height={80}
                              className="w-[50px] h-auto"
                            />
                          )}
                          <button className="text-[#0F4F58] font-[RocaTwo-Bold] text-[15px] font-bold absolute top-[14px] left-0 right-0 text-center leading-tight">
                            Explore
                            <br />
                            Pathway
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* ── MOBILE (<640px): two-row stacked layout ── */}
                    <div
                      className={`flex sm:hidden flex-col gap-3 rounded-xl px-3 py-3 ${index % 2 === 1 ? "bg-[#F8E1B8]" : "bg-[#C2E2E2]"}`}
                    >
                      {/* Row 1: icon + title */}
                      <div className="flex items-center gap-3">
                        {index % 2 === 1 ? (
                          <Image
                            src={images.wellbeingImg}
                            alt="path-eye"
                            width={93}
                            height={83}
                            className="w-[44px] h-auto shrink-0"
                          />
                        ) : (
                          <Image
                            src={images.pathEye}
                            alt="path-eye"
                            width={93}
                            height={83}
                            className="w-[44px] h-auto shrink-0"
                          />
                        )}
                        <h3 className="font-[700] text-[13px] text-[#3C4C59] leading-snug">
                          {details?.pathway_title}
                        </h3>
                      </div>
                      {/* Row 2: three controls always on one line */}
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col items-center w-[80px]">
                          <span className="text-[10px] text-[#567F55] whitespace-nowrap">
                            view details
                          </span>
                          <div
                            className="relative cursor-pointer mt-1"
                            onClick={() =>
                              pathname !== null
                                ? ClosePracticePerspective()
                                : openPracticePerspective(
                                    index,
                                    currentMilestone,
                                  )
                            }
                          >
                            <Image
                              src={
                                index % 2 === 1
                                  ? images.wellBeingArrow
                                  : images.pathwayArrow
                              }
                              alt="arrow"
                              width={59}
                              height={37}
                              className="w-[38px] h-auto"
                            />
                            {activeIndex === index && (
                              <Image
                                src={images.orangeTick}
                                alt="tick"
                                width={40}
                                height={37}
                                className="absolute -top-[8%] right-[3%] w-[24px] h-auto"
                              />
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-[#567F55] text-[10px] whitespace-nowrap">
                            {progressData.percentage}% completed
                          </span>
                          <div className="flex items-center gap-[6px] mt-1">
                            {[0, 1, 2].map((i) => (
                              <div
                                key={i}
                                className={`w-[10px] h-[10px] rounded-full border-2 ${i < progressData.steps ? "bg-[#4BA6A6] border-[#4BA6A6]" : "border-[#4BA6A6]"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <div
                          className="cursor-pointer relative w-[70px] flex flex-col items-center"
                          onClick={() =>
                            router.push(
                              `/pathway-card?pillar=${details?.pillar_number}&principle=${item?.pathwayNumber}`,
                            )
                          }
                        >
                          {index % 2 === 1 ? (
                            <Image
                              src={images.wellBeingPoly}
                              alt="path-eye"
                              width={59}
                              height={80}
                              className="w-[42px] h-auto"
                            />
                          ) : (
                            <Image
                              src={images.practicePoly}
                              alt="poly"
                              width={59}
                              height={80}
                              className="w-[42px] h-auto"
                            />
                          )}
                          <span className="text-[#0F4F58] font-[RocaTwo-Bold] text-[9px] font-bold absolute top-[8px] left-0 right-0 text-center leading-tight px-0.5">
                            Explore
                            <br />
                            Pathway
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Practice Perspective Panel */}
                    {activeIndex === index && (
                      <div ref={practiceRef}>
                        <PracticePerspective
                          ClosePracticePerspective={ClosePracticePerspective}
                          pathwayDetails={details?.principle}
                          pillarNumber={details?.pillar_number}
                          id={item?.uuid}
                          pathwayData={pathwayData}
                          formattedActivePathways={formattedActivePathways}
                          currentMilestone={currentMilestone}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-center sm:justify-end sm:mr-[85px]">
          <div className="mt-[40px] sm:mt-[60px] flex flex-col items-center gap-[14px]">
            <CommonButtons
              label="Go To Home"
              bgColor="#ACD5AB"
              onClick={() => router.push("/home")}
            />
            {formattedActivePathways?.length !== 0 ? (
              <CommonButtons
                label="Manage My Pathway"
                bgColor="#B7E0B5"
                onClick={() => router.push("/manage-pathway")}
              />
            ) : (
              <CommonButtons
                label="Choose My Pathway"
                bgColor="#B7E0B5"
                onClick={() => router.push("/choose-pathway")}
              />
            )}
          </div>
        </div>
      </div>
      <LogoutModal />
    </>
  );
}

export default PersonalPathway;
