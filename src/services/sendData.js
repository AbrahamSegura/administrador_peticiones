import axios from 'axios'
export const sendData = async ({ path, type, req }) => {
  if (type === 'post') {
    const { data } = await axios.post(path, { req }, { 'content-type': 'application/json' })
    return data
  }
}
