import { AxiosResponse } from "axios";
import { authFetcher, fetcher } from "@/src/lib/Helpers";
import { useQuery } from "@tanstack/react-query";
import {
  GET_ALL_USERS_BY_ROLE_RESPONSE,
  GET_ALL_USERS_RESPONSE,
} from "../Types/ResponseTypes";

export const GET_ALL_USERS_BY_ROLE_QUERY_KEY = ["getAllUsersByRoleQueryKey"];

const getAllUsersByRole = (): Promise<
  AxiosResponse<GET_ALL_USERS_BY_ROLE_RESPONSE>
> => {
  return authFetcher({
    url: "/list-organization-users-by-role",
    method: "GET",
  });
};

function useGetRoleBasedUsersListQuery() {
  return useQuery({
    queryKey: GET_ALL_USERS_BY_ROLE_QUERY_KEY,
    queryFn: getAllUsersByRole,
  });
}

export default useGetRoleBasedUsersListQuery;
