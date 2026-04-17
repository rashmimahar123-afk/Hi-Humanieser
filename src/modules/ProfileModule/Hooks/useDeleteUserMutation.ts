import { useMutation } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";
import { DELETE_USER_REQUEST, EDIT_USER_REQUEST } from "../Types/RequestTypes";

const deleteUser = async (payload: DELETE_USER_REQUEST) => {
  const response = await authFetcher({
    url: "/delete-user",
    method: "POST",
    data: payload,
  });

  return response.data;
};

export const useDeleteUserMutation = () => {
  return useMutation({
    mutationFn: deleteUser,
  });
};
