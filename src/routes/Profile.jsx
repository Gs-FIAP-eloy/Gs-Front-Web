import '../css/center.css'
import '../css/aside-right.css'
import CardAds from "../components/ui/CardAds"
import CardNewslatter from "../components/ui/CardNewslatter"
import BannerProfile from "../components/ui/BannerProfile"
import ContentProfile from '../components/ui/ContentProfile'
import CardAbout from '../components/ui/CardAbout'
import CardMyCourses from '../components/ui/CardMyCourses'

const Profile = () => {
  return (
    <section className="content">
      <section className="ctn-content-profile">
        <article className='card-content-profile'>
          <BannerProfile />
          <ContentProfile />
        </article>
        <CardAbout />
        <CardMyCourses />
      </section>
      <aside className="right">
        <CardNewslatter />
        <CardAds />
      </aside>
    </section>
  )
}

export default Profile
