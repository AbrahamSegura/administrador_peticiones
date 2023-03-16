import './DashBoard.css'
import ListElements from '../ListElements/ListElements'
import { useLocation } from 'wouter'
import addClassNames from '../../services/addClassNames'
//import { Switch } from 'wouter'
export default function DashBoard() {
    const [location] = useLocation()
    addClassNames(location)

    return (
        <>
            <ListElements />
        </>
    )
}