import useUser from '../../hooks/useUser.jsx'

export default function TableBody () {
  const { user } = useUser()
  const { listaPeticiones, departamento } = user

  return (
    <tbody>
      {
        listaPeticiones.length === 0
          ? <tr><span>No tienes ninguna peticion</span></tr>
          : listaPeticiones.map(({ id, fecha, estado, usuario, descripcion }) => {
            return (
              <tr key={id}>
                <td><span>{Date(fecha)}</span></td>
                <td><span>{estado}</span></td>
                {departamento === 'informatica' ? <td><span>{usuario}</span></td> : null}
                <td><span>{descripcion}</span></td>
              </tr>
            )
          })
      }
    </tbody>
  )
}
