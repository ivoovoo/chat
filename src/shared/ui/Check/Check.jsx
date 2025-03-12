import React, { useState } from 'react'

import './Check.css'
import Sprite from '../Sprite/Sprite'

const Check = ({children, active}) => {
    const [activeCheck, setActiveCheck] = useState(false)
  return (
    <button className='check' onClick={() => setActiveCheck(b => !b)}>
        <Sprite icon={activeCheck ? 'checked' : 'empty-checked'} width={24} height={24} />
        {children}
    </button>
  )
}

export default Check