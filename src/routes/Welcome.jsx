import '../css/welcome.css'
import logo from '../assets/img/logo.png'
import img from '../assets/img/img-welcome.png'

const Welcome = () => {
  return (
    <section className="ctn-page-welcome">
        <header className='header-page-welcome'>
            <img src={logo}/>
            <section className='btns-header-welcome'>
                <button>Criar conta</button>
                <button className='active'>Entrar</button>
            </section>
        </header>
        <section className='content-welcome'>
            <section className='content-left-welcome'>
                <h1>Bem-vindo à sua comunidade profissional</h1>
                <button><i className='fa-brands fa-google'></i>Continuar com Google</button>
                <button>Entrar com email</button>
                <p>Ao continuar para Login ou Criar Conta, você declara estar de acordo com o <a href='#'>Acordo do Usuário</a> e a <a href='#'>Política de Privacidade</a> do eloy.</p>
                <h2 className='btn-page-new-account'>Novo no eloy? <a  href='#'>Crie agora</a></h2>
            </section>
            <section className='img-right-welcome'>
                <img src={img} />
            </section>
        </section>
    </section>
  )
}

export default Welcome
