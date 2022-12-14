// Style
import './cv.sass'

// Icon
import {BsDownload} from 'react-icons/all'



const Cv = () => {
  function download () {
    <input type="file" name="curriculum" id="curriculum" href='/imagens/Wesley da Silva Conceição.png'/>
    
  }
  return (
    <div className="cv">
      <BsDownload  size={30} color='#0000f9' title='Curriculum'npm  cursor='pointer' onClick={download}  />
    </div>
  )
}

export default Cv