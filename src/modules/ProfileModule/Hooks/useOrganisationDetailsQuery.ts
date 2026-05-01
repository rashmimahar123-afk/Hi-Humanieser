import { AxiosResponse } from "axios";
import { authFetcher, fetcher } from "@/src/lib/Helpers";
import { useQuery } from "@tanstack/react-query";
import {
  GET_ORGANISATION_DETAILS_RESPONSE,
  GET_TEAMS_RESPONSE,
} from "../Types/ResponseTypes";

export const GET_ORGANISATION_DETAILS_QUERY_KEY = [
  "getOrganisationDetailsQueryKey",
];

const getOrganisationDetails = (
  org_id: string,
): Promise<AxiosResponse<GET_ORGANISATION_DETAILS_RESPONSE>> => {
  return authFetcher({
    url: `/get-organization-details?org_id=${org_id}`,
    method: "GET",
  });
};
function useOrganisationDetailsQuery(
  org_id?: string,
  options?: { enabled?: boolean },
) {
  return useQuery({
    queryKey: [GET_ORGANISATION_DETAILS_QUERY_KEY, org_id],
    queryFn: () => getOrganisationDetails(org_id as string),
    enabled: !!org_id && options?.enabled,
  });
}

export default useOrganisationDetailsQuery;
