import { AxiosResponse } from "axios";
import { QUIZ_QUESTIONS_RESPONSE } from "../Types/ResponseTypes";
import { authFetcher, fetcher } from "@/src/lib/Helpers";
import { useQuery } from "@tanstack/react-query";

export const GET_QUIZ_QUESTIONS_QUERY_KEY = ["getQuizQuestionsQueryKey"];

const getQuizQuestions = (): Promise<
  AxiosResponse<QUIZ_QUESTIONS_RESPONSE>
> => {
  return authFetcher({
    url: "/get-quiz-questions",
    method: "GET",
  });
};

function useGetQuestionsQuery() {
  return useQuery({
    queryKey: GET_QUIZ_QUESTIONS_QUERY_KEY,
    queryFn: getQuizQuestions,
  });
}

export default useGetQuestionsQuery;
