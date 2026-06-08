import { FaStar } from "react-icons/fa";
import type { Repository } from "../models/Repository";
import { getLanguageColor } from "../utils/githubUtils";

interface RepositoryInfoItemProps {
  repository: Repository;
}

export default function RepositoryInfoItem({ repository }: RepositoryInfoItemProps) {
  return (
    <div className="card w-100 h-82px shadow-sm">
      <div className="card-body d-flex justify-content-between gap-2">

        <div className="d-flex flex-column gap-2">
          <h6 className="card-title mb-0">{repository.name}</h6>
          <p className="card-text fs-7 text-secondary">{repository.description}</p>
        </div>

        <div className="d-flex gap-3 me-3">

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