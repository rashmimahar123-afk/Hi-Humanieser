import { useMutation } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";
import {} from "../../PersonalPathwayModule/Types/RequestTypes";
import { TOGGLE_REFLECTION_REQUEST_TYPES } from "../Types/RequestTypes";

const toggleReflection = async (payload: TOGGLE_REFLECTION_REQUEST_TYPES) => {
  const response = await authFetcher({
    url: "/reflections/toggle-like",
    method: "POST",
    data: payload,
  });

  return response.data;
};

export const useToggleReflectionMutation = () => {
  return useMutation({
    mutationFn: toggleReflection,
  });
};
