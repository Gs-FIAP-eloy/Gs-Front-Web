import { NavLink } from "react-router-dom";

const ModalProfile = ({ open, setOpen }) => {
    if (!open) return null;

    return (
        <article className="modal-profile" onMouseLeave={() => { setTimeout(() => setOpen(false), 100) }}>
            <NavLink to='/profile' className="ctn-content-modal-profile">
                <img src="https://media.licdn.com/dms/image/v2/D4D16AQGjobWVHrk20Q/profile-displaybackgroundimage-shrink_350_1400/B4DZoj8pleGQAY-/0/1761539704579?e=1764806400&v=beta&t=_9z1jyaKKLFbWWhS4xIWs9RUAUcfJZVvN2EWClmaQbI" />
                <section className="content-modal-profile">
                    <div className="img-user-modal">
                        <img src="https://avatars.githubusercontent.com/u/182553526?v=4" />
                    </div>
                    <h1>Leonardo Silva</h1>
                    <h2>Software Engineer | Back-end Developer | Python | Java</h2>
                    <p>Engenheiro de software</p>
                </section>
            </NavLink>

            <hr />

            <section className="btns-modal-profile">
                <NavLink to='/profile'>Meu perfil</NavLink>
                <NavLink to='/settings/appearance'>Configurações</NavLink>
            </section>

        </article>
    )
}

export default ModalProfile
