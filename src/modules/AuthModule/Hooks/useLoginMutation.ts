import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { onError } from "@/src/lib/Helpers";
import { LOGIN_REQUEST_TYPE } from "../Types/RequestTypes";
import SnackbarHandler from "@/src/lib/SnackbarHandler";

const loginUser = async (data: LOGIN_REQUEST_TYPE) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/login`,
    data,
  );

  return response.data;
};

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: loginUser,
    onError: (error: any) => {
      const message = error?.response?.data?.detail || "Something went wrong";

      SnackbarHandler.errorToast(message);
    },
  });
};
