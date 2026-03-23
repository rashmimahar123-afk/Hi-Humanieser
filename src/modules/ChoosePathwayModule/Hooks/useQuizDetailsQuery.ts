import { AxiosResponse } from "axios";
import { QUIZ_QUESTIONS_RESPONSE } from "../Types/ResponseTypes";
import { authFetcher, fetcher } from "@/src/lib/Helpers";
import { useQuery } from "@tanstack/react-query";

export const GET_QUIZ_DETAILS_QUERY_KEY = ["getQuizDetailsQueryKey"];

const getQuizDetails = (): Promise<AxiosResponse<QUIZ_QUESTIONS_RESPONSE>> => {
  return authFetcher({
    url: "/get-json/quiz.json",
    method: "GET",
  });
};

function useQuizDetailsQuery() {
  return useQuery({
    queryKey: GET_QUIZ_DETAILS_QUERY_KEY,
    queryFn: getQuizDetails,
  });
}

export default useQuizDetailsQuery;
