import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import SnackbarHandler from "@/src/lib/SnackbarHandler";
import {
  RESET_PASSWORD_REQUEST_TYPE,
  VERIFY_EMAIL_REQUEST_TYPE,
} from "../Types/RequestTypes";

const verifyEmail = async (data: VERIFY_EMAIL_REQUEST_TYPE) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/verify-email`,
    data,
  );

  return response.data;
};

export const useVerifyEmailMutation = () => {
  return useMutation({
    mutationFn: verifyEmail,

    onSuccess: (data) => {
      SnackbarHandler.successToast(
        data?.message || "Email verified successfully",
      );
    },

    onError: (error: any) => {
      const message = error?.response?.data?.detail || "Something went wrong";

      SnackbarHandler.errorToast(message);
    },
  });
};
