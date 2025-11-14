import '../css/welcome.css'
import logo from '../assets/img/logo.png'
import img from '../assets/img/img-welcome.png'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <section className="ctn-page-welcome">
        <header className='header-page-welcome'>
            <img src={logo}/>
            <section className='btns-header-welcome'>
                <button onClick={() => window.location = '/auth'}>Criar conta</button>
                <button onClick={() => window.location = '/auth'} className='active'>Entrar</button>
            </section>
        </header>
        <section className='content-welcome'>
            <section className='content-left-welcome'>
                <h1>Bem-vindo à sua comunidade profissional</h1>
                <button onClick={() => window.location = '/auth'}><i className='fa-brands fa-google'></i>Continuar com Google</button>
                <button onClick={() => window.location = '/auth'}>Entrar com email</button>
                <p>Ao continuar para Login ou Criar Conta, você declara estar de acordo com o <Link to='/auth'>Acordo do Usuário</Link> e a <Link to='/auth'>Política de Privacidade</Link> do eloy.</p>
                <h2 className='btn-page-new-account'>Novo no eloy? <Link to='/auth'>Crie agora</Link></h2>
            </section>
            <section className='img-right-welcome'>
                <img src={img} />
            </section>
        </section>
    </section>
  )
}

export default Welcome
