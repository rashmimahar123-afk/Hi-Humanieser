/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./StartQuizFirstPage.module.css";
import VerticalProgressBar from "@/src/components/VerticalProgressBar/VerticalProgressBar";
import SuccessQuizMessage from "@/src/components/SuccessQuizMessage/SuccessQuizMessage";
import FirstEightQuestions from "../QuestionBank/FirstEightQuestions";
import { useRouter } from "next/navigation";
import { PILLAR_DATA } from "../../Types/ResponseTypes";

type START_QUIZ_FIRST_PROPS_TYPES = {
  questionsRef: React.RefObject<HTMLDivElement | null>;
  trackHeight: number;
  pillarOne?: PILLAR_DATA;
  firstName?: string;
};

function StartQuizFirstPage(props: START_QUIZ_FIRST_PROPS_TYPES) {
  const { questionsRef, trackHeight, pillarOne, firstName } = props;
  const [animateText, setAnimateText] = useState(false);
  const [enter, setEnter] = useState(false);

  const TOTAL_PROGRESS = 24;
  const PILLAR_1_MAX = 8;

  const [answers, setAnswers] = useState<Record<number, any>>({});

  const answeredCount = Object.keys(answers).length;
  // Pillar-1 contributes 0 → 8
  const progressValue = Math.min(answeredCount, PILLAR_1_MAX);
  const isAllAnswered = answeredCount === PILLAR_1_MAX;
  const router = useRouter();
  const handleAnswer = (questionNo: number, value: any) => {
    setAnswers((prev) => ({
      ...prev,
      [questionNo]: value,
    }));
  };
  useEffect(() => {
    setEnter(true);
  }, []);

  useEffect(() => {
    if (answeredCount === 8) {
      setAnimateText(true);
    }
  }, [answeredCount]);

  const strengthMap: Record<string, number> = {
    Never: 1,
    Rarely: 2,
    Sometimes: 3,
    Often: 4,
    Always: 5,
  };

  const buildPayload = () => {
    const payload: any = {
      pillar_01: {},
    };

    const principles = pillarOne?.principles || {};

    let globalQIndex = 1; // ✅ IMPORTANT

    Object.entries(principles).forEach(([principleKey, principle]: any) => {
      const formattedKey =
        principleKey.charAt(0).toLowerCase() + principleKey.slice(1);

      payload.pillar_01[formattedKey] = {};

      principle.questions.forEach((question: any) => {
        const answer = answers[globalQIndex];

        if (question.type === "strength") {
          payload.pillar_01[formattedKey].strength = strengthMap[answer] ?? 0;
        } else {
          payload.pillar_01[formattedKey].situation =
            typeof answer === "number" ? answer : 0;
        }

        globalQIndex++; // ✅ increment globally
      });
    });

    return payload;
  };

  const handleCompleteQuiz = () => {
    if (!isAllAnswered) return;
    const payload = buildPayload();

    localStorage.setItem("quiz_pillar_1", JSON.stringify(payload));

    setTimeout(() => {
      router.push("/start-quiz?step=2");
    }, 400);
  };
  return (
    <div
      className={`${styles.page} ${enter ? styles.enterActive : styles.enter} `}
    >
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
              className="cursor-pointer"
              onClick={() => router.push("/home")}
            >
              <div
                className="text-[#567F55] cursor-pointer"
                style={{ fontFamily: "Aptos", fontSize: "22px" }}
              >
                Hi Humaniser!{" "}
                <span className="align-super text-[0.7em]">™</span>
              </div>

              <h1
                className="mt-4 text-[56px] text-[#0F4F58] font-bold leading-[40%]"
                style={{ fontFamily: "RocaTwo-Bold" }}
              >
                Hi {firstName}!
              </h1>
            </div>
            <div className="flex justify-center mt-[40px]">
              <div>
                <h2
                  className=" text-[45px] text-[#567F55] font-bold"
                  style={{ fontFamily: "RocaTwo-Bold", marginLeft: "76px" }}
                >
                  Let’s find your starting point
                </h2>
                <div>
                  {/* TEXT (Always on top) */}
                  <div
                    className="relative z-20 text-[#567F55] text-[24px] ml-[110px] font-[400]"
                    style={{ fontFamily: "RocaRwo-Bold" }}
                  >
                    <div>
                      This short check-in to reflect on how work feels for you
                      right now. It will guide you towards a few Pathways that
                      might help.
                    </div>
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
                          It takes around 10 minutes to complete{" "}
                        </li>

                        <li className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#567F55]" />
                          There are no right or wrong answers, just what feels
                          true for you
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
                    individual answers. (Champions may see overall, anonymised
                    data across the team to help shape better workplaces, but{" "}
                    never your personal responses.)
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-[40px] text-[22px] font-bold font-['Aptos'] text-[#0F4F58]">
              <h2>
                Take a minute, answer honestly, and see what emerges. This is
                your space.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="max-w-[1000px] bg-white rounded-2xl px-8 py-8 relative">
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
            <div className="flex gap-[150px] mt-6 w-full">
              <div className="w-[800px] " ref={questionsRef}>
                {" "}
                <FirstEightQuestions
                  onAnswer={handleAnswer}
                  answers={answers}
                  pillarOne={pillarOne}
                />
              </div>
              <div className="relative">
                {/* Right Progress Bar */}
                <div className="absolute right-12 top-[20px] w-[57px] h-[567px] bg-[#BDBDBD] rounded-[77px]">
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
              className={`flex justify-end relative mt-[60px] mr-[31px] ${
                !isAllAnswered ? "opacity-50 pointer-events-none" : ""
              }`}
              onClick={() => handleCompleteQuiz()}
            >
              <div className="absolute text-[#E3A45B] text-xl -top-[35%] -right-[2%] -rotate-[18deg]">
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

          <div>
            <SuccessQuizMessage show={animateText} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartQuizFirstPage;
