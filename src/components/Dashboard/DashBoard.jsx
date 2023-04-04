import './DashBoard.css'
import ListElements from '../ListElements/ListElements'
import Container from '../Container/Container'
import addClassNames from '../../services/addClassNames'
import useRedirection from '../../hooks/useRedirection'
export default function DashBoard () {
  const { location } = useRedirection()
  addClassNames(location)
  return (
    <>
      <ListElements />
      <Container />
    </>
  )
}
