import HeaderCard from "./HeaderCard"

const CardExperiences = () => {
    return (
        <section className="ctn-card">
            <HeaderCard title='Experiencias' btnPlus />
            <section className="ctn-experiences">
                <article className="experience">
                    <h1>Founder & CEO</h1>
                    <h2>Graham AI • Tempo integral</h2>
                    <h3>Jul de 2025 - Atual </h3>
                    <h4>São Paulo, Brasil</h4>
                </article>

                <hr />

                <article className="experience">
                    <h1>Founder</h1>
                    <h2>ZYNE • Tempo integral</h2>
                    <h3>Jul de 2025 - Atual </h3>
                    <h4>São Paulo, Brasil</h4>
                </article>

            </section>
        </section>
    )
}

export default CardExperiences
