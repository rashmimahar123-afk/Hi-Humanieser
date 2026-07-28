import { useMutation } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";
import { ACTIVATE_RITUAL_REQUEST_TYPES } from "../Types/RequestTypes";

const activateRitual = async (payload: ACTIVATE_RITUAL_REQUEST_TYPES) => {
  const response = await authFetcher({
    url: "/mtj/champion/select-ritual",
    method: "POST",
    data: payload,
  });

  return response.data;
};

export const useActivateRitualMutation = () => {
  return useMutation({
    mutationFn: activateRitual,
  });
};
