import { AxiosResponse } from "axios";
import { authFetcher } from "@/src/lib/Helpers";
import { useQuery } from "@tanstack/react-query";
import { TEAM_KPIS_RESPONSE_TYPES } from "../Types/ResponseTypes";

export const GET_TEAM_KPIS_QUERY_KEY = ["getTeamKpisQueryKey"];

const getTeamKpis = (
  teamId?: string,
): Promise<AxiosResponse<TEAM_KPIS_RESPONSE_TYPES>> => {
  return authFetcher({
    url: `/mtj/team-kpis?team_id=${teamId}`,
    method: "GET",
  });
};

function useTeamKpisQuery(teamId?: string) {
  return useQuery({
    queryKey: [...GET_TEAM_KPIS_QUERY_KEY, teamId],
    queryFn: () => getTeamKpis(teamId),
    enabled: !!teamId,
  });
}

export default useTeamKpisQuery;
