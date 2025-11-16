import HeaderContentSettings from "./HeaderContentSettings"

const Introduction = () => {
  return (
    <section className="ctn-introduction">
      <HeaderContentSettings title='introdução' />
      <section className="content-change">
        <section className="change-img-profile">
          <img src="https://avatars.githubusercontent.com/u/182553526?v=4" />
          <div>
            <button>Trocar foto</button>
            <p>Arraste ou selecione uma imagem para definir sua foto de perfil.
              Para garantir a melhor qualidade visual, utilize uma imagem quadrada com resolução recomendada de 250×250 pixels.
              O tamanho máximo permitido para upload é de 20 MB e formatos comuns, como JPG e PNG, são aceitos.
            </p>
          </div>
        </section>
        <section className="ctn-change-settings">

          <article className="change-name">
            <label>Nome:</label>
            <input type="text" maxLength={50} />
          </article>

          <article className="change-title">
            <label>Titulo:</label>
            <input type="text" maxLength={103} />
          </article>

          <article className="change-state">
            <label>Estado:</label>
            <input type="text" />
          </article>

          <article className="change-country">
            <label>País:</label>
            <input type="text" />
          </article>

          <article className="change-birthday">
            <label>Aniversário:</label>
            <input type="date" />
          </article>
        </section>
      </section>
    </section>
  )
}

export default Introduction
