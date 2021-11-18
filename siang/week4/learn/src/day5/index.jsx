import React, { Fragment } from 'react'
import { img1, img2 } from '../assets/img'

export default function ImageShow() {
  return (
    <Fragment>
      <img src={img1} alt="" />
      <img src={img2} alt="" />
    </Fragment>
  )
}
