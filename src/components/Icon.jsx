import { useRef, useState, useEffect } from "react";
import { useModal } from "../hook/useModal";
import logo from '../assets/svg/logo-light.svg';
import '../css/chat-eloy.css';

const Icon = () => {
    const { isOpen, openModal, closeModal } = useModal();
    const modalRef = useRef(null);
    const contentRef = useRef(null);

    const [messages, setMessages] = useState(() => {
        const saved = localStorage.getItem("chat_eloy");
        return saved ? JSON.parse(saved) : [];
    });

    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            closeModal();
        }
    };

    const enviarMensagem = async () => {
        if (!input.trim()) return;

        const userMessage = { from: "user", text: input };
        setMessages(prev => {
            const updated = [...prev, userMessage];
            localStorage.setItem("chat_eloy", JSON.stringify(updated));
            return updated;
        });
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("https://eloychatbot.onrender.com/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mensagem: input })
            });

            const data = await res.json();
            const botMessage = { from: "eloy", text: data.resposta || "Erro ao receber resposta" };

            setMessages(prev => {
                const updated = [...prev, botMessage];
                localStorage.setItem("chat_eloy", JSON.stringify(updated));
                return updated;
            });
        } catch (err) {
            console.error(err);
            const errorMessage = { from: "eloy", text: "Erro de conexão" };
            setMessages(prev => {
                const updated = [...prev, errorMessage];
                localStorage.setItem("chat_eloy", JSON.stringify(updated));
                return updated;
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = contentRef.current.scrollHeight;
        }
    }, [messages]);

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
                            <button onClick={closeModal}>
                                <i className="fa-solid fa-chevron-down"></i>
                            </button>
                        </div>

                        <section className="content-chat-eloy" ref={contentRef}>
                            {messages.length === 0 ? (
                                <div className="no-chat-eloy">
                                    <i className="fa-regular fa-comments"></i>
                                    <h2>Nenhuma conversa com eloy.</h2>
                                    <p>Faça uma pergunta e descubra o que temos de melhor para oferecer!</p>
                                </div>
                            ) : (
                                <div className="chat-messages">
                                    {messages.map((msg, idx) => (
                                        <div key={idx} className={`message ${msg.from}`}>
                                            <span>{msg.text}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>

                        <section className="ctn-input-chat-eloy">
                            <textarea
                                placeholder={loading ? "eloy está pensando.." : "Pergunte para eloy"}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" && !e.shiftKey) {
                                        e.preventDefault();
                                        enviarMensagem();
                                    }
                                }}
                            />
                            <section className="send-message-chat-eloy">
                                <div className="btn-left-chat-eloy">
                                    <button><i className="fa-regular fa-image"></i></button>
                                    <button><i className="fa-solid fa-link"></i></button>
                                    <button><i className="fa-regular fa-face-smile"></i></button>
                                </div>
                                <div className="btn-right-chat-eloy">
                                    <button
                                        className="send-btn"
                                        onClick={enviarMensagem}
                                        disabled={loading}
                                    >
                                        {loading ? "Enviando..." : "Enviar"}
                                    </button>
                                </div>
                            </section>
                        </section>
                    </section>
                </section>
            )}
        </section>
    );
};

export default Icon;
