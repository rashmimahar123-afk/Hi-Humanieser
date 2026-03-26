import { useMutation } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";
import {
  COMPLETE_PATHWAY_REQUEST_TYPES,
  UPDATE_MPP_REQUEST_TYPES,
} from "../Types/RequestTypes";

const completePathway = async (payload: COMPLETE_PATHWAY_REQUEST_TYPES) => {
  const response = await authFetcher({
    url: "/complete-mpp",
    method: "POST",
    data: payload,
  });

  return response.data;
};

export const useCompletePathwayMutation = () => {
  return useMutation({
    mutationFn: completePathway,
  });
};
