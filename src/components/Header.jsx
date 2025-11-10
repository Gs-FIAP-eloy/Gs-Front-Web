import { Link } from 'react-router-dom'
import '../css/header.css'
import logo from '../assets/svg/logo-light.svg'

const Header = () => {
    return (
        <header>
            <section className="ctn-left-header">
                <article className="logo">
                    <img src={logo} alt="logo eloy" />
                </article>

                <section className="repute">
                    <p>⚫ Sua reputação está caindo!</p>
                    <p>13º</p>
                </section>
            </section>

            <button className='btn-to-search'>
                <i className='fa-solid fa-search'></i>
                <h1>Aperte <span>Ctrl + p</span> para pesquisar</h1>
            </button>

            <nav>
                <ul>
                    <li><Link className='active' to='/'><i className='fa-solid fa-home'></i>Início</Link></li>
                    <li><Link className='' to='/chat'><i className='fa-solid fa-comments'></i>Mensagens</Link></li>
                    <li><Link className='' to='/publish'><i className='fa-solid fa-square-plus'></i>Publicar</Link></li>
                    <li><Link className='' to='/notifications'><i className='fa-solid fa-bell'></i>Notificações</Link></li>
                    <li><Link className='' to='/profile'><i className='fa-solid fa-circle-user'></i>Eu</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
