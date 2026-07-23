import { useMutation } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";
import { EDIT_REFLECTION_REQUEST_TYPES } from "../Types/RequestTypes";

const editReflection = async (payload: EDIT_REFLECTION_REQUEST_TYPES) => {
  const response = await authFetcher({
    url: "/reflections/edit",
    method: "POST",
    data: payload,
  });

  return response.data;
};

export const useEditReflectionMutation = () => {
  return useMutation({
    mutationFn: editReflection,
  });
};
