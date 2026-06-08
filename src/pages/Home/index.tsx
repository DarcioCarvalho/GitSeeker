import { useState } from "react"
import { fetchGithubUser } from "../../services/github/fetchGithubUser";
import { useToast } from "../../contexts/ToasterProvider";
import { FaSearch } from "react-icons/fa";

export default function Home() {

  const { showError, showSuccess } = useToast();
  const [username, setUsername] = useState("");

  const handleGetGithubUsername = async () => {
    try {
      const { data } = await fetchGithubUser(username);
      console.log("Github User:", data);

      showSuccess("Parabéns!!! A busca dos dados concluiu com sucesso");

    } catch (error) {
      console.log("Erro: Não foi possível buscar os dados do usuário no Github, tente novamente!", error);

      showError("Não foi possível buscar os dados do usuário no Github, tente novamente!");
    }
  }


  return (
    <main className="d-flex flex-column align-items-center gap-3 pt-5">
      <h1 className="display-5 fw-bold">Descubra desenvolvedores no Github</h1>

      <section className="w-55 d-flex flex-column align-items-center gap-3">

        <span className="text-secondary d-inline-block text-center">Busque por um usuário e explore o seu perfil completo: detalhes, estatísticas e todos os repositórios públicos ordenado do seu jeito.</span>

        <fieldset className="search-fieldset form-control d-flex flex-row gap-2 align-items-center">
          <FaSearch className="text-secondary" />
          <input
            className="flex-fill"
            type="text"
            placeholder="Busque por um usuário do Github..."
            value={username}
            onChange={(event) => setUsername(event.currentTarget.value)}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleGetGithubUsername}
          >Buscar</button>
        </fieldset>
      </section>

      <section>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body d-flex flex-column gap-2">
            {/*              border-radius: 6px e padding: 10px */}
            <div className="d-flex align-items-center justify-content-center rounded-2 w-fit p-2 bg-primary-subtle">
              <FaSearch className="text-primary" />
            </div>
            <h6 className="card-title mb-0">Busque qualquer usuário</h6>
            <p className="card-text fs-7">Encontre desenvolvedores pelo nome de usuário do Github em segundos.</p>

          </div>
        </div>
      </section>

    </main>
  )
}