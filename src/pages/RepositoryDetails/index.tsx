import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaArrowLeft, FaLaptopCode, FaLink,
  FaRegDotCircle,
  FaRegEye, FaStar
} from "react-icons/fa";

import UserInfoItem from "../../components/UserInfoItem";
import UserIndicator from "../../components/UserIndicator";
// import RepositoryInfoItem from "../../components/RepositoryInfoItem";
// import EmptyRepositoryItem from "../../components/EmptyRepositoryItem";

import { useToast } from "../../contexts/ToasterContext";
// import { useUser } from "../../hooks/useUser";
// import { useUserRepositories } from "../../hooks/useUserRepositories";
import { useRepositoryDetail } from "../../hooks/useRepositoryDetail";
import { getLanguageColor } from "../../utils/githubUtils";


export default function RepositoryDetails() {
  const { username, repo } = useParams();
  const repositoryFullname = `${username}/${repo}`;

  const navigate = useNavigate();
  const { showError } = useToast();

  // const { data: user } = useUser(username!);
  // const { data: repositories} = useUserRepositories(username!);

  const { data: repository, isError } = useRepositoryDetail(repositoryFullname);


  // const [sortBy, setSortBy] = useState('stars-desc');

  /*  const sortedRepositories = useMemo(() => {
     if (!repositories) return [];
 
     const newRepositories = [...repositories];
 
     switch (sortBy) {
       case 'stars-asc':
         return newRepositories.sort(
           (a, b) => (a.stargazers_count ?? 0) - (b.stargazers_count ?? 0)
         );
 
       case 'stars-desc':
         return newRepositories.sort(
           (a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0)
         );
 
       case 'name-asc':
         return newRepositories.sort(
           (a, b) => (a.name ?? "").localeCompare(b.name ?? "")
         );
 
       case 'name-desc':
         return newRepositories.sort(
           (a, b) => (b.name ?? "").localeCompare(a.name ?? "")
         );
 
       case 'language-asc':
         return newRepositories.sort(
           (a, b) => (a.language ?? "").localeCompare(b.language ?? "")
         );
 
       case 'language-desc':
         return newRepositories.sort(
           (a, b) => (b.language ?? "").localeCompare(a.language ?? "")
         );
 
 
       default:
         return newRepositories;
     }
 
   }, [repositories, sortBy]);
  */
  useEffect(() => {
    if (isError) {
      showError("Não foi possível buscar o repositório do usuário no Github, tente novamente!");
    }
  }, [isError, showError]);

  return (
    <main className="d-flex flex-column gap-3">

      <button
        className="w-fit d-flex align-items-center gap-1 btn btn-link text-decoration-none fs-7"
        type="button"
        onClick={() => navigate(`/users/${username}`)}
      >
        <FaArrowLeft />
        <span>Nova busca</span>
      </button>



      <div className="card w-100 shadow bg-light">
        <div className="card-body d-flex flex-column gap-2">
          <header className="d-flex flex-column">

            <div className="d-flex flex-column gap-2 w-80">
              <h3 className="mb-0">{repository?.name}</h3>

              <span className="text-secondary">{repository?.description}</span>

              <div className="d-flex flex-column gap-1 text-secondary mt-2">
                <div className="d-flex gap-3">


                  <div className="d-flex align-items-center">
                    <div className="language-dot me-1" style={{ backgroundColor: getLanguageColor(repository?.language) }} />
                    <span>{repository?.language}</span>
                  </div>

                  <div className="d-flex align-items-center">
                    <FaStar />
                    <span className="ms-1">{repository?.stargazers_count}</span>
                  </div>

                </div>

                <a className="text-decoration-none text-secondary" href={repository?.html_url} target="_blank" rel="noopener noreferrer">
                  <UserInfoItem Icon={FaLink} information={repository?.html_url} />
                </a>
              </div>
            </div>
          </header>

          <section className="d-flex gap-2 mt-3">
            <UserIndicator Icon={FaLaptopCode} label="forks" value={repository?.forks_count} />
            <UserIndicator Icon={FaRegEye} label="watchers" value={repository?.watchers_count} />
            <UserIndicator Icon={FaRegDotCircle} label="questões abertas" value={repository?.open_issues_count} />
          </section>

        </div>
      </div>


      {/* <section className="mt-4">
        <header className="d-flex flex-row justify-content-between fs-7">
          <h5>
            Repositórios
            <span className="ms-1 text-secondary">({repositories?.length})</span>
          </h5>

          <div className="d-flex align-items-center text-secondary">
            <FaSort />
            <span className="text-nowrap px-2">Ordenar por</span>
            <select
              className="form-select"
              value={sortBy}
              onChange={(element) => setSortBy(element.target.value)}
            >
              <option value="stars-desc" selected>Mais estrelas</option>
              <option value="stars-asc">Menos estrelas</option>
              <option value="name-asc">Nome (A a Z)</option>
              <option value="name-desc">Nome (Z a A)</option>
              <option value="language-asc">Linguagem (A a Z)</option>
              <option value="language-desc">Linguagem (Z a A)</option>
            </select>
          </div>
        </header>

        <div className="mt-3 d-flex flex-column gap-2">

          {!sortedRepositories?.length
            ? (
              <EmptyRepositoryItem />
            ) : (
              sortedRepositories?.map(repository => (
                <RepositoryInfoItem key={repository.id} repository={repository} />
              )))}


        </div>

      </section> */}


    </main>
  )
}