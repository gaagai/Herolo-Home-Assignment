import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import { useSelector } from 'react-redux'
import { ThemeProvider } from '../context/ThemeContext'
import 'semantic-ui-css/semantic.min.css'
import './layout.css'

function Layout(props) {
  let { city } = useSelector((state) => ({ ...state }))

  return (
    <ThemeProvider>
      {city.backPic.pic === '' ? (
        <div className='app'>
          <Header />
          <>{props.children}</>
          <Footer />
        </div>
      ) : (
        <div
          className='app'
          style={{
            backgroundImage: `url(${city.backPic.pic})`,
          }}
        >
          <Header />
          <>{props.children}</>
          <Footer />
        </div>
      )}
    </ThemeProvider>
  )
}

export default Layout
