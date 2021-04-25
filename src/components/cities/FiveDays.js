import React from 'react'

const formatDate = (dateString) => {
  let usDate = dateString.split('T')[0].slice(5, 10).replace('-', '/')
  let month = usDate.substring(0, 2)
  let day = usDate.substring(3, 5)
  return `${day}/${month}`
}
const FiveDays = ({ city }) => {
  return (
    <>
      {city.five.map((day, i) => (
        <div className='day' key={i}>
          <span className='five-date'>{formatDate(day.Date)}</span>
          <img
            className='weather-icon'
            src={`/images/${day.Day.Icon}.png`}
            alt='icon'
          />
          <span className='icon-phrase'>{day.Day.IconPhrase}</span>
        </div>
      ))}
    </>
  )
}

export default FiveDays
