import { useMutation } from "@tanstack/react-query";
import SnackbarHandler from "@/src/lib/SnackbarHandler";
import { CREATE_USER_TYPE_REQUEST } from "../Types/RequestTypes";
import { authFetcher } from "@/src/lib/Helpers"; // 👈 IMPORTANT

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

    onError: () => {
      SnackbarHandler.errorToast("Failed to create user");
    },
  });
};
