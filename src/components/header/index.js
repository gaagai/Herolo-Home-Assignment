import React, { useState, useContext } from 'react'
import { Container } from 'semantic-ui-react'
import { ThemContext } from '../../context/ThemeContext'
import NavBar from './NavBar'
import './header.css'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => {
    setToggle(!toggle)
    setDarkMode(!darkMode)
  }
  const { darkMode, setDarkMode, style } = useContext(ThemContext)
  return (
    <>
      <Container id='header-main' style={style}>
        <NavBar toggle={toggle} handleClick={handleClick} />
      </Container>
    </>
  )
}

export default Header
