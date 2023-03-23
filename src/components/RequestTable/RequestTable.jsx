import './RequestTable.css'
import { Link } from 'wouter'
import useUser from '../../hooks/useUser'
export default function RequestTable () {
  const { user } = useUser()
  const { listaPeticiones } = user
  return (
    <section className='card-container'>
      <article className='card'>
        <div className='card-peticiones'>
          <div className='card-head'>
            <h3 className='card-title'>Peticiones</h3>
            <Link to='/User/Peticiones' className='card-link-datail'>Ver Todas</Link>
          </div>
          <table>
            <thead>
              <tr>
                <td className='table-spaces'><button className='btn-order'>Fecha</button></td>
                <td className='table-spaces'><button className='btn-order'>Estado</button></td>
                <td className='table-spaces'><button className='btn-order'>Descripcion</button></td>
              </tr>
            </thead>
            <tbody>
              {
                listaPeticiones.map(({ id, fecha, estado, descripcion }) => {
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
          </table>
        </div>
      </article>
    </section>
  )
}
