import axios from 'axios'

const apiClient = axios.create({
  baseURL: '//restcountries.eu',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  fetchData () {
    return apiClient.get('/rest/v2/all?fields=name;region;flag;capital')
  }
}
