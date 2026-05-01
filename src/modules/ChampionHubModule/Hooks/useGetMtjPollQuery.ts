import { AxiosResponse } from "axios";
import { authFetcher, fetcher } from "@/src/lib/Helpers";
import { useQuery } from "@tanstack/react-query";
import { GET_MTJ_POLL_RESPONSE } from "../Types/ResponseTypes";

export const GET_MTJ_POLL_QUERY_KEY = ["getMtjPollQueryKey"];

const getMtjPoll = (): Promise<AxiosResponse<GET_MTJ_POLL_RESPONSE>> => {
  return authFetcher({
    url: "/mtj/member/get-poll",
    method: "GET",
  });
};

function useGetMtjPollQuery() {
  return useQuery({
    queryKey: GET_MTJ_POLL_QUERY_KEY,
    queryFn: getMtjPoll,
  });
}

export default useGetMtjPollQuery;
