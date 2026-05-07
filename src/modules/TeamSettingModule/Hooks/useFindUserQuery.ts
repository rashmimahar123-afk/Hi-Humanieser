import { AxiosResponse } from "axios";
import { authFetcher, fetcher } from "@/src/lib/Helpers";
import { useQuery } from "@tanstack/react-query";
import {
  GET_FIND_USERS_RESPONSE,
  GET_ORGANISATION_DETAILS_RESPONSE,
  GET_TEAMS_RESPONSE,
} from "../../ProfileModule/Types/ResponseTypes";

export const GET_FIND_USER_QUERY_KEY = ["getFindUserQueryKey"];

const getFindUser = (
  email: string,
): Promise<AxiosResponse<GET_FIND_USERS_RESPONSE>> => {
  return authFetcher({
    url: `/find-user?email=${email}`,
    method: "GET",
  });
};
function useFindUserQuery(email?: string, options?: { enabled?: boolean }) {
  return useQuery({
    queryKey: ["getFindUserQueryKey", email],
    queryFn: async ({ queryKey }) => {
      const [, emailParam] = queryKey;

      try {
        return await getFindUser(emailParam as string);
      } catch (err: any) {
        // ✅ normalize error
        const message =
          err?.response?.data?.detail ||
          err?.response?.data?.message ||
          "Something went wrong";

        throw new Error(message); // 🔥 important
      }
    },
    enabled: !!email && options?.enabled,
    retry: false, // ❗ don't retry on 404
  });
}

export default useFindUserQuery;
