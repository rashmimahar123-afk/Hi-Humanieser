import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import images from "@/src/assets/images";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter, useSearchParams } from "next/navigation";
import { use, useEffect, useRef, useState } from "react";
import PracticePerspective from "./PracticePerspective/PracticePerspective";
import styles from "./PersonalPathway.module.css";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import GaugeChart from "react-gauge-chart";
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

  const openPracticePerspective = (index: number) => {
    setActiveIndex(index);
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
        className={`relative min-h-screen bg-[#4BA6A6] px-8 py-6 font-sans z-10
  ${styles.page}
   ${styles.enterRight}
  ${enter ? styles.enterActive : ""}`}
      >
        <Image
          src={images.quizPolygon}
          alt="quiz-polygon"
          width={630}
          height={630}
          className="absolute top-0 right-0 -z-10 pointer-events-none"
        />

        {/* Header */}
        <UserProfileHeader
          greetingColor="#FFFFFF"
          nameColor="#0F4F58"
          userInfo={user}
        />

        <SuccessMessage
          text={randomMessage || ""}
          fontSize="text-[30px]"
          leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
          rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
          fontColor="#0F4F58"
          bottom="8px"
          rightImgBottom="8px"
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
              Every Pathway leads you through 3 milestones — learn it, choose
              your micro-actions, and start weaving the habit into your
              everyday.
            </p>

            <div className="mt-8 space-y-4">
              {formattedActivePathways?.map((item, index) => {
                const details = getPathwayDetails(item.pathwayNumber);
                const progressData = getPathwayProgress(item.data);
                return (
                  <div key={item.uuid}>
                    <div
                      className={`flex items-center justify-between rounded-xl p-5 ${
                        index % 2 === 1 ? "bg-[#F8E1B8]" : "bg-[#C2E2E2]"
                      }`}
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
                        {/* View Details + Arrow */}
                        <div className="flex flex-col items-center min-w-[90px]">
                          <button className="text-[15px] text-[#567F55] whitespace-nowrap">
                            view details
                          </button>

                          <div
                            className="relative cursor-pointer mt-2"
                            onClick={() => {
                              if (pathname !== null) {
                                ClosePracticePerspective();
                              } else {
                                openPracticePerspective(index);
                              }
                            }}
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

                        {/* 60% + completed + dots */}
                        <div className="flex flex-col items-center min-w-[120px] -mt-[20px]">
                          <p className=" text-[#567F55] text-[15px] whitespace-nowrap">
                            {progressData.percentage}% completed
                          </p>

                          <div className="flex items-center gap-3 mt-2">
                            {[0, 1, 2].map((i) => {
                              const completed = i < progressData.steps;

                              return (
                                <div
                                  key={i}
                                  className={`w-4 h-4 rounded-full border-2 ${
                                    completed
                                      ? "bg-[#4BA6A6] border-[#4BA6A6]"
                                      : "border-[#4BA6A6]"
                                  }`}
                                />
                              );
                            })}
                          </div>
                        </div>
                        <div
                          className="cursor-pointer relative"
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
                            />
                          ) : (
                            <Image
                              src={images.practicePoly}
                              alt="poly"
                              width={59}
                              height={80}
                            />
                          )}

                          <button className="text-[#0F4F58] font-[RocaTwo-Bold] text-[20px] font-bold absolute top-[20px]">
                            Explore Pathway
                          </button>
                        </div>
                      </div>
                    </div>
                    {activeIndex === index && (
                      <div ref={practiceRef}>
                        <PracticePerspective
                          ClosePracticePerspective={ClosePracticePerspective}
                          pathwayDetails={details?.principle}
                          pillarNumber={details?.pillar_number}
                          id={item?.uuid}
                          pathwayData={pathwayData}
                          formattedActivePathways={formattedActivePathways}
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
        <div className="flex justify-end mr-[85px]">
          <div className="mt-[60px] flex flex-col items-center gap-[14px] ">
            <CommonButtons
              label="See My Dashboard"
              bgColor="#ACD5AB"
              onClick={() => router.push("/my-dashboard")}
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
