/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import { useMutation } from "react-query";

import { authFetcher } from "@/src/lib/Helpers";
// import useResendOtpMutation from "./useResendOtpMutation";

const login = async (data: any): Promise<AxiosResponse<any>> => {
  try {
    const response = await authFetcher({
      url: "/login",
      method: "POST",
      data,
    });
    return response;
  } catch (error: any) {
    console.error("Login error:", error);
    throw error;
  }
};

function useLoginMutation() {
  return useMutation(login);
}
export default useLoginMutation;
