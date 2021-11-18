import React, { useState } from 'react'

export default function HideShow() {
  const [show,setShow] = useState(false)

  const toggleClick = () => {
    if(show){
      setShow(false)
    } else{
      setShow(true)
    }
  }

  return (
    <div>
      <p>Tulisan ini akan {show ? "Muncul":"Sembunyi"}</p>
      <button onClick={toggleClick}>{show ? "Sembunyikan" : "Munculkan"}</button>
    </div>
  )
}
