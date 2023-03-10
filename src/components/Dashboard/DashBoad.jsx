import { useContext } from "react"
import User from "../../context/UserContext"

export default function DashBoard() {
    const { user } = useContext(User)
    return <h1>el suario es: {user['username']} </h1>
}