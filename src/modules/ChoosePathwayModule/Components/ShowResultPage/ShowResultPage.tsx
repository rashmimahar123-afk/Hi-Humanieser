/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./ShowResultPage.module.css";
import { useRouter } from "next/navigation";
import ResultPathwayCard from "./ResultPatwayCard/ResultPathwayCard";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import GaugeChart from "react-gauge-chart";
import useMyQuizResultQuery from "../../Hooks/useMyQuizResultQuery";
import { useCreateMppMutation } from "../../Hooks/useCreateMppMutation";
import useQuizDetailsQuery from "../../Hooks/useQuizDetailsQuery";
import useResultMessagesQuery from "../../Hooks/useResultMessagesQuery";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import ShowMaxTwoMppModal, {
  openShowMaxTwoMpp,
} from "../ShowMaxTwoMppModal/ShowMaxTwoMppModal";
import ActivePathwayModal, {
  openActivePathwayModal,
} from "../ActivePathwayModal/ActivePathwayModal";
import useGetListMppQuery from "../../Hooks/useGetListMppQuery";
import { useDeletePathwayMutation } from "../../Hooks/useDeletePathwayMutation";
import SnackbarHandler from "@/src/lib/SnackbarHandler";
import { useGetPathwaySelectMssgQuery } from "@/src/modules/WelcomeModule/Hooks/useGetPathwaySelectMssgQuery";
import DeletePathwayModal, {
  openDeletePathwayModal,
} from "../DeletePathwayModal/DeletePathwayModal";
import useEventEmitter from "@/src/components/Hooks/useEventEmitter";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";

type Principle = {
  key: string;
  score: number;
  situation: number;
  pillar: string;
};

type PillarItem = {
  top: Principle;
  weak: Principle;
};

type PillarDataType = Record<string, PillarItem>;

