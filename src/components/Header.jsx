import { NavLink } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import '../css/header.css'
import logo from '../assets/svg/logo-light.svg'

const Header = () => {

    const [hidden, setHidden] = useState(false)
    const lastScrollY = useRef(0)
    const ticking = useRef(false)
    const headerRef = useRef(null)

    useEffect(() => {
        const el = headerRef.current
        if (!el) return
        const height = el.getBoundingClientRect().height
        document.body.style.paddingTop = `${height}px`

        return () => {
            document.body.style.paddingTop = ''
        }
    }, [])

    useEffect(() => {
        const update = () => {
            const currentY = window.scrollY || window.pageYOffset
            const delta = currentY - lastScrollY.current

            const threshold = 15

            if (Math.abs(delta) > threshold) {
                if (currentY > lastScrollY.current && currentY > 120) {
                    setHidden(true)
                } else if (currentY + 50 < lastScrollY.current) {
                    setHidden(false)
                } else if (currentY <= 120) {
                    setHidden(false)
                }
            }

            lastScrollY.current = currentY
            ticking.current = false
        }

        const onScroll = () => {
            if (!ticking.current) {
                window.requestAnimationFrame(update)
                ticking.current = true
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header ref={headerRef} className={`main-header ${hidden ? 'hidden' : ''}`}>
            <section className="ctn-left-header">
                <article className="logo">
                    <img src={logo} alt="logo eloy" />
                </article>

                <section className="repute">
                    <p>Sua reputação está caindo!</p>
                    <p>13º</p>
                </section>
            </section>

            <button className='btn-to-search'>
                <i className='fa-solid fa-search'></i>
                <h1>Aperte <span>Ctrl + p</span> para pesquisar</h1>
            </button>

            <nav>
                <ul>
                    <li>
                        <NavLink to="/feed" className={({ isActive }) => isActive ? 'active' : ''}>
                            <i className="fa-solid fa-home"></i> <p>Início</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/chat" className={({ isActive }) => isActive ? 'active' : ''}>
                            <i className="fa-solid fa-comments"></i> <p>Mensagens</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/publish" className={({ isActive }) => isActive ? 'active' : ''}>
                            <i className="fa-solid fa-square-plus"></i> <p>Publicar</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/notifications" className={({ isActive }) => isActive ? 'active' : ''}>
                            <i className="fa-solid fa-bell"></i> <p>Notificações</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>
                            <i className="fa-solid fa-circle-user"></i> <p>Eu</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
