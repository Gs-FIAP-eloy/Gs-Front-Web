import CardAds from "../components/ui/CardAds"
import CardNewslatter from "../components/ui/CardNewslatter"

const Chat = () => {
  return (
    <section className="content">
      <section className="ctn-content-chat">
        <section className="ctn-header-chat">
          <h1>Mensagens</h1>
        </section>
        <section className="content-chat">
          <aside className="ctn-aside-chat active">
            <article className="profile-user-chat">
              <section className="img-profile-chat">
                <img src="https://avatars.githubusercontent.com/u/225023097?v=4" />
              </section>
              <section className="ctn-info-profile-chat">
                <section className="info-profile-chat">
                  <h1>Samuel Monteiro</h1>
                  <section className="preview-message-chat">
                    <i className="fa-solid fa-check-double"></i>
                    <p>•</p>
                    <h2>Oi Léo! Posso sim. o q...</h2>
                  </section>
                </section>
                <button><i className="fa-solid fa-ellipsis"></i></button>
              </section>
            </article>

            <article className="profile-user-chat">
              <section className="img-profile-chat">
                <img src="https://avatars.githubusercontent.com/u/198768909?v=4" />
              </section>
              <section className="ctn-info-profile-chat">
                <section className="info-profile-chat">
                  <h1>Lucas Toledo</h1>
                  <section className="preview-message-chat">
                    <i className="fa-solid fa-check-double"></i>
                    <p>•</p>
                    <h2>acabei de te enviar...</h2>
                  </section>
                </section>
                <button><i className="fa-solid fa-ellipsis"></i></button>
              </section>
            </article>

          </aside>
          <section className="content-active-chat">
            <section className="header-active-chat">
              <section className="img-profile-chat">
                <img src="https://avatars.githubusercontent.com/u/225023097?v=4" />
              </section>
              <section>
                <h1>Samuel Monteiro</h1>
                <h2>Engenheiro de Software</h2>
              </section>
            </section>
            <section className="content-message">
              <article className="message-user">
                <p>Eae Samuel beleza! pode me ajudar em uma tarefa?</p>
              </article>
              <article className="message-received">
                <p>Oi Léo! Posso sim. o que você precisa?</p>
              </article>
            </section>
            <section className="ctn-send-message">
              <section className="input-message-chat">
                <textarea autoFocus placeholder="Mensagem" />
                <button><i className="fa-solid fa-paper-plane"></i></button>
              </section>
            </section>
          </section>
        </section>
      </section>
      <aside className="right">
        <CardNewslatter />
        <CardAds />
      </aside>
    </section>
  )
}

export default Chat
