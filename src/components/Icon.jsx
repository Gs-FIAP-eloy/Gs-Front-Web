import { useRef } from "react";
import { useModal } from "../hook/useModal";
import logo from '../assets/svg/logo-light.svg'
import '../css/chat-eloy.css'

const Icon = () => {

    const { isOpen, openModal, closeModal } = useModal();
    const modalRef = useRef(null);

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            closeModal();
        }
    };

    return (
        <section>
            <article onClick={openModal} className='btn-chat-eloy'>
                <img src={logo} title="Conversar com eloy" />
            </article>

            {isOpen && (
                <section className="ctn-chat-eloy" onClick={handleClickOutside}>
                    <section className="chat-eloy" ref={modalRef}>
                        <div className="header-chat-eloy">
                            <h1>eloy - chat</h1>
                            <button onClick={closeModal}><i className="fa-solid fa-chevron-down"></i></button>
                        </div>

                        <section className="content-chat-eloy">
                            <div className="no-chat-eloy">
                                <i className="fa-regular fa-comments"></i>
                                <h2>Nenhuma conversa com eloy.</h2>
                                <p>faça uma pergunta e descubra o que tem de melhor para oferecer!</p>
                            </div>

                        </section>

                        <section className="ctn-input-chat-eloy">
                            <textarea placeholder="Pergunte para eloy"></textarea>
                            <section className="send-message-chat-eloy">
                                <div className="btn-left-chat-eloy">
                                    <button><i className="fa-regular fa-image"></i></button>
                                    <button><i className="fa-solid fa-link"></i></button>
                                    <button><i className="fa-regular fa-face-smile"></i></button>
                                </div>
                                <div className="btn-right-chat-eloy">
                                    <button className="blocked">Enviar</button>
                                </div>
                            </section>
                        </section>
                    </section>
                </section>
            )}
        </section>
    )
}

export default Icon
