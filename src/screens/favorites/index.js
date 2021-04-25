import React from 'react'
import Layout from '../../hoc/Layout'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import MainFavorites from '../../components/cities/MainFavorites'

const FavoritesScreen = () => {
  let { favorites } = useSelector((state) => ({ ...state }))
  return (
    <Layout>
      <ToastContainer />
      <MainFavorites favorites={favorites} />
    </Layout>
  )
}

export default FavoritesScreen
