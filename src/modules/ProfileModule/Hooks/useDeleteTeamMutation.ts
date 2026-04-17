import { useMutation } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";
import { DELETE_TEAM_REQUEST } from "../Types/RequestTypes";

const deleteTeam = async (payload: DELETE_TEAM_REQUEST) => {
  const response = await authFetcher({
    url: "/delete-team",
    method: "POST",
    data: payload,
  });

  return response.data;
};

export const useDeleteTeamMutation = () => {
  return useMutation({
    mutationFn: deleteTeam,
  });
};
