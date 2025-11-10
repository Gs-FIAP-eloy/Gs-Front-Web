import { Link } from "react-router-dom"

const CardInfoProfile = () => {
  return (
    <article className="card-info-profile">
        <Link to='/profile'>Seguidores: <span>0</span></Link>
        <Link to='/profile'>Seguindo: <span>0</span></Link>
    </article>
  )
}

export default CardInfoProfile
