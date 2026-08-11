import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import SnackbarHandler from "@/src/lib/SnackbarHandler";
import { RESET_PASSWORD_REQUEST_TYPE } from "../Types/RequestTypes";
import { useRouter } from "next/navigation";

const resetPassword = async (data: RESET_PASSWORD_REQUEST_TYPE) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/reset-password`,
    data,
  );

  return response.data;
};

export const useResetPasswordMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: resetPassword,

    onSuccess: (data) => {
      router.push("/login");
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
