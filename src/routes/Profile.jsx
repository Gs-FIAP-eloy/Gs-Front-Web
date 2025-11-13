import '../css/center.css'
import '../css/aside-right.css'
import CardAds from "../components/ui/CardAds"
import CardNewslatter from "../components/ui/CardNewslatter"
import BannerProfile from "../components/ui/BannerProfile"
import ContentProfile from '../components/ui/ContentProfile'
import CardAbout from '../components/ui/CardAbout'
import CardMyCourses from '../components/ui/CardMyCourses'
import CardAcademic from '../components/ui/CardAcademic'
import CardLanguages from '../components/ui/CardLanguages'
import CardExperiences from '../components/ui/CardExperiences'
import CardInterests from '../components/ui/CardInterests'
import CardSkills from '../components/ui/CardSkills'

const Profile = () => {
  return (
    <section className="content">
      <section className="ctn-content-profile">
        <article className='card-content-profile'>
          <BannerProfile />
          <ContentProfile />
        </article>
        <CardInterests />
        <CardAbout />
        <CardAcademic />
        <CardExperiences />
        <CardMyCourses />
        <CardLanguages />
        <CardSkills />
      </section>
      <aside className="right">
        <CardNewslatter />
        <CardAds />
      </aside>
    </section>
  )
}

export default Profile
