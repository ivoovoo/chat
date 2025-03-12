import React from 'react'

import icons from '../../assets/icons.svg'

const Sprite = ({icon,...other}) => {
  return (
    <svg {...other}>
        <use xlinkHref={`${icons}#${icon}`}></use>
    </svg>
  )
}

export default Sprite