import { useQuery } from "@tanstack/react-query"
import { fetchGithubUserRepositories } from "../services/github/fetchGithubUserRepositories";

export const useUserRepositories = (username: string) => {
  return useQuery({
    queryKey: ['userRepositories', username],
    queryFn: () => fetchGithubUserRepositories(username),
    enabled: !!username
  });
}