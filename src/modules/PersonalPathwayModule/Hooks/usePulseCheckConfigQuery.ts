import { authFetcher, findPulseCheckConfig } from "@/src/lib/Helpers";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import {
  PULSE_CHECK_COMP_FEEDBACK_TYPE,
  PULSE_CHECK_SCALE_TYPE,
} from "@/src/modules/ChoosePathwayModule/Types/ResponseTypes";
import useChooseMyselfQuery from "@/src/modules/ChoosePathwayModule/Hooks/useChooseMyselfQuery";

export const GET_PULSE_CHECK_CONFIG_QUERY_KEY = ["getPulseCheckConfigQueryKey"];

export type PULSE_CHECK_CONFIG_TYPE = {
  scale?: Array<PULSE_CHECK_SCALE_TYPE>;
  comparison_feedback?: PULSE_CHECK_COMP_FEEDBACK_TYPE;
};

const hhFrameworkPulseConfig =
  async (): Promise<PULSE_CHECK_CONFIG_TYPE | null> => {
    const response = await authFetcher({
      url: "/get-json/hh_framework_mpp.json",
      method: "GET",
    });

    return findPulseCheckConfig(response.data);
  };

// Pulse check feedback lives in hh_framework_mpp.json; fall back to
// hh_framework.json only when the MPP framework doesn't carry it.
function usePulseCheckConfig(): PULSE_CHECK_CONFIG_TYPE | null | undefined {
  const { data: chooseMyselfData, isSuccess: isMppLoaded } =
    useChooseMyselfQuery();
  const mppConfig = chooseMyselfData?.data?.[0]?.pulse_check_config;

  const { data: fallbackConfig, isFetched: isFallbackFetched } = useQuery({
    queryKey: GET_PULSE_CHECK_CONFIG_QUERY_KEY,
    queryFn: hhFrameworkPulseConfig,
    enabled: isMppLoaded && !mppConfig,
  });

  const config = mppConfig ?? fallbackConfig;

  useEffect(() => {
    if (isMppLoaded && isFallbackFetched && !config) {
      console.warn(
        "[PulseCheck] pulse_check_config not found in hh_framework_mpp.json or hh_framework.json — M3 feedback message cannot be shown.",
      );
    }
  }, [isMppLoaded, isFallbackFetched, config]);

  return config;
}

export default usePulseCheckConfig;
