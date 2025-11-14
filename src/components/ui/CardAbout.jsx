import { useEffect, useState } from "react";

const CardAbout = () => {

    const [sobre, setSobre] = useState("");

    useEffect(() => {
        const userLocal = localStorage.getItem("eloy_user");

        if (!userLocal) return;

        const usuarioLogado = JSON.parse(userLocal);

        fetch("/db/users.json")
            .then(res => res.json())
            .then(data => {

                const usuario = data.find(u => u.id === usuarioLogado.id);

                if (usuario) {
                    setSobre(usuario.resumo);
                } else {
                    console.warn("Usuário não encontrado no JSON");
                }
            })
            .catch(err => console.error("Erro ao carregar JSON:", err));
    }, []);

    return (
        <section className="ctn-about">
            <section className="header-card-about">
                <h1>Sobre</h1>
                <button><i className="fa-solid fa-pencil"></i></button>
            </section>

            <article className="about">
                <p>{sobre}</p>
            </article>
        </section>
    );
};

export default CardAbout;
