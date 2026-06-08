import type { Repository } from "../../models/Repository";
import { api } from "../api"

export const fetchGithubUserRepositories = async (username: string) => {
  const { data } = await api.get<Repository[]>(`/users/${username}/repos`,
    {
      params: {
        per_page: 100,
      },
    }
  );
  return data;
}