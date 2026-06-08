import type { Repository } from "../../models/Repository";
import { api } from "../api"

export const fetchRepositoryDetail = async (fullname: string) => {
  const { data } = await api.get<Repository[]>(`/repos/${fullname}`
  );
  return data;
}