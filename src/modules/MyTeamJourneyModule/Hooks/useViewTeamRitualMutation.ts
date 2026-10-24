import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";
import { VIEW_TEAM_RITUAL_REQUEST } from "../Types/RequestTypes";
import { GET_MTJ_LIST_QUERY_KEY } from "./useGetMtjListQuery";
import { GET_MTJ_KPI_QUERY_KEY } from "@/src/modules/ChampionHubModule/Hooks/useGetKpiQuery";

// Records that the current user opened a team ritual (drives "Awareness")
const viewTeamRitual = async (payload: VIEW_TEAM_RITUAL_REQUEST) => {
  const response = await authFetcher({
    url: "/mtj/team-ritual/view",
    method: "POST",
    data: payload,
  });

  return response.data;
};

export const useViewTeamRitualMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: viewTeamRitual,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: GET_MTJ_LIST_QUERY_KEY });
      queryClient.invalidateQueries({ queryKey: GET_MTJ_KPI_QUERY_KEY });
    },
  });
};
