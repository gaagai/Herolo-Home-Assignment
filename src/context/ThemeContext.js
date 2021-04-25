import React, { createContext, useState, useEffect } from 'react'

export const ThemContext = createContext()

export const ThemeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false)
  const style = darkMode ? { background: '#0d0d0d' } : { background: '#ffffff' }
  useEffect(() => {
    const parsedTheme = JSON.parse(localStorage.getItem('theme'))
    setDarkMode(parsedTheme)
  }, [])
  useEffect(() => {
    localStorage.setItem('theme', darkMode)
  }, [darkMode])

  return (
    <ThemContext.Provider value={{ darkMode, setDarkMode, style }}>
      {props.children}
    </ThemContext.Provider>
  )
}
