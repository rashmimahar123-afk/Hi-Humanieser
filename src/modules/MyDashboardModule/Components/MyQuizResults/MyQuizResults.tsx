/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import images from "@/src/assets/images";
import ResultPathwayCard from "@/src/modules/ChoosePathwayModule/Components/ShowResultPage/ResultPatwayCard/ResultPathwayCard";
import { useState } from "react";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import QuizPathwayCards from "../QuizPathwayCards/QuizPathwayCards";
import GaugeChart from "react-gauge-chart";
import { useRouter } from "next/navigation";

type MY_QUIZ_RESULT_PROPS = {
  topStrengthDetails: any;
  formattedDate: string;
  resultData: any;
  weakStrengthDetails: any;
};
function MyQuizResults(props: MY_QUIZ_RESULT_PROPS) {
  const { topStrengthDetails, formattedDate, resultData, weakStrengthDetails } =
    props;

  const router = useRouter();

  return (
    <>
      <h2 className="font-bold text-[35px] text-[#F5F0EB] font-[RocaTwo]">
        My Check-In Space{" "}
      </h2>
      <p className="text-[#0F4F58] font-[Roboto] font-[400] text-[22px] ml-[40px] mt-[15px]">
        {`Based on your check-in from ${formattedDate}, here’s what was coming through at the time, along with a few Pathways suggested as a starting point.
 `}
      </p>
      <div className="bg-[#f5f0eb] pt-[1px] px-[45px] pb-[12px] mt-[20px] border rounded-[10px]">
        <div className="mt-[30px]  ">
          <div className="text-[#0F4F58] text-[26px] font-[League Spartan] font-bold">
            What’s already working well
          </div>
          <p className="text-[#0F4F58] font-[Aptos] text-[22px] mt-[10px] ml-[20px]">
            Maria, from what you shared, a few things are already coming through
            strongly:{" "}
          </p>
          <div className="mt-[20px] ml-14">
            <div className=" mt-2 ml-[65px]">
              {topStrengthDetails.map((item: any, index: number) => (
                <div
                  key={index}
                  className="relative"
                  style={{ fontFamily: "Aptos" }}
                >
                  <span className="relative z-10 px-2 py-1 rounded text-[#0F4F58] text-[20px]">
                    {/* <span className="font-[700]">{item.title} — </span> */}
                    {item.description}
                  </span>

                  {/* Arrow */}
                  <div className="absolute -left-8 top-1/2 -translate-y-1/2 z-20">
                    <div className="relative bg-[#E6A757] w-[18px] h-[14px] rounded-[4px] flex items-center justify-center">
                      <Image src={images.smallArrow} alt="small-arrow" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex justify-center mt-[40px] relative">
              <Image
                src={images.arrowImg}
                alt={"left decoration"}
                width={40}
                height={40}
                className={`shrink-0  absolute`}
                style={{
                  left: `200px`, // 5px gap from text start
                  bottom: "29px",
                }}
              />
              <div className="text-[#0F4F58] text-[20px] font-[700] font-[Roboto] max-w-[823px] flex text-center mt-[20px]">
                These are qualities worth celebrating. They’re not just traits
                you have — they’re the foundations you can keep building on as
                you grow in your Pathway.
              </div>
              <Image
                src={images.leftArrowImg}
                alt="right decoration"
                width={60}
                height={40}
                className={`shrink-0  absolute`}
                style={{
                  right: "195px", // 5px gap from text end
                  bottom: "27px",
                  rotate: "-35deg",
                }}
              />
            </div>
          </div>
        </div>
        {/* Your Pillar Score */}
        {/* <div className="mt-[40px]">
         
          <div className="relative z-20 ">
            <h3 className="text-[#0F4F58] text-[26px] font-[RocaRwo] font-bold">
              Your Pillars Scores
            </h3>
            <p
              className="text-[22px] text-[#0F4F58] ml-[20px] w-[900px] "
              style={{ fontFamily: "Aptos" }}
            >
              Here’s how you scored across the 3 pillars — showing where your
              strengths shine, and where there’s room to grow:
            </p>
            <div className="mt-[40px] ml-[65px]">
              <div className="grid grid-cols-3 gap-[60px] text-center ">
                <div className="flex flex-col items-center">
                  <h4
                    className="text-[#0F4F58] text-[22px] leading-[100%] font-[700]"
                    style={{ fontFamily: "RocaTwo-BI" }}
                  >
                    The Mindset We Bring
                  </h4>

                  <p
                    className="mt-2 text-[#737373] text-[20px] w-[300px]"
                    style={{ fontFamily: "Aptos" }}
                  >
                    How you show up — your habits, openness, and self-awareness.
                  </p>

                  <div className="mt-6 relative w-[250px]">
                    <GaugeChart
                      id="connect-gauge"
                      nrOfLevels={1}
                      percent={
                        (resultData?.pillarData?.pillar_01?.top?.score || 0) / 5
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
                    className="text-[#0F4F58] text-[22px] leading-[100%] font-[700]"
                    style={{ fontFamily: "RocaTwo-BI" }}
                  >
                    The Way We Connect
                  </h4>

                  <p
                    className="mt-2 text-[#737373] text-[20px] w-[300px]"
                    style={{ fontFamily: "Aptos" }}
                  >
                    How you communicate, listen, and build trust with others.
                  </p>

                  <div className="mt-6 relative w-[250px]">
                    <GaugeChart
                      id="connect-gauge"
                      nrOfLevels={1}
                      percent={
                        (resultData?.pillarData?.pillar_02?.top?.score || 0) / 5
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
                    className="text-[#0F4F58] text-[22px] leading-[100%] font-[700]"
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
                        (resultData?.pillarData?.pillar_03?.top?.score || 0) / 5
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

        <div className="mt-20">
          {/* TEXT (Always on top) */}
          <div className="relative z-20 text-[#567F55] font-[400]">
            <h3
              className="text-[#0F4F58] text-[26px] font-bold"
              style={{ fontFamily: "RocaRwo" }}
            >
              A few places you could start{" "}
            </h3>
            <p
              className="text-[22px] text-[#0F4F58] ml-[20px] w-[900px] "
              style={{ fontFamily: "Aptos" }}
            >
              Based on what you shared, these Pathways could be a helpful next
              step.
            </p>
            <div className="mt-[40px] ml-[65px]">
              <div className="grid grid-cols-3 gap-[40px]">
                {weakStrengthDetails.map((item: any, index: any) => (
                  <QuizPathwayCards
                    key={`item${index}`}
                    title={item.title}
                    description={item.description}
                    bgColor={"#F5C882"}
                    onLearnMore={() =>
                      router.push(
                        `/pathway-card?pillar=${item?.pillar_number}&principle=${item?.principle_number}`,
                      )
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-[53px] mb-[7px] ">
          <div
            className="cursor-pointer"
            onClick={() => router.push("/start-quiz")}
          >
            <PolygonButton
              width="106px"
              height="107px"
              bgColor="#F6E3BF"
              radius={14}
              clipPath={`polygon(
    15% 11%,
    81% 0%,
    100% 87%,
    3% calc(100% - 15px)
  )`}
              decorationImg={{
                src: images.arrowImg,
                width: 48,
                height: 48,
              }}
              decorationPosition={{
                className: "-left-[31px] -top-[25px]",
              }}
            >
              <span className="text-[#0F4F58] text-[26px] font-[RocaTwo] font-bold leading-tight text-center">
                Retake the Check-In
              </span>
            </PolygonButton>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyQuizResults;
