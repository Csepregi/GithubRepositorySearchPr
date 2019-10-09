import axios from 'axios'
const baseUrl = 'https://api.github.com/search/repositories?q=car'

const search = () => {
  const request =  axios.get(baseUrl)
  return request.then(response => response.data)
}



export default { search }