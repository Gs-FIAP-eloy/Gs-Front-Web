import HeaderCard from "./HeaderCard"

const CardProjects = () => {
    return (
        <section className="ctn-card">
            <HeaderCard title='Projetos' btnPlus />
            <section className="ctn-projects">
                <article className="project">
                    <h1>Graham AI</h1>
                    <a href="" target="_blank">graham.ai</a>
                    <p>Plataforma de IA open-source para interação contextual em tempo real,
                        utilizando React (frontend) e Node.js (backend). Integra NLP avançado via DeepSeek AI,
                        demonstrando proficiência em desenvolvimento full-stack e inovação na interação humanoIA.</p>
                </article>

                <hr />

                <article className="project">
                    <h1>CvHub</h1>
                    <a href="" target="_blank">cvhub.com</a>
                    <p>Gera currículos otimizados para ATS a partir de dados do GitHub. Utiliza
                        integração de APIs e automação para criar perfis profissionais, conectando tecnologia e
                        empregabilidade.</p>
                </article>

            </section>
        </section>
    )
}

export default CardProjects
