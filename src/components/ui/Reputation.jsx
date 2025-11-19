import { useEffect, useState } from "react";
import calculateUserRanking from "../../hook/calculateUserRanking";

export default function Reputation() {
    const [posicao, setPosicao] = useState(null);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("eloy_user"));
        if (!user) return;

        fetch("/db/users.json")
            .then(res => res.json())
            .then(listaUsuarios => {
                const ranking = calculateUserRanking(listaUsuarios);

                const index = ranking.findIndex(u => u.id === user.id);

                if (index === -1) {
                    setPosicao(">10");
                } else {
                    setPosicao(index + 1);
                }
            });
    }, []);

    return (
        <section className="repute">
            <p>Você está em</p>
            <p className="position">{posicao ? `${posicao}º` : "..."}</p>
            <p>lugar!</p>
        </section>
    );
}
