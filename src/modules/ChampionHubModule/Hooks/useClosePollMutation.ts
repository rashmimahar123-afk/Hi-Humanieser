import { useMutation } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";

const closePoll = async () => {
  const response = await authFetcher({
    url: "/mtj/champion/close-poll",
    method: "POST",
  });

  return response.data;
};

export const useClosePollMutation = () => {
  return useMutation({
    mutationFn: closePoll,
  });
};
