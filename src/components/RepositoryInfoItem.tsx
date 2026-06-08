import { FaStar } from "react-icons/fa";
import type { Repository } from "../models/Repository";
import { getLanguageColor } from "../utils/githubUtils";
import { useNavigate } from "react-router-dom";

interface RepositoryInfoItemProps {
  repository: Repository;
}

export default function RepositoryInfoItem({ repository }: RepositoryInfoItemProps) {
  const navigate = useNavigate();
  return (
    <div className="card w-100 h-100px shadow-sm card-button" onClick={() => navigate(`/users/${repository.owner?.login}/repos/${repository.name}`)}>
      <div className="card-body d-flex flex-column flex-sm-row justify-content-between gap-2">

        <div className="d-flex flex-column gap-2">
          <h6 className="card-title mb-0">{repository.name}</h6>
          <p className="card-text fs-7 text-secondary">{repository.description}</p>
        </div>

        <div className="Repository-info-language-content d-flex flex-md-row flex-sm-column-reverse flex-row gap-3 me-3">

          <div className="d-flex align-items-center">
            <div className="language-dot me-1" style={{ backgroundColor: getLanguageColor(repository.language) }} />
            <span>{repository.language}</span>
          </div>

          <div className="d-flex align-items-center">
            <FaStar />
            <span className="ms-1">{repository.stargazers_count}</span>
          </div>

        </div>

      </div>
    </div>
  );
}