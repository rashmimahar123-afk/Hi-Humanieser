import { AxiosResponse } from "axios";
import {
  CHOOSE_MYSELF_RESPONSE_TYPES,
  MPP_RAW_PILLAR_WRAPPER,
} from "../Types/ResponseTypes";
import {
  authFetcher,
  fetcher,
  findPulseCheckConfig,
} from "@/src/lib/Helpers";
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
  // The normalizer keeps only pillar_* entries, so pull the pulse check
  // config (used for the M3 comparison message) out of the raw response.
  const pulse_check_config = findPulseCheckConfig(response.data) ?? undefined;

  return {
    ...response,
    data: [{ pulse_check_config }, { framework_name: "", pillars }],
  };
};

function useChooseMyselfQuery() {
  return useQuery({
    queryKey: GET_CHOOSE_MYSELF_QUERY_KEY,
    queryFn: chooseMyself,
  });
}

export default useChooseMyselfQuery;
