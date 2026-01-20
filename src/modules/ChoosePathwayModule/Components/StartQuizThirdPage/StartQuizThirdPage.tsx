/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./StartQuizThirdPage.module.css";
import VerticalProgressBar from "@/src/components/VerticalProgressBar/VerticalProgressBar";
import SuccessQuizMessage from "@/src/components/SuccessQuizMessage/SuccessQuizMessage";
import SecondEightQuestions from "../QuestionBank/SecondEightQuestions";
import LastEightQuestions from "../QuestionBank/LastEightQuestions";
import { useRouter } from "next/navigation";

type START_QUIZ_THIRD_PROPS_TYPES = {
  questionsRef: React.RefObject<HTMLDivElement | null>;
  trackHeight: number;
};

function StartQuizThirdPage(props: START_QUIZ_THIRD_PROPS_TYPES) {
  const { questionsRef, trackHeight } = props;
  const [animateText, setAnimateText] = useState(false);

  const [enter, setEnter] = useState(false);
  const [answers, setAnswers] = useState<Record<number, any>>({});

  const router = useRouter();
  const TOTAL_PROGRESS = 24;

  const PILLAR_1_DONE = 8;
  const PILLAR_2_DONE = 8; // step-2 also completed
  const PILLAR_3_MAX = 8;

  const pillar3Answered = Math.min(Object.keys(answers).length, PILLAR_3_MAX);

  // 🔥 OVERALL PROGRESS (16 → 24)
  const progressValue = PILLAR_1_DONE + PILLAR_2_DONE + pillar3Answered;

  useEffect(() => {
    setEnter(true);
  }, []);

  const handleCompleteQuiz = () => {
    setTimeout(() => {
      router.push("/result");
    }, 400);
  };

  const handleAnswer = (questionNo: number, value: any) => {
    setAnswers((prev) => ({
      ...prev,
      [questionNo]: value,
    }));
  };

  useEffect(() => {
    if (pillar3Answered === PILLAR_3_MAX && !animateText) {
      setAnimateText(true);
    }
  }, [pillar3Answered, animateText]);
  return (
    <div
      className={`${styles.page} ${enter ? styles.enterActive : styles.enter}`}
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
                  Pillar 3 – The Culture We Shape{" "}
                </h3>

                <p className="mt-2 text-[18px] leading-relaxed text-[#737373] font-[Aptos] ">
                  This last section is about the bigger picture: the culture we
                  create together. These questions explore how we design team
                  habits, build belonging, integrate wellbeing, and make our
                  ways of working sustainable.
                </p>
              </div>
            </header>

            {/* Question Bank */}
            <div className="w-[700px]" ref={questionsRef}>
              <LastEightQuestions onAnswer={handleAnswer} answers={answers} />
            </div>

            {/* Footer */}
            <div className="flex justify-end relative mt-[51px] mr-[31px]">
              <div className="absolute text-[#E3A45B] text-xl -top-[35%] -right-[2%] -rotate-[18deg]">
                <Image src={images.rightArrow} alt="arrow-img" width={32} />
              </div>
              <div
                className={styles.startTriangleWrapper}
                onClick={() => handleCompleteQuiz()}
              >
                {/* Polygon Shape */}
                <div className={styles.clipStartTriangle} />

                <span className={styles.startTriangleText}>
                  Show My <br /> Results
                </span>
              </div>
            </div>
          </div>
          {/* Right Progress Bar */}
          <div className="absolute right-12 top-[181px] w-[57px] h-[567px] bg-[#BDBDBD] rounded-[77px]">
            <VerticalProgressBar
              trackHeight={trackHeight}
              total={TOTAL_PROGRESS}
              answered={progressValue}
            />
          </div>
          <div>
            <SuccessQuizMessage show={animateText} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartQuizThirdPage;
