import Image from "next/image";
import images from "@/src/assets/images";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import QuizPathwayCards from "../QuizPathwayCards/QuizPathwayCards";
import { useRouter } from "next/navigation";

type MY_QUIZ_RESULT_PROPS = {
  topStrengthDetails: any;
  formattedDate: string;
  resultData: any;
  weakStrengthDetails: any;
  data: any;
};

function MyQuizResults(props: MY_QUIZ_RESULT_PROPS) {
  const {
    topStrengthDetails,
    formattedDate,
    resultData,
    weakStrengthDetails,
    data,
  } = props;
  const router = useRouter();
  console.log("datadatadatadata", !data);
  return (
    <>
      {/* Section Title */}
      <h2 className="font-bold text-[22px] md:text-[28px] lg:text-[35px] text-[#F5F0EB] font-[RocaTwo]">
        My Check-In Space
      </h2>

      {/* Subtitle */}
      <p className="text-[#0F4F58] font-[Roboto] font-[400] text-[13px] md:text-[17px] lg:text-[22px] ml-0 sm:ml-[20px] md:ml-[40px] mt-[10px] md:mt-[15px]">
        {!data
          ? "This is where your personal check-ins will appear."
          : `Based on your check-in from ${formattedDate}, here's what was coming through at the time, along with a few Pathways suggested as a starting point.`}
      </p>

      {/* Card Container */}
      {!data ? (
        <div className="bg-[#f5f0eb] pt-[1px] px-[16px] sm:px-[28px] md:px-[45px] pb-[12px] mt-[20px] border rounded-[10px]">
          <div className="flex justify-between mt-[60px] ">
            {" "}
            {/* What's Working Well */}
            <p className="text-[#0F4F58] font-[Aptos] text-[13px] md:text-[17px] lg:text-[22px] mt-[10px] ml-0 sm:ml-[10px] md:ml-[20px]">
              Once you complete your first check-in, you’ll see what was coming
              through for you, along with a few suggested Pathways to help you
              choose where to begin.
            </p>
            {/* Retake Button */}
            <div
              className="cursor-pointer"
              onClick={() => router.push("/start-quiz")}
            >
              <PolygonButton
                width="126px"
                height="107px"
                bgColor="#F6E3BF"
                radius={14}
                clipPath={`polygon(15% 11%, 81% 0%, 100% 87%, 3% calc(100% - 15px))`}
                decorationImg={{ src: images.arrowImg, width: 48, height: 48 }}
                decorationPosition={{
                  className: "-left-[37px] -top-[47px] rotate-[20deg]",
                }}
              >
                <span className="text-[#0F4F58] text-[17px] md:text-[20px] lg:text-[26px] font-[RocaTwo] font-bold leading-tight text-center">
                  Take the Check-In
                </span>
              </PolygonButton>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#f5f0eb] pt-[1px] px-[16px] sm:px-[28px] md:px-[45px] pb-[12px] mt-[20px] border rounded-[10px]">
          {/* What's Working Well */}
          <div className="mt-[24px] md:mt-[30px]">
            <div className="text-[#0F4F58] text-[16px] md:text-[20px] lg:text-[26px] font-[League Spartan] font-bold">
              What's already working well
            </div>
            <p className="text-[#0F4F58] font-[Aptos] text-[13px] md:text-[17px] lg:text-[22px] mt-[10px] ml-0 sm:ml-[10px] md:ml-[20px]">
              Maria, from what you shared, a few things are already coming
              through strongly:
            </p>

            <div className="mt-[16px] md:mt-[20px] ml-0 sm:ml-6 md:ml-14">
              {/* Strength items */}
              <div className="mt-2 ml-0 sm:ml-[30px] xl:ml-[65px]">
                {topStrengthDetails.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="relative pl-8"
                    style={{ fontFamily: "Aptos" }}
                  >
                    <span className="relative z-10 px-2 py-1 rounded text-[#0F4F58] text-[13px] md:text-[16px] lg:text-[20px]">
                      {item.description}
                    </span>

                    {/* Arrow */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
                      <div className="relative bg-[#E6A757] w-[18px] h-[14px] rounded-[4px] flex items-center justify-center">
                        <Image src={images.smallArrow} alt="small-arrow" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Celebration quote */}
              <div className="w-full flex justify-center mt-[30px] md:mt-[40px] relative px-2 md:px-0 overflow-visible">
                {/* Left decoration */}
                <Image
                  src={images.arrowImg}
                  alt="left decoration"
                  width={40}
                  height={40}
                  className="shrink-0 absolute block w-[22px] h-[22px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px] left-0 md:left-2 lg:-left-2 xl:left-[30px] bottom-[72px] sm:bottom-[75px] lg:bottom-[90px]"
                />

                <div className="text-[#0F4F58] text-[13px] md:text-[16px] lg:text-[20px] font-[700] font-[Roboto] max-w-full md:max-w-[823px] text-center mt-[10px] md:mt-[20px] px-6 sm:px-10 md:px-12 lg:px-16 xl:px-0">
                  These are qualities worth celebrating. They're not just traits
                  you have — they're the foundations you can keep building on as
                  you grow in your Pathway.
                </div>

                {/* Right decoration */}
                <Image
                  src={images.leftArrowImg}
                  alt="right decoration"
                  width={60}
                  height={40}
                  className="shrink-0 absolute block w-[30px] h-[20px] sm:w-[40px] sm:h-[28px] md:w-[50px] md:h-[32px] lg:w-[60px] lg:h-[40px] right-0 md:right-2 lg:-right-2 xl:right-[25px] -rotate-[35deg] bottom-[72px] sm:bottom-[75px] lg:bottom-[90px]"
                />
              </div>
            </div>
          </div>

          {/* Suggested Pathways */}
          <div className="mt-14 md:mt-20">
            <div className="relative z-20 text-[#567F55] font-[400]">
              <h3
                className="text-[#0F4F58] text-[16px] md:text-[20px] lg:text-[26px] font-bold"
                style={{ fontFamily: "RocaRwo" }}
              >
                A few places you could start
              </h3>
              <p
                className="text-[13px] md:text-[17px] lg:text-[22px] text-[#0F4F58] ml-0 sm:ml-[10px] md:ml-[20px] w-full xl:w-[900px]"
                style={{ fontFamily: "Aptos" }}
              >
                Based on what you shared, these Pathways could be a helpful next
                step.
              </p>

              {/* Cards — 1 col mobile, 2 col tablet/mid, 3 col xl+ */}
              <div className="mt-[24px] md:mt-[40px] ml-0 xl:ml-[65px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[20px] xl:gap-[40px]">
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

          {/* Retake Button */}
          <div className="flex justify-center sm:justify-end mt-[40px] md:mt-[63px] mb-[7px]">
            <div
              className="cursor-pointer"
              onClick={() => router.push("/start-quiz")}
            >
              <PolygonButton
                width="106px"
                height="107px"
                bgColor="#F6E3BF"
                radius={14}
                clipPath={`polygon(15% 11%, 81% 0%, 100% 87%, 3% calc(100% - 15px))`}
                decorationImg={{ src: images.arrowImg, width: 48, height: 48 }}
                decorationPosition={{
                  className: "-left-[37px] -top-[47px] rotate-[20deg]",
                }}
              >
                <span className="text-[#0F4F58] text-[17px] md:text-[20px] lg:text-[26px] font-[RocaTwo] font-bold leading-tight text-center">
                  Retake the Check-In
                </span>
              </PolygonButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MyQuizResults;
