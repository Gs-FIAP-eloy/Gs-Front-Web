import CardInfoProfile from "../components/ui/CardInfoProfile"
import CardProfile from "../components/ui/CardProfile"
import '../css/aside-left.css'
import '../css/aside-right.css'

const Feed = () => {
  return (
    <section className="content">
      <aside className="left">
        <CardProfile />
        <CardInfoProfile />
      </aside>

      <section className="feed">

      </section>

      <aside className="right">

      </aside>
    </section>
  )
}

export default Feed
