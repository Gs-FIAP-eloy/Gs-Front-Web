import { useEffect, useState } from "react";

const BannerProfile = () => {

  const [banner, setBanner] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("eloy_user");
    if (!user) return;

    const usuarioLogado = JSON.parse(user);

    fetch("/db/users.json")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const userData = data.find(u => u.id === usuarioLogado.id);

          if (userData?.banner) {
            setBanner(userData.banner);
          }
        }
      })
      .catch(err => console.error("Erro ao carregar JSON:", err));
  }, []);

  return (
    <section className="banner-profile">
      <img src={banner} />
    </section>
  );
};

export default BannerProfile;
