import './LoginForm.css'
import { useContext } from "react"
import { useLocation } from 'wouter'
import User from '../../context/UserContext';
import isValideName from '../../services/isvalideName'
import isValidePassward from '../../services/isValidePassword';
import encoder from '../../services/encoder'

export default function LoginForm() {
  const { user, setUser } = useContext(User)
  const [_path, setLocation] = useLocation()
  const handelSudmit = evt => {
    evt.preventDefault()
    const data = Object.fromEntries(new FormData(evt.target))
    const validate = {
      "username": isValideName(data["username"]) ? data["username"] : null,
      "password": isValidePassward(data["password"]) ? encoder(data["password"]) : null
    }
    if (validate['username'] && validate['password']) {
      // const opt = {
      //   Method: "post",
      //   Body: {
      //     "username": validate['username'],
      //     "password": validate['password']
      //   }
      // }
      // // fetch('http://localhost:3030/validUsers/', opt) pendiente!!
      //   .then(res => console.log(res))
      //   .then(res => console.log(res))
      evt.target.reset()
      setLocation("/")
    }
    setUser(validate)
  }
  return (
    <section>
      <article>
        <h2>Ingresar</h2>
        <form onSubmit={handelSudmit}>
          <input type="text" name='username' id='userName' placeholder='ingresa tu usuario' />
          {
            user["username"] === null ? <span className='error-msg'>Usuario invalido</span> : null
          }
          <input type="password" name="password" id="userPassword" placeholder='ingresa tu contraseña' />
          {
            user["password"] === null ? <span className='error-msg'>Contraseña invalida</span> : null
          }
          <button>Ingresar</button>
        </form>
      </article>
    </section>
  )
}