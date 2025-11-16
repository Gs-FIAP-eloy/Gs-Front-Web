import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import '../css/header.css'
import logo from '../assets/svg/logo-light.svg'
import ModalProfile from './ui/ModalProfile'

const Header = () => {

    const [hidden, setHidden] = useState(false)
    const [showNotification, setShowNotification] = useState(false)
    const lastScrollY = useRef(0)
    const ticking = useRef(false)
    const headerRef = useRef(null)
    const location = useLocation()

    const [openProfileModal, setOpenProfileModal] = useState(false);


    useEffect(() => {
        const notificationSeen = localStorage.getItem('notificationSeen') === 'true'
        if (!notificationSeen) {
            setShowNotification(true)
        }
    }, [])

    useEffect(() => {
        if (location.pathname === '/notifications') {
            setShowNotification(false)
            localStorage.setItem('notificationSeen', 'true')
        }
    }, [location.pathname])

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

    const handleNotificationClick = () => {
    }

    useEffect(() => {
        const closeModal = () => setOpenProfileModal(false);

        const handleClickOutside = (e) => {
            if (!document.querySelector(".modal-profile")?.contains(e.target)) {
                closeModal();
            }
        };

        window.addEventListener("scroll", closeModal);
        window.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", closeModal);
            window.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


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
                            <div className='on-message'></div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/publish" className={({ isActive }) => isActive ? 'active' : ''}>
                            <i className="fa-solid fa-square-plus"></i> <p>Publicar</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/notifications"
                            className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={handleNotificationClick}
                        >
                            <i className="fa-solid fa-bell"></i> <p>Notificações</p>
                            {showNotification && <div className='on-notification'></div>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/profile"
                            className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenProfileModal(true);
                            }}
                        >
                            <i className="fa-solid fa-circle-user"></i> <p>Eu</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <ModalProfile open={openProfileModal} setOpen={setOpenProfileModal} />
        </header>
    )
}

export default Header
