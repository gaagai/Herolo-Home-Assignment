import React from 'react'
import Layout from '../../hoc/Layout'
import Search from '../../components/search'
import SelectedCity from '../../components/cities/SelectedCity'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const index = (props) => {
  return (
    <Layout>
      <ToastContainer />
      <div id='main-content'>
        <div className='search-container'>
          <Search props={props} />
          <SelectedCity />
        </div>
      </div>
    </Layout>
  )
}

export default index
