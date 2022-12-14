// Styeles
import './social-media.sass'

// Icons
import {BsGithub, BsLinkedin, BsWhatsapp, SiMicrosoftoutlook } from 'react-icons/all'
import Cv from '../Cv/cv';

const SocialMedia = () => {

  const socialMedia = [
    "blank",
    "https://github.com/wesley-silv",
    "https://linkedin.com/in/wesleysilvaconceicao21",
    "mailto:wesleysilvaconceicao@outlook.com",
    "https://wa.me/+5592540828?text=Olá Wesley, estou entrando em contato para saber mais sobre o seu trabalho."
  ]

  return (
    <div className='social-media' id='social-media'>
        <h2 id='netWork'>
          Network
        </h2>
       <a href={socialMedia[1]} target={socialMedia[0]}>
       <BsGithub id='BsGithub' size={35} color='#000000' />
       </a>
       <a href={socialMedia[2]} target={socialMedia[0]}>
        <BsLinkedin size={35} color='#0000ff' />
       </a>
       <a href={socialMedia[3]} target={socialMedia[0]}>
        <SiMicrosoftoutlook size={35} color='navy' />
       </a>
       <a href={socialMedia[4]} target={socialMedia[0]}>
       <BsWhatsapp size={35} color='lime' />
       </a>
       <Cv />
      </div>
  )
}

export default SocialMedia