import { useMutation } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";
import { ADD_REFLECTION_REQUEST_TYPES } from "../Types/RequestTypes";

const addReflection = async (payload: ADD_REFLECTION_REQUEST_TYPES) => {
  const response = await authFetcher({
    url: "/reflections",
    method: "POST",
    data: payload,
  });

  return response.data;
};

export const useAddReflectionMutation = () => {
  return useMutation({
    mutationFn: addReflection,
  });
};
