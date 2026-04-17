import { AxiosResponse } from "axios";
import { authFetcher, fetcher } from "@/src/lib/Helpers";
import { useQuery } from "@tanstack/react-query";
import { GET_TEAMS_RESPONSE } from "../Types/ResponseTypes";

export const GET_TEAMS_QUERY_KEY = ["getTeamsQueryKey"];

const getTeams = (): Promise<AxiosResponse<GET_TEAMS_RESPONSE>> => {
  return authFetcher({
    url: "/get-teams",
    method: "GET",
  });
};

function useGetTeamsQuery() {
  return useQuery({
    queryKey: GET_TEAMS_QUERY_KEY,
    queryFn: getTeams,
  });
}

export default useGetTeamsQuery;
