
const HeaderCard = ({ title, btnPlus }) => {
    return (
        <section className="header-card">
            <h1>{title}</h1>
            <section className="btns-header-card">
                {btnPlus == true && (
                    <button><i className="fa-solid fa-plus"></i></button>
                )}
                <button><i className="fa-solid fa-pencil"></i></button>
            </section>
        </section>
    )
}

export default HeaderCard
