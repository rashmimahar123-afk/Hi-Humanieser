import { useMutation } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";
import { SUBMIT_POLL_REQUEST } from "../Types/RequestTypes";

const submitPollResponse = async (payload: SUBMIT_POLL_REQUEST) => {
  const response = await authFetcher({
    url: "/mtj/member/submit-poll-response",
    method: "POST",
    data: payload,
  });

  return response.data;
};

export const useSubmitPollResponseMutation = () => {
  return useMutation({
    mutationFn: submitPollResponse,
  });
};
