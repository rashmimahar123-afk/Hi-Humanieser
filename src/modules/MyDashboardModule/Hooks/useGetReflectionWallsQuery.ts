import { AxiosResponse } from "axios";
import { authFetcher, fetcher } from "@/src/lib/Helpers";
import { useQuery } from "@tanstack/react-query";
import { GET_REFLECTION_WALLS_RESPONSE } from "../Types/ResponseTypes";

const getReflectionWalls = (
  teamId?: string,
): Promise<AxiosResponse<GET_REFLECTION_WALLS_RESPONSE>> => {
  return authFetcher({
    url: "/reflections/team",
    method: "GET",
    params: {
      team_id: teamId,
      limit: 50,
    },
  });
};

function useGetReflectionWallsQuery(teamId?: string) {
  return useQuery({
    queryKey: ["getReflectionWallsQueryKey", teamId],
    queryFn: () => getReflectionWalls(teamId),
    enabled: !!teamId,
  });
}

export default useGetReflectionWallsQuery;
