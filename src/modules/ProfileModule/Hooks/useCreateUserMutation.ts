import { useMutation } from "@tanstack/react-query";
import SnackbarHandler from "@/src/lib/SnackbarHandler";
import { CREATE_USER_TYPE_REQUEST } from "../Types/RequestTypes";
import { authFetcher } from "@/src/lib/Helpers"; // 👈 IMPORTANT

export const TEAM_HAS_CHAMPION_MESSAGE =
  "This team already has a champion. Select another team or create a new one";

const getEndpointByUserType = (userType: number) => {
  switch (userType) {
    case 1:
      return "/create-user-type-1";
    case 2:
      return "/create-user-type-2";
    case 3:
      return "/create-user-type-3";
    default:
      throw new Error("Invalid user type");
  }
};

export const useCreateUserMutation = () => {
  return useMutation({
    mutationFn: async ({
      payload,
      userType,
    }: {
      payload: CREATE_USER_TYPE_REQUEST;
      userType: number;
    }) => {
      const endpoint = getEndpointByUserType(userType);

      const response = await authFetcher({
        url: endpoint,
        method: "POST",
        data: payload,
      });

      return response.data;
    },

    onError: (error: any, variables) => {
      const status = error?.response?.status;
      const detail = error?.response?.data?.detail;
      const serverMessage = String(
        detail?.message || detail || error?.response?.data?.message || "",
      );

      if (
        variables?.userType === 2 &&
        (status === 409 || /champion/i.test(serverMessage))
      ) {
        SnackbarHandler.errorToast(TEAM_HAS_CHAMPION_MESSAGE);
        return;
      }

      SnackbarHandler.errorToast("Failed to create user");
    },
  });
};
