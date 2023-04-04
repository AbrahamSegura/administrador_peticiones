import { Link } from 'wouter'
import Dashboard from '../Icons/Dashboar'
import User from '../Icons/User'
import Help from '../Icons/Help'
import Request from '../Icons/Request'
import Calendar from '../Icons/Calendar'

export default function ElementList ({ title }) {
  function Icon ({ title }) {
    switch (title) {
      case 'DashBoard':
        return <Dashboard />
      case 'Ayuda':
        return <Help />
      case 'Peticiones':
        return <Request />
      case 'Calendario':
        return <Calendar />
      default:
        return <User />
    }
  }
  const path = title === 'DashBoard' ? '/' : `/${title}`
  const hovered = path === '/' ? 'hovered' : ''
  return (
    <li className={`element-list ${hovered}`}>
      <Link className='Linked' to={path}>
        <span className='icon'><Icon title={title} /></span>
        <span className='title'>{title}</span>
      </Link>
    </li>
  )
}
