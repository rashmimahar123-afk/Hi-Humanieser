import { AxiosResponse } from "axios";
import { authFetcher } from "@/src/lib/Helpers";
import { useQuery } from "@tanstack/react-query";
import {
  GET_MTJ_CYCLE_OVERVIEW_RESPONSE,
  GET_MTJ_KPI_RESPONSE,
} from "../Types/ResponseTypes";

export const GET_MTJ_KPI_QUERY_KEY = ["getMtjKpiQueryKey"];

const getMtjKpi = (
  teamId?: string,
): Promise<AxiosResponse<GET_MTJ_KPI_RESPONSE>> => {
  return authFetcher({
    url: `/mtj/team-kpis${teamId ? `?team_id=${teamId}` : ""}`,
    method: "GET",
  });
};

function useGetKpiQuery(teamId?: string) {
  return useQuery({
    queryKey: [...GET_MTJ_KPI_QUERY_KEY, teamId],
    queryFn: () => getMtjKpi(teamId),
    refetchOnMount: true,
  });
}

export default useGetKpiQuery;
