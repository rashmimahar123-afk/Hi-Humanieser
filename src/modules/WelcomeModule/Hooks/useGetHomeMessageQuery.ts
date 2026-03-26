import { useQuery } from "@tanstack/react-query";
import { authFetcher } from "@/src/lib/Helpers";

const getRandomHomeMssg = async (): Promise<string> => {
  const res = await authFetcher({
    url: "/get-json/motd_homepage_messages.json",
    method: "GET",
  });

  const values = Object.values(res.data || {});
  if (!values.length) return "";

  return values[Math.floor(Math.random() * values.length)] as string;
};

export const useGetHomeMessageQuery = () => {
  return useQuery({
    queryKey: ["mpp-random-home-message"],
    queryFn: getRandomHomeMssg,
  });
};
