// Style
import Description from './Description/description'
import './header.sass'
import Languages from './Languages/languages'

// Icons
import SocialMedia from './Social Media/social-media'

const Header = () => {
  const perfil = {
    imagem: '../public/imagem/Wesley S. Conceição.jpg',
    alt: 'Imagem principal do portfólio'
  }
  return (
    <div className='header'>
      <div className='profile'>
        <img src={perfil.imagem} alt={perfil.alt} />
        <h2>
          Wesley Silva
        </h2>
        <h3>
        Front end Developer
        </h3>
        <div className="about-me">
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