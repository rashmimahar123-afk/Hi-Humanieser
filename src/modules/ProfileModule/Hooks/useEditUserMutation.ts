import { useMutation } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";
import { EDIT_USER_REQUEST } from "../Types/RequestTypes";

const editUser = async (payload: EDIT_USER_REQUEST) => {
  const response = await authFetcher({
    url: "/edit-user",
    method: "POST",
    data: payload,
  });

  return response.data;
};

export const useEditUserMutation = () => {
  return useMutation({
    mutationFn: editUser,
  });
};
