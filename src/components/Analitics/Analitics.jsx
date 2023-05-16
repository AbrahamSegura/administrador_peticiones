import './Analitics.css'
import { useState } from 'react'
import { sendData } from '../../services/sendData'
export default function Analitics () {
  const handelSudmit = evt => {
    evt.preventDefault()
    const req = Object.fromEntries(new FormData(evt.target))
    req.password = window.btoa(req.password)
    req.peticiones = []
    const path = '/logup'
    const type = 'post'
    const data = sendData({ req, path, type })
    if (data) {
      return data
    }
  }
  const [icon, setIcon] = useState('<')
  const hadelIcon = () => {
    if (icon === '<') setIcon('v')
    if (icon === 'v') setIcon('<')
  }
  return (
    <section className='card-analitics'>
      <article className='nuevo-usuario'>
        <h3>Crear nuevo usuario <button onClick={hadelIcon}> {icon} </button></h3>
        <div className='card'>
          <form onSubmit={handelSudmit}>
            <input type='text' name='username' placeholder='nombre del usuario' required autoFocus />
            <input type='text' name='password' placeholder='contrasena' required />
            <input type='email' name='correo' placeholder='ejemplo@gmail.com' required />
            <input type='text' name='departamento' placeholder='departamento' required />
            <button>Crear</button>
          </form>
        </div>
      </article>
    </section>
  )
}
