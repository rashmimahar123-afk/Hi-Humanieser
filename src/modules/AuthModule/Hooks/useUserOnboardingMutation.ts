import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import SnackbarHandler from "@/src/lib/SnackbarHandler";
import { onError } from "@/src/lib/Helpers";
import {
  REGISTER_ORGANISATION_REQUEST_TYPE,
  USER_ONBOARDING_REQUEST_TYPES,
} from "../Types/RequestTypes";

const userOnboarding = async (data: USER_ONBOARDING_REQUEST_TYPES) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/user-onboarding`,
    data,
  );

  return response.data;
};

export const useUserOnboardingMutation = () => {
  return useMutation({
    mutationFn: userOnboarding,
    onSuccess: (data: any) => {},
    onError: onError,
  });
};
