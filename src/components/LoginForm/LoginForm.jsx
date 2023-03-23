import './LoginForm.css'
import axios from 'axios'
import useUser from '../../hooks/useUser'
import useRedirection from '../../hooks/useRedirection'
import useValidate from '../../hooks/useValidate'

export default function LoginForm () {
  const { user, setUser } = useUser()
  const { setLocation } = useRedirection()
  const handelSudmit = evt => {
    evt.preventDefault()
    const obj = Object.fromEntries(new FormData(evt.target))
    const validate = useValidate(obj)

    if (validate.username && validate.password) {
      axios.post('http://localhost:3030/login', {
        username: validate.username,
        password: validate.password
      },
      {
        'content-type': 'application/json'
      })
        .then(({ data }) => {
          setUser(data)
          if (user !== Array) {
            setLocation('/')
            return
          }
          setUser({
            username: null,
            password: null
          })
        })
        .catch(err => console.error(err.response))
    }
  }
  return (
    <section className='login-container'>
      <article className='login'>
        <h2>Ingresar</h2>
        <form className='login-form' onSubmit={handelSudmit}>
          <input type='text' name='username' id='userName' placeholder='ingresa tu usuario' required />
          {
            user.username === null ? <span className='error-msg'>Usuario invalido</span> : null
          }
          <input type='password' name='password' id='password' placeholder='ingresa tu contraseña' required />
          {
            user.username === null ? <span className='error-msg'>Usuario invalido</span> : null
          }
          <button className='btn'>Ingresar</button>
          {
            user.password === null && user.username === null ? <span className='error-msg'>Usuario o Contraseña incorrecto</span> : null
          }
        </form>
      </article>
    </section>
  )
}
