import '../css/auth.css'
import logo from '../assets/img/logo.png'

const Auth = () => {
    return (
        <section className='ctn-page-auth'>
            <header className='header-page-auth'>
                <img src={logo} />
            </header>
            <section className='content-auth'>
                <article className='ctn-auth'>
                    <section className='ctn-input-auth'>
                        <label>Email</label>
                        <section className='input-auth'>
                            <input type="email" />
                            <button className='btn-right-input'><i className='fa-regular fa-envelope'></i></button>
                        </section>
                    </section>

                    <section className='ctn-input-auth'>
                        <label>Senha <span>(6+ Caracteres)</span></label>
                        <section className='input-auth'>
                            <input type="password" />
                            <button className='btn-right-input'><i className='fa-solid fa-lock'></i></button>
                        </section>
                    </section>
                    <p>Ao continuar para Login ou Criar Conta, você declara estar de acordo com o <a href='#'>Acordo do Usuário</a> e a <a href='#'>Política de Privacidade</a> do eloy.</p>
                    <button className='active'>Aceitar e continuar</button>
                    <section className='line-auth'>
                        <div className='hr'></div>
                        <p>ou</p>
                        <div className='hr'></div>
                    </section>
                    <button><i className='fa-brands fa-google'></i>Continuar com Google</button>
                    <h2>Novo no eloy? <a href="#">Criar conta</a></h2>
                </article>
            </section>

        </section>
    )
}

export default Auth
