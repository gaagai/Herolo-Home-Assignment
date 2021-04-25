const INITIAL_STATE_FAV = {
  favorites: [],
}

export function favoritesReducer(state = INITIAL_STATE_FAV, action) {
  switch (action.type) {
    case 'ADD_FAV':
      const newFavorite = {
        Key: action.payload.city.Key,
        LocalizedName: action.payload.city.LocalizedName,
      }
      const newfavs = [...state.favorites, newFavorite]
      return { ...state, favorites: newfavs }
    case 'REMOVE_FAV':
      const filteredFavorites = state.favorites.filter(
        (f) => f.Key !== action.payload.keyToremove
      )
      return {
        ...state,
        favorites: filteredFavorites,
      }
    default:
      return state
  }
}
