import { AxiosResponse } from "axios";
import {
  QUIZ_QUESTIONS_RESPONSE,
  RESULT_MESSAGE_RESPONSE_TYPES,
} from "../Types/ResponseTypes";
import { authFetcher, fetcher } from "@/src/lib/Helpers";
import { useQuery } from "@tanstack/react-query";

export const GET_RESULT_MESSAGES_QUERY_KEY = ["getResultMessagesQueryKey"];

const getResultMessages = (): Promise<
  AxiosResponse<RESULT_MESSAGE_RESPONSE_TYPES>
> => {
  return authFetcher({
    url: "/get-json/pathway_selection_messages.json",
    method: "GET",
  });
};

function useResultMessagesQuery() {
  return useQuery({
    queryKey: GET_RESULT_MESSAGES_QUERY_KEY,
    queryFn: getResultMessages,
  });
}

export default useResultMessagesQuery;
