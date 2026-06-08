import { useQuery } from "@tanstack/react-query"
import { fetchGithubUser } from "../services/github/fetchGithubUser"

export const useUser = (username: string) => {
  return useQuery({
    queryKey: ['user', username],
    queryFn: () => fetchGithubUser(username),
    enabled: !!username
  });
}