
const CardMyCourses = () => {
    return (
        <section className="ctn-my-courses">
            <section className="header-my-courses">
                <h1>Certificações</h1>
                <section className="btn-header-my-courses">
                    <button><button><i className="fa-solid fa-plus"></i></button></button>
                    <button><button><i className="fa-solid fa-pencil"></i></button></button>
                </section>
            </section>
            <section className="my-courses">
                <article className="course">
                    <h1>Front-End</h1>
                    <h2>FIAP</h2>
                    <h3>80 Horas</h3>
                </article>

                <hr />

                <article className="course">
                    <h1>Cyber sec.</h1>
                    <h2>FIAP</h2>
                    <h3>90 Horas</h3>
                </article>

                <hr />

                <article className="course">
                    <h1>Python</h1>
                    <h2>FIAP</h2>
                    <h3>40 Horas</h3>
                </article>

                <hr />

                <article className="course">
                    <h1>AWS Certified Data Analytics</h1>
                    <h2>FIAP</h2>
                    <h3>180 Horas</h3>
                </article>
            </section>
        </section>
    )
}

export default CardMyCourses
