import HeaderCard from "./HeaderCard"

const CardSkills = () => {
    return (
        <section className="ctn-card">
            <HeaderCard title='Competências' btnPlus />
            <section className="ctn-skills">
                <article className="skill">
                    <h1>Resolução de problemas</h1>
                </article>

                <hr />

                <article className="skill">
                    <h1>Cumunicação</h1>
                </article>

                <hr />

                <article className="skill">
                    <h1>Python</h1>
                </article>

                <hr />

                <article className="skill">
                    <h1>SQL</h1>
                </article>
            </section>
        </section>
    )
}

export default CardSkills
