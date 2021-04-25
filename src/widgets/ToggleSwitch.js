import React from 'react'
import { IoMdMoon as Moon, IoMdSunny as Sun } from 'react-icons/io'

const Switch = ({ isOn, handleToggle }) => {
  return (
    <div className='lights'>
      <div className='switch' onClick={() => handleToggle()}>
        <Sun className={`icon ${!isOn ? 'active' : ''} sun`} />
        <Moon className={`icon ${isOn ? 'active' : ''} moon`} />
      </div>
    </div>
  )
}

export default Switch
