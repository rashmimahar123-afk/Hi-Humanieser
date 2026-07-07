import { useSearchParams } from "next/navigation";
import StartQuizSecondPage from "../StartQuizSecondPage/StartQuizSecondPage";
import StartQuizFirstPage from "../StartQuizFirstPage/StartQuizFirstPage";
import styles from "./StartQuizPage.module.css";
import { useEffect, useRef, useState } from "react";
import StartQuizThirdPage from "../StartQuizThirdPage/StartQuizThirdPage";
import useGetQuestionsQuery from "../../Hooks/useGetQuestionsQuery";

type START_QUIZ_PAGE_PROPS = {
  profileData: any;
};

function StartQuizPage(props: START_QUIZ_PAGE_PROPS) {
  const { profileData } = props;
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

  const { data, isLoading, isError } = useGetQuestionsQuery();
  const quizData = data?.data?.pillars;
  return (
    <div>
      {step === "2" ? (
        <StartQuizSecondPage
          questionsRef={questionsRef}
          trackHeight={trackHeight}
          pillarTwo={quizData?.Pillar_02}
          firstName={profileData?.first_name}
        />
      ) : step === "3" ? (
        <StartQuizThirdPage
          questionsRef={questionsRef}
          trackHeight={trackHeight}
          pillarThree={quizData?.Pillar_03}
          firstName={profileData?.first_name}
        />
      ) : (
        <StartQuizFirstPage
          questionsRef={questionsRef}
          trackHeight={trackHeight}
          pillarOne={quizData?.Pillar_01}
          firstName={profileData?.first_name}
        />
      )}
    </div>
  );
}

export default StartQuizPage;
