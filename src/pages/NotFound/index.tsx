import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container-fluid min-vh-100">
      <div className="row min-vh-100 align-items-center justify-content-center">
        <div className="col-11 col-md-8 col-lg-5">
          <div className="card border-0 shadow-sm bg-light">
            <div className="card-body text-center p-5">
              <div
                className="display-1 fw-bold text-primary mb-3"
              >
                404
              </div>

              <h1 className="h3 mb-3">
                Página não encontrada
              </h1>

              <p className="text-muted mb-4">
                Parece que você seguiu um link inválido ou digitou um endereço
                que não existe.
              </p>

              <Link
                to="/"
                className="btn btn-primary"
              >
                Voltar ao início
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}