import { useEffect, useState } from "react";

const CardAbout = () => {

    const [sobre, setSobre] = useState("");

    useEffect(() => {
        const user = localStorage.getItem("eloy_user");

        if (user) {
            const usuarioLogado = JSON.parse(user);

            if (usuarioLogado.sobre) {
                setSobre(usuarioLogado.resumo);
            }
        }
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
