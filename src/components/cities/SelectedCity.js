import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { ThemContext } from '../../context/ThemeContext'
import CityInfo from './CityInfo'
import FiveDays from './FiveDays'

const SelectedCity = () => {
  let { city } = useSelector((state) => ({ ...state }))
  const { style } = useContext(ThemContext)

  return (
    <div className='info-container' style={style}>
      <CityInfo city={city} />
      {city.five && (
        <div className='info-main'>
          <FiveDays city={city} />
        </div>
      )}
    </div>
  )
}

export default SelectedCity
