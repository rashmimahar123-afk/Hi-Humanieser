import { useQuery } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";

type PATHWAY_MESSAGE = {
  id: string;
  message: string;
};

const getPathwaySelectMessage = async (): Promise<string> => {
  const res = await authFetcher({
    url: "/get-json/pathway_selection_messages.json",
    method: "GET",
  });

  const data: PATHWAY_MESSAGE[] = res.data || [];

  if (!data.length) return "";

  const randomIndex = Math.floor(Math.random() * data.length);

  return data[randomIndex].message; //  correct
};

export const useGetPathwaySelectMssgQuery = () => {
  return useQuery({
    queryKey: ["get-random-pathway-selection-message"],
    queryFn: getPathwaySelectMessage,
    enabled: false,
  });
};
