import { useMutation } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";
import { SUBMIT_QUIZ_REQUEST_TYPES } from "../Types/RequestTypes";

const createMpp = async (payload: any) => {
  const response = await authFetcher({
    url: "/create-mpp",
    method: "POST",
    data: payload,
  });

  return response.data;
};

export const useCreateMppMutation = () => {
  return useMutation({
    mutationFn: createMpp,
  });
};
