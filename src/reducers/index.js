import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { favoritesReducer } from './favoritesReducer'
import { cityReducer } from './cityReducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites', 'city'],
}

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  city: cityReducer,
})

export default persistReducer(persistConfig, rootReducer)
