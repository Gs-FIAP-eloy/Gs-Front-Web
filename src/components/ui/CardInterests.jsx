import { useEffect, useState } from "react";
import HeaderCard from "./HeaderCard";

const CardInterests = () => {

  const [interesses, setInteresses] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem("eloy_user");
    if (!user) return;

    const usuarioLogado = JSON.parse(user);

    fetch("/db/users.json")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const userData = data.find(u => u.id === usuarioLogado.id);

          if (userData && userData.areainteresses) {
            setInteresses(userData.areainteresses);
          }
        }
      })
      .catch(err => console.error("Erro ao carregar interesses:", err));
  }, []);

  return (
    <section className="ctn-card">
      <HeaderCard title='Interesses' to='interests' />
      <section className="ctn-interests">

        {interesses.map((item, index) => (
          <p key={index} className="interests">{item}</p>
        ))}

      </section>
    </section>
  );
};

export default CardInterests;
