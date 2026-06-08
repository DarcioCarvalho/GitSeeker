import { FaInbox } from "react-icons/fa";

export default function EmptyRepositoryItem() {
  return (
    <div className="card w-100 h-120px shadow-sm">
      <div className="card-body d-flex align-items-center justify-content-center gap-2">

        <div className="d-flex flex-column align-items-center gap-2 fs-2">
          <FaInbox />
          <h6 className="card-title mb-0">Não há repositório armazenado</h6>
        </div>

      </div>
    </div>
  );
}