import { AxiosResponse } from "axios";
import { authFetcher, fetcher } from "@/src/lib/Helpers";
import { useQuery } from "@tanstack/react-query";
import { GET_MY_NOTES_RESPONSE } from "../Types/ResponseTypes";

export const GET_MY_NOTES_QUERY_KEY = ["getMyNotesQueryKey"];

const getMyNotes = (): Promise<AxiosResponse<GET_MY_NOTES_RESPONSE>> => {
  return authFetcher({
    url: "/my-notes",
    method: "GET",
  });
};

function useMyNotesQuery() {
  return useQuery({
    queryKey: GET_MY_NOTES_QUERY_KEY,
    queryFn: getMyNotes,
  });
}

export default useMyNotesQuery;
