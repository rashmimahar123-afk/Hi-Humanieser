import { AxiosResponse } from "axios";
import { authFetcher } from "@/src/lib/Helpers";
import { useQuery } from "@tanstack/react-query";
import { GET_MTJ_KPI_RESPONSE } from "../Types/ResponseTypes";

export const GET_MTJ_KPI_QUERY_KEY = ["getMtjKpiQueryKey"];

const getMtjKpi = (
  teamId?: string,
  previousCyclesLimit: number = 60,
): Promise<AxiosResponse<GET_MTJ_KPI_RESPONSE>> => {
  const params = new URLSearchParams();

  if (teamId) {
    params.append("team_id", teamId);
  }

  params.append("previous_cycles_limit", String(previousCyclesLimit));

  return authFetcher({
    url: `/mtj/team-kpis?${params.toString()}`,
    method: "GET",
  });
};

function useGetKpiQuery(
  teamId?: string,
  previousCyclesLimit: number = 60,
  enabled: boolean = true,
) {
  return useQuery({
    queryKey: [...GET_MTJ_KPI_QUERY_KEY, teamId, previousCyclesLimit],
    queryFn: () => getMtjKpi(teamId, previousCyclesLimit),
    enabled,
    refetchOnMount: true,
  });
}

export default useGetKpiQuery;
