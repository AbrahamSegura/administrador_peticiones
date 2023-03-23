import { useEffect, useState } from 'react'
import useUser from '../../hooks/useUser.jsx'
import axios from 'axios'
export default function TableBody ({ departamento }) {
  const [list, setList] = useState([])
  useEffect(() => {
    if (departamento === 'informatica') {
      axios.get('localhost:3030/AllRequest')
        .then(({ data }) => setList(data))
    } else {
      const { user } = useUser()
      const { listaPeticiones } = user
      setList(listaPeticiones)
    }
  }, [])
  return (
    <tbody>
      {
        list.map(({ id, fecha, estado, descripcion }) => {
          return (
            <tr key={id}>
              <td><span>{Date(fecha)}</span></td>
              <td><span>{estado}</span></td>
              <td><span>{descripcion}</span></td>
            </tr>
          )
        })
      }
    </tbody>
  )
}
