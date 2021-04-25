import React from 'react'
import FavCity from './FavCity'

const CityInfo = ({ city }) => {
  return (
    <div className='info-top'>
      <div className='info-left'>
        <img
          className='weather-icon'
          src={`images/${city.WeatherIcon}.png`}
          alt=''
        />
        <div className='on-top'>
          <h2>{city.LocalizedName}</h2>
          {city.Temperature && (
            <span className='temprature'>
              {city.Temperature.Metric.Value} {city.Temperature.Metric.Unit}
            </span>
          )}
        </div>
      </div>
      <div className='info-right'>
        <FavCity city={city} />
      </div>
    </div>
  )
}

export default CityInfo
