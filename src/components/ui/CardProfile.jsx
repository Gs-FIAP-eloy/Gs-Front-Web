import { Link } from "react-router-dom"

const CardProfile = () => {
    return (
        <Link to='/profile' className="card-profile">
            <section className="banner-card-profile">
                <img src="https://media.licdn.com/dms/image/v2/D4D16AQGjobWVHrk20Q/profile-displaybackgroundimage-shrink_200_800/B4DZoj8pleGQAU-/0/1761539704579?e=1764201600&v=beta&t=lbktxK-vhCcI3XGdqkfBVUyN4nTgVyOON0uBIvNgXdg" />
            </section>
            <section className="user-card-profile">
                <img src="https://media.licdn.com/dms/image/v2/D4D03AQFnlrLQvobGTQ/profile-displayphoto-scale_400_400/B4DZmrHQWgJMAk-/0/1759512430533?e=1764201600&v=beta&t=wUtGBDNXXaVi-F_42kNW6syFUSWFhdQJsucgMH1kw08" />
                <h1 className="name-card-profile">Leonardo Silva</h1>
                <h2 className="title-card-profile">Software Engineer | Back-end Developer | Python | JavaS...</h2>
                <h3 className="job-card-profile">Engenheiro de Software</h3>
            </section>
        </Link>
    )
}

export default CardProfile
