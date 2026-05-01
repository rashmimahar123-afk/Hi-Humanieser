import { useMutation } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";

const finishCycle = async () => {
  const response = await authFetcher({
    url: "/mtj/champion/finish-cycle",
    method: "POST",
  });

  return response.data;
};

export const useFinishCycleMutation = () => {
  return useMutation({
    mutationFn: finishCycle,
  });
};
