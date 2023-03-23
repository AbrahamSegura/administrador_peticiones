import isValidName from '../services/isvalideName.js'
import isValidePassward from '../services/isValidePassword'
import encoder from '../services/encoder.js'

export default function useValidate ({ username, password }) {
  return {
    username: isValidName(username) ? username : null,
    password: isValidePassward(password) ? encoder(password) : null
  }
}
