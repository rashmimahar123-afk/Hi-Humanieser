import { useMutation } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";

const extendPractice = async () => {
  const response = await authFetcher({
    url: "/mtj/champion/extend-practice",
    method: "POST",
  });

  return response.data;
};

export const useExtendPracticeMutation = () => {
  return useMutation({
    mutationFn: extendPractice,
  });
};
