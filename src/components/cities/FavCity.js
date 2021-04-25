import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Icon } from 'semantic-ui-react'

const FavCity = ({ city }) => {
  const dispatch = useDispatch()
  let { favorites } = useSelector((state) => ({ ...state }))
  const [isFavorite, setIsFavorite] = useState(null)

  const toggleFavorite = () => {
    if (!isFavorite) {
      dispatch({ type: 'ADD_FAV', payload: { city } })
    } else {
      let keyToremove = city.Key
      dispatch({ type: 'REMOVE_FAV', payload: { keyToremove } })
    }
  }

  useEffect(() => {
    if (favorites && city) {
      checkIfFav()
    }
  }, [favorites, city])

  const checkIfFav = () => {
    const favsArray = Object.values(favorites.favorites)
    const isFav = favsArray.find((f) => {
      return f.Key === city.Key
    })
    setIsFavorite(isFav)
  }

  return (
    <>
      {isFavorite ? (
        <>
          <Icon color='red' name='heart' size='large' />
          <button onClick={toggleFavorite} className='add' type='button'>
            Remove Favorite
          </button>
        </>
      ) : (
        <>
          <Icon color='red' name='heart outline' size='large' />
          <button onClick={toggleFavorite} className='add' type='button'>
            Add to Favorites
          </button>
        </>
      )}
    </>
  )
}

export default FavCity
