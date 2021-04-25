import React, { useContext } from 'react'
import { ThemContext } from '../../context/ThemeContext'
import CityCard from './CityCard'

const MainFavorites = ({ favorites }) => {
  const { style } = useContext(ThemContext)
  return (
    <div id='main-content'>
      <div className='cards-container'>
        <div className='fav-container' style={style}>
          {favorites.favorites.length > 0 ? (
            <CityCard favs={favorites.favorites} />
          ) : (
            'No Favs Yet, Please Select some'
          )}
        </div>
      </div>
    </div>
  )
}

export default MainFavorites
