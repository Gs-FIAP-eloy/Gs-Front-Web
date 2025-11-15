import '../css/setting.css'
import AsideSettings from '../components/ui/AsideSettings'
import HeaderSettings from '../components/ui/HeaderSettings'
import Introduction from '../components/ui/Introduction'
import { Outlet } from 'react-router-dom'

const Settings = () => {

  return (
    <section className='content'>
        <article className='settings'>
            <HeaderSettings />
            <section className='ctn-content-settings'>
                <aside>
                    <AsideSettings />
                </aside>
                <section className='content-settings'>
                   <Outlet />
                </section>
            </section>
        </article>
    </section>
  )
}

export default Settings
