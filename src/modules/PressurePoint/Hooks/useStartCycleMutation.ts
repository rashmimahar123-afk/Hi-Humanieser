import { useMutation } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";
import { MTJ_START_CYCLE_REQUEST } from "../Types/RequestTypes";

const startCycle = async (payload: MTJ_START_CYCLE_REQUEST) => {
  const response = await authFetcher({
    url: "/mtj/champion/start-cycle",
    method: "POST",
    data: payload,
  });

  return response.data;
};

export const useStartCycleMutation = () => {
  return useMutation({
    mutationFn: startCycle,
  });
};
