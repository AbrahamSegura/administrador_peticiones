import './App.css'
import { useContext, useEffect } from 'react'
import User from './context/UserContext'
import { useLocation } from 'wouter'
import LoginForm from './components/LoginForm/LoginForm'
import DashBoard from './components/Dashboard/DashBoard'
function App () {
  const { user } = useContext(User)
  const isLogin = !user.password && !user.username
  const [_location, setLocation] = useLocation()
  useEffect(() => {
    isLogin ? setLocation('/login') : setLocation('/')
  }, [])
  console.log(isLogin)
  return (

    <div className='App'>
      {isLogin ? <LoginForm /> : <DashBoard />}
    </div>
  )
}

export default App
