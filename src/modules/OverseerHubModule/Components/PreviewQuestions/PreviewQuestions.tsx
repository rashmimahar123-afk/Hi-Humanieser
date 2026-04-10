import { useSearchParams } from "next/navigation";
import styles from "./PreviewQuestions.module.css";
import { useEffect, useRef, useState } from "react";
import images from "@/src/assets/images";
import Image from "next/image";
import VerticalProgressBar from "@/src/components/VerticalProgressBar/VerticalProgressBar";

function PreviewQuestions() {
  const searchParams = useSearchParams();
  const step = searchParams.get("step"); // "2"

  const questionsRef = useRef<HTMLDivElement>(null);
  const [trackHeight, setTrackHeight] = useState(0);

  useEffect(() => {
    if (questionsRef.current) {
      setTrackHeight(questionsRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (questionsRef.current) {
        setTrackHeight(questionsRef.current.offsetHeight);
      }
    });

    if (questionsRef.current) observer.observe(questionsRef.current);

    return () => observer.disconnect();
  }, []);

  const STATIC_DATA = {
    pillars: [
      {
        name: "Self Awareness",
        questions: [
          {
            prompt:
              "When I start a piece of work, I’m clear on what good looks like",
            type: "strength",
            scale: {
              labels: [
                "Strongly Disagree",
                "Disagree",
                "Neutral",
                "Agree",
                "Strongly Agree",
              ],
            },
          },
          {
            prompt: "I understand how my work connects to the bigger goals",
            type: "strength",
            scale: {
              labels: [
                "Strongly Disagree",
                "Disagree",
                "Neutral",
                "Agree",
                "Strongly Agree",
              ],
            },
          },
          {
            prompt: "I understand how my work connects to the bigger goals",
            type: "strength",
            scale: {
              labels: [
                "Strongly Disagree",
                "Disagree",
                "Neutral",
                "Agree",
                "Strongly Agree",
              ],
            },
          },
          {
            prompt: "I understand how my work connects to the bigger goals",
            type: "strength",
            scale: {
              labels: [
                "Strongly Disagree",
                "Disagree",
                "Neutral",
                "Agree",
                "Strongly Agree",
              ],
            },
          },
          {
            prompt: "I understand how my work connects to the bigger goals",
            type: "strength",
            scale: {
              labels: [
                "Strongly Disagree",
                "Disagree",
                "Neutral",
                "Agree",
                "Strongly Agree",
              ],
            },
          },
          {
            prompt: "I understand how my work connects to the bigger goals",
            type: "strength",
            scale: {
              labels: [
                "Strongly Disagree",
                "Disagree",
                "Neutral",
                "Agree",
                "Strongly Agree",
              ],
            },
          },
          {
            prompt: "I understand how my work connects to the bigger goals",
            type: "strength",
            scale: {
              labels: [
                "Strongly Disagree",
                "Disagree",
                "Neutral",
                "Agree",
                "Strongly Agree",
              ],
            },
          },
          {
            prompt: "I understand how my work connects to the bigger goals",
            type: "strength",
            scale: {
              labels: [
                "Strongly Disagree",
                "Disagree",
                "Neutral",
                "Agree",
                "Strongly Agree",
              ],
            },
          },
          {
            prompt: "I understand how my work connects to the bigger goals",
            type: "strength",
            scale: {
              labels: [
                "Strongly Disagree",
                "Disagree",
                "Neutral",
                "Agree",
                "Strongly Agree",
              ],
            },
          },
          {
            prompt: "I understand how my work connects to the bigger goals",
            type: "strength",
            scale: {
              labels: [
                "Strongly Disagree",
                "Disagree",
                "Neutral",
                "Agree",
                "Strongly Agree",
              ],
            },
          },
        ],
      },
    ],
  };
  const quizData = STATIC_DATA.pillars;
  const pillarOne = quizData[0];
  const [allQuestions] = useState(() =>
    [...pillarOne.questions].sort(() => Math.random() - 0.5),
  );

  const [answers, setAnswers] = useState<{ [key: number]: any }>({});

  const onAnswer = (qNo: number, value: any) => {
    setAnswers((prev) => ({
      ...prev,
      [qNo]: value,
    }));
  };
  const TOTAL_PROGRESS = allQuestions.length;
  const progressValue = Object.keys(answers).length;
  const isAllAnswered = progressValue === TOTAL_PROGRESS;

  return (
    <div>
      <div className="relative">
        <Image
          src={images.quizPolygon}
          alt="login-rectangle"
          width={630}
          height={630}
          className="absolute top-0 right-0 z-0"
        />
      </div>

      <div className="flex">
        {" "}
        {/* Overlay content */}
        <div className=" px-8 py-6 flex justify-between">
          {/* Left */}
          <div>
            <div
              className="text-[#567F55]"
              style={{ fontFamily: "Aptos", fontSize: "22px" }}
            >
              Hi Humaniser! <span className="align-super text-[0.7em]">™</span>
            </div>

            <h1
              className="mt-4 text-[56px] text-[#0F4F58] font-bold leading-[40%]"
              style={{ fontFamily: "RocaTwo-Bold" }}
            >
              Hi Maria!
            </h1>
            <div
              className="flex justify-center mt-6
"
            >
              <div>
                <h2
                  className="relative z-20 text-[45px] text-[#567F55] font-bold"
                  style={{ fontFamily: "RocaTwo-Bold", marginLeft: "76px" }}
                >
                  Let’s find your starting point
                </h2>
                <div>
                  {/* TEXT (Always on top) */}
                  <div
                    className="relative z-20 text-[#567F55] text-[24px] ml-4
 font-[400]"
                    style={{ fontFamily: "RocaRwo-Bold" }}
                  >
                    <div>
                      This short quiz helps you reflect on how work feels for
                      you right now and guides you toward
                    </div>
                    <div>Pathways that fit where you are.</div>
                    <div className=" mt-2">
                      <ul
                        className="ml-[76px] space-y-3 text-[#567F55] text-[20px]"
                        style={{ fontFamily: "Aptos" }}
                      >
                        <li className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#567F55]" />
                          You’ll receive 3 personalised Pathways you can start
                          with
                        </li>

                        <li className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#567F55]" />
                          It takes around 10 minutes to complete
                        </li>

                        <li className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#567F55]" />
                          There are no right or wrong answers — just honest one
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* SKY SHAPE CARD */}
                </div>
                <div
                  className="relative z-20 mt-4 text-[#567F55] text-[24px] ml-[76px] font-[400]"
                  style={{ fontFamily: "RocaRwo-Bold" }}
                >
                  <div>
                    Your responses are anonymous: no one will see your
                    individual answers.
                  </div>
                  <div>
                    (Champions may see overall, anonymised data across the team
                    to help shape better workplaces, but{" "}
                  </div>
                  <div>never your personal responses.)</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6 text-[22px] font-bold font-['Aptos'] text-[#0F4F58]">
              <h2>So share what feels real for you today — this is for you.</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="max-w-[800px] bg-white rounded-2xl px-8 py-8 relative">
          <div className="w-full">
            <header>
              {" "}
              {/* Pillar Box */}
              <div className="bg-[#C2E2E2] rounded-[12px] px-4 py-2">
                <h3 className="text-[23px] font-[400] text-[#737373] font-[RocaTwo-Bold]">
                  Pillar 1 – {pillarOne?.name}
                </h3>

                <p className="mt-2 text-[18px] leading-relaxed text-[#737373] font-[Aptos] ">
                  This first section is about how we show up as individuals, the
                  attitudes and habits we carry into our work. These questions
                  explore self-awareness, curiosity, honesty, and perspective.
                </p>
              </div>
            </header>

            {/* Question Bank */}
            <div className="flex gap-8 mt-6 w-full">
              <div className="w-full " ref={questionsRef}>
                <>
                  {allQuestions.map((item, index) => {
                    const qNo = index + 1;

                    return (
                      <div key={index} className="mt-10">
                        <p className="text-[21px] font-[700] text-[#737373]">
                          Q{qNo}: {item.prompt}
                        </p>
                        <div className="relative mt-8 ml-[100px]">
                          <div className="absolute top-3 left-0 right-0 h-[2px] bg-gray-300" />

                          <div className="flex justify-between relative">
                            {item?.scale?.labels.map((label: any) => (
                              <div
                                key={label}
                                className="flex flex-col items-center gap-2"
                              >
                                <div
                                  className="relative w-[24px] h-[24px] cursor-pointer"
                                  onClick={() => onAnswer(qNo, label)}
                                >
                                  <div className="w-full h-full rounded-full bg-[#86C9C9]" />

                                  {answers[qNo] === label && (
                                    <Image
                                      src={images.tickImg}
                                      alt="tick"
                                      width={14}
                                      height={14}
                                      className="absolute top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2"
                                    />
                                  )}
                                </div>

                                <span className="text-[16px] text-[#737373] text-center w-[120px]">
                                  {label}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              </div>
              <div className="relative">
                {/* Right Progress Bar */}
                <div className="hidden md:block absolute  top-[20px] w-[57px] h-[567px] bg-[#BDBDBD] rounded-[77px]">
                  <VerticalProgressBar
                    trackHeight={trackHeight}
                    total={TOTAL_PROGRESS}
                    answered={progressValue}
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div
              className={`flex justify-end relative mt-10  ${
                !isAllAnswered ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              <div className="absolute text-[#E3A45B] text-xl -top-[35%] -rotate-[18deg]">
                <Image src={images.rightArrow} alt="arrow-img" width={32} />
              </div>
              <div className={styles.startTriangleWrapper}>
                {/* Polygon Shape */}
                <div className={styles.clipStartTriangle} />

                <span className={styles.startTriangleText}>
                  Continue <br /> Quiz
                </span>
              </div>
            </div>
          </div>

          {/* <div>
            <SuccessQuizMessage show={animateText} />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default PreviewQuestions;
