import { useMutation } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";
import SnackbarHandler from "@/src/lib/SnackbarHandler";
import { HELP_FEEDBACK_REQUEST } from "../Types/RequestTypes";

const sendHelpFeedback = async (payload: HELP_FEEDBACK_REQUEST) => {
  const response = await authFetcher({
    url: "/help-feedback-email",
    method: "POST",
    data: payload,
  });

  return response.data;
};

export const useHelpFeedbackMutation = () => {
  return useMutation({
    mutationFn: sendHelpFeedback,
    onError: () => {
      SnackbarHandler.errorToast("Failed to send your message");
    },
  });
};
