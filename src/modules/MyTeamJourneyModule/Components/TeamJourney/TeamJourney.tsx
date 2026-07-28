import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import images from "@/src/assets/images";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import TeamJourneyPoll from "../TeamJourneyPoll/TeamJourneyPoll";
import styles from "./TeamJourney.module.css";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import { MTJ_TEAM_RITUAL_DATA } from "../../Types/ResponseTypes";
import LogoutModal from "@/src/modules/WelcomeModule/Components/LogoutModal/LogoutModal";
import { useAddReflectionMutation } from "@/src/modules/PersonalPathwayModule/Hooks/useAddReflectionMutation";
import useGetReflectionWallsQuery from "@/src/modules/MyDashboardModule/Hooks/useGetReflectionWallsQuery";
import { useGetMtjMessagesQuery } from "../../Hooks/useGetMtjMessagesQuery";
import useHhFrameworkMtjQuery from "../../Hooks/useHhFrameworkMtjQuery";
type TEAM_JOURNEY_PROPS = {
  rituals: Array<MTJ_TEAM_RITUAL_DATA>;
};
function TeamJourney(props: TEAM_JOURNEY_PROPS) {
  const { rituals } = props;
  const router = useRouter();
  const [activePathway, setActivePathway] = useState<string | null>(null);

  const { user } = useAuthValue();
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setEnter(true);
  }, []);

  const practiceRef = useRef<HTMLDivElement | null>(null);

  const ClosePracticePerspective = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      setActivePathway(null);
    }, 200);
  };
  const { data: randomMessage, isLoading } = useGetMtjMessagesQuery();
  const { data: frameworkData } = useHhFrameworkMtjQuery();

  const getFocusAreaId = (teamRitualId: string) => {
    const focusAreas = frameworkData?.data?.focus_areas || [];

    for (const focusArea of focusAreas) {
      const ritual = focusArea.team_rituals?.find(
        (item: any) => item.team_ritual_id === teamRitualId,
      );

      if (ritual) {
        return focusArea.focus_area_id;
      }
    }

    return "";
  };

  return (
    <>
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
              {rituals.map((ritual: any) => (
                <div key={ritual.team_ritual_id}>
                  <div className="flex items-center justify-between bg-[#F5C882] rounded-xl p-5">
                    <div className="bg-[#FBF4EF] rounded-[14px] px-6 py-5 max-w-[736px]">
                      <p className="text-[25px] text-[#4BA6A6] mb-2 font-[RocaTwo]">
                        Focus Area: {ritual.focus_area}
                      </p>

                      <p className="text-[22px] text-[#737373] font-[Aptos] leading-[1.6]">
                        {ritual.short_description}
                      </p>
                    </div>

                    {/* View Details */}
                    <div className="relative flex flex-col items-center mb-4 cursor-pointer">
                      <p className="text-[15px] text-[#567F55] text-center">
                        view details
                      </p>

                      <div
                        onClick={() =>
                          setActivePathway((prev) =>
                            prev === ritual.team_ritual_id
                              ? null
                              : ritual.team_ritual_id,
                          )
                        }
                      >
                        <Image
                          src={images.pathwayArrow}
                          alt="arrow"
                          width={60}
                          height={40}
                          className={`mt-2 transition-transform duration-300 ${
                            activePathway === ritual.team_ritual_id
                              ? "rotate-180"
                              : ""
                          }`}
                        />

                        {activePathway === ritual.team_ritual_id && (
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

                    {/* Explore */}
                    <div
                      className="relative cursor-pointer"
                      onClick={() => {
                        const focusAreaId = getFocusAreaId(
                          ritual.team_ritual_id,
                        );

                        router.push(`/conversation?focusArea=${focusAreaId}`);
                      }}
                    >
                      <Image
                        src={images.leftArrowImg}
                        alt="arrow"
                        width={45}
                        height={45}
                        className="absolute -top-6 -right-6 -rotate-[42deg]"
                      />

                      <Image
                        src={images.teamPoly}
                        alt="Explore"
                        width={140}
                        height={100}
                      />

                      <span className="absolute inset-0 flex items-center justify-center text-[#F5F0EB] font-[RocaTwo] font-bold text-[20px] text-center">
                        Explore
                        <br />
                        Focus Area
                      </span>
                    </div>
                  </div>

                  {activePathway === ritual.team_ritual_id && (
                    <div ref={practiceRef}>
                      <TeamJourneyPoll
                        ritual={ritual}
                        ClosePracticePerspective={ClosePracticePerspective}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <LogoutModal />
    </>
  );
}
export default TeamJourney;
