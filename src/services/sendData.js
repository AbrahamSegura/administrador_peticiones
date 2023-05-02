import axios from 'axios'
export const sendData = async ({ path, type, req }) => {
  if (type === 'post') {
    const { data } = await axios.post('https://api-peticiones.onrender.com/' + path, { req }, { 'content-type': 'application/json' })
    return data
  }
}
