import { useQuery } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";

const getRandomMppMessage = async (): Promise<string> => {
  const res = await authFetcher({
    url: "/get-json/motd_mpp_messages.json",
    method: "GET",
  });

  const values = Object.values(res.data || {});
  if (!values.length) return "";

  return values[Math.floor(Math.random() * values.length)] as string;
};

export const useGetMppMessagesQuery = () => {
  return useQuery({
    queryKey: ["mpp-random-message"],
    queryFn: getRandomMppMessage,
  });
};
