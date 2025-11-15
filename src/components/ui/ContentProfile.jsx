import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ContentProfile = () => {
    const [userData, setUserData] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("eloy_user");
        if (!user) return;

        const usuarioLogado = JSON.parse(user);

        fetch("/db/users.json")
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    const foundUser = data.find(u => u.id === usuarioLogado.id);
                    if (foundUser) setUserData(foundUser);
                }
            })
            .catch(err => console.error("Erro ao carregar JSON:", err));
    }, []);

    if (!userData) return null;

    const profileImg = userData.foto !== "" 
        ? userData.foto 
        : "src/assets/img/img-profile-default.png";

    return (
        <section className="content-profile">
            <article className="img-profile">
                <img src={profileImg} alt={userData.nome} />
            </article>
            <section className="content-info-profile">
                <section className="left-content-profile">
                    <h1 className="user-name">{userData.nome}</h1>
                    <h1 className="title-profile">{userData.titulo}</h1>
                    <h1 className="location">{userData.estado} • {userData.pais}</h1>
                    <section className="following-followers">
                        <h1>{userData.seguidores} seguidores</h1>
                        <h1>•</h1>
                        <h1>{userData.seguindo} seguindo</h1>
                    </section>
                </section>

                <section className="right-content-profile">
                    <a href="https://www.fiap.com.br/" target="_blank" className="card-job">
                        <img src='https://avatars.githubusercontent.com/u/79948663?s=200&v=4' alt={userData.empresa} />
                        <section className="position-company">
                            <h1>{userData.empresa}</h1>
                            <h2>{userData.cargo}</h2>
                        </section>
                    </a>
                </section>
            </section>

            <section className="btn-content-profile">
                <button onClick={() => navigate("/settings/introduction")} className="active">Editar perfil</button>
                <button>Compartilhar perfil</button>
            </section>
        </section>
    );
};

export default ContentProfile;
