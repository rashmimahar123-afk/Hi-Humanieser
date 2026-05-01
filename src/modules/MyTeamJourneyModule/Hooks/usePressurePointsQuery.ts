import { AxiosResponse } from "axios";
import { authFetcher, fetcher } from "@/src/lib/Helpers";
import { useQuery } from "@tanstack/react-query";
import { GET_PRESSURE_POINTS_RESPONSE } from "../Types/ResponseTypes";

export const GET_PRESSURE_POINTS_QUERY_KEY = ["getPressurePointsQueryKey"];

const getPressurePoints = (): Promise<
  AxiosResponse<GET_PRESSURE_POINTS_RESPONSE>
> => {
  return authFetcher({
    url: "/mtj/champion/pressure-points",
    method: "GET",
  });
};

function usePressurePointsQuery() {
  return useQuery({
    queryKey: GET_PRESSURE_POINTS_QUERY_KEY,
    queryFn: getPressurePoints,
  });
}

export default usePressurePointsQuery;
