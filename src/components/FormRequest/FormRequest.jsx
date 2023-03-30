import './FormRequest.css'
import { useState } from 'react'

export default function FormRequest () {
  const [value, setValue] = useState('')
  const handelChange = e => {
    const v = e.target.value
    console.log(v)
    setValue(v)
  }
  const handelSudmit = evt => {
    evt.preventDefault()
    const obj = Object.fromEntries(new FormData(evt.target))
    console.log(obj)
  }
  console.log(value)
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
        value === 'otro' ? <input type='text' name='descripcion-2' placeholder='Indique cual' /> : <br />
      }
      <textarea name='descripcion' placeholder='Escribe una breve descripción del problema' />
      <button>Enviar</button>
    </form>
  )
}
