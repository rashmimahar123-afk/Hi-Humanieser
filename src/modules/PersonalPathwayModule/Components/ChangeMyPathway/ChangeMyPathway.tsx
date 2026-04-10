import Image from "next/image";
import images from "@/src/assets/images";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter } from "next/navigation";
import { useGetMppMessagesQuery } from "@/src/modules/WelcomeModule/Hooks/useGetMppMessagesQuery";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import usePersonalPathwayQuery from "../../Hooks/usePersonalPathwayQuery";
import useChooseMyselfQuery from "@/src/modules/ChoosePathwayModule/Hooks/useChooseMyselfQuery";
import RemovePathwayModal, {
  openRemovePathwayModal,
} from "../RemovePathwayModal/RemovePathwayModal";
import { getPathwayProgress } from "@/src/lib/Helpers";
import styles from "./ChangeMyPathway.module.css";
import { useEffect, useState } from "react";

type ActivePathwayType = {
  pathwayNumber: string;
  uuid: string;
  data: any;
};

function ChangeMyPathway() {
  const router = useRouter();

  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setEnter(true);
  }, []);

  const { data: randomMessage } = useGetMppMessagesQuery();

  const { data, isLoading, isError } = usePersonalPathwayQuery();
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
  return (
    <>
      <div
        className={`min-h-screen bg-[#F5F0EB] p-6 font-sans ${styles.page}
   ${styles.enterRight}
  ${enter ? styles.enterActive : ""}`}
      >
        <Image
          src={images.recGreen}
          alt="login-rectangle"
          className="absolute bottom-0 left-0 z-0"
        />
        {/* Header */}
        <div className="px-12 flex justify-between">
          {" "}
          {/* Left */}
          <div>
            <div
              className="text-[#0F4F58] leading-none"
              style={{ fontFamily: "Aptos", fontSize: "22px" }}
            >
              Hi Humaniser! <span className="align-super text-[0.7em]">™</span>
            </div>

            <h1
              className="mt-1 leading-tight text-[56px] text-[#0F4F58] font-bold"
              style={{ fontFamily: "RocaTwo-Bold" }}
            >
              Hi Maria!
            </h1>
          </div>
        </div>

        <div className="mt-6 mb-6">
          <SuccessMessage
            text={randomMessage || ""}
            fontSize="text-[30px]"
            leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
            rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
            fontColor="#0F4F58"
            bottom="7px"
            rotate="-35deg"
            rightImgBottom="4px"
          />
        </div>
        <div className="flex justify-center">
          <h2 className="text-[51px] font-[RocaTwo-Bold] text-[#0F4F58] font-bold flex justify-center">
            My Personal Pathway
          </h2>
        </div>
        <div className="ml-[140px]">
          {/* Main Section */}
          <div className="relative mt-20  flex justify-between items-start">
            {/* LEFT TEXT */}
            <div className="max-w-[620px]">
              <p className="text-[#E6A757] font-semibold tracking-wide text-[21px] font-[League Spartan]">
                MANAGE MY PATHWAYS
              </p>

              <p className="mt-3 text-[#567F55] text-[20px] leading-relaxed font-[Roboto]">
                You can keep what’s working or make space for something new.
              </p>
              <p className=" text-[#567F55] text-[20px] leading-relaxed font-[Roboto]">
                You can have up to 2 pathways at a time.{" "}
              </p>
            </div>

            {/* RIGHT POLYGON WITH TEXT */}
            <div className="relative w-[363px] h-[153px]">
              {/* Polygon Image */}
              <Image
                src={images.changePathPoly}
                alt="change-path-polygon"
                fill
                className="object-contain"
              />

              {/* Text OVER polygon */}
              <div className="absolute inset-0 flex flex-col justify-center px-4 text-white pt-[20px]">
                <p className="text-[18px] leading-snug font-normal flex items-center ">
                  Working on fewer pathways helps you stay focused and build
                  habits that actually stick.
                </p>
              </div>
            </div>
          </div>
          {formattedActivePathways?.length !== 0 ? (
            <div className="mt-8 space-y-4 max-w-[800px]">
              {formattedActivePathways?.map((item, index) => {
                const details = getPathwayDetails(item.pathwayNumber);

                const progressData = getPathwayProgress(item.data);
                return (
                  <div key={item.uuid}>
                    <div className="grid grid-cols-[1fr_1fr_1fr] items-center p-5">
                      <div className="flex items-center gap-4 ">
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
                        <h3 className="font-[700] font-[Canva Sans] text-[17px] text-[#3C4C59]">
                          {details?.pathway_title}
                        </h3>
                      </div>
                      <div className="flex flex-col items-center">
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
                      <div className="flex justify-end">
                        <div
                          className=" bg-[#F8E1B8] rounded-[12px] px-2 py-2 text-[#3C4C59] text-[16px] cursor-pointer font-[Canva Sans]"
                          onClick={() => openRemovePathwayModal(item?.uuid)}
                        >
                          Remove Pathway
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <>
              <div className="flex flex-col justify-center mt-8 ml-20 max-w-[800px]">
                <p className=" flex items-center text-[#567F55] text-[20px] leading-relaxed font-[Roboto]">
                  You haven’t selected a pathway yet.
                </p>
                <p className="flex items-center mt-6 text-[#567F55] text-[20px] leading-relaxed font-[Roboto]">
                  Choosing a pathway is the first step in your journey. You can
                  take the quiz or explore and choose one yourself.
                </p>
              </div>
            </>
          )}
        </div>
        <div className="flex justify-end mr-[85px]">
          <div className="mt-[30px] flex flex-col items-center gap-[14px] ">
            {formattedActivePathways?.length <= 1 && (
              <CommonButtons
                label="Choose your Next
Pathway"
                bgColor="#86c9c9"
                textColor="#ffffff"
                onClick={() => router.push("/choose-myself")}
              />
            )}
            <CommonButtons
              label="Back to My Personal
 Pathway"
              bgColor="#86c9c9"
              textColor="#ffffff"
              onClick={() => router.push("/personal-pathway")}
            />
          </div>
        </div>
      </div>
      <RemovePathwayModal />
    </>
  );
}
export default ChangeMyPathway;
