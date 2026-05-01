import { AxiosResponse } from "axios";
import { authFetcher, fetcher } from "@/src/lib/Helpers";
import { useQuery } from "@tanstack/react-query";
import { GET_ALL_USERS_RESPONSE } from "../Types/ResponseTypes";

export const GET_ALL_USERS_QUERY_KEY = ["getAllUsersQueryKey"];

const getAllUsers = (): Promise<AxiosResponse<GET_ALL_USERS_RESPONSE>> => {
  return authFetcher({
    url: "/list-all-users",
    method: "GET",
  });
};

function useGetAllListUsersQuery() {
  return useQuery({
    queryKey: GET_ALL_USERS_QUERY_KEY,
    queryFn: getAllUsers,
  });
}

export default useGetAllListUsersQuery;
