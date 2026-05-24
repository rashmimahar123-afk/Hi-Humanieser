import { useMutation } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";
import { TOGGLE_ROLE_PAYLOAD } from "../Types/RequestTypes";



const togglePartnerRole = async (payload?: TOGGLE_ROLE_PAYLOAD) => {
  const response = await authFetcher({
    url: "/toggle-partner-role",
    method: "POST",
    data: payload,
  });

  return response.data;
};

export const useTogglePartnerRoleMutation = () => {
  return useMutation({
    mutationFn: togglePartnerRole,
  });
};