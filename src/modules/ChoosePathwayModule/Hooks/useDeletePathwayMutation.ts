import { useMutation } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";
import { SUBMIT_QUIZ_REQUEST_TYPES } from "../Types/RequestTypes";

const deleteMpp = async (payload: any) => {
  const response = await authFetcher({
    url: "/delete-mpp",
    method: "POST",
    data: payload,
  });

  return response.data;
};

export const useDeletePathwayMutation = () => {
  return useMutation({
    mutationFn: deleteMpp,
  });
};
