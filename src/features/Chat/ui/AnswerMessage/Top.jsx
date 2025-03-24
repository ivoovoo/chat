import React from 'react'

import logo from '../../assets/logo.png'
import ChatDate from '../Chat/ChatDate'

const Top = () => {
  return (
    <div className='chat__answer-top'>
        <img className='chat__logo'  src={logo}/>
        <ChatDate />
    </div>
  )
}

export default Top