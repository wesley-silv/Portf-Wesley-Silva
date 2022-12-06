// Style
import './expertise.sass'

const Expertise = () => {
  const imagens = {
    javascript: '../imagens/img.javascript.png',
    react: '../imagens/img.react.jpg',
    node: '../imagens/img.node.jpg',
  }
  return (
    <div className="expertise">
      <h2>
        My Expertises
      </h2>
      <div className="expertise-javascript">
        Uso como principal linguagem de progração o JavaScript, por ser muito versátil na construção de aplicações front, back e fullstack. Além de poder ser utilizado em um grande campo de utilizações.
        <img src={imagens.javascript} alt="circulo com duas cores azul e amarelo contendo as letras js dentro de um par de chaves" />
      </div>
      <div className="expertise-react">
        <img src={imagens.react} alt="logo do react js" />
        O React é uma biblioteca da linguagem JavaScript, ela foi criada pelo Facebook no ano de 2011, e desde então tem dominado o mercado tecnológico na construção de interfaces dos mais diversos tipos. 
        A sua estrutura baseada em componentes faz com que a manutenção e reutilização do código seja facilmente implementada.
      </div>
      <div className="expertise-node">
        O Node js é um ambiente que permite o desenvolvimento com a linguagem JavaScript fora do navegador. O mesmo é muito utilizado na criação do próprio servidor da aplicação, consumo de APIs, conversão de dados através dos objetos JSON, "objeto de notação JavaScript", dentre outras funcionalidades. 
        <img src={imagens.node} alt="logo do node js" />
      </div>
    </div>
  )
}

export default Expertise