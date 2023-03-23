import './ListElements.css'
import useUser from '../../hooks/useUser'
import ElementList from '../Elementlist/ElementList'

export default function ListElements () {
  const { user, setUser } = useUser()
  const handelExit = () => {
    const sure = window.confirm('Seguro que desea salir?')
    if (sure) setUser({})
  }
  return (
    <nav className='navigation'>
      <ul>
        <ElementList title={user.username} />
        <ElementList title='DashBoard' />
        <ElementList title='Peticiones' />
        <ElementList title='Ayuda' />
        {
          user.departamento === 'informatica' ? <ElementList title='Calendario' /> : null
        }
        <li>
          <button className='Linked' onClick={handelExit}>
            <span className='icon'><i>*</i></span>
            <span className='title'>Salir</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}
