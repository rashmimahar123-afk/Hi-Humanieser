import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import SnackbarHandler from "@/src/lib/SnackbarHandler";
import { CHANGE_PASSWORD_REQUEST_TYPE } from "../Types/RequestTypes";
import { authFetcher } from "@/src/lib/Helpers";

const changePassword = async (data: CHANGE_PASSWORD_REQUEST_TYPE) => {
  const response = await authFetcher({
    url: "/change-password",
    method: "POST",
    data: data,
  });
  return response.data;
};

export const useChangePasswordMutation = () => {
  return useMutation({
    mutationFn: changePassword,

    onSuccess: (data) => {
      SnackbarHandler.successToast(
        data?.message || "Password changed successfully",
      );
    },

    onError: (error: any) => {
      const message = error?.response?.data?.detail || "Something went wrong";

      SnackbarHandler.errorToast(message);
    },
  });
};
