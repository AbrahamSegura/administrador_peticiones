import './DashBoard.css'
import ListElements from '../ListElements/ListElements'
import Container from '../Container/Container'
import { useLocation } from 'wouter'
import addClassNames from '../../services/addClassNames'
export default function DashBoard () {
  const [location] = useLocation()
  addClassNames(location)
  return (
    <>
      <ListElements />
      <Container />
    </>
  )
}
