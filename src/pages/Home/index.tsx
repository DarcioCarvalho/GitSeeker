import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { FaRegStar, FaSearch, FaUsers } from "react-icons/fa";

import FeatureCard from "../../components/FeatureCard";
import { useToast } from "../../contexts/ToasterContext";
import { useSearchUser } from "../../hooks/useSearchUser";

export default function Home() {

  const navigate = useNavigate();
  const { showError } = useToast();
  const { searchUser } = useSearchUser();
  const [username, setUsername] = useState("");

  const handleSearchGithubUsername = async () => {
    try {
      await searchUser(username);
      navigate(`/users/${username}`);

    } catch {
      showError("Não foi possível buscar os dados do usuário no Github, tente novamente!");
    }
  }


  return (
    <main className="home-container d-flex flex-column align-items-center gap-3 pt-5">
      <h1 className="home-title display-5 fw-bold">Descubra desenvolvedores no Github</h1>

      <section className="home-content w-55 d-flex flex-column align-items-center gap-3">

        <span className="text-secondary d-inline-block text-center">Busque por um usuário e explore o seu perfil completo: detalhes, estatísticas e todos os repositórios públicos ordenado do seu jeito.</span>

        <fieldset className="search-fieldset shadow-sm form-control d-flex flex-row gap-2 align-items-center">
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
            onClick={handleSearchGithubUsername}
          >Buscar</button>
        </fieldset>
      </section>

      <section className="d-flex flex-row align-self-stretch justify-content-between mt-6">
        <FeatureCard
          Icon={FaSearch}
          title="Busque qualquer usuário"
          description="Encontre desenvolvedores pelo nome de usuário do Github em segundos."
        />

        <FeatureCard
          Icon={FaUsers}
          title="Explore perfis"
          description="Veja avatar, bio, e-mail, seguidores e quem o usuário está seguindo."
        />

        <FeatureCard
          Icon={FaRegStar}
          title="Ordene repositórios"
          description="Liste os repositórios por estrela, data de atualização ou nome."
        />
      </section>

    </main>
  )
}