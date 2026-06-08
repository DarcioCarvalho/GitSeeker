import { useQuery } from "@tanstack/react-query"
import { fetchRepositoryDetail } from "../services/github/fetchRepositoryDetail";

export const useRepositoryDetail = (fullname: string) => {
  return useQuery({
    queryKey: ['repositoryDetail', fullname],
    queryFn: () => fetchRepositoryDetail(fullname),
    enabled: !!fullname
  });
}