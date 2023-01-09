// Style
import './darkmode.sass'

// Icons
import {BsMoonFill, BsSunFill} from 'react-icons/all'


const Darkmode = () => {

  var icon 
  if(icon == icon ) {
    icon = <BsMoonFill size={25} color='#13747d' id='moon'/>
  }
  else {
    icon = <BsSunFill size={25} color='#ffffff' id='sun' />
  }

  function nightChange () {
    var root = document.getElementById("root").style.backgroundColor = '#000000'
    var header = document.getElementById("header").style.backgroundColor = '#000000'
    var icon = document.getElementById("moon")

  }
  
  return (
    <div className="darkmode" onClick={nightChange}>
      {icon}
    </div>
  )
}

export default Darkmode 