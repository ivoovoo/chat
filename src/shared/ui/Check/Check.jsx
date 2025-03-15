import React, { useState } from 'react'

import './Check.css'
import Sprite from '../Sprite/Sprite'
import { classNames } from '../../lib/classNames/classNames'

const Check = ({children, className}) => {
    const [activeCheck, setActiveCheck] = useState(false)
  return (
    <button className={classNames('check', [className])} onClick={() => setActiveCheck(b => !b)}>
        <Sprite icon={activeCheck ? 'checked' : 'empty-checked'} width={24} height={24} />
        {children}
    </button>
  )
}

export default Check