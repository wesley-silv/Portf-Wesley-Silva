// Style
import './languages.sass'

// Icons
import {GrReactjs, SiJavascript, ImHtmlFive, ImCss3, DiMongodb, FaNodeJs, } from 'react-icons/all'

const Languages = () => {

  const lenguages = {
    javascript: 'https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript',
    reactjs: 'https://reactjs.org',
    nodejs: 'https://nodejs.org',
    html5: 'https://developer.mozilla.org/pt-BR/docs/Learn/HTML',
    css3: 'https://developer.mozilla.org/pt-BR/docs/Learn/CSS',
    mongodb: 'https://www.mongodb.com/home',
    target: 'blank'
  }
  return (
    <div className="languages">
      <h3>
        Languages
      </h3>
      <section className='languages-logos'>
      <a href={lenguages.javascript} target={lenguages.target}>
        <SiJavascript size={40} color='daf200' />
      </a>
      <a href={lenguages.reactjs} target={lenguages.target} >
        <GrReactjs size={40} color='#61dbfb' />
      </a>
      <a href={lenguages.nodejs} target={lenguages.target} >
        <FaNodeJs size={40} color='#68a063' />
      </a>
      <a href={lenguages.mongodb} target={lenguages.target} >
        <DiMongodb size={40} color='#68a063' />
      </a>
      <a href={lenguages.html5} target={lenguages.target} >
        <ImHtmlFive size={40} color='#ff0000' />
      </a>
      <a href={lenguages.css3} target={lenguages.target} >
        <ImCss3 size={40} color='#00aaff' />
      </a>
      </section>
    </div>
  )
}

export default Languages