import { useMutation } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";
import { FOCUS_AND_RITUAL_SELECTION_REQUEST } from "../Types/RequestTypes";

const focusAndRitualSelection = async (
  payload: FOCUS_AND_RITUAL_SELECTION_REQUEST,
) => {
  const response = await authFetcher({
    url: "/mtj/champion/submit-focus-and-ritual-selection",
    method: "POST",
    data: payload,
  });

  return response.data;
};

export const useFocusAndRitualSelectMutation = () => {
  return useMutation({
    mutationFn: focusAndRitualSelection,
  });
};
