import './RequestTable.css'
import { Link } from 'wouter'
import useUser from '../../hooks/useUser'
import TableBody from '../TableBody/TableBody'

export default function RequestTable () {
  const { user } = useUser()
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
                {user.departamento === 'informatica'
                  ? <td className='table-spaces'><button className='btn-order'>Usuario</button></td>
                  : null}
                <td className='table-spaces'><button className='btn-order'>Descripcion</button></td>
              </tr>
            </thead>
            <TableBody />
          </table>
        </div>
      </article>
    </section>
  )
}
