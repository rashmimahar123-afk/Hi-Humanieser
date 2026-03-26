import { useQuery } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";

type PATHWAY_MESSAGE = {
  id: string;
  message: string;
};

const getCompletePathwayMessage = async (): Promise<string> => {
  const res = await authFetcher({
    url: "/get-json/pathway_completion_messages.json",
    method: "GET",
  });

  const data: PATHWAY_MESSAGE[] = res.data || [];

  if (!data.length) return "";

  const randomIndex = Math.floor(Math.random() * data.length);

  return data[randomIndex].message; // ✅ correct
};

export const useGetCompPathwayQuery = () => {
  return useQuery({
    queryKey: ["get-random-complete-pathway-message"],
    queryFn: getCompletePathwayMessage,
    enabled: false,
  });
};
