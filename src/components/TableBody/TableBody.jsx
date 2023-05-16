import useUser from '../../hooks/useUser.jsx'

export default function TableBody () {
  const { user } = useUser()
  const { peticiones } = user
  return (
    <tbody>
      {
        peticiones.length === 0
          ? <td><span>No tienes ninguna peticion</span></td>
          : peticiones.map(({ id, fecha, estado, descripcion }) => {
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
