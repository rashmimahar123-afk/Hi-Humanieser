/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./StartQuizSecondPage.module.css";
import VerticalProgressBar from "@/src/components/VerticalProgressBar/VerticalProgressBar";
import SuccessQuizMessage from "@/src/components/SuccessQuizMessage/SuccessQuizMessage";
import SecondEightQuestions from "../QuestionBank/SecondEightQuestions";
import { useRouter } from "next/navigation";
import { PILLAR_DATA } from "../../Types/ResponseTypes";

type START_QUIZ_SECOND_PROPS_TYPES = {
  questionsRef: React.RefObject<HTMLDivElement | null>;
  trackHeight: number;
  pillarTwo?: PILLAR_DATA;
  firstName?: string;
};

function StartQuizSecondPage(props: START_QUIZ_SECOND_PROPS_TYPES) {
  const { questionsRef, trackHeight, pillarTwo, firstName } = props;
  const [animateText, setAnimateText] = useState(false);

  const [enter, setEnter] = useState(false);
  const TOTAL_PROGRESS = 24;

  const [answers, setAnswers] = useState<Record<number, any>>({});

  const PILLAR_1_DONE = 8; // step-1 already completed
  const PILLAR_2_MAX = 8; // this page questions

  const pillar2Answered = Math.min(Object.keys(answers).length, PILLAR_2_MAX);
  const answeredCount = Object.keys(answers).length;

  const progressValue = PILLAR_1_DONE + pillar2Answered;

  const isAllAnswered = answeredCount === PILLAR_2_MAX;

  const router = useRouter();

  useEffect(() => {
    setEnter(true);
  }, []);

  const handleAnswer = (questionNo: number, value: any) => {
    setAnswers((prev) => ({
      ...prev,
      [questionNo]: value,
    }));
  };
  useEffect(() => {
    if (pillar2Answered === PILLAR_2_MAX && !animateText) {
      setAnimateText(true);
    }
  }, [pillar2Answered, animateText]);

  const strengthMap: Record<string, number> = {
    Never: 1,
    Rarely: 2,
    Sometimes: 3,
    Often: 4,
    Always: 5,
  };

  const buildPayload = () => {
    const payload: any = {
      pillar_02: {},
    };

    const principles = pillarTwo?.principles || {};

    let globalQIndex = 9;

    Object.entries(principles || {}).forEach(
      ([principleKey, principle]: any) => {
        const formattedKey =
          principleKey.charAt(0).toLowerCase() + principleKey.slice(1);

        payload.pillar_02[formattedKey] = {};

        principle.questions.forEach((question: any) => {
          const answer = answers[globalQIndex];

          if (question.type === "strength") {
            payload.pillar_02[formattedKey].strength = strengthMap[answer] ?? 0;
          } else {
            payload.pillar_02[formattedKey].situation =
              typeof answer === "number" ? answer : 0;
          }

          globalQIndex++;
        });
      },
    );

    return payload;
  };

  const handleCompleteQuiz = () => {
    if (!isAllAnswered) return;
    const payload = buildPayload();

    localStorage.setItem("quiz_pillar_2", JSON.stringify(payload));

    setTimeout(() => {
      router.push("/start-quiz?step=3");
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
        <div className="px-8 py-6 flex justify-between">
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
              Hi {firstName}!
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-[40px]">
        <div className="max-w-[1000px] bg-white rounded-2xl px-8 py-8 relative">
          <div className="w-full">
            <header>
              {" "}
              {/* Pillar Box */}
              <div className="bg-[#C2E2E2] rounded-[12px] px-4 py-2">
                <h3 className="text-[23px] font-[400] text-[#737373] font-[RocaTwo-Bold]">
                  Pillar 2 – {pillarTwo?.name}
                </h3>

                <p className="mt-2 text-[18px] leading-relaxed text-[#737373] font-[Aptos] ">
                  This section looks at how we interact with others. It’s about
                  the quality of our conversations — recognising people,
                  creating safety, speaking with clarity and listening to
                  understand.
                </p>
              </div>
            </header>

            {/* Question Bank */}
            <div className="flex gap-[150px] mt-6 w-full">
              <div className="w-[800px]" ref={questionsRef}>
                <SecondEightQuestions
                  onAnswer={handleAnswer}
                  answers={answers}
                  pillarTwo={pillarTwo}
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
              className={`flex justify-end relative mt-[50px] mr-[31px] ${
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

export default StartQuizSecondPage;
