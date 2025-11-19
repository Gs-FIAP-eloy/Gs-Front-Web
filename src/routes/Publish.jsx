import CardAds from "../components/ui/CardAds";
import CardInfoProfile from "../components/ui/CardInfoProfile";
import CardNewslatter from "../components/ui/CardNewslatter";
import CardProfile from "../components/ui/CardProfile";
import useAuthRedirect from "../hook/useAuthRedirect";

const Publish = () => {

  useAuthRedirect();

  return (
    <section className="content">
      <aside className="left">
        <CardProfile local='eloy_user'/>
        <CardInfoProfile local='eloy_user'/>
      </aside>
      <section className="publish">

      </section>
      <aside className="right">
        <CardNewslatter />
        <CardAds />
      </aside>
    </section>
  )
}

export default Publish
