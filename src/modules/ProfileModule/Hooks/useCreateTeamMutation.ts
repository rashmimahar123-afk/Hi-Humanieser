import { useMutation } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";
import { CREATE_TEAM_REQUEST } from "../Types/RequestTypes";

const createTeam = async (payload: CREATE_TEAM_REQUEST) => {
  const response = await authFetcher({
    url: "/create-team",
    method: "POST",
    data: payload,
  });

  return response.data;
};

export const useCreateTeamMutation = () => {
  return useMutation({
    mutationFn: createTeam,
  });
};
