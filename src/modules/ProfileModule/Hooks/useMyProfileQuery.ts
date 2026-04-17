import { AxiosResponse } from "axios";
import { authFetcher, fetcher } from "@/src/lib/Helpers";
import { useQuery } from "@tanstack/react-query";
import { MY_PROFILE_RESPONSE } from "../Types/ResponseTypes";

export const GET_PROFILE_QUERY_KEY = ["getProfileQueryKey"];

const getProfile = (): Promise<AxiosResponse<MY_PROFILE_RESPONSE>> => {
  return authFetcher({
    url: "/my-user-profile",
    method: "GET",
  });
};

function useMyProfileQuery() {
  return useQuery({
    queryKey: GET_PROFILE_QUERY_KEY,
    queryFn: getProfile,
  });
}

export default useMyProfileQuery;
