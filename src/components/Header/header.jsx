// Style
import Darkmode from './Darkmode/darkmode'
import Description from './Description/description'
import './header.sass'
import Languages from './Languages/languages'

// Icons
import SocialMedia from './Social Media/social-media'

const Header = () => {
  const perfil = {
    imagem: '../imagens/Wesley S. Conceição.jpg ',
    alt: 'Imagem principal do portfólio'
  }
  return (
    <div className='header' id='header'>
      <div className='profile' id='profile'>
        <img src={perfil.imagem} alt={perfil.alt} />
        <div className="profile-title">
        <h2 id='h2'>
          Wesley Da Silva Conceição
        </h2>
        <h3 id='h3'>
        Front-end Developer
        </h3>
        </div>
        <div className="about-me">
        <Darkmode />
        <Description />
        </div>
      </div>
      <div className="stack">
      <SocialMedia />
      <Languages />
      </div>
    </div>
  )
}

export default Header