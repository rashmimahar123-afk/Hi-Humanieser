import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import SnackbarHandler from "@/src/lib/SnackbarHandler";
import { onError } from "@/src/lib/Helpers";
import { REGISTER_ORGANISATION_REQUEST_TYPE } from "../Types/RequestTypes";

const registerOrganization = async (
  data: REGISTER_ORGANISATION_REQUEST_TYPE,
) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/register-organization`,
    data,
  );

  return response.data;
};

export const useRegistrationMutation = () => {
  return useMutation({
    mutationFn: registerOrganization,
    onSuccess: (data: any) => {},
    onError: onError,
  });
};
