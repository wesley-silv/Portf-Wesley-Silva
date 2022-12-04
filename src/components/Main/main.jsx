// Style
import './main.sass'

// Components
import Expertise from './Expertise/expertise'


const Main = () => {
  const imagens = {
    programacao: '../imagens/img.programação.png'
  }
  return (
    <div className="main">
      <div className="main-banner">
      <img src={imagens.programacao} alt="Tela de um computador em 3d apresentando várias ferramentas tec nologicas." />
      <p>
        <span>Onde podemos encontrar a Programação? </span><br />
        A programação está diretamente relacionada com outros tipos de ferramentas como
        armazenamento em nuvem, banco de dados,consumo de APIs, folhas de estilo e claro a lógica de progração. Ela é a principal responsável por executar tudo o que tem de especial em uma página web e também em aplicativos.
      </p> 
      </div>
      <div className="main-expertise">
        <Expertise />
      </div>
    </div>
  )
}

export default Main