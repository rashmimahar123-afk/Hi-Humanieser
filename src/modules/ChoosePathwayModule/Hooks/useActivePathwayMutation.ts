import { useMutation } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";
import { SUBMIT_QUIZ_REQUEST_TYPES } from "../Types/RequestTypes";

const activeMpp = async (payload: any) => {
  const response = await authFetcher({
    url: "/activate-mpp",
    method: "POST",
    data: payload,
  });

  return response.data;
};

export const useActivePathwayMutation = () => {
  return useMutation({
    mutationFn: activeMpp,
  });
};
