import type { User } from "../../models/User";
import { api } from "../api"

export const fetchGithubUser = async (username: string) => {
  const { data } = await api.get<User>(`/users/${username}`);
  return data;
}