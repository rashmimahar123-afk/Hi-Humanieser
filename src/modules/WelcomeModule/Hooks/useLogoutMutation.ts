import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { onError } from "@/src/lib/Helpers";
import SnackbarHandler from "@/src/lib/SnackbarHandler";

const logoutUser = async () => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/logout`,

    {
      withCredentials: true,
    },
  );

  return response.data;
};

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: logoutUser,
  });
};
