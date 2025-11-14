
const CardLanguages = () => {
    return (
        <section className="ctn-card">
            <section className="header-card">
                <h1>Idiomas</h1>
                <section className="btns-header-card">
                    <button><i className="fa-solid fa-plus"></i></button>
                    <button><i className="fa-solid fa-pencil"></i></button>
                </section>
            </section>
            <section className="ctn-languages">
                <article className="language">
                    <h1>Português</h1>
                    <h2>Nativo</h2>
                </article>

                <hr />

                <article className="language">
                    <h1>Ingles</h1>
                    <h2>Intermediário</h2>
                </article>
            </section>
        </section>
    )
}

export default CardLanguages
