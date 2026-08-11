import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { LOGIN_REQUEST_TYPE } from "../Types/RequestTypes";

const loginUser = async (data: LOGIN_REQUEST_TYPE) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/login`,
    data,
    {
      withCredentials: true,
    },
  );

  return response.data;
};

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: loginUser,
  });
};
