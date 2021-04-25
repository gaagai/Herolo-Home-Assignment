import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 2ae5da0c0acb50b3dcdca49c0c98713d0a00c8b248373c60c5d2e950d3f20305',
  },
})
