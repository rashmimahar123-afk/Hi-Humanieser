import { AxiosResponse } from "axios";
import { CHOOSE_MYSELF_RESPONSE_TYPES } from "../Types/ResponseTypes";
import { authFetcher, fetcher } from "@/src/lib/Helpers";
import { useQuery } from "@tanstack/react-query";

export const GET_CHOOSE_MYSELF_QUERY_KEY = ["getChooseMyselfQueryKey"];

const chooseMyself = (): Promise<
  AxiosResponse<CHOOSE_MYSELF_RESPONSE_TYPES>
> => {
  return authFetcher({
    url: "/get-json/hh_framework_mpp.json",
    method: "GET",
  });
};

function useChooseMyselfQuery() {
  return useQuery({
    queryKey: GET_CHOOSE_MYSELF_QUERY_KEY,
    queryFn: chooseMyself,
  });
}

export default useChooseMyselfQuery;
