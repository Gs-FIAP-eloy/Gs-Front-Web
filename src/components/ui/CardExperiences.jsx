import HeaderCard from "./HeaderCard"

const CardExperiences = () => {
    return (
        <section className="ctn-card">
            <HeaderCard title='Experiencias' btnPlus='true' />
            <section className="ctn-experiences">
                <article className="experience">
                    <h1>Founder & CEO</h1>
                    <h2>Graham AI • Tempo integral</h2>
                    <h3>Jul de 2025 - Atual </h3>
                    <h4>São Paulo, Brasil</h4>
                    <p>Plataforma de IA open-source para interação contextual em tempo real,
                        utilizando React (frontend) e Node.js (backend). Integra NLP avançado via DeepSeek AI,
                        demonstrando proficiência em desenvolvimento full-stack e inovação na interação humano IA.</p>
                </article>

                <hr />

                <article className="experience">
                    <h1>Founder</h1>
                    <h2>ZYNE • Tempo integral</h2>
                    <h3>Jul de 2025 - Atual </h3>
                    <h4>São Paulo, Brasil</h4>
                    <p>Idealizei e desenvolvi uma rede de empresas inovadoras focadas em design 3D de alto nível. Durante minha atuação, conduzi projetos que uniram criatividade, tecnologia e soluções visuais de impacto, atendendo tanto clientes corporativos quanto consumidores finais.

                        Minha experiência envolveu gestão de projetos, desenvolvimento de produtos 3D e otimização de processos criativos, sempre com foco em qualidade, inovação e excelência visual. Como fundador, contribuí para consolidar a ZYNE como uma referência em design 3D e inovação tecnológica.</p>
                </article>

            </section>
        </section>
    )
}

export default CardExperiences
