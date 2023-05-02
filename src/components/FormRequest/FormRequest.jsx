import './FormRequest.css'
import { useState } from 'react'
import { sendData } from '../../services/sendData.js'
import useUser from '../../hooks/useUser'
export default function FormRequest () {
  const [value, setValue] = useState('')
  const { user } = useUser()
  const handelChange = e => {
    const v = e.target.value
    console.log(v)
    setValue(v)
  }
  const handelSudmit = evt => {
    evt.preventDefault()
    const obj = Object.fromEntries(new FormData(evt.target))
    const req = {
      ...obj,
      user: user.departamento,
      userId: user.id
    }
    console.log(req)
    const path = '/login'
    const type = 'post'
    const data = sendData({ req, path, type })
    console.log(data)
    if (data) {
      return data
    }
  }
  return (
    <form onSubmit={handelSudmit} className='form-request'>
      <h3>Crea una Nueva Petición </h3>
      <select name='tipo' onChange={handelChange}>
        <option value='-' defauld='true'> Que tipo de petición tiene?</option>
        <option value='No se conecta'>No se conecta</option>
        <option value='2'>2</option>
        <option value='otro'>otro</option>
      </select>
      {
        value === 'otro' ? <input type='text' name='descripcion2' placeholder='Indique cual' /> : <br />
      }
      <textarea name='descripcion' placeholder='Escribe una breve descripción del problema' />
      <button>Enviar</button>
    </form>
  )
}
