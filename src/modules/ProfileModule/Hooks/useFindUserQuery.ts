import { AxiosResponse } from "axios";
import { authFetcher, fetcher } from "@/src/lib/Helpers";
import { useQuery } from "@tanstack/react-query";
import {
  GET_FIND_USERS_RESPONSE,
  GET_ORGANISATION_DETAILS_RESPONSE,
  GET_TEAMS_RESPONSE,
} from "../Types/ResponseTypes";

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
    queryKey: [GET_FIND_USER_QUERY_KEY, email],
    queryFn: () => getFindUser(email as string),
    enabled: !!email && options?.enabled,
  });
}

export default useFindUserQuery;