function ShowResultPage() {
  const [animateText, setAnimateText] = useState(false);
  const { user } = useAuthValue();

  const [resultData, setResultData] = useState<{
    pillarData: PillarDataType;
    pillarAvg: Record<string, number>;
  } | null>(null);

  const [topStrengthDetails, setTopStrengthDetails] = useState<any[]>([]);
  const [weakStrengthDetails, setWeakStrengthDetails] = useState<any[]>([]);
  const [topMessage, setTopMessage] = useState<any>(null);
  const [selectedWeakMessage, setSelectedWeakMessage] = useState<any>(null);
  const [pathwayUuids, setPathwayUuids] = useState<Record<number, string>>({});
  const [enter] = useState(true);
  const router = useRouter();

  const [selectedPathways, setSelectedPathways] = useState<number[]>([]);
  const isPathwaySelected = selectedPathways.length > 0;

  const { data, isLoading } = useMyQuizResultQuery();
  const getLatestResult = (data: any[]) => {
    if (!data || data.length === 0) return null;

    return data.reduce((latest, current) =>
      current.timestamp > latest.timestamp ? current : latest,
    );
  };

  const { mutate, isPending } = useCreateMppMutation();

  const handleSelectPathway = (
    pathway: number,
    index: number,
    messageObj?: any,
  ) => {
    const payload = {
      pathways: [pathway],
    };

    mutate(payload, {
      onSuccess: (res) => {
        const uuid = res?.new_uuids?.[0];

        if (uuid) {
          setPathwayUuids((prev) => ({
            ...prev,
            [index]: uuid,
          }));

          // latest message use karo
          openActivePathwayModal(uuid, messageObj, index);
        }
      },
    });
  };
  const sortFn = (a: any, b: any, asc = false) => {
    // 1. Score comparison
    if (a.score !== b.score) {
      return asc ? a.score - b.score : b.score - a.score;
    }

    // 2. Tie-breaker → lower situation wins
    if (a.situation !== b.situation) {
      return a.situation - b.situation;
    }

    // 3. Final fallback (stable sort)
    return a.key.localeCompare(b.key);
  };
  const processQuizResults = (results: any) => {
    const wS = 0.5;
    const wZ = 0.5;

    const pillarData: any = {};
    const pillarAvg: any = {};

    Object.keys(results).forEach((pillarKey) => {
      const principles = results[pillarKey];

      const arr: any[] = [];

      Object.keys(principles).forEach((pKey) => {
        const item = principles[pKey];

        const score = wS * item.strength + wZ * item.situation;

        arr.push({
          key: pKey,
          score,
          situation: item.situation,
          pillar: pillarKey,
        });
      });

      const sortedDesc = [...arr].sort((a, b) => sortFn(a, b, false));
      const sortedAsc = [...arr].sort((a, b) => sortFn(a, b, true));

      //  Store per pillar
      pillarData[pillarKey] = {
        top: sortedDesc[0],
        weak: sortedAsc[0],
      };

      // Avg
      pillarAvg[pillarKey] =
        arr.reduce((sum, p) => sum + p.score, 0) / arr.length;
    });

    return {
      pillarData,
      pillarAvg,
    };
  };

  useEffect(() => {
    if (data && data?.data?.quiz.length > 0) {
      const latest = getLatestResult(data?.data?.quiz);
      console.log("LATEST RESULT", latest);

      if (latest?.results) {
        const processed = processQuizResults(latest.results);
        setResultData(processed);
      }
    }
  }, [data]);

  const getTopStrengthDetails = (topStrengths: any[], quizData: any) => {
    if (!quizData?.pillars) return [];

    const result: any[] = [];

    topStrengths.forEach((item) => {
      const formattedKey = item.key.replace("principle", "Principle");

      Object.values(quizData.pillars).forEach((pillar: any) => {
        const principle = pillar.principles?.[formattedKey];

        if (principle) {
          result.push({
            key: item.key,
            title: principle.display_name,
            description: principle.why_this_strength,
          });
        }
      });
    });

    return result;
  };
  const { data: quizDetails } = useQuizDetailsQuery();

  const getRangeMessage = (score: number) => {
    if (score >= 1 && score <= 2) {
      return "You’re laying the groundwork. This is the perfect time to focus on a few pathways that will give you quick wins and confidence.";
    }

    if (score > 2 && score <= 3) {
      return "You’re already showing curiosity and some strong behaviours. With a little focus, you can grow into even greater impact.";
    }

    if (score > 3 && score <= 4) {
      return "You bring balance across the principles. Your strengths are solid, now it’s about stretching into the areas that will multiply your impact.";
    }

    if (score > 4 && score <= 5) {
      return "You’re living many of these principles already. Your next step is amplifying them, becoming a role model for others and helping shape culture at scale.";
    }

    return "";
  };

  useEffect(() => {
    if (resultData?.pillarData && quizDetails?.data) {
      const topStrengths = Object.values(resultData.pillarData).map(
        (p: any) => p.top,
      );

      const details = getTopStrengthDetails(topStrengths, quizDetails.data);

      setTopStrengthDetails(details);

      // agar overall message chahiye
      const allScores = topStrengths.map((p: any) => p.score);
      const avg =
        allScores.reduce((a: number, b: number) => a + b, 0) / allScores.length;

      const message = getRangeMessage(avg);
      setTopMessage({ message });
    }
  }, [resultData, quizDetails]);

  const getWeakStrengthDetails = (growthTargets: any[], quizData: any) => {
    if (!quizData?.pillars) return [];

    const result: any[] = [];

    growthTargets.forEach((item) => {
      const formattedKey = item.key.replace("principle", "Principle");

      // 👇 extract numbers
      const principle_number = parseInt(item.key.split("_")[1], 10);
      const pillar_number = parseInt(item.pillar.split("_")[1], 10);

      Object.values(quizData.pillars).forEach((pillar: any) => {
        const principle = pillar.principles?.[formattedKey];

        if (principle) {
          result.push({
            key: item.key,
            title: principle.display_name,
            description: principle.description,
            principle_number,
            pillar_number,
          });
        }
      });
    });

    return result;
  };
  useEffect(() => {
    if (resultData?.pillarData && quizDetails?.data) {
      const weakPrinciples = Object.values(resultData.pillarData).map(
        (p: any) => p.weak,
      );

      const weakDetails = getWeakStrengthDetails(
        weakPrinciples,
        quizDetails.data,
      );

      setWeakStrengthDetails(weakDetails);
    }
  }, [resultData, quizDetails]);

  const { data: mppList } = useGetListMppQuery();
  const { mutate: deleteMutate } = useDeletePathwayMutation();

  const handleDelete = (uuid: string, index: number) => {
    deleteMutate(
      { uuid }, //  payload (adjust if API needs different key)
      {
        onSuccess: (res) => {
          SnackbarHandler.successToast(res?.message);

          // remove from state
          setPathwayUuids((prev) => {
            const updated = { ...prev };
            delete updated[index];
            return updated;
          });
        },
        onError: (err) => {
          console.log("Delete API error", err);
        },
      },
    );
  };
  useEffect(() => {
    if (!mppList?.data?.pathways) return;

    const activeIndexes: number[] = [];
    const uuidMap: Record<number, string> = {};

    mppList.data.pathways.forEach((item: any) => {
      if (item.active) {
        const pathwayKey = Object.keys(item).find(
          (key) => !["uuid", "created", "active"].includes(key),
        );

        if (pathwayKey) {
          const pathwayNumber = parseInt(pathwayKey, 10);

          const index = weakStrengthDetails.findIndex((_, i) => {
            const weakPrinciples = Object.values(resultData?.pillarData || {});
            const selectedTarget = weakPrinciples[i]?.weak;

            if (!selectedTarget) return false;

            const principleNumber = parseInt(
              selectedTarget.key.split("_")[1],
              10,
            );

            return principleNumber === pathwayNumber;
          });

          if (index !== -1) {
            activeIndexes.push(index);

            // ✅ UUID mapping
            uuidMap[index] = item.uuid;
          }
        }
      }
    });

    setSelectedPathways(activeIndexes);
    setPathwayUuids(uuidMap); // 👈 VERY IMPORTANT
  }, [mppList, weakStrengthDetails, resultData]);

  const { data: pathwayMessage, refetch: getRandomMessage } =
    useGetPathwaySelectMssgQuery();

  useEventEmitter("DELETE_PATHWAY_SUCCESS", ({ index }) => {
    // remove from selected
    setSelectedPathways((prev) => prev.filter((i) => i !== index));

    // remove uuid mapping
    setPathwayUuids((prev) => {
      const updated = { ...prev };
      delete updated[index];
      return updated;
    });
  });
  useEventEmitter("PATHWAY_CONFIRMED", ({ principleNumber }) => {
    // here principleNumber = index (we passed index)
    setSelectedPathways((prev) => [...prev, principleNumber]);
  });
  return (
    <>
      <div
        className={`bg-[#F5F0EB] min-h-screen ${styles.page} ${
          enter ? styles.enterActive : styles.enter
        }`}
      >
        <div className="relative">
          <Image
            src={images.quizPolygon}
            alt="login-rectangle"
            width={830}
            height={830}
            className="absolute top-0 right-0 z-0"
          />
        </div>

        <div className="flex">
          {" "}
          {/* Overlay content */}
          <div className="px-8 py-6 flex justify-between">
            {/* Left */}
            <div
              onClick={() => router.push("/home")}
              className="cursor-pointer"
            >
              <div
                className="text-[#567F55]"
                style={{ fontFamily: "Aptos", fontSize: "22px" }}
              >
                Hi Humaniser!{" "}
                <span className="align-super text-[0.7em]">™</span>
              </div>

              <h1
                className="mt-4 text-[56px] text-[#0F4F58] font-bold leading-[40%]"
                style={{ fontFamily: "RocaTwo-Bold" }}
              >
                Hi Maria!
              </h1>
            </div>
          </div>
        </div>
        <div className="ml-[76px] mt-[40px]">
          <div>
            <div>
              <h2
                className=" text-[42px] text-[#567F55] font-bold"
                style={{ fontFamily: "RocaTwo-Bold" }}
              >
                Great stuff! Here’s what’s coming through
              </h2>
              <div>
                {/* TEXT (Always on top) */}
                <div className="relative z-20 text-[#567F55 mt-[20px]  ml-[43px] font-[400]">
                  <h3
                    className="text-[#5A5656] text-[26px] font-bold"
                    style={{ fontFamily: "RocaRwo-Bold" }}
                  >
                    What’s already working well
                  </h3>
                  <p
                    className="text-[22px] text-[#737373] ml-[20px] "
                    style={{ fontFamily: "Aptos" }}
                  >
                    Maria, from what you shared, a few things are already coming
                    through strongly:{" "}
                  </p>
                  <div className="mt-2 ml-[65px]">
                    {topStrengthDetails.map((item, index) => (
                      <div
                        key={index}
                        className="relative"
                        style={{ fontFamily: "Aptos" }}
                      >
                        <span className="relative z-10 px-2 py-1 rounded text-[#737373] text-[20px]">
                          {/* <span className="font-[700]">{item.title} — </span> */}
                          {item.description}
                        </span>

                        {/* Arrow */}
                        <div className="absolute -left-8 top-1/2 -translate-y-1/2 z-20">
                          <div className="relative bg-[#4BA6A6] w-[18px] h-[14px] rounded-[4px] flex items-center justify-center">
                            <Image src={images.smallArrow} alt="small-arrow" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative z-20 flex justify-center mt-[80px] mr-[295px]">
                  <Image
                    src={images.arrowImg}
                    alt={"left decoration"}
                    width={40}
                    height={40}
                    className={`shrink-0  absolute`}
                    style={{
                      left: `60px`, // 5px gap from text start
                      bottom: "24px",
                    }}
                  />
                  <p
                    className="
      w-[945px]
      text-center
      text-[24px]
      leading-[100%]
      text-[#4BA6A6]
      font-[700]
    
    "
                    style={{ fontFamily: "RocaTwo-BI" }}
                  >
                    These are qualities worth celebrating. They’re not just
                    traits you have — they’re the foundations you can keep
                    building on as you grow in your Pathway.
                  </p>
                  <Image
                    src={images.leftArrowImg}
                    alt="right decoration"
                    width={60}
                    height={40}
                    className={`shrink-0  absolute`}
                    style={{
                      right: "48px", // 5px gap from text end
                      bottom: "24px",
                      rotate: "-35deg",
                    }}
                  />
                </div>
                {/* SKY SHAPE CARD */}
              </div>

              {/* Pillar Score */}
              {/* <div>
                <div className="relative z-20 text-[#567F55]  ml-[43px] font-[400] mt-[60px]">
                  <h3
                    className="text-[#737373] text-[26px]"
                    style={{ fontFamily: "RocaRwo-Bold" }}
                  >
                    Your Pillars Scores
                  </h3>
                  <p
                    className="text-[22px] text-[#737373] ml-[20px] w-[900px] "
                    style={{ fontFamily: "Aptos" }}
                  >
                    Here’s how you scored across the 3 pillars — showing where
                    your strengths shine, and where there’s room to grow:
                  </p>
                  <div className="mt-[40px]">
                    <div className="grid grid-cols-3 gap-[60px] text-center ">
                      <div className="flex flex-col items-center">
                        <h4
                          className="text-[#4BA6A6] text-[22px] leading-[100%] font-[700]"
                          style={{ fontFamily: "RocaTwo-BI" }}
                        >
                          The Mindset We Bring
                        </h4>

                        <p
                          className="mt-2 text-[#737373] text-[20px] w-[300px]"
                          style={{ fontFamily: "Aptos" }}
                        >
                          How you show up — your habits, openness, and
                          self-awareness.
                        </p>

                        <div className="mt-6 relative w-[250px]">
                          <GaugeChart
                            id="connect-gauge"
                            nrOfLevels={1}
                            percent={
                              (resultData?.pillarData?.pillar_01?.top?.score ||
                                0) / 5
                            }
                            hideText={true}
                            arcWidth={0.38} 
                            colors={["#D3CBB6"]}
                            needleColor="#F28B82"
                          />

                          <span className="absolute left-[45px] -bottom-[8px] text-[#4BA6A6]  text-[16px] font-[400]">
                            1
                          </span>

                          <span className="absolute right-[45px] -bottom-[8px] text-[#4BA6A6]  text-[16px] font-[400]">
                            5
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center">
                        <h4
                          className="text-[#4BA6A6] text-[22px] leading-[100%] font-[700]"
                          style={{ fontFamily: "RocaTwo-BI" }}
                        >
                          The Way We Connect
                        </h4>

                        <p
                          className="mt-2 text-[#737373] text-[20px] w-[300px]"
                          style={{ fontFamily: "Aptos" }}
                        >
                          How you communicate, listen, and build trust with
                          others.
                        </p>

                        <div className="mt-6 relative w-[250px]">
                          <GaugeChart
                            id="connect-gauge"
                            nrOfLevels={1}
                            percent={
                              (resultData?.pillarData?.pillar_02?.top?.score ||
                                0) / 5
                            }
                            hideText={true}
                            arcWidth={0.38} 
                            colors={["#D3CBB6"]}
                            needleColor="#F28B82"
                          />

                          
                          <span className="absolute left-[45px] -bottom-[8px] text-[#4BA6A6]  text-[16px] font-[400]">
                            1
                          </span>

                          <span className="absolute right-[45px] -bottom-[8px] text-[#4BA6A6]  text-[16px] font-[400]">
                            5
                          </span>
                        </div>
                      </div>

                     
                      <div className="flex flex-col items-center">
                        <h4
                          className="text-[#4BA6A6] text-[22px] leading-[100%] font-[700]"
                          style={{ fontFamily: "RocaTwo-BI" }}
                        >
                          The Culture We Shape
                        </h4>

                        <p
                          className="mt-2 text-[#737373] text-[20px] w-[300px]"
                          style={{ fontFamily: "Aptos" }}
                        >
                          How your actions influence the team environment and
                          wellbeing.
                        </p>

                        <div className="mt-6 relative w-[250px]">
                          <GaugeChart
                            id="connect-gauge"
                            nrOfLevels={1}
                            percent={
                              (resultData?.pillarData?.pillar_03?.top?.score ||
                                0) / 5
                            }
                            hideText={true}
                            arcWidth={0.38} 
                            colors={["#D3CBB6"]}
                            needleColor="#F28B82"
                          />

                          
                          <span className="absolute left-[45px] -bottom-[8px] text-[#4BA6A6]  text-[16px] font-[400]">
                            1
                          </span>

                          <span className="absolute right-[45px] -bottom-[8px] text-[#4BA6A6]  text-[16px] font-[400]">
                            5
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

               
              </div> */}
              {/* <div className={`relative  mt-20`}>
                <SuccessMessage
                  text={topMessage?.message}
                  fontSize="text-[22px]"
                  leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
                  rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
                  fontColor="#0F4F58"
                  bottom="24px"
                  rightImgBottom="24px"
                  rotate="-35deg"
                  maxWidth="800px"
                />
              </div> */}
              <div>
                {/* TEXT (Always on top) */}
                <div className="relative z-20 text-[#567F55]  ml-[43px] font-[400] mt-[60px]">
                  <h3
                    className="text-[#5A5656] text-[26px] font-bold"
                    style={{ fontFamily: "RocaRwo" }}
                  >
                    A few places you could start{" "}
                  </h3>
                  <p
                    className="text-[22px] text-[#737373] ml-[20px] w-[900px] "
                    style={{ fontFamily: "Aptos" }}
                  >
                    Based on what you shared, these Pathways could be a helpful
                    next step.
                    <br />
                    <br />
                    Choose up to 2 to work on. Each Pathway takes you through 3
                    milestones: understand the habit, choose your micro-actions,
                    and build it into your everyday.
                  </p>
                  <div className="mt-[40px]">
                    <div className="grid grid-cols-3 gap-[40px]">
                      {weakStrengthDetails.map((item, index) => (
                        <ResultPathwayCard
                          key={index}
                          title={item.title}
                          description={item.description}
                          selected={selectedPathways.includes(index)}
                          onLearnMore={() =>
                            router.push(
                              `/pathway-card?pillar=${item?.pillar_number}&principle=${item?.principle_number}`,
                            )
                          }
                          onSelect={async () => {
                            const weakPrinciples = Object.values(
                              resultData?.pillarData || {},
                            );
                            const selectedTarget = weakPrinciples[index]?.weak;

                            if (!selectedTarget) return;

                            const principleNumber = parseInt(
                              selectedTarget.key.split("_")[1],
                              10,
                            );

                            // ✅ CASE 1: Already selected → DELETE
                            if (selectedPathways.includes(index)) {
                              const uuid = pathwayUuids[index];
                              if (!uuid) return;

                              openDeletePathwayModal({ uuid, index });
                            }

                            // ✅ CASE 2: Select new
                            else if (selectedPathways.length < 2) {
                              try {
                                const res = await getRandomMessage();

                                const messageObj = {
                                  message: res?.data || "",
                                };

                                setSelectedWeakMessage(messageObj);

                                handleSelectPathway(
                                  principleNumber,
                                  index,
                                  messageObj,
                                );

                                // ❌ DO NOT SELECT HERE
                              } catch (err) {
                                console.log(err);
                              }
                            } else {
                              openShowMaxTwoMpp();
                            }
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* SKY SHAPE CARD */}
              </div>
              {/* CTA BUTTONS */}
            </div>
          </div>
          <div className="flex justify-end mr-[85px]">
            <div className="mt-[60px] flex flex-col items-center gap-[14px] ">
              <CommonButtons
                label="Return to My Personal Pathway"
                bgColor={isPathwaySelected ? "#ACD5AB" : "#E5E5E5"}
                disabled={!isPathwaySelected}
                onClick={() => router.push("/personal-pathway")}
              />

              <CommonButtons
                label="Go to Dashboard"
                bgColor={isPathwaySelected ? "#ACD5AB" : "#E5E5E5"}
                disabled={!isPathwaySelected}
                onClick={() => router.push("/dashboar")}
              />
            </div>
          </div>
        </div>
      </div>

      <ShowMaxTwoMppModal />
      <ActivePathwayModal />
      <DeletePathwayModal />
    </>
  );
}

export default ShowResultPage;
