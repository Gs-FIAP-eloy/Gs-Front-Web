import { useEffect, useState } from "react";
import HeaderCard from "./HeaderCard";

const CardSkills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const user = localStorage.getItem("eloy_user");
        if (!user) return;

        const usuarioLogado = JSON.parse(user);

        fetch("/db/users.json")
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    const userData = data.find(u => u.id === usuarioLogado.id);

                    if (Array.isArray(userData?.competencias)) {
                        setSkills(userData.competencias);
                    }
                }
            })
            .catch(err => console.error("Erro ao carregar JSON:", err));
    }, []);

    return (
        <section className="ctn-card">
            <HeaderCard title='Competências' btnPlus to='skills' />

            <section className="ctn-skills">
                {skills.length > 0 && skills.map((skill, index) =>
                    skill && (
                        <div key={index} className="skills">
                            <article className="skill">
                                <h1>{skill}</h1>
                            </article>
                            {index < skills.length - 1 && <hr />}
                        </div>
                    )
                )}
            </section>
        </section>
    );
};

export default CardSkills;
