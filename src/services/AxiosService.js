import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod',
  timeout: 8000,
  params: {
    api_key: 'to44MrQGJuWlLzT6MZCqpq0LWoNR9gS8PrdrY5If',

  }
})


//  This is the link to the website apod
// https://bcw-sandbox.herokuapp.com/api/images

