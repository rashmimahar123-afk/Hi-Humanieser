import { AxiosResponse } from "axios";
import { authFetcher, fetcher } from "@/src/lib/Helpers";
import { useQuery } from "@tanstack/react-query";
import { GET_MTJ_LIST_RESPONSE } from "../Types/ResponseTypes";

export const GET_MTJ_LIST_QUERY_KEY = ["getMtjListQueryKey"];

const getMtjList = (): Promise<AxiosResponse<GET_MTJ_LIST_RESPONSE>> => {
  return authFetcher({
    url: "/list-mtj",
    method: "GET",
  });
};

function useGetMtjListQuery() {
  return useQuery({
    queryKey: GET_MTJ_LIST_QUERY_KEY,
    queryFn: getMtjList,
  });
}

export default useGetMtjListQuery;
