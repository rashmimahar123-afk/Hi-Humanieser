import { AxiosResponse } from "axios";
import {
  CHOOSE_MYSELF_RESPONSE_TYPES,
  MPP_RAW_PILLAR_WRAPPER,
} from "../Types/ResponseTypes";
import { authFetcher, fetcher } from "@/src/lib/Helpers";
import { useQuery } from "@tanstack/react-query";
import { normalizeMppFramework } from "../Helpers/normalizeMppFramework";

export const GET_CHOOSE_MYSELF_QUERY_KEY = ["getChooseMyselfQueryKey"];

const chooseMyself = async (): Promise<
  AxiosResponse<CHOOSE_MYSELF_RESPONSE_TYPES>
> => {
  const response: AxiosResponse<MPP_RAW_PILLAR_WRAPPER[]> = await authFetcher({
    url: "/get-json/hh_framework_mpp.json",
    method: "GET",
  });

  const pillars = normalizeMppFramework(response.data);

  return {
    ...response,
    data: [{}, { framework_name: "", pillars }],
  };
};

function useChooseMyselfQuery() {
  return useQuery({
    queryKey: GET_CHOOSE_MYSELF_QUERY_KEY,
    queryFn: chooseMyself,
  });
}

export default useChooseMyselfQuery;
