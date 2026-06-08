import { useParams } from "react-router-dom"

export default function RepositoryDetails() {
  const { username, repo } = useParams();
  return (
    <div className="container">
      <h1 className="display-1">Detalhes do Repositório</h1>

      <section className="d-flex flex-column gap-2 mt-3">
        <div className="d-flex flex-row gap-1">
          <span className="fw-bold" >Nome:</span>
          <span>{username}</span>
        </div>

        <div className="d-flex flex-row gap-1">
          <span className="fw-bold" >Repositório:</span>
          <span>{repo}</span>
        </div>
      </section>
    </div>
  )
}