// Style
import './darkmode.sass'

// Icons
import {BsMoonFill, BsSunFill, FcUndo} from 'react-icons/all'

const Darkmode = () => {

  var icon 
  if(icon == icon ) {
    icon = <BsMoonFill size={25} color='#13747d' id='moon'/>
  }
  else {
    icon = <BsSunFill size={25} color='#ffffff' id='sun' />
  }

  function nightChange() {
    // Root and Header
    var root = document.getElementById("root").style.backgroundColor = '#000000'
    var header = document.getElementById("header").style.backgroundColor = '#000000'
    var fontTitle = document.getElementById('h2').style.color = '#00caf8'
    var fontSubTitle = document.getElementById('h3').style.color = '#ffffff'
    var DescriptionTitle = document.getElementById("description-title").style.color = '#00caf8'
    var DescriptionSubtitle = document.getElementById("description-subtitle").style.color = '#ffffff'
    var DescriptionText = document.getElementById("description-text").style.color = '#00caf8'
    var netWork = document.getElementById('netWork').style.color = "#ffa500"
    var experience = document.getElementById("experience").style.color = "#ffa500"
    document.getElementById('BsGithub').style.color = "#ffffff"
    // Main Experience
    var mainExpertiseTitle = document.getElementById('main-expertise-title').style.color = '#00caf8'
    
  }

  function lightChange() {
    var root = document.getElementById("root").style.backgroundColor = '#ffffff'
    var header = document.getElementById("header").style.backgroundColor = '#ffffff'
    var fontTitle = document.getElementById('h2').style.color = '#13747d'
    var fontSubTitle = document.getElementById('h3').style.color = '#13747d'
    var DescriptionTitle = document.getElementById("description-title").style.color = '#13747d'
    var DescriptionSubtitle = document.getElementById("description-subtitle").style.color = '#13747d'
    var DescriptionText = document.getElementById("description-text").style.color = '#13747d'
    var netWork = document.getElementById('netWork').style.color = "#13747d"
    var experience = document.getElementById("experience").style.color = "#13747d"
    document.getElementById('BsGithub').style.color = "#000000"
  }

  return (
    <div className="darkmode" id='darkmode' onClick={nightChange} onDoubleClick={lightChange} >
      {icon}
    </div>
  )
}

export default Darkmode 