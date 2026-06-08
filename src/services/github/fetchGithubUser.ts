import type { User } from "../../models/User";
import { api } from "../api"

export const fetchGithubUser = async (username: string) => {
  return await api.get<User>(`/users/${username}`);
}