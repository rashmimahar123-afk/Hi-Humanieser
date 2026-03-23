import { AxiosResponse } from "axios";
import { authFetcher, fetcher } from "@/src/lib/Helpers";
import { useQuery } from "@tanstack/react-query";
import { PERSONAL_PATHWAY_RESPONSE_TYPES } from "../Types/ResponseTypes";

export const GET_PERSONAL_PATHWAY_QUERY_KEY = ["getPersonalPathwyQueryKey"];

const getPersonalPathway = (): Promise<
  AxiosResponse<PERSONAL_PATHWAY_RESPONSE_TYPES>
> => {
  return authFetcher({
    url: "/list-mpp",
    method: "GET",
  });
};

function usePersonalPathwayQuery() {
  return useQuery({
    queryKey: GET_PERSONAL_PATHWAY_QUERY_KEY,
    queryFn: getPersonalPathway,
  });
}

export default usePersonalPathwayQuery;
