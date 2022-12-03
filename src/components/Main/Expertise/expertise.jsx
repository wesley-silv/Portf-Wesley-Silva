// Style
import './expertise.sass'

const Expertise = () => {
  const imagens = {
    javascript: '../imagens/img.javascript.png'
  }
  return (
    <div className="expertise">
      <h2>
        My Expertises
      </h2>
      <div className="expertise-javascript">
        Uso como principal linguagem de progração o JavaScript, por ser muito versátil na construção de aplicações front, back e fullstack. Além de poder ser utilizado em um grande campo de utilizações.
        <img src={imagens.javascript} alt="" />
      </div>
    </div>
  )
}

export default Expertise