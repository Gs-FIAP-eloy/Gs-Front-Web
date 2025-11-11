import { Link, NavLink } from "react-router-dom"
import '../css/footer.css'

const Footer = () => {
  return (
    <footer>
        <section className="links-footer">

            <section className="about-eloy-footer">
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis illo quisquam doloremque. Distinctio perferendis quos earum alias voluptas.</h2>
            </section>

            <ul>
                <li><NavLink>início</NavLink></li>
                <li><NavLink>Mensagens</NavLink></li>
                <li><NavLink>Publicar</NavLink></li>
                <li><NavLink>Notificações</NavLink></li>
                <li><NavLink>Perfil</NavLink></li>
            </ul>

            <ul>
                <li><Link>Acessibilidade</Link></li>
                <li><Link>Minha carreira</Link></li>
                <li><Link>Sobre</Link></li>
                <li><Link>Configurações</Link></li>
                <li><Link>Termos e Privacidade</Link></li>
            </ul>

            <ul>
                <li><Link>Planos</Link></li>
                <li><Link>eloy AI</Link></li>
                <li><Link>Contribuir</Link></li>
                <li><Link>Reportar</Link></li>
                <li><Link>GitHub</Link></li>
            </ul>

            <ul>
                <li><Link>Planos</Link></li>
                <li><Link>eloy AI</Link></li>
                <li><Link>Contribuir</Link></li>
                <li><Link>Reportar</Link></li>
                <li><Link>GitHub</Link></li>
            </ul>
        </section>
        <p>eloy Corporation &copy; 2025</p>
    </footer>
  )
}

export default Footer
