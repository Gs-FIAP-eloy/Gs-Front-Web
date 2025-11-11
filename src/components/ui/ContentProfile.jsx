
const ContentProfile = () => {
    return (
        <section className="content-profile">
            <article className="img-profile">
                <img src="https://media.licdn.com/dms/image/v2/D4D03AQFnlrLQvobGTQ/profile-displayphoto-scale_400_400/B4DZmrHQWgJMAk-/0/1759512430533?e=1764201600&v=beta&t=wUtGBDNXXaVi-F_42kNW6syFUSWFhdQJsucgMH1kw08" />
            </article>
            <section className="content-info-profile">
                <section className="left-content-profile">
                    <h1 className="user-name">Leonardo Silva</h1>
                    <h1 className="title-profile">Software Engineer | Back-end Developer | Python | JavaScript | React | Node.Js | MySQL | Agile Methodologies</h1>
                    <h1 className="location">São Paulo • Brasil</h1>
                    <section className="following-followers">
                        <h1>0 seguidores</h1>
                        <h1>•</h1>
                        <h1>0 seguindo</h1>
                    </section>
                </section>

                <section className="right-content-profile">
                    <a href="https://www.fiap.com.br/" target="_blank" className="card-job">
                        <img src="https://avatars.githubusercontent.com/u/79948663?s=200&v=4" />
                        <section className="position-company">
                            <h1>FIAP</h1>
                            <h2>Engenheiro de Software</h2>
                        </section>
                    </a>
                </section>
            </section>

            <section className="btn-content-profile">
                <button className="active">Editar perfil</button>
                <button>Compartilhar perfil</button>
            </section>
        </section>
    )
}

export default ContentProfile
