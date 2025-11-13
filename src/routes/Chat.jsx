import CardAds from "../components/ui/CardAds"
import CardNewslatter from "../components/ui/CardNewslatter"

const Chat = () => {
  return (
    <section className="content">
      <section className="ctn-content-chat">
        <section className="ctn-header-chat">
          <h1>Mensagens</h1>
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
