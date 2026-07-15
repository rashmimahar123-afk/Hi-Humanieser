import { useMutation } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";

const recommendFocusArea = async () => {
  const response = await authFetcher({
    url: "/mtj/champion/recommend-focus-areas",
    method: "GET",
  });

  return response.data;
};

export const useRecommendFocusAreaMutation = () => {
  return useMutation({
    mutationFn: recommendFocusArea,
  });
};
