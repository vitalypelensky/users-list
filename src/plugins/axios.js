import axios from 'axios'

let ROOT_URL = 'https://jsonplaceholder.typicode.com'

export default axios.create({
  baseURL: `${ROOT_URL}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
  }
})
