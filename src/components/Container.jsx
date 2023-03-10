import { useContext } from 'react'
import User from '../context/UserContext'
import { Route, useLocation } from 'wouter'
import LoginForm from './LoginForm/LoginForm'
import DashBoard from './Dashboard/DashBoad'

export default function Container() {
    const { user } = useContext(User)
    const { location, setLocation } = useLocation()
    const path = user['password'] !== "" ? location : setLocation('/login')
    const render = user['password'] !== "" ? <DashBoard /> : <LoginForm />
    return render
}