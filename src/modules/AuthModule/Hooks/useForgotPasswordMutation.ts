import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import SnackbarHandler from "@/src/lib/SnackbarHandler";

type FORGOT_PASSWORD_REQUEST_TYPE = {
  email: string;
};

const forgotPassword = async (data: FORGOT_PASSWORD_REQUEST_TYPE) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/forgot-password`,
    data,
  );

  return response.data;
};

export const useForgotPasswordMutation = () => {
  return useMutation({
    mutationFn: forgotPassword,

    onSuccess: (data) => {
      SnackbarHandler.successToast(
        data?.message || "Reset link sent successfully",
      );
    },

    onError: (error: any) => {
      const message = error?.response?.data?.detail || "Something went wrong";

      SnackbarHandler.errorToast(message);
    },
  });
};
