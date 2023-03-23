import { Link } from 'wouter'

export default function ElementList ({ title }) {
  const path = title === 'DashBoard' ? '/' : `/${title}`
  const hovered = path === '/' ? 'hovered' : ''
  return (
    <li className={`element-list ${hovered}`}>
      <Link className='Linked' to={path}>
        <span className='icon'><i>*</i></span>
        <span className='title'>{title}</span>
      </Link>
    </li>
  )
}
