import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import catchErrors from '../../helpers/catchErrors'
import { toast } from 'react-toastify'
import Loader from '../../hoc/Loader'

const CityCard = ({ favs }) => {
  const [newFeched, setNewFeched] = useState(null)
  const [error, setError] = useState('')
  const [isLoading, setIsloading] = useState(false)
  const history = useHistory()
  useEffect(() => {
    if (favs.length > 0) {
      getFavsWeather()
    }
  }, [favs])

  const getFavsWeather = async () => {
    setIsloading(true)
    const apiKey = process.env.REACT_APP_API_KEY
    let cityUrl = process.env.REACT_APP_C_URL

    let newArry = []
    try {
      for (let i = 0; i < favs.length; i++) {
        const currentCityFromApi = await axios.get(
          `${cityUrl}${favs[i].Key}?apikey=${apiKey}`
        )
        let cityName = favs[i].LocalizedName
        let cityKey = favs[i].Key
        let icon = currentCityFromApi.data[0].WeatherIcon
        let currWeather = currentCityFromApi.data[0].WeatherText
        let cardInfo = {
          cityName,
          cityKey,
          currWeather,
          icon,
        }
        newArry.push(cardInfo)
      }
      setNewFeched(newArry)
    } catch (error) {
      toast.error(
        `oops...Something went wrong, Please try again later. ${error}`
      )
      catchErrors(error, setError)
    } finally {
      setIsloading(false)
    }
  }

  const pushToMain = (city) => {
    let name = city.cityName
    history.push({
      pathname: `/city/${city.cityKey}`,
      state: { name: name },
    })
  }
  return (
    <>
      {isLoading ? <Loader /> : null}
      {newFeched &&
        newFeched.map((f, i) => (
          <div key={f.cityKey} onClick={() => pushToMain(f)}>
            <div className='city-card'>
              <span className='five-date'>{f.cityName}</span>
              <img
                className='weather-icon'
                src={`/images/${f.icon}.png`}
                alt=''
              />
              <span className='icon-phrase'>{f.currWeather}</span>
            </div>
          </div>
        ))}
    </>
  )
}

export default CityCard
