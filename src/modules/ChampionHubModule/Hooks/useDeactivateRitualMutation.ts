import { useMutation } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";
import {
  ACTIVATE_RITUAL_REQUEST_TYPES,
  DEACTIVATE_RITUAL_REQUEST_TYPES,
} from "../Types/RequestTypes";

const deActivateRitual = async (payload: DEACTIVATE_RITUAL_REQUEST_TYPES) => {
  const response = await authFetcher({
    url: "/mtj/champion/deselect-ritual",
    method: "POST",
    data: payload,
  });

  return response.data;
};

export const useDeactivateRitualMutation = () => {
  return useMutation({
    mutationFn: deActivateRitual,
  });
};
