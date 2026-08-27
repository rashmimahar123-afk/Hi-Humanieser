import { useMutation } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";
import { ADD_MY_NOTES_REQUEST_TYPES } from "../Types/RequestTypes";

const addMyNotes = async (payload: ADD_MY_NOTES_REQUEST_TYPES) => {
  const response = await authFetcher({
    url: "/my-notes",
    method: "POST",
    data: payload,
  });

  return response.data;
};

export const useAddMyNotesMutation = () => {
  return useMutation({
    mutationFn: addMyNotes,
  });
};
