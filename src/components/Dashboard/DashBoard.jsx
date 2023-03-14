import './DashBoard.css'
import ListElements from '../ListElements/ListElements'
import { useLocation } from 'wouter'
export default function DashBoard() {
    const [location] = useLocation()
    document.querySelectorAll('.element-list').forEach(e => {
        const name = e.textContent.replace('*', '/')
        const list = e.classList
        console.log(name, list, location)
        list.remove('hovered')
        if (name === location) list.add('hovered')
        if (location === '/' && name === '/DashBoard') list.add('hovered')
    })

    return (
        <nav className="navigation">
            <ListElements />
        </nav >
    )
}