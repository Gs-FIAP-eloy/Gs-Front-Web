import CardInfoProfile from "../components/ui/CardInfoProfile"
import CardProfile from "../components/ui/CardProfile"
import '../css/aside-left.css'
import '../css/center.css'
import '../css/aside-right.css'
import CardAds from "../components/ui/CardAds"
import CardNewslatter from "../components/ui/CardNewslatter"
import useAuthRedirect from "../hook/useAuthRedirect"

const Feed = () => {

  useAuthRedirect();

  return (
    <section className="content">
      <aside className="left">
        <CardProfile />
        <CardInfoProfile />
      </aside>

      <section className="feed">

      </section>

      <aside className="right">
        <CardNewslatter /> 
        <CardAds />
      </aside>
    </section>
  )
}

export default Feed
