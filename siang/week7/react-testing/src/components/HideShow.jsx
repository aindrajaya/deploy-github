import React, {useState, Fragment} from 'react'

const HideShow = () => {
  const [show, setShow] = useState(false)

  const toggleClick = () => {
    if(show){
      setShow(false)
    } else {
      setShow(true)
    }
  }

  return(
    <Fragment>
      <p>Tulisan sedang {show ? "Muncul" : "Sembunyi"}</p>
      <button onClick={toggleClick}>{show ? "Sembunyikan" : "Munculkan"}</button>
    </Fragment>
  )
}

export default HideShow