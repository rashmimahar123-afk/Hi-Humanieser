import { AxiosResponse } from "axios";
import { authFetcher } from "@/src/lib/Helpers";
import { useQuery } from "@tanstack/react-query";
import { GET_MTJ_CYCLE_OVERVIEW_RESPONSE } from "../Types/ResponseTypes";

export const GET_MTJ_CYCLE_OVERVIEW_QUERY_KEY = [
  "getMtjCycleOverviewQueryKey",
];

const getMtjCycleOverview = (
  teamId?: string,
): Promise<AxiosResponse<GET_MTJ_CYCLE_OVERVIEW_RESPONSE>> => {
  return authFetcher({
    url: `/mtj/cycle-overview${teamId ? `?team_id=${teamId}` : ""}`,
    method: "GET",
  });
};

function useGetMtjCycleOverviewQuery(teamId?: string) {
  return useQuery({
    queryKey: [...GET_MTJ_CYCLE_OVERVIEW_QUERY_KEY, teamId],
    queryFn: () => getMtjCycleOverview(teamId),
    refetchOnMount: true,
  });
}

export default useGetMtjCycleOverviewQuery;