import './ListElements.css'
import { useContext } from 'react'
import User from '../../context/UserContext'
import ElementList from '../Elementlist/ElementList'
export default function ListElements () {
  const { user } = useContext(User)
  return (
    <nav className='navigation'>
      <ul>
        <ElementList title={user.username} />
        <ElementList title='DashBoard' />
        <ElementList title='Peticiones' />
        <ElementList title='Ayuda' />
        <li>
          <button className='Linked'>
            <span className='icon'><i>*</i></span>
            <span className='title'>Salir</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}
