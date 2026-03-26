import { useMutation } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";
import { UPDATE_MPP_REQUEST_TYPES } from "../Types/RequestTypes";

const updateMppMilestone = async (payload: UPDATE_MPP_REQUEST_TYPES) => {
  const response = await authFetcher({
    url: "/update-mpp-milestone",
    method: "POST",
    data: payload,
  });

  return response.data;
};

export const useUpdateMppMilestoneMutation = () => {
  return useMutation({
    mutationFn: updateMppMilestone,
  });
};
