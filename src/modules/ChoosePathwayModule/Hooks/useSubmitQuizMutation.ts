import { getCookie } from "@/src/lib/Helpers";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const submitQuiz = async (data: any) => {
  const { payload } = data;
  const token = getCookie("access_token");

  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/submit-quiz`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};

export const useSubmitQuizMutation = () => {
  return useMutation({
    mutationFn: submitQuiz,
  });
};
