import React from 'react'
import { classNames } from '../../lib/classNames/classNames'

import './ButtonIcon.css'
import Sprite from '../Sprite/Sprite'

const ButtonIcon = ({className, icon, children, ...other}) => {
  return (
    <button className={classNames('button-icon', [className])} {...other}>
        <Sprite icon={icon.name} width={icon.width} height={icon.height} />
        {children}
    </button>
  )
}

export default ButtonIcon