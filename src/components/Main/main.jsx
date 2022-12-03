// Style
import './main.sass'

const Main = () => {
  const imagens = {
    programacao: './src/image/img.programação.png'
  }
  return (
    <div className="main">
      <img src={imagens.programacao} alt="Tela de um computador em 3d apresentando várias ferramentas tec nologicas." />
      <p>
        <span>Onde podemos encontrar a Progração? </span><br />
        A programação está diretamente realcionada com outros tipos de ferramentas.
        Armazenamento em nuvem, banco de dados, folhas de estilo e claro lógica de progração, que é responsável por fazer acontercer tudo o que tem de especial em uma página web.
      </p>
    </div>
  )
}

export default Main