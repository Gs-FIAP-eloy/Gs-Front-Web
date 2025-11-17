import '../css/search.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {

  const [users, setUsers] = useState([]);
  const [suggested, setSuggested] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [open, setOpen] = useState(true);

  const navigate = useNavigate();

  const normalize = (text) =>
    text
      ?.normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const limitText = (text, max = 68) =>
    text && text.length > max ? text.slice(0, max) + "..." : text;

  const openProfile = (id) => {
    localStorage.setItem("current_profile_id", id);
    navigate(`/user/${id}`);
    window.location.reload();
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      const box = document.querySelector(".search");
      if (box && !box.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const logged = localStorage.getItem("eloy_user");
    if (!logged) return;

    const loggedUser = JSON.parse(logged);

    fetch("/db/users.json")
      .then(res => res.json())
      .then(data => {

        if (!Array.isArray(data)) return;

        const all = data.filter(u => u.id !== loggedUser.id);
        setUsers(all);

        const ranked = all
          .map(u => {
            let score = 0;

            if (u.area && loggedUser.area) {
              if (normalize(u.area) === normalize(loggedUser.area)) {
                score += 3;
              }
            }

            if (Array.isArray(u.areainteresses) && Array.isArray(loggedUser.areainteresses)) {
              const matches = u.areainteresses.filter(i =>
                loggedUser.areainteresses.includes(i)
              ).length;

              score += matches * 2;
            }

            return { ...u, score };
          })
          .sort((a, b) => b.score - a.score)
          .slice(0, 20);

        setSuggested(ranked);

      })
      .catch(err => console.error("Erro ao carregar JSON:", err));
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setFiltered([]);
      return;
    }

    const term = normalize(search);

    const result = users.filter(u =>
      normalize(u.nome).includes(term)
      || normalize(u.area).includes(term)
      || (Array.isArray(u.areainteresses) &&
        u.areainteresses.some(i => normalize(i).includes(term)))
    );

    setFiltered(result);
  }, [search, users]);


  if (!open) return null;

  return (
    <article className="ctn-search">
      <section className="search">

        <article className='input-search'>
          <button><i className='fa-solid fa-search'></i></button>
          <input
            type="text"
            autoFocus
            placeholder="Pesquisar usuários..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </article>

        {search === "" && (
          <section className='users-search'>
            <h1>Com base nos seus interesses</h1>

            {suggested.map(user => (
              <article
                className='user'
                key={user.id}
                onClick={() => openProfile(user.id)}
              >
                <section className='info-user'>
                  <img src={user.foto || "assets/default-avatar.png"} />
                  <div className="content-info-user">
                    <h2>{user.nome}</h2>
                    <h3>{limitText(user.titulo || user.area)}</h3>
                  </div>
                </section>
                <button><i className='fa-solid fa-user-plus'></i></button>
              </article>
            ))}
          </section>
        )}

        {search !== "" && (
          <section className='users-search'>
            <h1>Resultados</h1>

            {filtered.length === 0 && <p><i className='fa-regular fa-face-frown'></i> Nenhum usuário encontrado.</p>}

            {filtered.map(user => (
              <article
                className='user'
                key={user.id}
                onClick={() => openProfile(user.id)}
              >
                <section className='info-user'>
                  <img src={user.foto || "assets/img/img-profile-default.png"} />
                  <div className="content-info-user">
                    <h2>{user.nome}</h2>
                    <h3>{limitText(user.titulo || user.area)}</h3>
                  </div>
                </section>
                <button><i className='fa-solid fa-user-plus'></i></button>
              </article>
            ))}
          </section>
        )}

      </section>
    </article>
  );
};

export default Search;
