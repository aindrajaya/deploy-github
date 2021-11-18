import React from 'react'

import '../css/Button.css'

export default function ButtonKlik(props) {
  const {symbol, process} = props //destructuring props property

  return (
    <button onClick={process}>
      {symbol}
    </button>
  )
}
