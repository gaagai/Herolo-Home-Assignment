import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import unsplash from '../../api/unsplash'
import { Input } from 'semantic-ui-react'
import { toast } from 'react-toastify'
import catchErrors from '../../helpers/catchErrors'
import AutoComplete from './AutoComplete'

const Search = (props) => {
  const [isLoading, setIsloading] = useState(false)
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')
  const [autoComplete, setAutoComplete] = useState([])

  const dispatch = useDispatch()

  let apiKey = process.env.REACT_APP_API_KEY
  let url = process.env.REACT_APP_S_URL
  let cityUrl = process.env.REACT_APP_C_URL
  let fiveDaysUrl = process.env.REACT_APP_FIVE

  useEffect(() => {
    triggerSearch()
  }, [props])

  const queryChange = (e) => {
    let value = e.target.value
    value = value.replace(/[^A-Za-z ]*$/gi, '')
    if (value === '') {
      setAutoComplete([])
    } else {
      getAutoComplete(value)
    }
    setQuery(value)
  }
  const searchFromAutoComplete = async (term) => {
    triggerSearch(term)
    setAutoComplete([])
    setQuery('')
  }
  const onFormSubmit = async (e) => {
    e.preventDefault()
    setAutoComplete([])
    triggerSearch()
  }
  const getAutoComplete = async (inputChar) => {
    try {
      const response = await axios.get(`${url}?apikey=${apiKey}&q=${inputChar}`)
      setAutoComplete(response.data)
    } catch (error) {
      catchErrors(error, setError)
    }
  }
  const triggerSearch = async (autoTerm) => {
    setIsloading(true)
    let searchTerm

    if (query !== '') {
      searchTerm = query
    } else if (props.props.location.state) {
      searchTerm = props.props.location.state.name
    } else if (query === '') {
      searchTerm = 'tel aviv'
    }
    if (autoTerm) {
      searchTerm = autoTerm
    }
    try {
      const response = await axios.get(
        `${url}?apikey=${apiKey}&q=${searchTerm}`
      )

      let cityKey = response.data[0].Key
      const currentCityFromApi = await axios.get(
        `${cityUrl}${cityKey}?apikey=${apiKey}`
      )

      const fiveDaysForcast = await axios.get(
        `${fiveDaysUrl}${cityKey}?apikey=${apiKey}`
      )
      const backgroundPics = await unsplash.get('/search/photos', {
        params: { query: searchTerm },
      })
      console.log(backgroundPics)
      let backPic
      if (backgroundPics.data.total === 0) {
        backPic = {
          pic:
            'https://images.unsplash.com/photo-1500990702037-7620ccb6a60a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0ODU2OHwwfDF8c2VhcmNofDF8fHRlbCUyMGF2aXZ8ZW58MHx8fHwxNjE5MzMxMjQz&ixlib=rb-1.2.1&q=80&w=1080',
        }
      } else {
        backPic = { pic: backgroundPics.data.results[0].urls.regular }
      }
      let newCityData = {}
      newCityData = {
        ...currentCityFromApi.data[0],
        ...response.data[0],
        five: fiveDaysForcast.data.DailyForecasts,
        backPic,
      }
      dispatch({
        type: 'SELECTED_CITY',
        payload: newCityData,
      })
    } catch (error) {
      toast.error(
        `oops...Something went wrong, Please try again later. ${error}`
      )
      catchErrors(error, setError)
    } finally {
      setIsloading(false)
      setQuery('')
    }
  }
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <Input
          value={query}
          type='text'
          placeholder='Search A City...'
          onChange={queryChange}
          icon='search'
          iconPosition='left'
          loading={isLoading}
        ></Input>
        <AutoComplete
          autoComplete={autoComplete}
          searchFromAutoComplete={searchFromAutoComplete}
        />
      </form>
    </>
  )
}

export default Search
