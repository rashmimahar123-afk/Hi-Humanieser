import { AxiosResponse } from "axios";
import { authFetcher, fetcher } from "@/src/lib/Helpers";
import { useQuery } from "@tanstack/react-query";
import { HH_FRAMEWORK_MTJ_RESPONSE_TYPES } from "../Types/ResponseTypes";

export const GET_HH_FRAMEWORK_MTJ_KEY = ["getHhFrameworkMtjQueryKey"];

const hhFrameworkMtj = (): Promise<
  AxiosResponse<HH_FRAMEWORK_MTJ_RESPONSE_TYPES>
> => {
  return authFetcher({
    url: "/get-json/hh_framework_mtj.json",
    method: "GET",
  });
};

function useHhFrameworkMtjQuery() {
  return useQuery({
    queryKey: GET_HH_FRAMEWORK_MTJ_KEY,
    queryFn: hhFrameworkMtj,
  });
}

export default useHhFrameworkMtjQuery;
