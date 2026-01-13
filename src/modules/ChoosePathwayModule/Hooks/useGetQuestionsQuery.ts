import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { QUIZ_QUESTIONS_RESPONSE } from "../Types/ResponseTypes";
import { authFetcher } from "@/src/lib/Helpers";

export const GET_QUIZ_QUESTIONS_QUERY_KEY = () => ["getQuizQuestionsQueryKey"];

const getQuizQuestions = (): Promise<
  AxiosResponse<QUIZ_QUESTIONS_RESPONSE>
> => {
  return authFetcher({
    url: "/get-quiz-questions",
    method: "GET",
  });
};

function useGetQuestionsQuery() {
  return useQuery(
    GET_QUIZ_QUESTIONS_QUERY_KEY(),
    () => getQuizQuestions()
    // {
    //   enabled: true,
    // }
  );
}

export default useGetQuestionsQuery;
