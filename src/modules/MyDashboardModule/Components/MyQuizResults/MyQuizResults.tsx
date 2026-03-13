/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import images from "@/src/assets/images";
import ResultPathwayCard from "@/src/modules/ChoosePathwayModule/Components/ShowResultPage/ResultPatwayCard/ResultPathwayCard";
import { useState } from "react";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import QuizPathwayCards from "../QuizPathwayCards/QuizPathwayCards";
import GaugeChart from "react-gauge-chart";

type MY_QUIZ_RESULT_PROPS = {
  pathways: Array<any>;
};
function MyQuizResults(props: MY_QUIZ_RESULT_PROPS) {
  const { pathways } = props;
  const [selectedPathways, setSelectedPathways] = useState<number[]>([]);
  const togglePathway = (id: any) => {
    setSelectedPathways((prev: any) =>
      prev.includes(id)
        ? prev.filter((p: any) => p !== id)
        : prev.length < 2
          ? [...prev, id]
          : prev,
    );
  };
  return (
    <>
      <h2 className="font-bold text-[35px] text-[#F5F0EB] font-[RocaTwo]">
        My Quiz Results
      </h2>
      <p className="text-[#0F4F58] font-[Roboto] font-[400] text-[22px] ml-[40px] mt-[15px]">
        Based on your answers taken on date, these are the strengths you bring,
        your pillar scores, and the 3 pathways recommended for you.
      </p>
      <div className="bg-[#f5f0eb] pt-[1px] px-[45px] pb-[12px] mt-[20px] border rounded-[10px]">
        <div className="mt-[30px]  ">
          <div className="text-[#0F4F58] text-[26px] font-[League Spartan] font-bold">
            Your Strenghts
          </div>
          <p className="text-[#0F4F58] font-[Aptos] text-[22px] mt-[10px] ml-[20px]">
            Maria, your results show clear strengths in:
          </p>
          <div className="mt-[20px] ml-14">
            <div className=" mt-2 ml-[65px]">
              <div className="relative " style={{ fontFamily: "Aptos" }}>
                {/* Highlighted text */}
                <span className="relative z-10 px-2 py-1 rounded text-[#0F4F58] text-[20px]">
                  <span className="font-[700]">Stay Curious — </span>you
                  naturally look beyond the obvious
                </span>

                {/* Callout square */}
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 z-20">
                  <div className="relative bg-[#E6A757] w-[18px] h-[14px] rounded-[4px] flex items-center justify-center">
                    {/* Arrow */}
                    <div className="absolute right-[-6px] w-0 h-0 " />
                    <Image src={images.smallArrow} alt="small-arrow" />
                  </div>
                </div>
              </div>
              <div className="relative " style={{ fontFamily: "Aptos" }}>
                {/* Highlighted text */}
                <span className="relative z-10 px-2 py-1 rounded text-[#0F4F58] text-[20px]">
                  <span className="font-[700]"> Make it Safe — </span>
                  people around you feel they can share ideas because of the
                  space you create.
                </span>

                {/* Callout square */}
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 z-20">
                  <div className="relative bg-[#E6A757] w-[18px] h-[14px] rounded-[4px] flex items-center justify-center">
                    {/* Arrow */}
                    <div
                      className="absolute right-[-6px] w-0 h-0 
"
                    />
                    <Image src={images.smallArrow} alt="small-arrow" />
                  </div>
                </div>
              </div>
              <div className="relative " style={{ fontFamily: "Aptos" }}>
                {/* Highlighted text */}
                <span className="relative z-10 px-2 py-1 rounded text-[#0F4F58] text-[20px]">
                  <span className="font-[700]">
                    {" "}
                    Build Care & Belonging In —{" "}
                  </span>
                  you put effort into making others feel part of something
                  bigger.
                </span>

                {/* Callout square */}
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 z-20">
                  <div className="relative bg-[#E6A757] w-[18px] h-[14px] rounded-[4px] flex items-center justify-center">
                    {/* Arrow */}
                    <div
                      className="absolute right-[-6px] w-0 h-0 
"
                    />
                    <Image src={images.smallArrow} alt="small-arrow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="text-[#0F4F58] text-[20px] font-[700] font-[Roboto] max-w-[823px] flex justify-center mt-[20px]">
                These are qualities worth celebrating. They’re not just traits
                you have — they’re the foundations you can keep building on as
                you grow in your Pathway.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[40px]">
          {/* TEXT (Always on top) */}
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
            {/* PILLARS GRID */}
            <div className="mt-[40px] ml-[65px]">
              <div className="grid grid-cols-3 gap-[60px] text-center ">
                {/* Pillar 1 */}
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
                      percent={3.5 / 5}
                      hideText={true}
                      arcWidth={0.38} // thicker arc
                      colors={["#D3CBB6"]}
                      needleColor="#F28B82"
                    />

                    {/* Labels */}
                    <span className="absolute left-[45px] -bottom-[8px] text-[#4BA6A6]  text-[16px] font-[400]">
                      1
                    </span>

                    <span className="absolute right-[45px] -bottom-[8px] text-[#4BA6A6]  text-[16px] font-[400]">
                      5
                    </span>
                  </div>
                </div>

                {/* Pillar 2 */}
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
                      percent={3.5 / 5}
                      hideText={true}
                      arcWidth={0.38} // thicker arc
                      colors={["#D3CBB6"]}
                      needleColor="#F28B82"
                    />

                    {/* Labels */}
                    <span className="absolute left-[45px] -bottom-[8px] text-[#4BA6A6]  text-[16px] font-[400]">
                      1
                    </span>

                    <span className="absolute right-[45px] -bottom-[8px] text-[#4BA6A6]  text-[16px] font-[400]">
                      5
                    </span>
                  </div>
                </div>

                {/* Pillar 3 */}
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
                      percent={3.5 / 5}
                      hideText={true}
                      arcWidth={0.38} // thicker arc
                      colors={["#D3CBB6"]}
                      needleColor="#F28B82"
                    />

                    {/* Labels */}
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

          {/* SKY SHAPE CARD */}
        </div>

        <div className="mt-20">
          {/* TEXT (Always on top) */}
          <div className="relative z-20 text-[#567F55] font-[400]">
            <h3
              className="text-[#0F4F58] text-[26px] font-bold"
              style={{ fontFamily: "RocaRwo" }}
            >
              Your 3 Recommended Pathways
            </h3>
            <p
              className="text-[22px] text-[#0F4F58] ml-[20px] w-[900px] "
              style={{ fontFamily: "Aptos" }}
            >
              Here are a few Pathways that could be a powerful place to start.
            </p>
            <div className="mt-[40px] ml-[65px]">
              <div className="grid grid-cols-3 gap-[40px]">
                {pathways.map((item) => (
                  <QuizPathwayCards
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    selected={selectedPathways.includes(item?.id)}
                    onSelect={() => togglePathway(item?.id)}
                    onLearnMore={() => console.log("Learn more:", item.title)}
                    bgColor={"#F5C882"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-[53px] mb-[7px]">
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
              Retake
              <br />
              <span className="whitespace-nowrap">The Quiz</span>
            </span>
          </PolygonButton>
        </div>
      </div>
    </>
  );
}
export default MyQuizResults;
