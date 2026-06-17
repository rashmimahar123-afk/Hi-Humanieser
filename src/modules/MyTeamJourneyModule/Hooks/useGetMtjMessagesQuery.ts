import { useQuery } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";

const getRandomMtjMessage = async (): Promise<string> => {
  const res = await authFetcher({
    url: "/get-json/motd_mtj_messages.json",
    method: "GET",
  });

  const values = Object.values(res.data || {});
  if (!values.length) return "";

  return values[Math.floor(Math.random() * values.length)] as string;
};

export const useGetMtjMessagesQuery = () => {
  return useQuery({
    queryKey: ["mtj-random-message"],
    queryFn: getRandomMtjMessage,
  });
};
