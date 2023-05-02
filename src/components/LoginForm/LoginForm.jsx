import './LoginForm.css'
import axios from 'axios'
import useUser from '../../hooks/useUser'
import useRedirection from '../../hooks/useRedirection'
import useValidate from '../../hooks/useValidate'
export default function LoginForm () {
  const { user, setUser } = useUser()
  const { setLocation } = useRedirection()
  let Error = null

  const handelSudmit = evt => {
    evt.preventDefault()
    const obj = Object.fromEntries(new FormData(evt.target))
    const validate = useValidate(obj)
    if (validate.username && validate.password) {
      axios.post('https://api-peticiones.onrender.com/login', {
        username: validate.username,
        password: validate.password
      },
      {
        'content-type': 'application/json'
      })
        .then(({ data }) => {
          if (data.length !== 0) {
            setUser(data.user[0])
            if (data.user[0].departamento === 'informatica') data.user[0].peticiones = data.user[0].peticiones.concat(data.p)
            setLocation('/')
            return
          }
          setUser({
            username: null,
            password: null
          })
        })
        .catch(err => {
          console.error(err.response)
          Error = err
        })
    }
  }
  return (
    <section className='login-container'>
      <article className='login'>
        <h2>Ingresar</h2>
        <form className='login-form' onSubmit={handelSudmit}>
          <input type='text' name='username' id='userName' placeholder='ingresa tu usuario' autoCapitalize='false' required autoFocus />
          {
            user.username === null && !Error ? <span className='error-msg'>Usuario invalido</span> : null
          }
          <input type='password' name='password' id='password' placeholder='ingresa tu contraseña' required />
          {
            user.password === null && !Error ? <span className='error-msg'>Contraseña invalida</span> : null
          }
          <button className='btn'>Ingresar</button>
          {
            Error ? <span className='error-msg'>Usuario o Contraseña invalida</span> : null
          }
        </form>
      </article>
    </section>
  )
}
