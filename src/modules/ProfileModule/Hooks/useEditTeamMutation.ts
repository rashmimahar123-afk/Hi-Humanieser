import { useMutation } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";
import { DELETE_TEAM_REQUEST, Edit_TEAM_REQUEST } from "../Types/RequestTypes";

const editTeam = async (payload: Edit_TEAM_REQUEST) => {
  const response = await authFetcher({
    url: "/edit-team",
    method: "POST",
    data: payload,
  });

  return response.data;
};

export const useEditTeamMutation = () => {
  return useMutation({
    mutationFn: editTeam,
  });
};
