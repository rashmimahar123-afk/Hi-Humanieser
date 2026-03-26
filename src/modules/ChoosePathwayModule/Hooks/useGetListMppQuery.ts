import { AxiosResponse } from "axios";
import {
  GET_LIST_MPP_RESPONSE_TYPES,
  QUIZ_QUESTIONS_RESPONSE,
} from "../Types/ResponseTypes";
import { authFetcher, fetcher } from "@/src/lib/Helpers";
import { useQuery } from "@tanstack/react-query";

export const GET_LIST_MPP_QUERY_KEY = ["getListMppQueryKey"];

const getListMpp = (): Promise<AxiosResponse<GET_LIST_MPP_RESPONSE_TYPES>> => {
  return authFetcher({
    url: "/list-mpp",
    method: "GET",
  });
};

function useGetListMppQuery() {
  return useQuery({
    queryKey: GET_LIST_MPP_QUERY_KEY,
    queryFn: getListMpp,
  });
}

export default useGetListMppQuery;
