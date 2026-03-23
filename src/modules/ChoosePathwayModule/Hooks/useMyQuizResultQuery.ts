import { AxiosResponse } from "axios";
import {
  MY_QUIZ_RESULT_RESPONSE_TYPES,
  QUIZ_QUESTIONS_RESPONSE,
} from "../Types/ResponseTypes";
import { authFetcher, fetcher } from "@/src/lib/Helpers";
import { useQuery } from "@tanstack/react-query";

export const GET_MY_QUIZ_RESULT_QUERY_KEY = ["getMyResultQueryKey"];

const getMyQuizResult = (): Promise<
  AxiosResponse<MY_QUIZ_RESULT_RESPONSE_TYPES>
> => {
  return authFetcher({
    url: "/my-quiz-results",
    method: "GET",
  });
};

function useMyQuizResultQuery() {
  return useQuery({
    queryKey: GET_MY_QUIZ_RESULT_QUERY_KEY,
    queryFn: getMyQuizResult,
  });
}

export default useMyQuizResultQuery;
