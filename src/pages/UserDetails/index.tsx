import { useParams } from "react-router-dom";

export default function UserDetails() {
  const { username } = useParams();
  return (
    <div className="container">
      <h1 className="display-1">Detalhes do Usuário</h1>

      <div className="d-flex flex-row gap-1 mt-3">
        <span className="fw-bold" >Nome:</span>
        <span>{username}</span>
      </div>
    </div>
  )
}