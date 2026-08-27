import { useMutation } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";
import { EDIT_MY_NOTES_REQUEST_TYPES } from "../Types/RequestTypes";

const editMyNotes = async (payload: EDIT_MY_NOTES_REQUEST_TYPES) => {
  const response = await authFetcher({
    url: "/edit-my-notes",
    method: "POST",
    data: payload,
  });

  return response.data;
};

export const useEditMyNotesMutation = () => {
  return useMutation({
    mutationFn: editMyNotes,
  });
};
