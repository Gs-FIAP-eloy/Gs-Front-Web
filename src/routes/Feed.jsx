import CardInfoProfile from "../components/ui/CardInfoProfile"
import CardProfile from "../components/ui/CardProfile"
import '../css/aside-left.css'
import '../css/center.css'
import '../css/aside-right.css'
import CardAds from "../components/ui/CardAds"
import Newslatter from "../components/ui/Newslatter"

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
        <Newslatter /> 
        <CardAds />
      </aside>
    </section>
  )
}

export default Feed
