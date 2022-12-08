// Style
import './expertise.sass'

const Expertise = () => {
  const imagens = {
    javascript: '../imagens/img.javascript.jpg',
    react: '../imagens/img.react.jpg',
    node: '../imagens/img.node.jpg',
    css: '/imagens/img.css.jpg',
    html: '/imagens/img.html.jpg',
    sass: '/imagens/img.sass.jpg',
    mongodb: '/imagens/img.mongodb.jpg'
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
      <div className="expertise-css">
        <img src={imagens.css} alt="logo do css" />
        O Css é uma linguagem de folhas de estilo, com o seu uso é possível modificar toda a estrutura da página. Alguns efeitos podem ser realizados sem uma única linha de qualquer outra linguagem de programação, muito poderosa quando o assunto é estilo.
      </div>
      <div className="expertise-html">
        Html é uma linguagem de marcação da web, ela não estiliza as páginas, apenas define os tipos de textos e também é onde a separação dos containers ocorre. Tem uma sintaxe muito fácil de ser compreendida por suas tags, elementos e atributos. É uma excelente linguagem para começar na programação.
        <img src={imagens.html} alt="logo do html" />
      </div>
      <div className="expertise-sass">
        <img src={imagens.sass} alt="logo do sass" />
        O Sass é um compilador de css que torna a escrita com css muito mais poderosa e simples. Possui dois tipos de extenção .scss e .sass a qual tem uma sintaxe baseada no récuo da regra css e não utiliza chaves nem ponto e vírgula no final das declarações. 
      </div>
      <div className="expertise-mongo">
        O Mongo DB é um banco de dados noSql, trata-se de um gerenciador onde é possível guardar dados em forma de objeto Json, e assim manter uma plena relação com o JavaScript e o Node.
        Muito utilizado em grandes aplicações nos dias atuais. 
        <img src={imagens.mongodb} alt="logo do mongodb" />
      </div>
    </div>
  )
}

export default Expertise