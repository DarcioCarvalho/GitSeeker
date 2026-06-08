import { useQueryClient } from "@tanstack/react-query"
import { fetchGithubUser } from "../services/github/fetchGithubUser";

export const useSearchUser = () => {
  const queryClient = useQueryClient();

  const searchUser = async (username: string) => {
    return queryClient.ensureQueryData({
      queryKey: ['user', username],
      queryFn: () => fetchGithubUser(username)
    });
  }

  return {
    searchUser
  }
}